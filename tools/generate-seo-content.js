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

const intentLinks = [
  ['GST for Startups', '/gst-for-startups.html'],
  ['GST for Freelancers', '/gst-for-freelancers.html'],
  ['GST for Sole Proprietorship', '/gst-for-sole-proprietorship.html'],
  ['GST for Private Limited Company', '/gst-for-private-limited-company.html']
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

const factNote = `GST rules, limits, forms, and portal utilities can change through notifications, advisories, and GST Council decisions. The practical guidance below is written for business planning and compliance readiness; before filing, always verify the latest position on the GST portal or work with a qualified GST practitioner.`;

const commonSections = {
  registration: {
    title: 'GST Registration Services in India | GST Helps',
    desc: 'Get professional GST registration support in India with document review, application filing, clarification handling, and post-registration compliance guidance.',
    h1: 'GST Registration Services in India',
    badge: 'Registration Support',
    intent: 'businesses that need a clean GST application, correct document mapping, and practical guidance before the first return cycle begins',
    serviceType: 'GST Registration',
    relatedBlogs: [0, 1, 4, 6],
    relatedServices: [1, 4, 5],
    faqs: [
      ['Who needs GST registration in India?', 'GST registration depends on turnover, supply type, state, e-commerce participation, reverse charge exposure, and other compulsory registration rules. Many goods businesses use a Rs. 40 lakh reference threshold and many service businesses use Rs. 20 lakh, but exceptions apply, so each case should be checked before deciding.'],
      ['How long does GST registration take?', 'A straightforward application can often move quickly after complete documents are submitted, but timing depends on portal validation, officer review, and whether clarification is requested.'],
      ['Can GST registration be rejected?', 'Yes. Rejection can happen if documents are incomplete, business address proof is weak, details do not match PAN or Aadhaar records, or clarification is not answered properly.'],
      ['Do you help after GSTIN approval?', 'Yes. Post-registration support includes login setup, return calendar planning, invoice format guidance, HSN/SAC review, and first-month compliance support.']
    ],
    sections: [
      ['When GST Registration Becomes a Business Priority', 'GST registration is not just a portal form. It affects invoicing, customer onboarding, input tax credit, e-commerce operations, tenders, exports, and banking credibility. A rushed application can create avoidable issues later, especially when the address proof, constitution of business, authorised signatory details, or nature of business is not aligned with the actual operation. A careful registration process helps the business start with a clean GST profile and reduces the risk of officer queries, delayed approval, cancellation exposure, or incorrect compliance setup.'],
      ['Our Registration Approach', 'We begin with a business conversation rather than a document checklist. The first step is to understand what you sell, where you sell, how invoices will be raised, whether supplies are local, interstate, export-oriented, or made through marketplaces, and whether the entity is a proprietorship, partnership, LLP, private limited company, or another structure. This lets us identify the right registration category, business activity, HSN or SAC direction, place-of-business documentation, authorised signatory records, and post-registration filing obligations.'],
      ['Documents Reviewed Before Filing', 'Common documents include PAN, Aadhaar, photograph, proof of business constitution, principal place of business proof, rent agreement or ownership evidence, electricity bill, bank proof where required, and authorisation documents for companies or partnerships. The official GST document checklist also recognises address proof such as property tax receipt, municipal khata copy, electricity bill, rent or lease agreement, consent letter, and government-issued certificates depending on the case. We review these before upload so the application is not weakened by avoidable mismatches.'],
      ['Clarification and Officer Query Handling', 'If the proper officer asks for clarification, the response should be factual, complete, and supported by the right attachment. Many applicants lose time because they reply with generic explanations or upload the same unclear document again. We prepare a structured response, explain the business position, and attach corrected documents wherever needed. The objective is not only approval but approval with a GST profile that matches the real business.'],
      ['After GSTIN Is Approved', 'Registration is the starting point. A new registrant must understand invoicing, tax collection, input tax credit discipline, return due dates, e-way bill and e-invoice applicability where relevant, record keeping, and reconciliations. We help new taxpayers build a simple compliance calendar and avoid the common first-quarter mistakes that lead to late fees, wrong tax payment, or credit mismatch.']
    ]
  },
  returns: {
    title: 'GST Return Filing Services | GSTR-1 & GSTR-3B Support',
    desc: 'Professional GST return filing services for GSTR-1, GSTR-3B, reconciliations, late fee control, and monthly or quarterly GST compliance.',
    h1: 'GST Return Filing Services',
    badge: 'Return Filing',
    intent: 'businesses that want accurate, timely, reconciled GST returns without last-minute portal stress',
    serviceType: 'GST Return Filing',
    relatedBlogs: [2, 3, 5, 8],
    relatedServices: [0, 2, 4],
    faqs: [
      ['Which GST returns do regular taxpayers usually file?', 'Regular taxpayers commonly deal with outward supply reporting in GSTR-1 and tax payment summary filing through GSTR-3B. Exact obligations depend on registration type, turnover, scheme, and notified requirements.'],
      ['What happens if GST returns are filed late?', 'Late filing can lead to late fees, interest on delayed tax payment, compliance notices, blocked credits for recipients, and difficulty in maintaining a clean GST profile.'],
      ['Do you reconcile GSTR-2B before filing?', 'Yes. ITC should be checked against GSTR-2B, books, supplier invoices, debit notes, credit notes, and reversals before finalising GSTR-3B.'],
      ['Can you handle quarterly filing?', 'Yes. We support monthly and quarterly filers and help decide the practical workflow based on turnover, cash flow, customer requirements, and portal due dates.']
    ],
    sections: [
      ['Why Return Filing Needs More Than Data Entry', 'GST return filing connects sales, purchases, tax payment, input tax credit, e-way bills, e-invoices where applicable, debit notes, credit notes, advances, reverse charge, and reconciliations. A return may look simple on the portal, but errors can affect customers, vendor relationships, working capital, and departmental scrutiny. Professional filing focuses on correctness before submission, not correction after a notice.'],
      ['GSTR-1 and GSTR-3B Alignment', 'GSTR-1 reports outward supplies and invoice-level details, while GSTR-3B summarises tax liability, eligible ITC, reversals, and tax payment. The two should tell a consistent story. Differences may arise from amendments, timing issues, credit notes, exports, advances, or mistakes in classification. We review both forms together so the business does not file numbers that create future mismatch questions.'],
      ['Input Tax Credit Review', 'ITC is one of the most sensitive parts of GST compliance. We compare purchase records with GSTR-2B, identify missing supplier uploads, blocked credits, ineligible expenses, reverse charge items, and reversal triggers. The aim is to claim legitimate credit without taking aggressive positions that cannot be defended later.'],
      ['Late Fee and Interest Control', 'Delayed returns can create late fees and interest exposure. Even when a business has no sale in a month, nil filing may still be required. We maintain a compliance calendar, remind clients before due dates, and prioritise tax payment planning so returns are not delayed because the data was assembled too late.'],
      ['Monthly Compliance Rhythm', 'A healthy GST process starts before the due date. Sales data should be checked during the month, purchase reconciliation should not wait until the last day, and exceptions should be discussed before filing. We help businesses move from reactive filing to a monthly compliance rhythm that reduces errors and pressure.']
    ]
  },
  audit: {
    title: 'GST Audit and Assessment Support | GST Helps',
    desc: 'GST audit, assessment, scrutiny, notice reply, and reconciliation support for businesses that need defensible compliance records.',
    h1: 'GST Audit and Assessment Support',
    badge: 'Audit Support',
    intent: 'businesses facing scrutiny, audit preparation, departmental queries, or complex GST reconciliations',
    serviceType: 'GST Audit and Assessment',
    relatedBlogs: [5, 8, 3, 7],
    relatedServices: [1, 3, 4],
    faqs: [
      ['What is included in GST audit support?', 'Support can include data review, return reconciliation, notice analysis, working paper preparation, document compilation, reply drafting, and representation coordination.'],
      ['Can you help with GST notices?', 'Yes. We review the notice, identify the exact allegation or mismatch, prepare a factual response, and compile supporting documents.'],
      ['Why do businesses receive GST scrutiny notices?', 'Common reasons include return mismatches, ITC differences, delayed filing, e-way bill inconsistencies, excess refund claims, tax short payment, or unusual reporting trends.'],
      ['Should I reply to a notice myself?', 'Simple notices can sometimes be handled internally, but a weak or incomplete reply can worsen the matter. Professional review is recommended when tax, ITC, penalty, or cancellation risk is involved.']
    ],
    sections: [
      ['A Practical View of GST Audit Risk', 'GST audit and assessment work is about evidence. The department generally looks for consistency between returns, books, e-way bills, e-invoices where applicable, tax payments, ITC claims, refunds, and financial statements. If the business cannot explain differences, even genuine transactions can look risky. We help convert scattered records into clear working papers and defensible explanations.'],
      ['Notice Review and Issue Mapping', 'The first step is to read the notice carefully and identify what the officer is asking. Some notices relate to mismatches; others relate to eligibility, classification, valuation, place of supply, refunds, registration, or delayed filing. We map each issue separately, list required evidence, and avoid broad replies that do not answer the actual query.'],
      ['Reconciliation Before Response', 'A strong response is supported by reconciliation. We compare GSTR-1, GSTR-3B, GSTR-2B, books, ledgers, credit notes, debit notes, export documents, and payment records where relevant. This helps separate data timing differences from real exposure and allows management to make informed decisions.'],
      ['Documentation and Working Papers', 'Audit support requires organised documents: invoices, purchase registers, sales registers, tax ledgers, bank proofs, LUT documents, shipping bills, agreements, expense ledgers, and communication records. We prepare a document trail that supports the business position and can be understood by both the client and the officer.'],
      ['Reducing Future Audit Exposure', 'The best audit outcome is a stronger compliance system. After resolving the immediate matter, we identify process changes: better monthly reconciliation, supplier follow-up, return review controls, HSN/SAC checks, reverse charge review, and documented approval before large ITC claims or refund filings.']
    ]
  },
  refund: {
    title: 'GST Refund Services in India | Export & ITC Refund Help',
    desc: 'GST refund services for exporters, inverted duty structure, excess cash ledger balance, RFD-01 filing, tracking, and notice reply support.',
    h1: 'GST Refund Services in India',
    badge: 'Refund Support',
    intent: 'exporters and businesses whose working capital is blocked in GST credits, excess cash ledger balance, or refund claims',
    serviceType: 'GST Refund Services',
    relatedBlogs: [7, 8, 3, 2],
    relatedServices: [2, 4, 1],
    faqs: [
      ['Which GST refunds can businesses commonly claim?', 'Common refund categories include export-related refunds, inverted duty structure refunds, excess balance in electronic cash ledger, and other categories allowed through the GST portal based on eligibility.'],
      ['What is Form GST RFD-01?', 'RFD-01 is the common refund application form used on the GST portal for many refund categories. Supporting documents and declarations vary by refund type.'],
      ['Can refund applications receive notices?', 'Yes. Officers may issue deficiency memos, show cause notices, or requests for clarification if documents, reconciliations, or eligibility positions are incomplete.'],
      ['How do you track GST refund status?', 'Refund status can be tracked on the GST portal using ARN, and official advisories also describe bank validation and disbursal tracking through relevant systems.']
    ],
    sections: [
      ['Why GST Refunds Need Careful Preparation', 'A GST refund claim affects working capital, but it also invites detailed review. The officer may examine eligibility, return filing status, invoices, export documents, LUT, shipping details, input tax credit, tax payment, and bank validation. A refund filed without proper reconciliation can get delayed or challenged. We prepare refund claims with the evidence needed to support them.'],
      ['Refund Categories and Eligibility Review', 'Every refund category has its own logic. Export with payment of tax is different from export under LUT, and inverted duty structure claims are different from excess cash ledger refunds. Before filing, we identify the correct category, period, supporting records, return status, and limitation considerations. This reduces the chance of selecting the wrong refund path on the portal.'],
      ['RFD-01 Filing and Supporting Documents', 'The GST portal process for refund applications generally involves selecting the refund type, entering claim details, uploading supporting documents, and filing with DSC or EVC where applicable. For excess cash ledger refunds, the portal can auto-populate balances, but the taxpayer remains responsible for eligibility and limitation checks. We organise the claim so the application is readable and complete.'],
      ['Replying to Refund Notices', 'Refund claims may receive deficiency memos or show cause notices. A good reply should address the exact objection and attach relevant documents, not merely repeat the original claim. We prepare replies with reconciliation summaries, invoice references, bank proof, export documents, ledgers, and explanations required for the officer to process the matter.'],
      ['Working Capital Discipline', 'Refunds should not be treated as a one-time portal exercise. Exporters and businesses with recurring credits need a monthly discipline for invoice matching, LUT tracking, shipping bill records, bank realisation, supplier compliance, and return consistency. This makes future refund cycles faster and more predictable.']
    ]
  },
  compliance: {
    title: 'GST Compliance Services | Monthly GST Support India',
    desc: 'End-to-end GST compliance services for monthly filing, ITC reconciliation, notices, audit readiness, registrations, and advisory support.',
    h1: 'GST Compliance Services',
    badge: 'Ongoing Compliance',
    intent: 'businesses that want reliable monthly GST compliance, reconciliations, advisory, and notice prevention',
    serviceType: 'GST Compliance Services',
    relatedBlogs: [8, 5, 3, 6],
    relatedServices: [1, 2, 3],
    faqs: [
      ['What does monthly GST compliance include?', 'It can include sales review, purchase and ITC reconciliation, GSTR-1, GSTR-3B, tax payment planning, ledger checks, e-way bill review, and advisory on exceptions.'],
      ['Do you support small businesses?', 'Yes. The process is scaled to the size and complexity of the business so small businesses receive practical compliance without unnecessary overhead.'],
      ['Can compliance services reduce notices?', 'They cannot guarantee no notice, but disciplined reconciliation, timely filing, and clear records significantly reduce common mismatch and late filing triggers.'],
      ['Do you review past GST compliance?', 'Yes. We can review earlier returns, identify gaps, prepare corrective action, and create a cleaner process for future periods.']
    ],
    sections: [
      ['GST Compliance as a Management System', 'GST compliance is not a single monthly upload. It is a management system for invoices, taxes, credits, vendors, customers, payments, documents, and deadlines. When the system works, returns are easier, credits are cleaner, and management knows its tax exposure before the due date. Our compliance service builds that rhythm for Indian businesses.'],
      ['Monthly Filing and Review', 'We review sales, purchases, tax rates, reverse charge items, credit notes, debit notes, advances, and eligible ITC before returns are filed. The objective is to catch issues early rather than discovering them after a notice or customer complaint. For growing businesses, this also gives the finance team a predictable monthly workflow.'],
      ['ITC and Supplier Discipline', 'Input tax credit depends not only on your books but also on supplier reporting. We help identify missing credits, follow up with suppliers, review blocked credit items, and document reversals. This protects working capital while keeping the business away from unsupported ITC claims.'],
      ['Compliance Calendar and Controls', 'A practical calendar covers return due dates, payment planning, reconciliation cut-offs, internal approvals, annual review, LUT renewal where relevant, and notice response timelines. We create controls that suit the business size instead of imposing a corporate process on a small team.'],
      ['Advisory for Daily Decisions', 'GST questions arise during normal business: whether to charge IGST or CGST/SGST, how to treat reimbursements, whether an expense is eligible for credit, how to document exports, or how to report a credit note. Ongoing compliance support gives the business access to guidance before the transaction becomes a return error.']
    ]
  },
  consultant: {
    title: 'GST Consultant in India | GST Practitioner Support',
    desc: 'Work with an experienced GST consultant in India for registration, return filing, refunds, audits, notices, and ongoing GST compliance.',
    h1: 'GST Consultant in India',
    badge: 'Expert Advisory',
    intent: 'business owners who need direct access to an experienced GST consultant rather than generic filing support',
    serviceType: 'GST Consulting',
    relatedBlogs: [0, 2, 6, 8],
    relatedServices: [0, 1, 4],
    faqs: [
      ['What does a GST consultant do?', 'A GST consultant helps with registration, returns, ITC, refunds, notices, audit preparation, classification questions, compliance planning, and practical interpretation of GST obligations.'],
      ['Can you support clients outside Noida?', 'Yes. GST Helps supports clients across India through phone, WhatsApp, email, document sharing, and GST portal workflows.'],
      ['Is the first consultation free?', 'Yes. The first discussion is free so the issue can be understood and the right scope can be recommended.'],
      ['How is a consultant different from a filing operator?', 'A filing operator may only upload data. A consultant reviews risk, explains options, reconciles records, and helps the business make defensible GST decisions.']
    ],
    sections: [
      ['Why Businesses Need GST Judgment, Not Just Filing', 'GST compliance involves judgment. The right answer often depends on the transaction, agreement, place of supply, customer type, documentation, and return history. A consultant helps the business understand the implications before filing. This is especially important for startups, freelancers, exporters, service providers, e-commerce sellers, and companies with multiple types of revenue.'],
      ['Direct Consultant-Led Support', 'GST Helps is built around direct access to Sujeet Singh, an experienced GST consultant and tax practitioner. Clients are not passed through a generic helpdesk for every question. The work is reviewed with attention to facts, documents, and practical business constraints. That is important when a small mistake can affect credit, tax payment, cash flow, or departmental response.'],
      ['Services Covered', 'Consulting support includes GST registration, return filing, ITC reconciliation, GST refund claims, audit support, notice replies, compliance reviews, and advisory for business models. The service can be a one-time engagement or an ongoing monthly relationship depending on the client requirement.'],
      ['E-E-A-T in GST Advisory', 'Experience matters because GST problems rarely come in textbook form. A business may have mixed supplies, delayed vendor reporting, export documents, old missed returns, excess cash ledger balance, or an officer notice. We focus on clear documentation, conservative positions where needed, and practical advice that can be explained later.'],
      ['Working Across India', 'Most GST work is portal-driven, document-driven, and communication-driven. That makes remote support effective when the consultant has a clear checklist and the client shares data on time. GST Helps supports clients across India while maintaining a professional compliance process and clear communication.']
    ]
  }
};

const servicePages = [
  ['gst-registration.html', commonSections.registration],
  ['gst-return-filing.html', commonSections.returns],
  ['gst-audit.html', commonSections.audit],
  ['gst-refund-services.html', commonSections.refund],
  ['gst-compliance-services.html', commonSections.compliance],
  ['gst-consultant-india.html', commonSections.consultant]
];

const intentPages = [
  {
    file: 'gst-for-startups.html',
    title: 'GST for Startups in India | Registration & Compliance Guide',
    desc: 'A practical GST guide for Indian startups covering registration, invoicing, ITC, return filing, compliance planning, and when to consult a GST expert.',
    h1: 'GST for Startups in India',
    badge: 'Startup GST Guide',
    audience: 'startup founders, early finance teams, and first-time business owners',
    cta: 'Plan Startup GST Compliance',
    relatedServices: [0, 1, 4],
    relatedBlogs: [0, 1, 4, 8],
    faqs: [
      ['Do all startups need GST registration?', 'No. Registration depends on turnover, supply type, state, e-commerce participation, and compulsory registration rules. A startup should review GST before raising regular invoices.'],
      ['Can a startup claim input tax credit?', 'A registered startup may claim eligible ITC when conditions are satisfied and the credit appears through supplier reporting, subject to restrictions and documentation.'],
      ['Should founders register before revenue begins?', 'Not always. Some businesses wait until registration is required or commercially useful, while others register earlier for B2B credibility, marketplace onboarding, or ITC planning.'],
      ['What GST mistakes do startups make?', 'Common mistakes include wrong invoice format, delayed returns, unsupported ITC, ignoring place-of-supply rules, and not reconciling vendor credits.']
    ]
  },
  {
    file: 'gst-for-freelancers.html',
    title: 'GST for Freelancers in India | Consultant Guide',
    desc: 'GST guidance for freelancers in India, including registration, export of services, invoicing, LUT, return filing, and practical compliance support.',
    h1: 'GST for Freelancers in India',
    badge: 'Freelancer GST Guide',
    audience: 'freelancers, independent consultants, creators, designers, developers, and remote service providers',
    cta: 'Review Freelancer GST',
    relatedServices: [0, 1, 5],
    relatedBlogs: [4, 9, 2, 5],
    faqs: [
      ['Do freelancers need GST registration?', 'Freelancers may need registration based on turnover, type of service, export status, customer location, platform requirements, and other GST rules.'],
      ['Are export services zero-rated under GST?', 'Export of services can be zero-rated when conditions are met, but documentation, place of supply, payment receipt, and LUT choices should be reviewed carefully.'],
      ['Can freelancers claim ITC?', 'Registered freelancers may claim eligible ITC on business expenses if GST conditions are met and the credit is not blocked.'],
      ['Do freelancers file monthly GST returns?', 'Return frequency depends on the registration type, turnover, and scheme. Regular taxpayers commonly deal with GSTR-1 and GSTR-3B.']
    ]
  },
  {
    file: 'gst-for-sole-proprietorship.html',
    title: 'GST for Sole Proprietorship | Registration & Filing Guide',
    desc: 'Understand GST for sole proprietorship businesses in India, including registration, documents, invoicing, returns, ITC, and compliance support.',
    h1: 'GST for Sole Proprietorship',
    badge: 'Proprietor GST Guide',
    audience: 'proprietors, traders, service providers, small shops, consultants, and owner-managed businesses',
    cta: 'Set Up Proprietor GST',
    relatedServices: [0, 1, 4],
    relatedBlogs: [1, 6, 4, 8],
    faqs: [
      ['Is proprietorship GST linked to the proprietor PAN?', 'Yes. A proprietorship is not a separate legal person from the owner, so registration is generally linked to the proprietor PAN.'],
      ['What address proof is required?', 'Address proof can include ownership proof, rent or lease agreement, electricity bill, consent letter, or other documents depending on the place-of-business arrangement.'],
      ['Can a proprietor have multiple business places?', 'Yes, additional places of business can be declared when supported by documents and actual business use.'],
      ['What is the biggest risk for proprietors?', 'The biggest risk is informal record keeping. GST compliance requires invoices, purchase records, payment tracking, and timely returns.']
    ]
  },
  {
    file: 'gst-for-private-limited-company.html',
    title: 'GST for Private Limited Company | Compliance Guide India',
    desc: 'GST guide for private limited companies in India covering registration, board authorisation, invoicing, ITC, returns, notices, and compliance controls.',
    h1: 'GST for Private Limited Company',
    badge: 'Company GST Guide',
    audience: 'directors, finance managers, startup companies, and private limited businesses',
    cta: 'Review Company GST Setup',
    relatedServices: [0, 1, 2],
    relatedBlogs: [1, 2, 3, 8],
    faqs: [
      ['What company documents are used for GST registration?', 'A company usually needs PAN, certificate of incorporation, authorised signatory details, board authorisation or similar authority, address proof, and business information.'],
      ['Who signs GST applications for a company?', 'An authorised signatory signs and manages GST portal actions for the company based on proper authorisation.'],
      ['Should companies reconcile GST monthly?', 'Yes. Monthly reconciliation reduces ITC mismatches, customer disputes, audit exposure, and return amendment pressure.'],
      ['Can you help with GST notices for companies?', 'Yes. We support notice review, reconciliation, reply drafting, and document compilation.']
    ]
  }
];

const blogPages = [
  {
    file: 'gst-registration-process-india.html',
    title: 'GST Registration Process in India: Step-by-Step Guide',
    desc: 'Learn the GST registration process in India, from eligibility and documents to portal application, clarification handling, and post-registration steps.',
    h1: 'GST Registration Process in India',
    primaryService: '/gst-registration.html',
    related: [1, 4, 6],
    faqs: commonSections.registration.faqs,
    sections: ['Eligibility Review', 'Document Preparation', 'Portal Application Steps', 'Clarification Handling', 'After GSTIN Approval', 'Common Mistakes to Avoid']
  },
  {
    file: 'gst-registration-documents-required.html',
    title: 'GST Registration Documents Required in India',
    desc: 'Complete guide to GST registration documents required for proprietorship, company, partnership, address proof, authorised signatory, and bank proof.',
    h1: 'GST Registration Documents Required',
    primaryService: '/gst-registration.html',
    related: [0, 4, 6],
    faqs: [
      ['What documents are generally required for GST registration?', 'Common documents include PAN, identity and address proof, photograph, business constitution proof, place-of-business proof, authorisation documents, and business details.'],
      ['Is rent agreement always required?', 'It is required where the business place is rented or leased. Owned or consent-based premises may use other valid documents.'],
      ['Can a clarification be filed if documents are questioned?', 'Yes. A clarification can be filed with corrected or additional supporting documents within the prescribed portal process.'],
      ['Should documents match PAN details?', 'Yes. Name, address, and authorised signatory details should be consistent across records wherever applicable.']
    ],
    sections: ['Why Documents Matter', 'Proprietorship Documents', 'Company and LLP Documents', 'Place of Business Proof', 'Authorised Signatory Proof', 'Upload Quality and Size Issues']
  },
  {
    file: 'how-to-file-gst-return.html',
    title: 'How to File GST Return: Practical Guide for Businesses',
    desc: 'Understand how to file GST returns with sales data, ITC reconciliation, GSTR-1, GSTR-3B, tax payment, review controls, and filing discipline.',
    h1: 'How to File GST Return',
    primaryService: '/gst-return-filing.html',
    related: [3, 5, 8],
    faqs: commonSections.returns.faqs,
    sections: ['Return Filing Overview', 'Prepare Sales Data', 'Reconcile Purchases and ITC', 'Review GSTR-1', 'Review GSTR-3B', 'Payment and Filing Controls']
  },
  {
    file: 'gstr1-vs-gstr3b.html',
    title: 'GSTR-1 vs GSTR-3B: Key Differences Explained',
    desc: 'Compare GSTR-1 and GSTR-3B, understand how outward supplies, tax liability, ITC, amendments, and reconciliations work together.',
    h1: 'GSTR-1 vs GSTR-3B',
    primaryService: '/gst-return-filing.html',
    related: [2, 5, 8],
    faqs: [
      ['Is GSTR-1 the same as GSTR-3B?', 'No. GSTR-1 reports outward supply details, while GSTR-3B summarises tax liability, ITC, and payment.'],
      ['Why do GSTR-1 and GSTR-3B mismatch?', 'Mismatches may happen due to amendments, timing differences, credit notes, missed invoices, exports, or incorrect reporting.'],
      ['Which return affects customer ITC?', 'Supplier reporting in outward supply statements is important for recipient credit visibility.'],
      ['Should both returns be reconciled?', 'Yes. Regular reconciliation helps prevent notices and customer disputes.']
    ],
    sections: ['Purpose of GSTR-1', 'Purpose of GSTR-3B', 'Key Differences', 'Common Mismatches', 'Reconciliation Method', 'Practical Filing Controls']
  },
  {
    file: 'gst-threshold-limit-india.html',
    title: 'GST Threshold Limit in India: Practical Guide',
    desc: 'Understand GST threshold limits in India, compulsory registration, goods and services references, state exceptions, and when to seek advice.',
    h1: 'GST Threshold Limit in India',
    primaryService: '/gst-registration.html',
    related: [0, 1, 6],
    faqs: [
      ['What is the GST threshold limit in India?', 'Many goods businesses use Rs. 40 lakh as a reference threshold and many service businesses use Rs. 20 lakh, but exceptions and state-specific rules can apply.'],
      ['Is registration compulsory below threshold?', 'It can be compulsory in specified cases such as certain e-commerce, casual taxable, non-resident, or other notified situations.'],
      ['Do freelancers use the service threshold?', 'Freelancers generally review service turnover and the nature of supply, but export and platform arrangements should also be checked.'],
      ['Should I register voluntarily?', 'Voluntary registration can help with B2B credibility and ITC, but it also creates return filing obligations.']
    ],
    sections: ['Threshold Basics', 'Goods vs Services', 'Special Situations', 'Voluntary Registration', 'Turnover Monitoring', 'Decision Checklist']
  },
  {
    file: 'gst-late-fees-and-penalties.html',
    title: 'GST Late Fees and Penalties: Business Guide',
    desc: 'A practical guide to GST late fees, interest, penalties, delayed return filing risks, and how businesses can avoid compliance costs.',
    h1: 'GST Late Fees and Penalties',
    primaryService: '/gst-compliance-services.html',
    related: [2, 3, 8],
    faqs: [
      ['What is GST late fee?', 'Late fee is charged when applicable GST returns are filed after the due date. Amounts and caps depend on return type, taxpayer category, and notifications.'],
      ['Is interest different from late fee?', 'Yes. Interest generally relates to delayed tax payment, while late fee relates to delayed return filing.'],
      ['Can nil returns attract late fee?', 'Yes. Nil returns can still attract late fee if filed late, though the amount may differ from returns with tax liability.'],
      ['How can businesses avoid late fees?', 'Maintain a compliance calendar, reconcile data early, keep tax funds ready, and file nil returns on time where applicable.']
    ],
    sections: ['Late Fee vs Interest', 'Why Delays Happen', 'Return Filing Risks', 'Notice and Credit Impact', 'Prevention Checklist', 'When to Seek Help']
  },
  {
    file: 'gst-for-small-business.html',
    title: 'GST for Small Business in India',
    desc: 'GST guide for small businesses covering registration, invoicing, return filing, ITC, composition considerations, and compliance habits.',
    h1: 'GST for Small Business',
    primaryService: '/gst-compliance-services.html',
    related: [4, 5, 8],
    faqs: [
      ['Does every small business need GST?', 'No. Requirement depends on turnover, supply type, state, marketplace activity, and compulsory registration rules.'],
      ['Can small businesses claim ITC?', 'Registered regular taxpayers can claim eligible ITC subject to conditions and restrictions.'],
      ['What is the main GST habit for small businesses?', 'Keep invoices, purchase records, bank records, and return data organised monthly.'],
      ['Can GST compliance be outsourced?', 'Yes. Many small businesses outsource filings and reconciliations while keeping basic records internally.']
    ],
    sections: ['Small Business GST Basics', 'Registration Decision', 'Invoice and Record Keeping', 'Return Filing Routine', 'ITC Discipline', 'Compliance Checklist']
  },
  {
    file: 'gst-refund-process.html',
    title: 'GST Refund Process: RFD-01, Tracking, and Notices',
    desc: 'Learn the GST refund process, including eligibility review, RFD-01 filing, supporting documents, ARN tracking, bank validation, and notice replies.',
    h1: 'GST Refund Process',
    primaryService: '/gst-refund-services.html',
    related: [8, 3, 2],
    faqs: commonSections.refund.faqs,
    sections: ['Refund Eligibility', 'Preparing RFD-01', 'Supporting Documents', 'ARN and Tracking', 'Notices and Replies', 'Working Capital Planning']
  },
  {
    file: 'gst-compliance-checklist.html',
    title: 'GST Compliance Checklist for Indian Businesses',
    desc: 'Monthly GST compliance checklist for businesses covering invoices, GSTR-1, GSTR-3B, ITC, vendor follow-up, tax payment, and audit readiness.',
    h1: 'GST Compliance Checklist',
    primaryService: '/gst-compliance-services.html',
    related: [2, 3, 5],
    faqs: commonSections.compliance.faqs,
    sections: ['Monthly Checklist', 'Sales Review', 'Purchase and ITC Review', 'Return Filing Checklist', 'Payment and Ledger Checks', 'Audit-Ready Records']
  },
  {
    file: 'gst-for-software-developers.html',
    title: 'GST for Software Developers and IT Freelancers',
    desc: 'GST guide for software developers, SaaS providers, IT consultants, exporters, and freelancers covering invoicing, LUT, returns, and ITC.',
    h1: 'GST for Software Developers',
    primaryService: '/gst-for-freelancers.html',
    related: [4, 0, 2],
    faqs: [
      ['Do software developers need GST registration?', 'It depends on turnover, customer location, export status, platform arrangements, and compulsory registration rules.'],
      ['Is software export covered under GST?', 'Export of services can be zero-rated when legal conditions are satisfied, but documentation and place-of-supply review are important.'],
      ['Can developers claim ITC on laptop and software tools?', 'Eligible business expenses may qualify for ITC if GST conditions are met and the credit is not restricted.'],
      ['Do SaaS businesses need special review?', 'Yes. SaaS models may involve place of supply, OIDAR, export, subscription, and payment documentation issues.']
    ],
    sections: ['Developer GST Basics', 'Freelance vs Company Model', 'Export of Services', 'SaaS and Subscription Issues', 'ITC on Tools and Expenses', 'Compliance Workflow']
  }
];

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function json(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function nav(active = '') {
  const serviceNav = serviceLinks.map(([label, href]) => `<a href="${href}"${active === href ? ' class="active"' : ''}>${label.replace('GST ', '')}</a>`).join('');
  return `<nav id="navbar">
  <div class="container nav-inner">
    <a href="/" class="nav-logo">
      <span class="nav-logo-icon"><img src="/favicon-32x32.png" width="24" height="24" loading="eager" decoding="async" alt="GST Helps"></span>
      <span class="nav-logo-text">Sujeet Singh &amp; Associates<span>GST Consultant</span></span>
    </a>
    <div class="nav-links">
      <a href="/">Home</a>
      ${serviceNav}
      <a href="/blog/gst-registration-process-india.html">Blog</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </div>
    <a href="/contact.html" class="btn btn-accent">Free Consultation</a>
  </div>
</nav>`;
}

function footer() {
  return `<footer>
  <div class="container footer-grid">
    <div>
      <div class="footer-brand">GST Helps</div>
      <p>Professional GST registration, return filing, refund, audit, and compliance support for businesses across India.</p>
    </div>
    <div>
      <h3>Services</h3>
      ${serviceLinks.map(([l,h]) => `<a href="${h}">${l}</a>`).join('')}
    </div>
    <div>
      <h3>Guides</h3>
      ${blogLinks.slice(0,5).map(([l,h]) => `<a href="${h}">${l}</a>`).join('')}
    </div>
    <div>
      <h3>Contact</h3>
      <p>${displayPhone}<br>${email}<br>Noida, Uttar Pradesh</p>
      <a href="/privacy-policy.html">Privacy Policy</a>
      <a href="/terms.html">Terms</a>
      <a href="/disclaimer.html">Disclaimer</a>
    </div>
  </div>
</footer>`;
}

function head({title, desc, canonical, schema, relPath = ''}) {
  return `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://gsthelps.com/sujeet1.webp">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${relPath}assets/seo-pages.css">
${schema.map(s => `<script type="application/ld+json">${json(s)}</script>`).join('\n')}
</head>`;
}

function professionalSchema(page, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `GST Helps - ${page.serviceType}`,
    url,
    telephone: phone,
    email,
    address,
    founder: {'@type':'Person', name:'Sujeet Singh', jobTitle:'GST Consultant'},
    areaServed: {'@type':'Country', name:'India'},
    priceRange: '$$',
    serviceType: page.serviceType,
    openingHoursSpecification: {'@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens:'09:30', closes:'18:00'}
  };
}

function faqSchema(faqs) {
  return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a]) => ({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};
}

function breadcrumbSchema(items) {
  return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((it, i) => ({'@type':'ListItem',position:i+1,name:it[0],item:it[1]}))};
}

