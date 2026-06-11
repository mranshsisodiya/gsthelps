(function() {
  // Set this to the URL of your deployed Cloudflare Worker once deployed
  const PROXY_URL = "https://gst-chatbot-proxy.gst-helps.workers.dev"; // Use this for local testing with wrangler


  const SYSTEM_INSTRUCTION = "You are a highly knowledgeable and professional GST (Goods and Services Tax) consultant in India. You work for 'Sujeet Singh & Associates'. Answer user questions about GST registration, returns, ITC reconciliation, refunds, audit, and compliance concisely, accurately, and politely. If a question is not related to GST or taxes, politely decline and steer the conversation back to GST. Keep answers short and easy to understand.";

  let chatHistory = [];

  // Inject CSS
  const styles = `
    #gst-chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: 'DM Sans', sans-serif;
    }
    #gst-chatbot-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--sky, #2563eb), var(--royal, #1a3a8f));
      color: white;
      border: none;
      box-shadow: 0 4px 20px rgba(37,99,235,.38);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s;
    }
    #gst-chatbot-button:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 30px rgba(37,99,235,.48);
    }
    #gst-chatbot-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      max-width: calc(100vw - 48px);
      height: 500px;
      max-height: calc(100vh - 120px);
      background: var(--white, #ffffff);
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(10,31,68,.2);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: opacity 0.3s, transform 0.3s;
      transform-origin: bottom right;
    }
    #gst-chatbot-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }
    #gst-chatbot-header {
      background: var(--navy, #0a1f44);
      color: white;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #gst-chatbot-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-family: 'Playfair Display', serif;
      color: white;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #gst-chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    #gst-chatbot-close:hover {
      opacity: 1;
    }
    #gst-chatbot-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--off-white, #f4f6fb);
    }
    .gst-chat-bubble {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.95rem;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .gst-chat-bot {
      align-self: flex-start;
      background: white;
      color: var(--text, #1e2d4f);
      border: 1px solid var(--lt-gray, #e8ecf4);
      border-bottom-left-radius: 4px;
    }
    .gst-chat-user {
      align-self: flex-end;
      background: var(--sky, #2563eb);
      color: white;
      border-bottom-right-radius: 4px;
    }
    #gst-chatbot-input-container {
      display: flex;
      padding: 12px;
      background: white;
      border-top: 1px solid var(--lt-gray, #e8ecf4);
      gap: 8px;
    }
    #gst-chatbot-input {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid var(--lt-gray, #e8ecf4);
      border-radius: 20px;
      outline: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem;
      transition: border-color 0.2s;
    }
    #gst-chatbot-input:focus {
      border-color: var(--sky, #2563eb);
    }
    #gst-chatbot-send {
      background: var(--sky, #2563eb);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    #gst-chatbot-send:hover {
      background: var(--royal, #1a3a8f);
    }
    #gst-chatbot-send:disabled {
      background: var(--mid-gray, #8896b3);
      cursor: not-allowed;
    }
    .gst-typing-indicator {
      display: flex;
      gap: 4px;
      padding: 4px 8px;
      align-items: center;
    }
    .gst-dot {
      width: 6px;
      height: 6px;
      background: var(--mid-gray, #8896b3);
      border-radius: 50%;
      animation: gstBlink 1.4s infinite both;
    }
    .gst-dot:nth-child(1) { animation-delay: 0s; }
    .gst-dot:nth-child(2) { animation-delay: 0.2s; }
    .gst-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes gstBlink {
      0% { opacity: 0.2; }
      20% { opacity: 1; }
      100% { opacity: 0.2; }
    }
    /* Markdown formatting inside chat */
    .gst-chat-bot p { margin-bottom: 8px; color: inherit; font-size: inherit; }
    .gst-chat-bot p:last-child { margin-bottom: 0; }
    .gst-chat-bot strong { font-weight: 600; }
    .gst-chat-bot ul { padding-left: 20px; margin-bottom: 8px; }
    .gst-chat-bot li { margin-bottom: 4px; list-style: disc; }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Inject HTML
  const container = document.createElement("div");
  container.id = "gst-chatbot-container";
  container.innerHTML = `
    <div id="gst-chatbot-window">
      <div id="gst-chatbot-header">
        <h3><i class="fas fa-robot"></i> GST Assistant</h3>
        <button id="gst-chatbot-close"><i class="fas fa-times"></i></button>
      </div>
      <div id="gst-chatbot-messages">
        <div class="gst-chat-bubble gst-chat-bot">
          Hello! I'm the GST Assistant from Sujeet Singh & Associates. How can I help you with your GST queries today?
        </div>
      </div>
      <div id="gst-chatbot-input-container">
        <input type="text" id="gst-chatbot-input" placeholder="Type your GST question..." autocomplete="off" />
        <button id="gst-chatbot-send"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
    <button id="gst-chatbot-button">
      <i class="fas fa-comment-dots"></i>
    </button>
  `;
  document.body.appendChild(container);

  // Logic
  const button = document.getElementById("gst-chatbot-button");
  const windowEl = document.getElementById("gst-chatbot-window");
  const closeBtn = document.getElementById("gst-chatbot-close");
  const inputEl = document.getElementById("gst-chatbot-input");
  const sendBtn = document.getElementById("gst-chatbot-send");
  const messagesEl = document.getElementById("gst-chatbot-messages");

  function toggleChat() {
    const isOpen = windowEl.classList.contains("open");
    if (isOpen) {
      windowEl.classList.remove("open");
      button.innerHTML = '<i class="fas fa-comment-dots"></i>';
    } else {
      windowEl.classList.add("open");
      button.innerHTML = '<i class="fas fa-times"></i>';
      setTimeout(() => inputEl.focus(), 300);
    }
  }

  button.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", toggleChat);

  function addMessage(text, sender, isHtml = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `gst-chat-bubble gst-chat-${sender}`;
    if (isHtml) {
      msgDiv.innerHTML = text;
    } else {
      msgDiv.textContent = text;
    }
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "gst-chat-bubble gst-chat-bot";
    typingDiv.id = "gst-typing-indicator-msg";
    typingDiv.innerHTML = `
      <div class="gst-typing-indicator">
        <div class="gst-dot"></div>
        <div class="gst-dot"></div>
        <div class="gst-dot"></div>
      </div>
    `;
    messagesEl.appendChild(typingDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    const typingDiv = document.getElementById("gst-typing-indicator-msg");
    if (typingDiv) {
      typingDiv.remove();
    }
  }

  // Simple Markdown parser for bold and lists
  function parseMarkdown(text) {
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/\n\n/g, '</p><p>');
    // Handle simple lists
    html = html.replace(/\n- (.*?)(?=\n- |$)/gs, '<li>$1</li>');
    if (html.includes('<li>')) {
      html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }
    return `<p>${html}</p>`;
  }

  async function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage(text, "user");
    inputEl.value = "";
    inputEl.disabled = true;
    sendBtn.disabled = true;
    showTyping();

    // Prepare history for Gemini
    const contents = [];
    
    // Push previous history
    chatHistory.forEach(msg => {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    // Push current message
    contents.push({
      role: 'user',
      parts: [{ text }]
    });

    try {
      const response = await fetch(PROXY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          contents: contents,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 500
          }
        })
      });

      const data = await response.json();
      hideTyping();
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();

      if (data.candidates && data.candidates.length > 0) {
        const botResponse = data.candidates[0].content.parts[0].text;
        
        // Save to history
        chatHistory.push({ role: 'user', text: text });
        chatHistory.push({ role: 'bot', text: botResponse });
        
        // Keep history manageable
        if (chatHistory.length > 10) chatHistory = chatHistory.slice(chatHistory.length - 10);

        addMessage(parseMarkdown(botResponse), "bot", true);
      } else {
        throw new Error("Invalid response format");
      }

    } catch (error) {
      console.error("Chatbot Error:", error);
      hideTyping();
      inputEl.disabled = false;
      sendBtn.disabled = false;
      addMessage("Sorry, I am having trouble connecting right now. Please try again later.", "bot");
    }
  }

  sendBtn.addEventListener("click", handleSend);
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  });

})();