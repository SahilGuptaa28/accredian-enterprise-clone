
# Accredian Enterprise — Partial Clone

A responsive Next.js clone inspired by enterprise.accredian.com, built as a take-home assignment.

**Live demo:** *https://accredian-enterprise-clone.vercel.app/*  
**GitHub:** *https://github.com/SahilGuptaa28/accredian-enterprise-clone*

---

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/SahilGuptaa28/accredian-enterprise-clone.git
cd accredian-enterprise-clone

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build && npm start
````

No environment variables are required. The app works out of the box.

---

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 14 — App Router                       |
| Styling    | Tailwind CSS 3.4                              |
| Icons      | lucide-react                                  |
| Fonts      | Sora (display) + DM Sans (body) via next/font |
| Deployment | Vercel                                        |

---

## Folder structure

```text
src/
├── app/
│   ├── layout.js          # Root layout — fonts, metadata
│   ├── page.js            # Page — assembles all sections
│   ├── globals.css        # Tailwind base + custom utilities
│   └── api/
│       ├── stats/
│       │   └── route.js   # GET /api/stats — mock stats data
│       └── leads/
│           └── route.js   # POST /api/leads — lead capture + API response
├── components/
│   ├── Navbar.js          # Sticky nav, mobile hamburger, smooth scroll
│   ├── Hero.js            # Hero section with dashboard card
│   ├── TrustedBy.js       # Partner logo strip
│   ├── Features.js        # 6-card feature grid with icons
│   ├── HowItWorks.js      # 4-step process timeline
│   ├── Stats.js           # Live stats fetched from /api/stats
│   ├── Programs.js        # 4 program cards
│   ├── Testimonials.js    # Quote cards + mobile carousel
│   ├── LeadForm.js        # Lead capture form with POST to /api/leads
│   ├── FAQ.js             # Accordion FAQ
│   └── Footer.js          # Footer with links and CTA
└── data/
    └── mockData.js        # Centralised mock data for all sections
```

---

## Approach

### 1. Study before building

I started by carefully reviewing the reference website and noting the section order, colour palette, typography, spacing, card layouts, and overall structure.

### 2. Component-first architecture

Each section was built as an isolated React component. Shared content is stored in `src/data/mockData.js` so the components stay focused on presentation logic.

### 3. API integration

* **GET /api/stats** — the Stats section fetches live data from this route.
* **POST /api/leads** — the LeadForm sends demo requests to this route.
* Leads are validated server-side before returning a success response.
* In local development, leads can be stored in `leads.json`.
* In production on Vercel, lead persistence is disabled because local file storage is read-only in serverless environments. The current implementation returns a success response for demo purposes.

### 4. Responsive design

The page was designed mobile-first using Tailwind responsive utilities. The layout adapts for desktop, tablet, and mobile screens.

### 5. UI polish

* Sticky navigation bar
* Smooth scrolling between sections
* Card hover effects
* Animated hero section
* Responsive testimonials carousel
* Accordion FAQ section

---

## AI usage

I used AI tools such as ChatGPT, Claude, and GitHub Copilot throughout the project.

| Area                | What AI helped with                                                                 | What I improved manually                                                                   |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Component structure | Generated initial JSX layouts                                                       | Adjusted spacing, sizing, and visual hierarchy                                             |
| Tailwind styling    | Suggested utility classes                                                           | Refined styling to better match the reference website                                      |
| API routes          | Helped scaffold GET and POST handlers                                               | Added validation, JSON storage, production fallback handling, and better error responses   |
| Mock data           | Suggested placeholder content                                                       | Rewrote text, testimonials, and feature descriptions                                       |
| Debugging           | Helped identify import issues, Tailwind errors, and Next.js client component issues | Fixed folder structure, alias configuration, deployment issues, and syntax errors manually |

AI was mainly used to speed up development, while all final decisions, debugging, and integration were handled manually.

---

## What I would improve with more time

1. Replace `leads.json` with MongoDB Atlas or Supabase for persistent storage so lead submissions work reliably in production deployments on Vercel.
2. Add email notifications after form submission.
3. Use actual brand logos and optimise them with `next/image`.
4. Add scroll-triggered animations using Intersection Observer.
5. Improve accessibility with better ARIA labels and keyboard navigation.
6. Add analytics to track button clicks and lead conversions.
7. Create Storybook stories for reusable components.

---

## Deployment (Vercel)

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub integration
# Push to GitHub → Import project on vercel.com → Deploy
```

The project requires no environment variables and deploys with zero configuration.

---

*Built by Sahil Gupta · B.Tech IT · Kalyani Government Engineering College*

```
```
