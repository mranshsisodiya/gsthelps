const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const today = '2026-06-07';
const phone = '+919910381606';
const displayPhone = '+91-9910381606';
const email = 'info@gsthelps.com';
const address = {
  '@type': 'PostalAddress',
  streetAddress: '9th Floor, Tower-E, Unit No.980, Bhutani Alphatham, Sector-90',
  addressLocality: 'Noida',
  addressRegion: 'Uttar Pradesh',
  postalCode: '201305',
  addressCountry: 'IN'
};

const serviceLinks = [
  ['GST Registration', '/gst-registration.html'],
  ['GST Return Filing', '/gst-return-filing.html'],
  ['GST Audit Support', '/gst-audit.html'],
  ['GST Refund Services', '/gst-refund-services.html'],
  ['GST Compliance Services', '/gst-compliance-services.html'],
  ['GST Consultant India', '/gst-consultant-india.html']
];

const blogLinks = [
  ['GST Registration Process in India', '/blog/gst-registration-process-india.html'],
  ['GST Registration Documents Required', '/blog/gst-registration-documents-required.html'],
  ['How to File GST Return', '/blog/how-to-file-gst-return.html'],
  ['GSTR-1 vs GSTR-3B', '/blog/gstr1-vs-gstr3b.html'],
  ['GST Threshold Limit in India', '/blog/gst-threshold-limit-india.html'],
  ['GST Late Fees and Penalties', '/blog/gst-late-fees-and-penalties.html'],
  ['GST for Small Business', '/blog/gst-for-small-business.html'],
  ['GST Refund Process', '/blog/gst-refund-process.html'],
  ['GST Compliance Checklist', '/blog/gst-compliance-checklist.html'],
  ['GST for Software Developers', '/blog/gst-for-software-developers.html']
];

const toolLinks = [
  ['GST Calculator', '/tools/gst-calculator.html'],
  ['GST Percentage Calculator', '/tools/gst-percentage-calculator.html'],
  ['GST Refund Estimator', '/tools/gst-refund-calculator.html'],
  ['GST Due Date Checker', '/tools/gst-due-date-checker.html'],
  ['GST Number Validator', '/tools/gst-number-validator.html']
];

const factNote = `GST rules and forms can change through notifications. Always verify with a qualified GST practitioner before final filing.`;

function esc(str) { return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function json(data) { return JSON.stringify(data).replace(/</g, '\\u003c'); }
function faqSchema(faqs) { return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a]) => ({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}; }
function breadcrumbSchema(items) { return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((it, i) => ({'@type':'ListItem',position:i+1,name:it[0],item:it[1]}))}; }
function linkList(items) { return `<ul class="link-list">${items.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>`; }
function faqHtml(faqs) { if(!faqs) return ''; return `<section class="section section-alt faq"><div class="container"><span class="badge">FAQ</span><h2>Frequently Asked Questions</h2>${faqs.map(([q,a]) => `<details style="background:#fff;border:1px solid var(--lt-gray);border-radius:10px;padding:15px;margin-bottom:10px"><summary style="cursor:pointer;font-weight:700;color:var(--navy)">${esc(q)}</summary><p style="margin-top:10px;color:var(--text);font-size:.9rem">${esc(a)}</p></details>`).join('')}</div></section>`; }

