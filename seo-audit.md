# SEO Audit Report - gsthelps.com

Audit date: 2026-06-07  
Repository type: static HTML site

## Executive Summary

The site has a clean static structure, working sitemap/robots files, canonical tags on all indexable content pages, and one valid H1 on every HTML page. The homepage is the strongest SEO asset, with 2,725 words, service-focused sections, FAQ content, and valid `ProfessionalService` plus `FAQPage` JSON-LD.

Primary issues:

- `about.html`, `contact.html`, `disclaimer.html`, `404.html`, and `500.html` are under 500 words.
- `404.html` and `500.html` have no meta descriptions or canonical tags.
- Schema markup exists only on `index.html`; contact/about/legal pages have no structured data.
- Core Web Vitals risks are present from render-blocking external CSS/fonts, Google Analytics, a 619 KB PNG, missing image dimensions, and scroll/animation JavaScript.
- Internal links are functional, but legal pages have shallow navigation and service sections exist only as homepage anchors instead of dedicated landing pages.

## Existing Pages

| Page | Sitemap? | Canonical | Word Count | Indexability Notes |
|---|---:|---|---:|---|
| `/` (`index.html`) | Yes | `https://gsthelps.com/` | 2,725 | Main SEO landing page |
| `/about.html` | Yes | `https://gsthelps.com/about.html` | 361 | Thin content |
| `/contact.html` | Yes | `https://gsthelps.com/contact.html` | 209 | Thin content |
| `/privacy-policy.html` | Yes | `https://gsthelps.com/privacy-policy.html` | 548 | Adequate legal page |
| `/terms.html` | Yes | `https://gsthelps.com/terms.html` | 537 | Adequate legal page |
| `/disclaimer.html` | Yes | `https://gsthelps.com/disclaimer.html` | 432 | Thin content |
| `/404.html` | No | Missing | 39 | Utility/error page |
| `/500.html` | No | Missing | 43 | Utility/error page |

## Title Tags

| Page | Title | Length | Notes |
|---|---|---:|---|
| `/` | `GST Solutions India - Complete GST Services by Tax Consultant \| gsthelps.com` | 76 | Too long; may truncate in search results |
| `/about.html` | `About Us - Sujeet Singh GST Consultant \| GST Helps` | 50 | Good length |
| `/contact.html` | `Contact Us - GST Helps \| Free GST Consultation India` | 52 | Good length |
| `/privacy-policy.html` | `Privacy Policy - GST Helps \| gsthelps.com` | 41 | Fine for legal page |
| `/terms.html` | `Terms of Service - GST Helps \| gsthelps.com` | 43 | Fine for legal page |
| `/disclaimer.html` | `Disclaimer - GST Helps \| gsthelps.com` | 37 | Fine for legal page |
| `/404.html` | `404 - Page Not Found \| GST Helps` | 32 | Fine for error page |
| `/500.html` | `500 - Server Error \| GST Helps` | 30 | Fine for error page |

## Meta Descriptions

| Page | Meta Description | Length | Notes |
|---|---|---:|---|
| `/` | `Professional GST Registration, Returns, ITC Reconciliation, Refunds, Audit, and Compliance services by a certified GST Practitioner in India.` | 141 | Good length |
| `/about.html` | `Learn about Sujeet Singh, a certified GST Consultant with 18+ years of experience in GST registration, returns, ITC reconciliation, refunds, and audit across India.` | 164 | Slightly long; consider tightening |
| `/contact.html` | `Contact Sujeet Singh for free GST consultation. Call, WhatsApp or email for GST registration, return filing, ITC reconciliation, refunds and more.` | 146 | Good length |
| `/privacy-policy.html` | `Privacy Policy for gsthelps.com - how we collect, use, and protect your personal information.` | 93 | Good for legal page |
| `/terms.html` | `Terms of Service for gsthelps.com - the terms governing your use of our website and GST consulting services.` | 108 | Good for legal page |
| `/disclaimer.html` | `Disclaimer for gsthelps.com - important information about the nature of content and services on this website.` | 109 | Good for legal page |
| `/404.html` | Missing | 0 | Add only if this page can be indexed; otherwise add `noindex` |
| `/500.html` | Missing | 0 | Add `noindex`; meta description optional |

## H1 Audit

No missing H1 tags were found.

| Page | H1 Count | H1 Text |
|---|---:|---|
| `/` | 1 | `Complete GST Solutions for Your Business` |
| `/about.html` | 1 | `Meet Your GST Expert` |
| `/contact.html` | 1 | `Contact Us` |
| `/privacy-policy.html` | 1 | `Privacy Policy` |
| `/terms.html` | 1 | `Terms of Service` |
| `/disclaimer.html` | 1 | `Disclaimer` |
| `/404.html` | 1 | `Page Not Found` |
| `/500.html` | 1 | `Something Went Wrong` |

## Thin Content

Pages below 500 words:

| Page | Words | Severity | Recommendation |
|---|---:|---|---|
| `/contact.html` | 209 | Medium | Add location/service-area copy, consultation process, response SLA, GST service contact use cases, and trust signals |
| `/about.html` | 361 | Medium | Add credentials, professional background, industries served, GST expertise areas, and proof/trust details |
| `/disclaimer.html` | 432 | Low | Legal page; acceptable, but still below threshold |
| `/404.html` | 39 | Low | Utility page; should be `noindex` rather than expanded |
| `/500.html` | 43 | Low | Utility page; should be `noindex` rather than expanded |

The homepage is not thin at 2,725 words. `privacy-policy.html` and `terms.html` are above 500 words.

## Internal Linking Structure

No broken internal links or missing hash anchors were detected.

