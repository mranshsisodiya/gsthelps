export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*", // Or specify "https://gsthelps.com" for better security
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    // Default CORS headers for the response
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Replace with your domain in production
      "Content-Type": "application/json",
    };

    try {
      const body = await request.text();
      
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
      
      const geminiResponse = await fetch(geminiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await geminiResponse.json();

      return new Response(JSON.stringify(data), {
        headers: corsHeaders,
        status: geminiResponse.status,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: corsHeaders,
        status: 500,
      });
    }
  },
};