function linkList(items) {
  return `<ul class="link-list">${items.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>`;
}

function faqHtml(faqs) {
  return `<section class="section section-alt faq"><div class="container"><span class="badge">FAQ</span><h2>Frequently Asked Questions</h2>${faqs.map(([q,a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>`;
}

function expansionParagraph(topic, audience) {
  return `For ${audience}, the practical challenge is rarely the form name alone. The real challenge is maintaining a clean trail between invoices, contracts, bank receipts, purchase records, tax ledgers, and portal filings. A professional review helps identify whether the data is complete, whether the tax position is consistent, and whether the business can explain its numbers if a customer, vendor, auditor, or tax officer asks for clarification. This is why GST work should be handled as an operating discipline, not as a last-day upload.`;
}

function trustParagraph(topic) {
  return `A useful ${topic.toLowerCase()} engagement should end with more than a filed form. The business should understand its next compliance date, the records it must preserve, the warning signs to watch, and the person responsible for each monthly task. GST Helps uses that practical standard so the advice remains useful after the immediate filing or review is complete.`;
}

function servicePage(file, page) {
  const url = `https://gsthelps.com/${file}`;
  const relatedServices = page.relatedServices.map(i => serviceLinks[i]);
  const relatedBlogs = page.relatedBlogs.map(i => blogLinks[i]);
  const schema = [professionalSchema(page, url), faqSchema(page.faqs), breadcrumbSchema([['Home','https://gsthelps.com/'],[page.h1,url]])];
  const body = `<!DOCTYPE html>
<html lang="en">
${head({title: page.title, desc: page.desc, canonical: url, schema, relPath: './'})}
<body>
${nav('/' + file)}
<main>
  <section class="hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Home</a><span>/</span><span>${esc(page.h1)}</span></div>
      <span class="badge">${esc(page.badge)}</span>
      <h1>${esc(page.h1)}</h1>
      <p>Professional support for ${esc(page.intent)}. Work directly with an experienced GST consultant for accurate filing, clear documentation, and practical compliance decisions.</p>
      <div class="hero-actions"><a href="/contact.html" class="btn btn-primary">Book Free Consultation</a><a href="#faq" class="btn btn-outline">Read FAQs</a></div>
    </div>
  </section>
  <section class="section"><div class="container content-grid"><article class="content">
    ${page.sections.map(([h,p]) => `<h2>${esc(h)}</h2><p>${esc(p)}</p><p>${esc(expansionParagraph(page.h1, page.intent))}</p><p>${esc(trustParagraph(page.serviceType))}</p>`).join('\n')}
    <h2>What You Get With GST Helps</h2>
    <p>GST Helps combines technical review with practical business communication. We explain what is required, why it matters, which documents support the position, and how the compliance calendar should work after the immediate task is completed. The goal is to reduce avoidable notices, late fees, ITC disputes, and cash-flow surprises.</p>
    <p>Clients also receive guidance on related GST topics such as return filing, refund readiness, audit preparation, vendor follow-up, invoice format, record keeping, and response strategy if the GST portal or officer asks for clarification.</p>
    <h2>Related GST Resources</h2>
    <p>Use these guides to understand the connected compliance issues before you make a filing decision.</p>
    ${linkList(relatedBlogs)}
  </article><aside class="sidebar">
    <div class="panel"><h2>Related Services</h2>${linkList(relatedServices)}</div>
    <div class="panel"><h2>High-Intent Guides</h2>${linkList(intentLinks)}</div>
    <div class="panel cta-mini"><h2>Need a GST Review?</h2><p>Share your requirement and get a clear next step.</p><a href="/contact.html" class="btn btn-primary">Contact GST Helps</a></div>
  </aside></div></section>
  <section class="section cta"><div class="container"><h2>Get Professional ${esc(page.serviceType)} Support</h2><p>Speak with Sujeet Singh for a focused review of your GST requirement, documents, risks, and filing timeline.</p><a href="/contact.html" class="btn btn-accent">Start Free Consultation</a></div></section>
  <div id="faq">${faqHtml(page.faqs)}</div>
</main>
${footer()}
</body>
</html>`;
  fs.writeFileSync(path.join(root, file), body);
}