function nav() {
  const serviceNav = serviceLinks.map(([label, href]) => `<a href="${href}">${label.replace('GST ', '')}</a>`).join('');
  return `<nav id="navbar">
  <div class="container nav-inner">
    <a href="/" class="nav-logo">
      <span class="nav-logo-icon"><img src="/favicon-32x32.png?v=3" width="32" height="32" loading="eager" decoding="async" alt="SSA"></span>
      <span class="nav-logo-text" style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.05rem;color:#fff;line-height:1.1;white-space:nowrap">Sujeet Singh &amp; Associates<span style="display:block;font-family:'DM Sans',sans-serif;color:var(--accent-lt);font-size:.68rem;font-weight:400">GST Consultant</span></span>
    </a>
    <div class="nav-links">
      <a href="/">Home</a>
      ${serviceNav}
      <a href="/blog/index.html">Blog</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </div>
    <a href="/contact.html" class="btn btn-accent">Free Consultation</a>
    <button class="hamburger" id="hamburger" aria-label="Menu" style="display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:6px;margin-left:10px">
      <span style="display:block;width:24px;height:2px;background:#fff;border-radius:2px"></span>
      <span style="display:block;width:24px;height:2px;background:#fff;border-radius:2px"></span>
      <span style="display:block;width:24px;height:2px;background:#fff;border-radius:2px"></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu" style="display:none;position:fixed;top:70px;left:0;width:100%;background:var(--navy);padding:16px 0;z-index:999;box-shadow:var(--shadow-lg);max-height:calc(100vh - 70px);overflow-y:auto;border-top:1px solid rgba(255,255,255,.06)">
  <a href="/" style="display:block;color:rgba(255,255,255,.85);padding:12px 24px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.06)">Home</a>
  <a href="/blog/index.html" style="display:block;color:rgba(255,255,255,.85);padding:12px 24px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.06)">Blog</a>
  <a href="/about.html" style="display:block;color:rgba(255,255,255,.85);padding:12px 24px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.06)">About</a>
  <a href="/contact.html" style="display:block;color:rgba(255,255,255,.85);padding:12px 24px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.06)">Contact</a>
</div>
<script>
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
if(hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "block";
    mobileMenu.style.display = isOpen ? "none" : "block";
    const spans = hamburger.querySelectorAll("span");
    if(!isOpen){
      spans[0].style.transform="rotate(45deg) translate(5px,5px)";
      spans[1].style.opacity="0";
      spans[2].style.transform="rotate(-45deg) translate(5px,-5px)";
    } else {
      spans.forEach(s=>{s.style.transform="";s.style.opacity="";});
    }
  });
}
</script>`;
}

