# Page Content Reference — ai-job-seeker

All copy, labels, data, and structure for every landing page section.
Read this file in full before building any section component.

---

## Meta

```
Page title:    "ai-job-seeker — Get hired in Germany faster"
Description:   "AI-powered CV and cover letter writing for the German job market.
                ATS-optimized, DIN 5008 compliant, built for IT professionals."
```

---

## Section 1 — Hero

```
Eyebrow:       "AI-Powered Job Applications"

H1 line 1:     "Get hired in Germany —"
H1 accent:     "faster."            ← italic, violet underline

Subheadline:   "We rewrite your CV and cover letter for the German job market.
                ATS-optimized, DIN 5008 compliant, and tailored to your target role."

CTA primary:   "See pricing →"      ← links to #pricing
CTA ghost:     "How it works"       ← smooth-scrolls to #how-it-works

Trust badges:
  - "✓ ATS-optimized"
  - "✓ DIN 5008 compliant"
  - "✓ Tax-deductible"
  - "✓ GDPR-compliant"
```

---

## Section 2 — Pain Points

```
Eyebrow:       "The problem"
H2:            "The German job market plays by different rules"
Subheadline:   "Most CVs from outside Germany get rejected before a human ever reads them."

Cards (4):

  1. Icon: 📄
     Title:   "Wrong format"
     Body:    "German employers expect DIN 5008 structure, a photo, and specific
               section order. International CVs look unprofessional by default."

  2. Icon: 🤖
     Title:   "ATS rejection"
     Body:    "Applicant tracking systems filter out CVs that lack the right
               keywords. Most candidates never make it to a recruiter's inbox."

  3. Icon: 🌐
     Title:   "Language mismatch"
     Body:    "Even fluent German speakers miss the industry-specific phrasing
               that signals cultural fit and domain expertise to hiring managers."

  4. Icon: ⏱
     Title:   "Hours wasted"
     Body:    "Rewriting a CV for each application takes hours. Most people
               send the same document everywhere — and get silence back."
```

---

## Section 3 — Pricing

```
Eyebrow:       "Pricing"
H2:            "One-time. No subscription."
Subheadline:   "Pay once, own the result. Every document delivered within 48 hours."

Fine print:    "Prices include VAT. All documents are tax-deductible as job-seeking expenses under §9 EStG."

Cards (4):

  1. CV Rewrite          — standard tier
     Tagline:    "Perfect to get started"
     Price:      €59
     Cadence:    one-time
     Features:
       - ATS-optimized CV rewrite
       - DIN 5008 formatting
       - Keyword research for your target role
       - 1 revision round
       - Delivered in 48 hours (PDF + DOCX)

  2. Cover Letter        — standard tier
     Tagline:    "Stand out from the first line"
     Price:      €39
     Cadence:    one-time
     Features:
       - Tailored cover letter (Anschreiben)
       - Role-specific tone and phrasing
       - Addresses the job posting directly
       - 1 revision round
       - Delivered in 48 hours (PDF + DOCX)

  3. IT Complete         — FEATURED tier (dark navy card)
     Badge:      "MOST POPULAR"
     Tagline:    "For IT professionals"
     Price:      €149
     Cadence:    one-time
     Features:
       - Everything in CV Rewrite
       - Everything in Cover Letter
       - LinkedIn profile headline + summary rewrite
       - GitHub / portfolio framing tips
       - 2 revision rounds
       - Priority delivery in 24 hours

  4. Full Package        — standard tier
     Tagline:    "Complete job search support"
     Price:      €249
     Cadence:    one-time
     Features:
       - Everything in IT Complete
       - 30-min strategy call (video)
       - Interview preparation guide (role-specific)
       - Salary negotiation talking points
       - 3 revision rounds
       - Dedicated account manager

CTA labels:
  - Card 1: "Get CV Rewrite"
  - Card 2: "Get Cover Letter"
  - Card 3: "Get IT Complete"   ← violet button (featured)
  - Card 4: "Get Full Package"
```

---

## Section 4 — How It Works

```
Eyebrow:       "The process"
H2:            "Three steps to a job-ready application"
Subheadline:   "No calls, no back-and-forth. Just a clean handoff and a polished result."

Steps (3):

  01. Share your details
      "Fill out a short form: your current CV, target role, and the job posting
       you are applying for. Takes about 10 minutes."

  02. We rewrite everything
      "Our AI — guided by German HR specialists — rewrites your CV and cover
       letter to match the role, the ATS filters, and German market expectations."

  03. Review and apply
      "You receive polished PDF and DOCX files within 48 hours. One revision
       round included. Then apply with confidence."
```

---

## Section 5 — FAQ

```
Eyebrow:       "FAQ"
H2:            "Questions we get a lot"

Items (6):

  Q: "Do I need to speak German to use this service?"
  A: "No. We work in English and German. If you are applying to German-language
     roles, we write your documents in German. For English-speaking companies
     in Germany (many tech firms), we write in English."

  Q: "How long does delivery take?"
  A: "Standard delivery is 48 hours after we receive your completed intake form.
     IT Complete orders are delivered within 24 hours. Full Package includes a
     scheduled strategy call which may extend the timeline by one day."

  Q: "What do you need from me?"
  A: "Your current CV (any format), the job posting or role description you are
     targeting, and a short intake form that takes about 10 minutes to complete."

  Q: "Can I request revisions?"
  A: "Yes. CV Rewrite and Cover Letter include 1 revision round. IT Complete
     includes 2 rounds. Full Package includes 3 rounds. Additional revisions
     can be requested for a flat fee of €19 each."

  Q: "Is this tax-deductible in Germany?"
  A: "Yes. Job-seeking expenses (Bewerbungskosten) are deductible under §9 EStG.
     We provide a proper invoice you can submit with your Steuererklärung."

  Q: "What if I am not satisfied?"
  A: "If after your revision rounds the result still does not meet your
     expectations, contact us. We review every case individually and either
     redo the work or issue a refund."
```

---

## Section 6 — Final CTA + Footer

```
CTA Section (bg-brand-ink):
  Eyebrow:     "Get started today"
  H2 line 1:   "Your next job is one"
  H2 accent:   "application away."    ← italic, lighter violet
  Subheadline: "Join hundreds of professionals who landed jobs in Germany
                with a CV that actually works."
  CTA button:  "See pricing →"        ← links to #pricing

Footer bar (bg-[#100d2e]):
  Copyright:   "© 2025 ai-job-seeker"
  Nav links:
    - "Privacy"     → /privacy
    - "Imprint"     → /imprint
    - "Contact"     → mailto:hello@ai-job-seeker.de
```

---

## Notes for review

The following values are placeholders — confirm before launch:

- APP_URL / domain name
- Contact email address
- Legal pages (/privacy, /imprint) — required under German law (DSGVO + Impressumspflicht)
- VAT treatment (confirm with tax advisor if applicable)