function intentPage(page) {
  const url = `https://gsthelps.com/${page.file}`;
  const schema = [faqSchema(page.faqs), breadcrumbSchema([['Home','https://gsthelps.com/'],[page.h1,url]])];
  const relatedServices = page.relatedServices.map(i => serviceLinks[i]);
  const relatedBlogs = page.relatedBlogs.map(i => blogLinks[i]);
  const sections = [
    ['Who This Guide Is For', `This guide is for ${page.audience}. GST decisions at this stage affect pricing, contracts, invoice format, eligibility for input tax credit, customer expectations, and return filing obligations. A small business can stay compliant without overcomplicating the process, but it needs a clear system from the beginning.`],
    ['Registration Decision', `The first question is whether registration is mandatory, commercially useful, or premature. Turnover is important, but it is not the only factor. The nature of supply, customer location, e-commerce or marketplace involvement, export position, and entity structure can change the answer. Voluntary registration may help in B2B situations, but it also creates filing obligations.`],
    ['Invoicing and Records', `Invoices should show the correct legal name, GSTIN once registered, tax rate, place of supply, HSN or SAC direction where relevant, invoice number, date, customer details, and tax breakup. Good records make return filing easier and help defend the business if a customer asks for credit support or an officer raises a mismatch.`],
    ['Input Tax Credit', `Input tax credit can reduce cash outflow, but it should be claimed only when conditions are met. The business should keep tax invoices, confirm supplier reporting, review blocked credit items, and reconcile credits against portal data. Unsupported ITC creates more risk than benefit.`],
    ['Return Filing Workflow', `A practical workflow includes monthly sales review, purchase review, supplier follow-up, tax payment planning, and final return approval. Even a small business should not wait until the due date to assemble data. The cost of late filing is often less important than the compliance history it creates.`],
    ['When to Consult a GST Expert', `Professional help is valuable before registration, before the first large B2B invoice, before export billing, when a notice is received, when credits do not match, or when the business is unsure about tax treatment. A short review can prevent months of correction work.`]
  ];
  const body = `<!DOCTYPE html><html lang="en">${head({title: page.title, desc: page.desc, canonical: url, schema, relPath: './'})}<body>${nav('/' + page.file)}<main>
<section class="hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span>${esc(page.h1)}</span></div><span class="badge">${esc(page.badge)}</span><h1>${esc(page.h1)}</h1><p>Educational GST guidance for ${esc(page.audience)}, with clear next steps when professional support is needed.</p><div class="hero-actions"><a href="/contact.html" class="btn btn-primary">${esc(page.cta)}</a></div></div></section>
<section class="section"><div class="container content-grid"><article class="content">${sections.map(([h,p]) => `<h2>${esc(h)}</h2><p>${esc(p)}</p><p>${esc(expansionParagraph(page.h1, page.audience))}</p>`).join('')}<h2>Helpful Next Reading</h2>${linkList(relatedBlogs)}</article><aside class="sidebar"><div class="panel"><h2>Recommended Services</h2>${linkList(relatedServices)}</div><div class="panel"><h2>Related Guides</h2>${linkList(intentLinks.filter(x => x[1] !== '/' + page.file))}</div></aside></div></section>
<section class="section cta"><div class="container"><h2>Need GST Support for Your Business Type?</h2><p>Get a practical GST review before registration, filing, export billing, or notice response.</p><a href="/contact.html" class="btn btn-accent">Book Free Consultation</a></div></section>${faqHtml(page.faqs)}</main>${footer()}</body></html>`;
  fs.writeFileSync(path.join(root, page.file), body);
}