Incoming internal link counts:

| Target | Internal Links |
|---|---:|
| `/` | 79 |
| `/contact.html` | 11 |
| `/about.html` | 7 |
| `/privacy-policy.html` | 6 |
| `/terms.html` | 6 |
| `/disclaimer.html` | 6 |
| `/404.html` | 0 |
| `/500.html` | 0 |

Findings:

- Homepage has strong internal navigation to service anchors, FAQ, testimonials, about, contact, and legal pages.
- About and contact pages link back to homepage, service anchors, FAQ, and legal pages.
- Legal pages only link to homepage and other legal pages. They do not include the full main navigation to about/contact/services.
- Service topics such as GST registration, GST returns, annual returns, ITC, refunds, and GST audit are homepage anchors only. Dedicated URLs would provide stronger keyword targeting and better internal link equity.
- Instagram links use `href="#"` on `index.html` and `contact.html`; this is not broken as a hash link, but it is a weak/placeholder outbound link.

Recommendations:

- Add consistent header/footer navigation to legal pages.
- Create dedicated service landing pages for major commercial keywords.
- Replace placeholder Instagram `#` links with a real URL or remove them.
- Add contextual links inside about/contact copy to relevant service sections or future service pages.

## Schema Markup

Detected schema:

| Page | Schema Types | Status |
|---|---|---|
| `/` | `ProfessionalService`, `FAQPage` | Valid JSON-LD |
| `/about.html` | None | Missing |
| `/contact.html` | None | Missing |
| `/privacy-policy.html` | None | Acceptable |
| `/terms.html` | None | Acceptable |
| `/disclaimer.html` | None | Acceptable |
| `/404.html` | None | Acceptable |
| `/500.html` | None | Acceptable |

Recommendations:

- Add `LocalBusiness` or more specific `ProfessionalService` schema to `/contact.html` with phone, email, address, opening hours, and area served.
- Add `Person` schema to `/about.html` for Sujeet Singh, including role, affiliation, expertise, and same-as links if available.
- Consider `BreadcrumbList` schema on `/about.html`, `/contact.html`, and legal pages.
- Keep FAQ schema aligned with visible FAQ content on the homepage.

## Core Web Vitals Review

This was a source-level Core Web Vitals review, not a Lighthouse field/lab run. Main risks found:

| Area | Risk | Evidence | Likely Metric Impact |
|---|---|---|---|
| Render-blocking CSS | Google Fonts and Font Awesome load as external stylesheets in the document head | `fonts.googleapis.com`, `cdnjs.cloudflare.com/ajax/libs/font-awesome` | LCP, FCP |
| Third-party script | Google Analytics loads on homepage, about, contact, 404, and 500 | `gtag/js?id=G-729JW5VSVV` | INP, main-thread work |
| Large image | `sujeet1.png` is 619,850 bytes at 762x557 | Used on homepage/about page | LCP, bandwidth |
| Missing image dimensions | `<img>` tags do not include intrinsic `width` and `height` attributes | favicon and `sujeet1.png` image tags | CLS |
| No lazy decoding/loading | Non-critical images lack `loading="lazy"` and `decoding="async"` | homepage/about images | LCP, bandwidth |
| Inline CSS/JS size | `index.html` is 86,821 bytes with large inline CSS and JS | Single large HTML document | TTFB, parsing cost |
| Scroll handler | Homepage listens to `window.scroll` and performs DOM work without throttling/requestAnimationFrame | `index.html` scroll navigation logic | INP |
| Animations | Multiple transitions, entrance animations, pulse animation, and box shadows | homepage CSS | INP/render cost on lower-end devices |

Recommendations:

- Convert `sujeet1.png` to WebP/AVIF and serve responsive sizes.
- Add explicit `width` and `height` attributes to all `<img>` elements.
- Add `loading="lazy"` and `decoding="async"` for below-the-fold images.
- Add `preconnect` for `https://fonts.gstatic.com` with `crossorigin`.
- Consider self-hosting fonts and Font Awesome icons or reducing icon dependency.
- Defer non-critical scripts and avoid analytics on `404.html`/`500.html` unless required.
- Throttle scroll work with `requestAnimationFrame`.
- Extract and minify CSS/JS if the site grows, or keep critical CSS inline and defer the rest.

## Robots and Sitemap

`robots.txt` allows all crawlable pages and references `https://gsthelps.com/sitemap.xml`.

`sitemap.xml` includes:

- `/`
- `/about.html`
- `/contact.html`
- `/privacy-policy.html`
- `/terms.html`
- `/disclaimer.html`

Findings:

- Sitemap excludes `404.html` and `500.html`, which is correct.
- Add `noindex` meta robots tags to `404.html` and `500.html` to prevent accidental indexation.
- Sitemap `lastmod` values are set to `2026-06-06`; keep these updated when content changes.

## Priority Action Plan

1. Add `noindex` to `404.html` and `500.html`; optionally add canonical tags pointing to themselves or omit canonical for noindex pages.
2. Expand `/about.html` and `/contact.html` above 500 words with useful, non-generic service and trust content.
3. Shorten homepage title to under roughly 60 characters while preserving the main commercial keyword.
4. Add `ProfessionalService`/`LocalBusiness`, `Person`, and `BreadcrumbList` schema on secondary pages.
5. Optimize `sujeet1.png`, add image dimensions, and lazy/decode attributes.
6. Reduce render-blocking font/icon dependencies and add `fonts.gstatic.com` preconnect.
7. Create dedicated service pages for GST registration, GST return filing, ITC reconciliation, refunds, annual returns, and GST audit.
8. Replace placeholder social `href="#"` links.

