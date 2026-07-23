import type { ReportData } from "./types";

export const careerPathReport: ReportData = {
  /* ── HERO ── */
  heroTag: "Career Profile Evaluation · Apr 2026",
  heroHeadingLine1: "Become an",
  heroHeadingLine2: "AI-Powered\n10× Engineer.",
  heroSubtitle:
    "Your profile. The AI shifts you can't ignore. The fastest path to hired.",
  heroCtaButton: "📞 BOOK FREE 1:1 CAREER CALL",
  heroCtaSub: "30 Min · Free · Senior Counsellor",
  heroMetaRead: "4 Min Read",
  heroMetaChapters: "6 Chapters",
  gaugeLabel: "Career & AI Readiness",
  gaugeScorePrefix: "Your current readiness score is ",
  gaugeScoreSuffix: ". Level: {level}",

  /* ── 02 · THE 10× ENGINEER ── */
  section02Label: "02 · The 10× Engineer",
  section02Heading:
    "What an AI-powered full-stack engineer actually looks like.",
  section02Sub:
    "Not a unicorn. A real engineer who uses AI as leverage every single day.",
  tenXFeatures: [
    {
      n: "01",
      bold: "Uses AI coding agents end-to-end",
      rest: " — catches hallucinated props, broken API contracts, and XSS vectors before they ship.",
    },
    {
      n: "02",
      bold: "Reviews AI-generated code critically",
      rest: " — catches issues before shipping.",
    },
    {
      n: "03",
      bold: "Ships AI-integrated features",
      rest: ": smart search, AI-powered forms, real-time content generation across the stack.",
    },
    {
      n: "04",
      bold: "Designs full-stack systems with AI built in",
      rest: " — streaming responses, edge inference, and client-side ML from the start.",
    },
    {
      n: "05",
      bold: 'Answers "how would AI change your architecture?"',
      rest: " in interviews without hesitation.",
    },
  ],
  growthChart: [
    { label: "2022", w: "25%", active: false },
    { label: "2023", w: "50%", active: false },
    { label: "2024", w: "75%", active: false },
    { label: "2025", w: "100%", active: true },
  ],
  hiringManagerStat: "66%",
  hiringManagerDesc:
    "of hiring managers won't hire engineers without demonstrated AI skills",
  hiringManagerSource: "LinkedIn Work Trend Index, 2024",

  /* ── 03 · WHERE YOU STAND ── */
  section03Label: "03 · Where You Stand",
  section03Heading: "Your strengths. Your gaps. No spin.",
  section03Sub:
    "Based on what you've shipped, your DSA depth, and how you use AI today.",
  strengthsItems: [
    "Good problem-solving mindset",
    "Strong learning intent",        // placeholder, overridden by answer if available
    "Interest in AI tools",           // placeholder
    "Clear career direction",          // placeholder
  ],
  gapsItems: [
    "More production-level full-stack projects",
    "Better GitHub, README and portfolio presentation",
    "Interview preparation for product companies",
    "Deeper AI fluency and hands-on AI project work",
  ],

  /* ── 04 · TWO PATHS ── */
  section04Label: "04 · Two Paths Forward",
  section04Heading: "Two paths to close your gaps.",
  section04Sub: "One is free. One is faster. Both work.",
  freePaths: [
    {
      title: "Full-Stack Architecture",
      desc: "Master end-to-end application design from frontend to backend.",
      tag: "Free Path",
    },
    {
      title: "React Advanced Patterns",
      desc: "Level up your React skills with production-grade patterns.",
      tag: "Free Path",
    },
    {
      title: "System Design Fundamentals",
      desc: "Learn how to design scalable systems for senior roles.",
      tag: "Free Path",
    },
  ],

  /* ── 05 · CAREER TIMELINE ── */
  section05Label: "05 · Career Timeline",
  section05Heading:
    "Realistic timelines to achieve your target roles based on current skill gaps",
  timelines: [
    {
      tag: "Your Target Role",
      title: "Senior Full-Stack Engineer @ Product Co.",
      time: "10–12 months",
      highlight: true,
      steps: [
        "Month 1–2: Deep technical preparation",
        "Month 3–4: Build portfolio projects",
        "Month 5+: Interview readiness",
      ],
    },
    {
      tag: "Easier Path",
      title: "Senior Full-Stack Engineer @ Service Co.",
      time: "8–10 months",
      highlight: false,
      steps: [
        "Month 1–2: Strengthen core skills",
        "Month 3: Interview preparation",
        "Month 4+: Apply and negotiate",
      ],
    },
    {
      tag: "Alternative Path",
      title: "Senior Backend Engineer @ FAANG",
      time: "11–13 months",
      highlight: false,
      steps: [
        "Month 1–2: System fundamentals",
        "Month 3–4: Backend projects",
        "Month 5+: Deep interview prep",
      ],
    },
  ],

  /* ── 06 · STRUCTURED PROGRAM ── */
  section06Label: "Path 02 · Structured · Faster",
  section06Heading:
    "Stop patching gaps alone. Get a system that closes them.",
  section06Sub:
    "Mentorship, projects, mock interviews and a clear roadmap can help you close skill gaps faster.",
  structuredProgramLabel: "For builders",
  structuredProgramTitle: "Modern Software & AI Engineering",
  structuredProgramDesc:
    "A structured path for early-career engineers to build strong fundamentals and ship AI-powered projects.",
  structuredProgramRating: "4.8+",
  structuredProgramRatingSub: "(25K+ Ratings)",
  structuredProgramMonths: "12",
  structuredProgramMonthsSub: "Months",
  structuredProgramFeatures: [
    {
      n: "01",
      t: "Strong engineering fundamentals — DSA, system design and backend architecture.",
    },
    {
      n: "02",
      t: "AI woven into projects, assignments and problem-solving practice.",
    },
    {
      n: "03",
      t: "Specialisation in Generative AI — build, evaluate and ship AI systems.",
    },
  ],
  structuredProgramButton1: "GO TO PROGRAM PAGE →",
  structuredProgramButton2: "DOWNLOAD CURRICULUM",

  /* ── 07 · AI TOOLS ── */
  section07Label: "07 · Tools That 10× You",
  section07Heading:
    "9 tools that separate the 10× engineer from the rest.",
  section07Sub: "All have free tiers. Start using them this week.",
  aiTools: [
    {
      icon: "⚙️",
      name: "GitHub Copilot",
      tag: "Code 2× Faster",
      desc: "Inline completions. ~45 min saved per feature.",
    },
    {
      icon: "⚡",
      name: "Cursor",
      tag: "AI-Native IDE",
      desc: "Refactor entire files with a single instruction.",
    },
    {
      icon: "🤖",
      name: "ChatGPT + Excalidraw",
      tag: "System Design",
      desc: "Brainstorm tradeoffs, sketch architectures.",
    },
    {
      icon: "🐕",
      name: "Datadog Watchdog",
      tag: "Debug Faster",
      desc: "Auto-links slow endpoints to recent deploys.",
    },
    {
      icon: "📋",
      name: "Notion AI",
      tag: "Round Senior",
      desc: "Bullet notes → polished RFC in 5 minutes.",
    },
    {
      icon: "🐰",
      name: "CodeRabbit",
      tag: "PR Reviews",
      desc: "AI reviews PRs before humans see them.",
    },
    {
      icon: "🔍",
      name: "Perplexity",
      tag: "Research",
      desc: "Cited answers that replace 20 SO tabs.",
    },
    {
      icon: "▲",
      name: "v0 / Bolt",
      tag: "UI Prototypes",
      desc: "Sketch → working UI in seconds.",
    },
    {
      icon: "🚀",
      name: "Warp",
      tag: "AI Terminal",
      desc: "Autocompletes shell commands, explains errors.",
    },
  ],

  /* ── 08 · PEOPLE LIKE YOU ── */
  section08Label: "08 · People Like You",
  section08Heading:
    "They were exactly where you are. Here's what changed.",
  testimonials: [
    {
      name: "Subham Soni",
      role: "Backend Developer at Google",
      before: "Credit Suisse",
      after: "Google",
      quote:
        "The right roadmap helped me focus on exactly what mattered.",
      stars: "★★★★★",
    },
    {
      name: "Rishi Prakash",
      role: "Software Engineer 2 at Microsoft",
      before: "Accenture",
      after: "Microsoft",
      quote:
        "The right roadmap helped me focus on exactly what mattered.",
      stars: "★★★★★",
    },
  ],

  /* ── BOTTOM BAR ── */
  bottomBarPhone: "08045579576",
};