function blogPage(page) {
  const filePath = path.join(root, 'blog', page.file);
  const url = `https://gsthelps.com/blog/${page.file}`;
  const relatedBlogs = page.related.map(i => blogLinks[i]);
  const schema = [breadcrumbSchema([['Home','https://gsthelps.com/'],['Blog','https://gsthelps.com/blog/'],[page.h1,url]]), faqSchema(page.faqs)];
  const intro = `${page.h1} is an important topic for Indian businesses because GST compliance affects billing, input tax credit, customer confidence, refunds, notices, and cash flow. This guide explains the topic in practical language so a business owner or finance team can understand what to prepare, what to check, and when to ask for professional help.`;
  const bodySections = page.sections.map((h, idx) => {
    const p1 = `The ${h.toLowerCase()} stage should be handled with documents, numbers, and business context. GST work becomes risky when a taxpayer copies a generic approach without checking the actual supplies, customer type, vendor reporting, place of supply, return history, and supporting records. A careful review keeps the filing position consistent and easier to explain later.`;
    const p2 = `For this topic, the practical step is to create a checklist, collect the records before the due date, and compare books with the GST portal wherever relevant. If a mismatch appears, it should be investigated before filing or before replying to a notice. This discipline protects input tax credit, reduces late fees, and avoids unnecessary correspondence.`;
    const p3 = idx % 2 === 0 ? factNote : `A business should also document internal decisions. If tax is paid under a particular head, if credit is reversed, if an invoice is amended, or if a refund period is selected, the reason should be recorded. These notes are useful during audit, assessment, annual review, and management handover.`;
    const p4 = `When this area is reviewed monthly, the business gets cleaner books and fewer surprises. The finance owner can see which invoices are pending, which suppliers need follow-up, whether tax payment is properly funded, and whether a professional review is needed before the next filing. That practical visibility is often the difference between routine compliance and stressful correction work.`;
    return `<h2>${esc(h)}</h2><p>${esc(p1)}</p><p>${esc(p2)}</p><p>${esc(p3)}</p><p>${esc(p4)}</p>`;
  }).join('');
  const body = `<!DOCTYPE html><html lang="en">${head({title: page.title, desc: page.desc, canonical: url, schema, relPath: '../'})}<body>${nav()}<main>
<section class="hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog/gst-registration-process-india.html">Blog</a><span>/</span><span>${esc(page.h1)}</span></div><span class="badge">GST Guide</span><h1>${esc(page.h1)}</h1><p>${esc(intro)}</p><div class="hero-actions"><a href="${page.primaryService}" class="btn btn-primary">Get Related Service Help</a></div></div></section>
<section class="section"><div class="container content-grid"><article class="content"><p>${esc(intro)}</p>${bodySections}<h2>How GST Helps Can Support You</h2><p>GST Helps provides consultant-led support for registration, return filing, refunds, audit preparation, notice replies, and ongoing compliance. If this guide matches a problem in your business, the next step is to review your facts, documents, and portal data before taking action.</p><p>For direct help, start with the related service page and then book a free consultation. A short review can identify whether the matter is simple, time-sensitive, document-heavy, or better handled through a structured engagement.</p><h2>Related Articles</h2>${linkList(relatedBlogs)}</article><aside class="sidebar"><div class="panel"><h2>Related Services</h2>${linkList(serviceLinks)}</div><div class="panel"><h2>Business Guides</h2>${linkList(intentLinks)}</div></aside></div></section>
<section class="section cta"><div class="container"><h2>Need Help Applying This Guide?</h2><p>Get professional GST support before filing, responding, or claiming credit/refund.</p><a href="/contact.html" class="btn btn-accent">Talk to a GST Consultant</a></div></section>${faqHtml(page.faqs)}</main>${footer()}</body></html>`;
  fs.writeFileSync(filePath, body);
}