function footer() {
  return `<footer style="background:var(--navy);color:#fff;padding:60px 0;margin-top:0">
  <div class="container footer-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:40px">
    <div>
      <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.3rem;margin-bottom:15px">Sujeet Singh & Associates</div>
      <p style="color:rgba(255,255,255,.6);font-size:.85rem;line-height:1.6">Expert GST consultant providing registration, returns, and audit support for businesses across India.</p>
    </div>
    <div>
      <h4 style="color:var(--accent-lt);font-size:1rem;margin-bottom:18px">GST Services</h4>
      <ul style="list-style:none;padding:0">${serviceLinks.map(([l, h]) => `<li style="margin-bottom:8px"><a href="${h}" style="color:rgba(255,255,255,.65);font-size:.85rem">${l}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h4 style="color:var(--accent-lt);font-size:1rem;margin-bottom:18px">Quick Links</h4>
      <ul style="list-style:none;padding:0">
        <li style="margin-bottom:8px"><a href="/blog/index.html" style="color:rgba(255,255,255,.65);font-size:.85rem">GST Blog</a></li>
        <li style="margin-bottom:8px"><a href="/about.html" style="color:rgba(255,255,255,.65);font-size:.85rem">About Us</a></li>
        <li style="margin-bottom:8px"><a href="/contact.html" style="color:rgba(255,255,255,.65);font-size:.85rem">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h4 style="color:var(--accent-lt);font-size:1rem;margin-bottom:18px">Contact</h4>
      <p style="color:rgba(255,255,255,.65);font-size:.85rem;line-height:1.6">${displayPhone}<br>${email}<br>Noida, India</p>
    </div>
  </div>
  <div class="container" style="margin-top:40px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);text-align:center">
    <p style="color:rgba(255,255,255,.4);font-size:.75rem">&copy; 2026 Sujeet Singh & Associates. All Rights Reserved. | <a href="/privacy-policy.html" style="color:inherit">Privacy</a> | <a href="/terms.html" style="color:inherit">Terms</a></p>
  </div>
</footer>`;
}

function head({ title, desc, canonical, schema, relPath = '' }) {
  return `<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2">
<link rel="stylesheet" href="${relPath}assets/seo-pages.css">
${schema.map((s) => `<script type="application/ld+json">${json(s)}</script>`).join('\n')}
</head>`;
}

const servicePages = [
  ['gst-registration.html', {
    title: 'GST Registration India | Sujeet Singh & Associates',
    h1: 'GST Registration Services',
    intent: 'businesses needing new GSTIN',
    sections: [
      ['The Importance of Professional GST Registration', 'GST registration is the first and most critical step for any business in India. A correct registration ensures that you can legally collect tax and claim input tax credit (ITC). We help you identify the right category, prepare error-free documents, and handle officer clarifications.'],
      ['Documents Required for GST Registration', 'The documentation varies depending on your business type (Proprietorship, Partnership, or Company). Common requirements include PAN, Aadhaar, address proof (Rent Agreement or Electricity Bill), and bank details. We review these before submission to minimize rejection risks.'],
      ['Our Smooth Registration Process', 'We manage the entire lifecycle on the GST portal—from Part A & B filing to ARN tracking and responding to SCN (Show Cause Notices). Our goal is to get your GSTIN approved in the shortest possible time.']
    ],
    faqs: [['How long does GST registration take?', 'Usually 3-7 working days after complete submission.'], ['Is GST registration mandatory?', 'Yes, for businesses exceeding the turnover threshold or involved in interstate supply.']]
  }],
  ['gst-return-filing.html', {
    title: 'GST Return Filing Services | Sujeet Singh & Associates',
    h1: 'GST Return Filing Services',
    intent: 'accurate and timely compliance',
    sections: [
      ['Why Accurate GST Return Filing Matters', 'Timely filing of GSTR-1 and GSTR-3B is essential to avoid heavy late fees and interest. More importantly, it ensures your B2B customers can see the credit in their GSTR-2B, which is vital for your business relationships.'],
      ['Monthly vs Quarterly (QRMP) Filing', 'Depending on your turnover, you may opt for the QRMP scheme. We help you choose the most beneficial filing frequency to manage your cash flow effectively while remaining 100% compliant.'],
      ['ITC Reconciliation and GSTR-3B', 'We perform rigorous reconciliation of your purchase register with GSTR-2B before filing GSTR-3B. This protects you from claiming excess ITC and facing future audits or notices.']
    ],
    faqs: [['What are the common GST returns?', 'GSTR-1 for sales reporting and GSTR-3B for tax payment summary.'], ['What is the penalty for late filing?', 'Late fees range from ₹20 to ₹50 per day per return, depending on tax liability.']]
  }],
  ['gst-audit.html', {
    title: 'GST Audit and Assessment Support | Sujeet Singh & Associates',
    h1: 'GST Audit Support',
    intent: 'businesses facing departmental audits',
    sections: [
      ['Navigating GST Audits and Assessments', 'GST audits are conducted by tax authorities to verify the correctness of turnover declared, taxes paid, and ITC claimed. We provide end-to-end support in preparing working papers and representing your case before the department.'],
      ['Scrutiny of Returns and Notice Replies', 'If you receive an ASMT-10 or a similar notice regarding mismatches, we help identify the root cause and draft a technical, fact-based response to resolve the matter at the scrutiny stage itself.'],
      ['Preparation of Reconciliation Statements', 'A major part of audit support is the reconciliation of GSTR-9/9C with your annual financial statements. We ensure every entry is documented and defensible.']
    ],
    faqs: [['Who is liable for a GST audit?', 'Registered persons selected by the department based on risk parameters or those required to file GSTR-9C.'], ['Can you help with notice replies?', 'Yes, we specialize in drafting technical replies for all types of GST notices.']]
  }]
];

const blogPages = [
  {
    file: 'gst-for-small-business.html',
    title: 'GST Guide for Small Businesses in India | SSA',
    h1: 'GST for Small Business: A Complete Guide',
    content: `
      <p>Managing GST can be overwhelming for small business owners in India. However, understanding the basics of GST registration, invoicing, and return filing is essential to avoid penalties and grow your business.</p>
      <h2>Does Every Small Business Need GST?</h2>
      <p>Not necessarily. GST registration is mandatory only if your annual turnover exceeds ₹40 lakh for goods or ₹20 lakh for services (thresholds vary for special category states). However, if you sell products online (e-commerce) or supply goods across state borders, registration is compulsory regardless of turnover.</p>
      <h2>Benefits of the Composition Scheme</h2>
      <p>The GST Composition Scheme is a simplified tax scheme designed for small taxpayers. Businesses with a turnover of up to ₹1.5 crore can opt for this scheme, allowing them to pay a fixed percentage of turnover as tax and file quarterly returns (CMP-08) and one annual return (GSTR-4). While you cannot claim ITC under this scheme, the compliance burden is significantly lower.</p>
      <h2>Common Compliance Tasks</h2>
      <ul>
        <li>Maintaining proper tax invoices for every sale.</li>
        <li>Reconciling purchase invoices with GSTR-2B to claim correct ITC.</li>
        <li>Filing GSTR-1 (Sales) and GSTR-3B (Tax Payment) on time.</li>
        <li>Keeping record of HSN/SAC codes for all products and services.</li>
      </ul>
      <p>At Sujeet Singh & Associates, we specialize in helping small businesses transition into the GST regime smoothly. We handle your monthly compliance so you can focus on your core business operations.</p>
    `,
    faqs: [['What is the turnover limit for GST?', '₹40 Lakh for goods and ₹20 Lakh for services in most states.'], ['Can I claim ITC under the Composition Scheme?', 'No, taxpayers under the Composition Scheme are not eligible to claim Input Tax Credit.']]
  },
  {
    file: 'gst-registration-process-india.html',
    title: 'GST Registration Process in India: Step-by-Step | SSA',
    h1: 'GST Registration Process in India',
    content: `
      <p>The GST registration process is completely online and involves several stages of verification. Understanding these steps can help you avoid common errors that lead to application rejection.</p>
      <h2>Step 1: Generating TRN (Temporary Reference Number)</h2>
      <p>The process begins on the GST portal (services.gst.gov.in) by providing your PAN, mobile number, and email. Once verified via OTP, you receive a 15-digit TRN.</p>
      <h2>Step 2: Filing Part B of the Application</h2>
      <p>Using the TRN, you must fill out the detailed application form. This includes business details, constitution (proprietorship/LLP/Co), principal place of business, and authorized signatory details.</p>
      <h2>Step 3: Verification and ARN</h2>
      <p>After submitting the form (usually with an Aadhaar-based DSC or EVC), an Application Reference Number (ARN) is generated. The proper officer will review your application within 7 working days.</p>
      <p>If the officer requires further info, they will issue a SCN (Show Cause Notice). You must provide a clarification within the stipulated time to avoid rejection.</p>
    `,
    faqs: [['Is Aadhaar authentication mandatory?', 'Yes, Aadhaar authentication is required for fast approval without physical site verification.'], ['Can I track my application status?', 'Yes, you can track it using your ARN on the GST portal.']]
  },
  {
    file: 'how-to-file-gst-return.html',
    title: 'How to File GST Return: A Practical Guide | SSA',
    h1: 'How to File GST Return in India',
    content: `
      <p>Filing GST returns is a mandatory monthly or quarterly task for all GST-registered businesses. Here is a simplified guide to the process.</p>
      <h2>Data Assembly</h2>
      <p>Before you log in to the portal, assemble your Sales Register (for GSTR-1) and your Purchase Register (for ITC calculation). Ensure your invoices have the correct GSTIN of customers and vendors.</p>
      <h2>Filing GSTR-1</h2>
      <p>GSTR-1 is where you report all your outward supplies (sales). You must provide invoice-level details for B2B sales and summary details for B2C sales. The deadline is usually the 11th of the following month.</p>
      <h2>Filing GSTR-3B</h2>
      <p>GSTR-3B is a summary return where you calculate your total tax liability, subtract your eligible Input Tax Credit (ITC), and pay the balance tax to the government. The deadline is usually the 20th of the following month.</p>
    `,
    faqs: [['What happens if I file late?', 'A late fee is automatically calculated on the portal for the next month.'], ['Do I need to file a return if there is no business?', 'Yes, filing a "Nil" return is mandatory even if there were no transactions.']]
  }
];

function generate() {
  if (!fs.existsSync(path.join(root, 'blog'))) fs.mkdirSync(path.join(root, 'blog'), { recursive: true });

  // Generate Service Pages
  servicePages.forEach(([file, page]) => {
    const html = `<!DOCTYPE html><html lang="en">${head({ title: page.title, desc: page.title, canonical: 'https://gsthelps.com/' + file, schema: [faqSchema(page.faqs)], relPath: './' })}<body>${nav()}<main>
<section class="hero"><div class="container"><h1>${esc(page.h1)}</h1><p>Technical guidance for ${esc(page.intent)} in India.</p></div></section>
<section class="section"><div class="container content">${page.sections.map(([h, p]) => `<h2>${esc(h)}</h2><p>${esc(p)}</p>`).join('\n')}</div></section>${faqHtml(page.faqs)}</main>${footer()}</body></html>`;
    fs.writeFileSync(path.join(root, file), html);
  });

  // Generate Blog Articles
  blogPages.forEach((page) => {
    const html = `<!DOCTYPE html><html lang="en">${head({ title: page.title, desc: page.title, canonical: 'https://gsthelps.com/blog/' + page.file, schema: [faqSchema(page.faqs)], relPath: '../' })}<body>${nav()}<main>
<section class="hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog/index.html">Blog</a><span>/</span><span>${esc(page.h1)}</span></div><span class="badge">GST Guide</span><h1>${esc(page.h1)}</h1></div></section>
<section class="section"><div class="container content">${page.content}</div></section>${faqHtml(page.faqs)}</main>${footer()}</body></html>`;
    fs.writeFileSync(path.join(root, 'blog', page.file), html);
  });

  // Generate Remaining Blog Stubs (to prevent 404s for links not yet detailed)
  blogLinks.forEach(([label, href]) => {
    const file = href.split('/').pop();
    if (!fs.existsSync(path.join(root, 'blog', file))) {
       const html = `<!DOCTYPE html><html lang="en">${head({ title: label, desc: label, canonical: 'https://gsthelps.com/blog/' + file, schema: [], relPath: '../' })}<body>${nav()}<main><section class="hero"><div class="container"><h1>${esc(label)}</h1></div></section><section class="section"><div class="container content"><p>${esc(label)} is essential for GST compliance. Full article coming soon.</p></div></section></main>${footer()}</body></html>`;
       fs.writeFileSync(path.join(root, 'blog', file), html);
    }
  });
  
  const bIndex = `<!DOCTYPE html><html lang="en">${head({ title: 'GST Blog | Sujeet Singh & Associates', desc: 'Practical GST guides.', canonical: 'https://gsthelps.com/blog/', schema: [], relPath: '../' })}<body>${nav()}<main>
<section class="hero"><div class="container"><h1>GST Blog India</h1><p>Practical GST guides for businesses, startups, and freelancers.</p></div></section>
<section class="section"><div class="container"><h2>All GST Guides</h2>${linkList(blogLinks)}</div></section></main>${footer()}</body></html>`;
  fs.writeFileSync(path.join(root, 'blog', 'index.html'), bIndex);
}

generate();
