# Portfolio Modification Prompt — Claude Code

Paste this entire prompt into Claude Code or your IDE AI assistant.

---

## PROMPT

You are modifying an existing portfolio website. Transform it into a professional, simplistic AI Automation Engineer portfolio. Read every existing file first before changing anything. Preserve the tech stack and build system already in place — only change content, layout, and styling.

---

### IDENTITY

Name: Esubalew
Title: AI Automation Engineer
Tagline: Turning complex business problems into intelligent automated systems
Location: Ethiopia · Open to remote
Stack: n8n · Claude · HubSpot · Slack · Apollo · Groq · Google APIs
Focus: Workflow automation, AI agent pipelines, business process automation, CRM integration

---

### BRAND & VISUAL STYLE

Strictly follow this design system across the entire site:

**Colors:**
- Background primary: #060C1A (near black navy)
- Background secondary: #0C1428 (cards, sections)
- Background tertiary: #101C36 (hover states)
- Accent primary: #E94E1B (orange — main CTA, highlights)
- Accent secondary: #534AB7 (purple — AI/Claude references)
- Accent teal: #1D9E75 (n8n green)
- Text primary: #FFFFFF
- Text secondary: #8892A4
- Text muted: #4A5A72
- Border: #141E35

**Typography:**
- Font: Inter or system-ui — clean, no serif
- Headings: font-weight 600, tight letter-spacing
- Body: font-weight 400, line-height 1.7
- No decorative fonts, no italic headings

**Design rules:**
- Dark theme only
- Flat design — no gradients, no shadows except subtle card borders
- Minimal animations — only subtle fade-in on scroll, no flashy effects
- Cards: background #0C1428, border 1px solid #141E35, border-radius 12px
- Buttons: primary = #E94E1B bg, white text; secondary = transparent, #E94E1B border and text
- Spacing: generous whitespace, sections separated clearly
- No stock photos, no generic icons that don't fit automation context
- Use simple geometric shapes or code-style decorative elements if needed

---

### SITE STRUCTURE

Build or modify these exact sections in this order:

**1. NAVIGATION**
- Logo: "Esubalew" in white, bold — left aligned
- Links: About · Projects · Skills · Videos · Contact
- Active link underlined in #E94E1B
- Sticky on scroll, background #060C1A with subtle bottom border
- Mobile: hamburger menu

**2. HERO SECTION**
- Full viewport height
- Left side: 
  - Small label above name: "AI Automation Engineer" in #E94E1B, letter-spacing wide, font-size small
  - Large heading: "Esubalew" — 64px, white, font-weight 700
  - Subheading: "Turning complex business problems into intelligent automated systems" — 20px, #8892A4
  - Two buttons: "See my work" (primary orange) and "Watch demos" (secondary outline)
  - Stack row: small badges showing n8n · Claude · HubSpot · Slack · Apollo · Groq
- Right side: Abstract SVG animation or static illustration of connected workflow nodes — use the color palette above
- No hero image or photo

**3. ABOUT SECTION**
- Two columns
- Left: Short bio text:
  "I build production-grade automation systems that solve real business problems. My work sits at the intersection of AI, workflow automation, and systems integration — turning manual, repetitive processes into intelligent pipelines that run 24/7."
  "Based in Ethiopia, working with clients and companies globally. I specialize in n8n-based automation, AI scoring systems, CRM integration, and multi-channel notification workflows."
- Right: Stats cards (2x2 grid):
  - "24 nodes" / "Per production pipeline"
  - "90 seconds" / "End-to-end automation"
  - "4 APIs" / "Per integration layer"
  - "2 AI calls" / "Per intelligent decision"