function blogIndex() {
  const filePath = path.join(root, 'blog', 'index.html');
  const url = 'https://gsthelps.com/blog/';
  const schema = [breadcrumbSchema([['Home','https://gsthelps.com/'],['Blog',url]])];
  const body = `<!DOCTYPE html><html lang="en">${head({title: 'GST Blog India | GST Helps', desc: 'Read practical GST guides on registration, returns, compliance, refunds, penalties, small business GST, freelancers, and software developers in India.', canonical: url, schema, relPath: '../'})}<body>${nav()}<main>
<section class="hero"><div class="container"><div class="breadcrumb"><a href="/">Home</a><span>/</span><span>Blog</span></div><span class="badge">GST Guides</span><h1>GST Blog India</h1><p>Practical GST guides for Indian businesses, startups, freelancers, proprietors, companies, exporters, and finance teams.</p></div></section>
<section class="section"><div class="container content"><h2>Popular GST Guides</h2>${linkList(blogLinks)}<h2>Need GST Help?</h2><p>Use these articles for education, then speak with GST Helps when you need registration, filing, refund, audit, notice, or monthly compliance support.</p><p><a href="/contact.html" class="btn btn-primary">Talk to a GST Consultant</a></p></div></section></main>${footer()}</body></html>`;
  fs.writeFileSync(filePath, body);
}

