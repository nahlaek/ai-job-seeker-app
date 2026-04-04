# Page Content Reference — ai-job-seeker-app

All copy, labels, data, and structure for every landing page section.
Read this file in full before building any section component.
Use text verbatim — do not paraphrase or invent copy.

---

## Meta

```
Page title:    "ai-job-seeker — Get hired in Germany faster"
Description:   "AI-powered CV, cover letter, LinkedIn, and GitHub optimization
                built for the German job market. ATS-optimized, DIN 5008
                compliant, delivered in minutes."
```

---

## Section 1 — Hero

```
Eyebrow:       (none)

H1 line 1:     "Get hired in Germany —"
H1 accent:     "faster."            ← italic, violet, underline, last word

Subheadline:   "AI-powered CV, cover letter, LinkedIn, and GitHub optimization
                built for the German job market. Delivered in minutes, not days.
                From €59."

CTA primary:   "See pricing →"      ← links to #pricing
CTA ghost:     "How it works"       ← smooth-scrolls to #how-it-works

Trust line (small text, inline with · separators):
  "✓ ATS-optimized  ·  ✓ DIN 5008 compliant  ·
   ✓ Tax-deductible (Werbungskosten)  ·  ✓ GDPR-compliant"
```

---

## Section 2 — Pain Points

```
Eyebrow:       "WHY YOUR APPLICATION ISN'T WORKING"
H2:            "Most applications never make it past the first filter."

Stat strip (3 columns, desktop horizontal / mobile stacked):

  1. Stat:        "80%"
     Descriptor:  "of German recruiters rate CVs as inadequate"

  2. Stat:        "7.7 months"
     Descriptor:  "average time to fill an IT role in Germany"

  3. Stat:        "75% filtered out"
     Descriptor:  "before a human ever reads them"

Cards (4):

  1. Title:   "ATS black hole"
     Body:    "Your CV may never reach a human. Three in four applications
               are eliminated by Applicant Tracking Systems before anyone
               reads them."

  2. Title:   "Wrong format"
     Body:    "A CV that works in London or Bangalore won't pass in Berlin.
               Missing Deckblatt, incorrect photo placement, no DIN 5008
               compliance. German recruiters notice immediately."

  3. Title:   "Generic AI output"
     Body:    "ChatGPT doesn't know German hiring conventions. Templated
               language stands out to DACH recruiters for the wrong reasons."

  4. Title:   "Invisible on LinkedIn & GitHub"
     Body:    "German recruiters check your LinkedIn and GitHub before they
               call. If your profiles aren't optimised for how they search,
               you won't appear."

Bridge CTA:
  Text:      "These are fixable. Here's how we approach them."
  Button:    "See How It Works →"    ← soft/outlined style, links to #how-it-works
```

---

## Section 3 — Pricing

```
Eyebrow:       "PRICING"
H2:            "Choose your plan"
Subheadline:   "All plans include instant delivery, ATS optimization, and German
                market formatting. Tax-deductible as Werbungskosten."

Fine print:    "All prices include VAT. Costs are fully tax-deductible as
                Werbungskosten in Germany (§9 EStG). Effective cost after tax:
                €34–145 depending on your tax bracket."

Cards (4):

  1. Name:     "CV Rewrite"
     Price:    €59
     Cadence:  one-time
     Badge:    (none)
     Featured: false
     CTA:      "Get started"
     Features:
       - ATS-optimized CV rewrite
       - German market formatting (DIN 5008)
       - Keyword optimization for your target role
       - Bilingual support (DE/EN)
       - PDF + DOCX delivery

  2. Name:     "Full Application"
     Price:    €109
     Cadence:  one-time
     Badge:    (none)
     Featured: false
     CTA:      "Get started"
     Features:
       - Everything in CV Rewrite
       - Personalized cover letter tailored to your target job
       - LinkedIn profile optimization
       - ATS keyword strategy document
       - Delivered same day

  3. Name:     "IT Complete"
     Price:    €149
     Cadence:  one-time · for IT professionals
     Badge:    "MOST POPULAR"
     Featured: true            ← dark navy card, violet border, badge pill above
     CTA:      "Get started"
     Features:
       - Everything in Full Application
       - GitHub profile optimization
       - README and profile page rewrite
       - Project descriptions refined for recruiters
       - Tech stack keyword alignment

  4. Name:     "90-Day Accelerator"
     Price:    €249
     Cadence:  one-time · for IT professionals
     Badge:    "BEST VALUE"
     Featured: false
     CTA:      "Get started"
     Features:
       - Everything in IT Complete
       - AI-powered mock interview sessions
       - Technical interview prep (system design, coding)
       - Behavioral coaching (STAR method)
       - Ongoing CV updates for new applications
       - Weekly job market insights for your niche
       - 90 days of support
```

---

## Section 4 — How It Works

```
Eyebrow:       "HOW IT WORKS"
H2:            "Three steps. Done in minutes."

Steps (3):

  01. Title:   "Upload"
      Body:    "Submit your current CV and target job description through our
                secure form. Tell us your goals."

  02. Title:   "We optimize"
      Body:    "Our AI analyzes your profile against German market standards,
                ATS requirements, and your target role. Every document is
                reviewed for quality."

  03. Title:   "Get hired"
      Body:    "Receive your optimized documents within minutes. Start applying
                with confidence."
```

---

## Section 5 — FAQ

```
Eyebrow:       "FAQ"
H2:            "Frequently asked questions"

Items (3):

  Q: "Is this just ChatGPT with a wrapper?"
  A: "No. Our system uses custom AI pipelines specifically trained on German
     application standards — DIN 5008 formatting, DACH-specific cover letter
     conventions, ATS keyword strategies used by German employers, and recruiter
     preferences in the German market. The output is reviewed for quality before
     delivery. This is not a generic AI tool."

  Q: "Can I really deduct this from my taxes?"
  A: "Yes. In Germany, all job application costs (Bewerbungskosten) are fully
     tax-deductible as Werbungskosten under §9 EStG. This applies whether you
     are employed or unemployed. Keep your receipt — our invoice is accepted by
     the Finanzamt."

  Q: "How is my data handled?"
  A: "We are fully GDPR-compliant. Your personal data is processed solely for
     the purpose of creating your application documents. We do not share, sell,
     or retain your data beyond the service delivery period. You can request
     deletion at any time. Our Datenschutzerklärung is available on this page."
```

---

## Section 6 — Final CTA + Footer

```
CTA Section (bg-brand-ink, dark navy):
  H2 line 1:   "Every week without a job costs you €800+."
  H2 line 2:   "Your optimized application costs €59."
  Subheadline: "Join hundreds of professionals who've landed interviews at
                companies across Germany — from SAP and Siemens to Berlin
                startups."
  CTA button:  "Start now — from €59 →"    ← links to #pricing

Footer bar (bg-[#100d2e]):
  Copyright:   "© 2025 ai-job-seeker-app"
  Nav links (· separated):
    - "Impressum"
    - "Datenschutzerklärung"
    - "AGB"
    - "Kontakt"
```

---

## Notes for launch

The following are placeholders — confirm before going live:

- Domain / APP_URL
- Contact email address
- Legal pages (Impressum, Datenschutzerklärung, AGB) — required under
  German law (DSGVO + Impressumspflicht)
- VAT treatment — confirm with tax advisor
- Copyright year — update from 2025 if needed