**4. PROJECTS SECTION**
- Section title: "Projects"
- Subtitle: "Production systems built for real companies"
- Grid of project cards (2 columns on desktop, 1 on mobile)
- Each project card contains:
  - Project title (bold, white)
  - Company/client tag (small pill badge, #E94E1B outline)
  - Short description (2-3 lines, #8892A4)
  - Tech stack badges (small, matching brand colors per tool)
  - Key metric highlight (e.g. "90s end-to-end" or "8.9/10 AI scoring")
  - Two buttons: "View demo" (links to YouTube) and "Details" (expands or links)
  - Top border accent in #E94E1B (3px left border or top border)

- Include this project card as the first and featured one:

  **Project: Lead Intelligence Pipeline**
  Client: Candid Platform (candidplatform.com)
  Description: "Production AI pipeline that transforms strategy session form submissions into fully researched, scored leads — complete with pre-call briefs, HubSpot CRM records, tiered Slack alerts, and human-approved confirmation emails. Zero manual research. Zero copy-paste."
  Stack: n8n · Apollo · Google News · Groq (LLaMA) · HubSpot · Slack · Gmail
  Metrics: 90s end-to-end · 8.9/10 AI scoring · 24 nodes · 4 integrations
  Demo: [YouTube link placeholder — variable: YOUTUBE_CANDID_DEMO]
  Featured: true (make this card larger or visually prominent)

- Add 2 placeholder project cards with "Coming soon" state for future projects

**5. SKILLS SECTION**
- Section title: "Stack"
- Subtitle: "Tools I build production systems with"
- Four categories in a grid:

  **Automation & Workflow**
  n8n (primary) · Zapier · Make · Webhooks · REST APIs

  **AI & Language Models**
  Claude (Anthropic) · GPT-4 · Groq / LLaMA · Gemini · Prompt engineering

  **CRM & Business Tools**
  HubSpot · Apollo · Google Workspace · Notion · Airtable

  **Notifications & Communication**
  Slack (bots + modals) · Gmail API · SendGrid · Twilio

- Each skill shown as a clean pill/badge, not a progress bar (no fake skill percentages)
- Category headings in #E94E1B

**6. YOUTUBE VIDEOS SECTION**
- Section title: "Demo videos"
- Subtitle: "Watch the systems running live"
- This is a key section — build a reusable VideoCard component
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each VideoCard contains:
  - YouTube thumbnail (load from YouTube thumbnail API: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)
  - Play button overlay (centered, #E94E1B circle with white triangle)
  - Video title (bold, white, 2 lines max then truncate)
  - Short description (1 line, muted color)
  - Duration badge (top right corner of thumbnail, dark bg)
  - Click: opens YouTube video in new tab
  - Hover: subtle scale(1.02) transform, orange border glow

- Make the video data easy to update — store all video data in a single config array/object at the top of the component or in a separate data file:
  ```
  const videos = [
    {
      id: "YOUTUBE_VIDEO_ID_1",
      title: "Lead Intelligence Pipeline — Candid Platform",
      description: "90-second AI lead scoring system built in n8n",
      duration: "4:32"
    },
    // add more here
  ]
  ```
- For now populate with 3 placeholder entries using id: "dQw4w9WgXcQ" as placeholder IDs
- Add a "View all on YouTube" button at the bottom linking to the channel

**7. CONTACT SECTION**
- Section title: "Let's build something"
- Subtitle: "Open to freelance projects, remote roles, and collaboration"
- Two columns:
  - Left: Short pitch — "I take a business-first approach to automation. Before writing a single node, I understand the process, the people, and the outcome. The result is systems that actually get used."
  - Right: Contact card with:
    - Email: [placeholder — variable: CONTACT_EMAIL]
    - LinkedIn: [placeholder — variable: LINKEDIN_URL]
    - GitHub: [placeholder — variable: GITHUB_URL]
    - n8n Community: https://community.n8n.io/u/esubalew/activity
    - Location: Ethiopia · Remote-first
- Large CTA button: "Send me a message" — mailto link
- Availability badge: "Available for remote work" — small green pill

**8. FOOTER**
- Simple one-line footer
- Left: "Esubalew · AI Automation Engineer"
- Right: "Built with intention · Ethiopia 2026"
- Top border: 1px solid #141E35
- No social icon clutter

---

### REUSABLE COMPONENTS TO BUILD

1. **TechBadge** — pill with tool-specific color (n8n=orange, Claude=purple, HubSpot=coral, Slack=teal, Groq=blue, Apollo=green, Gmail=red)
2. **MetricCard** — dark card with large number + small label
3. **ProjectCard** — as described in Projects section
4. **VideoCard** — as described in Videos section
5. **SectionHeader** — consistent section title + subtitle component

---

### THINGS TO REMOVE FROM EXISTING PORTFOLIO

- Any content about the previous purpose/role
- Any stock imagery or placeholder profile photos
- Any skills/tools that don't relate to automation engineering
- Any testimonials or experience sections that don't apply
- Generic "about me" text — replace with the automation-focused copy above

---

### THINGS TO PRESERVE

- The existing build system, package.json, and framework
- Any existing routing structure
- Any existing SEO/meta setup — just update the content
- Any existing responsive breakpoints — maintain or improve them
- Existing deployment configuration

---

### VARIABLES TO FILL IN LATER

These are placeholders — leave them as clearly named constants or variables so they can be easily updated:

```
YOUTUBE_CANDID_DEMO = ""        // YouTube URL for Candid demo video
YOUTUBE_CHANNEL_URL = ""        // YouTube channel URL
CONTACT_EMAIL = ""              // Professional email address
LINKEDIN_URL = ""               // LinkedIn profile URL
GITHUB_URL = ""                 // GitHub profile URL
YOUTUBE_VIDEO_IDS = []          // Array of video IDs for the videos section
```

---

### FINAL CHECKS BEFORE DONE

- [ ] Mobile responsive at 375px, 768px, and 1280px
- [ ] All placeholder variables clearly named and easy to find
- [ ] No console errors
- [ ] VideoCard thumbnails load correctly from YouTube CDN
- [ ] All buttons have hover states
- [ ] Dark background maintained across all sections — no white sections
- [ ] Consistent spacing (use 8px grid system)
- [ ] Navigation links scroll smoothly to sections

---

Start by reading all existing files. Then make changes section by section. Tell me which files you are modifying before you change them.