function css() {
  const cssContent = `:root{--navy:#0a1f44;--royal:#1a3a8f;--sky:#2563eb;--accent:#c8a84b;--accent-lt:#f0d97a;--white:#fff;--off-white:#f4f6fb;--lt-gray:#e8ecf4;--mid-gray:#8896b3;--dark-gray:#3b4a6b;--text:#1e2d4f;--shadow-sm:0 2px 8px rgba(10,31,68,.10);--shadow-md:0 6px 28px rgba(10,31,68,.14);--radius:12px;--radius-lg:20px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;color:var(--text);background:var(--white);line-height:1.68}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
h1,h2,h3{font-family:'Playfair Display',serif;line-height:1.2;color:var(--navy)}
h1{font-size:clamp(2.1rem,5vw,3.6rem);font-weight:800}
h2{font-size:clamp(1.35rem,3vw,2rem);margin:34px 0 12px}
h3{font-size:1.08rem}
.container{max-width:1120px;margin:0 auto;padding:0 24px}
.badge{display:inline-block;background:var(--accent);color:var(--navy);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:50px;margin-bottom:14px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 26px;border-radius:50px;font-weight:700;transition:.25s;text-decoration:none}
.btn-primary{background:linear-gradient(135deg,var(--sky),var(--royal));color:#fff;box-shadow:0 4px 20px rgba(37,99,235,.32)}
.btn-accent{background:linear-gradient(135deg,var(--accent),#e8b84d);color:var(--navy)}
.btn-outline{border:2px solid rgba(255,255,255,.55);color:#fff}
#navbar{position:fixed;top:0;left:0;width:100%;background:var(--navy);z-index:20;box-shadow:var(--shadow-md)}
.nav-inner{height:70px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav-inner .btn{padding:8px 18px;font-size:.82rem;flex-shrink:0}
.nav-logo{display:flex;align-items:center;gap:10px;flex-shrink:0}
.nav-logo-icon{width:40px;height:40px;background:linear-gradient(135deg,var(--accent),var(--accent-lt));border-radius:10px;display:flex;align-items:center;justify-content:center}
.nav-logo-text{font-family:'Playfair Display',serif;color:#fff;font-weight:700;line-height:1.1;white-space:nowrap}
.nav-logo-text span{display:block;font-family:'DM Sans',sans-serif;color:var(--accent-lt);font-size:.68rem;font-weight:400}
.nav-links{display:flex;gap:2px;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--accent) transparent;-webkit-overflow-scrolling:touch}
.nav-links::-webkit-scrollbar{height:4px}
.nav-links::-webkit-scrollbar-thumb{background:var(--accent);border-radius:10px}
.nav-links a{color:rgba(255,255,255,.82);font-size:.77rem;padding:6px 9px;border-radius:6px;white-space:nowrap}
.nav-links a:hover,.nav-links a.active{background:rgba(255,255,255,.08);color:var(--accent-lt)}
.hero{background:linear-gradient(145deg,var(--navy),#0e2d6a 56%,var(--royal));padding:128px 0 68px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 80%,rgba(200,168,75,.12),transparent 45%),radial-gradient(circle at 80% 20%,rgba(37,99,235,.18),transparent 50%)}
.hero .container{position:relative}
.breadcrumb{display:flex;flex-wrap:wrap;gap:8px;color:rgba(255,255,255,.62);font-size:.84rem;margin-bottom:14px}
.breadcrumb a{color:rgba(255,255,255,.72)}
.hero h1{color:#fff;max-width:850px;margin-bottom:16px}
.hero p{color:rgba(255,255,255,.76);font-size:1.08rem;max-width:790px}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
.section{padding:72px 0}
.section-alt{background:var(--off-white)}
.content-grid{display:grid;grid-template-columns:minmax(0,1fr) 310px;gap:42px;align-items:start}
.content{font-size:1.02rem}
.content p{color:var(--dark-gray);margin-bottom:18px}
.content ul,.link-list{margin:14px 0 24px;padding-left:20px}
.link-list li{margin:8px 0}
.link-list a{color:var(--royal);font-weight:700}
.sidebar{position:sticky;top:92px;display:grid;gap:18px}
.panel{border:1px solid var(--lt-gray);border-radius:var(--radius);padding:22px;background:#fff;box-shadow:var(--shadow-sm)}
.panel h2{font-size:1.2rem;margin:0 0 12px}
.cta{text-align:center;background:linear-gradient(135deg,var(--navy),#0e2d6a)}
.cta h2{color:#fff;margin-top:0}
.cta p{color:rgba(255,255,255,.72);max-width:680px;margin:0 auto 26px}
.faq h2{margin-top:0}
.faq details{background:#fff;border:1px solid var(--lt-gray);border-radius:10px;padding:18px 20px;margin:12px 0;box-shadow:var(--shadow-sm)}
.faq summary{cursor:pointer;font-weight:700;color:var(--navy)}
.faq details p{margin-top:10px;color:var(--dark-gray)}
footer{background:var(--navy);padding:44px 0;color:rgba(255,255,255,.72)}
.footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:28px}
.footer-brand{font-family:'Playfair Display',serif;color:#fff;font-size:1.35rem;font-weight:700;margin-bottom:10px}
footer h3{color:var(--accent-lt);font-size:1rem;margin-bottom:10px}
footer a{display:block;color:rgba(255,255,255,.65);font-size:.9rem;margin:7px 0}
@media(max-width:900px){
  .nav-links{display:none}
  .nav-inner>.btn{display:none}
  .content-grid{grid-template-columns:1fr}
  .sidebar{position:static}
  .footer-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:560px){
  .footer-grid{grid-template-columns:1fr}
  .section{padding:54px 0}
  .hero{padding-top:112px}
}`;
  const dir = path.join(root, 'assets');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir, 'seo-pages.css'), cssContent);
}

function docs() {
  fs.writeFileSync(path.join(root, 'CONTENT_PLAN.md'), `# Content Plan - GSTHelps.com

Generated: ${today}

## Objective

Build topical authority for GST-related searches by expanding beyond a single homepage into service pages, high-intent audience pages, and educational blog content.

## Phase 1: Service Landing Pages

${servicePages.map(([file, p]) => `- ${file}: targets "${p.h1}" with commercial intent, FAQ schema, ProfessionalService schema, CTA, and links to related services/blogs.`).join('\n')}

## Phase 2: High Intent Pages

${intentPages.map(p => `- ${p.file}: educational page for ${p.audience}, with service CTA, FAQ schema, and internal links.`).join('\n')}

## Phase 3: Blog Hub

${blogPages.map(p => `- /blog/${p.file}: informational article supporting ${p.primaryService}.`).join('\n')}

## Internal Linking Strategy

- Homepage links to every new service page.
- Service pages link to related service pages, high-intent pages, and supporting blog articles.
- Blog articles link back to commercial service pages and related guides.
- Audience pages link to services and articles that match their business model.

## Editorial Standards

- Human-first explanations with practical examples and cautions.
- No keyword stuffing.
- Avoid overclaiming; GST rules should be verified against official sources before filing.
- Support E-E-A-T through consultant identity, contact information, schema, and clear disclaimers.
`);

  fs.writeFileSync(path.join(root, 'KEYWORD_MAP.md'), `# Keyword Map - GSTHelps.com

Generated: ${today}

| URL | Primary Keyword | Search Intent | Supporting Topics |
|---|---|---|---|
${servicePages.map(([file, p]) => `| /${file} | ${p.h1.toLowerCase()} | Commercial | ${p.relatedBlogs.map(i => blogLinks[i][0]).join(', ')} |`).join('\n')}
${intentPages.map(p => `| /${p.file} | ${p.h1.toLowerCase()} | High-intent educational | ${p.relatedBlogs.map(i => blogLinks[i][0]).join(', ')} |`).join('\n')}
${blogPages.map(p => `| /blog/${p.file} | ${p.h1.toLowerCase()} | Informational | Links to ${p.primaryService} |`).join('\n')}

## Cluster Strategy

- Registration cluster: /gst-registration.html plus process, documents, threshold, startups, proprietorship, and small business articles.
- Filing cluster: /gst-return-filing.html plus how-to-file, GSTR-1 vs GSTR-3B, late fees, and compliance checklist.
- Compliance cluster: /gst-compliance-services.html plus small business, penalties, checklist, audit, and private limited company pages.
- Refund cluster: /gst-refund-services.html plus refund process and export/freelancer/software developer context.
- Consultant cluster: /gst-consultant-india.html plus all audience pages and about/contact trust pages.
`);
}

function sitemap() {
  const urls = [
    ['https://gsthelps.com/', '1.0'],
    ['https://gsthelps.com/about.html', '0.8'],
    ['https://gsthelps.com/contact.html', '0.8'],
    ...servicePages.map(([file]) => [`https://gsthelps.com/${file}`, '0.9']),
    ...intentPages.map(p => [`https://gsthelps.com/${p.file}`, '0.7']),
    ['https://gsthelps.com/blog/', '0.7'],
    ...blogPages.map(p => [`https://gsthelps.com/blog/${p.file}`, '0.7']),
    ['https://gsthelps.com/privacy-policy.html', '0.4'],
    ['https://gsthelps.com/terms.html', '0.4'],
    ['https://gsthelps.com/disclaimer.html', '0.3']
  ];
  fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([loc, pr]) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${pr}</priority>\n  </url>`).join('\n\n')}\n</urlset>\n`);
}

function generate() {
  if (!fs.existsSync(path.join(root, 'blog'))) fs.mkdirSync(path.join(root, 'blog'), {recursive:true});
  css();
  docs();
  servicePages.forEach(([file, page]) => servicePage(file, page));
  intentPages.forEach(intentPage);
  blogPages.forEach(blogPage);
  blogIndex();
  sitemap();
}

generate();
