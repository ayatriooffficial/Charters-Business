import type { CareerPathStep, Question } from "./types";

/* ── SHARED ENTRY SLIDE ── */

export const entrySlide: CareerPathStep = {
  label: "01 · START",
  sideTitle: "Your Job-Ready Career Report",
  sideText:
    "Answer a few questions. Get a personalised report showing exactly where you stand — and what to do next.",
  title: "What's your current background?",
  questions: [
    {
      id: "background",
      number: "01",
      title: "Choose what best describes you right now.",
      options: [
        {
          label: "Fresher/Non-Tech",
          description:
            "Looking to transition into AI-poward Job-Ready program from a non-technical background.",
          score: 8,
        },
        {
          label: "Software, Data & AI Professional",
          description:
            "Working in software, data, ML, AI, or DevOps — and looking to grow.",
          score: 16,
        },
      ],
    },
  ],
};

/* ── SLIDES 1-4: FRESHER CHAIN ── */

export const fresherSteps: CareerPathStep[] = [
  {
    label: "STEP 1 OF 4 · YOUR PROFILE",
    sideTitle: "Why we ask",
    sideText:
      "Your role shapes every gap, recommendation, and roadmap in your report.",
    title: "Tell us about your current role",
    questions: [
      {
        id: "role",
        number: "02",
        title: "What's your current role in the tech world?",
        options: [
          { label: "Software Engineer – Product Company", score: 18 },
          { label: "Software Engineer – Service Company", score: 14 },
          { label: "DevOps / Cloud / Infrastructure Engineer", score: 15 },
          { label: "QA / Support / Other Technical Role", score: 10 },
        ],
      },
      {
        id: "experience",
        number: "03",
        title: "How many years have you been in the tech industry?",
        options: [
          { label: "0–2 years", score: 8 },
          { label: "2–3 years", score: 12 },
          { label: "3–5 years", score: 16 },
          { label: "5–8 years", score: 20 },
          { label: "8+ years", score: 22 },
        ],
      },
      {
        id: "learning",
        number: "04",
        title:
          "Where are you currently investing most of your learning time?",
        options: [
          { label: "Full-stack development", score: 14 },
          { label: "AI / ML tools", score: 18 },
          { label: "DSA and problem solving", score: 16 },
          { label: "System design", score: 17 },
          { label: "Cloud / DevOps", score: 13 },
        ],
      },
    ],
  },
  {
    label: "STEP 2 OF 4 · YOUR ASPIRATIONS",
    sideTitle: "Why we ask",
    sideText:
      "Your goal shapes the exact roadmap, target skills, and recommended next moves.",
    title: "Where do you want to go?",
    questions: [
      {
        id: "goal",
        number: "05",
        title: "What's your main career goal right now?",
        options: [
          { label: "Move to a better company", score: 15 },
          { label: "Level up / promotion", score: 16 },
          { label: "Higher compensation", score: 14 },
          { label: "Switch to different tech domain", score: 12 },
          { label: "Upskilling in current role", score: 13 },
        ],
      },
      {
        id: "dreamRole",
        number: "06",
        title: "What's your dream role?",
        options: [
          { label: "Senior Backend Engineer", score: 16 },
          { label: "Senior Full-Stack Engineer", score: 18 },
          { label: "Backend / API Engineer", score: 14 },
          { label: "Full-Stack Engineer", score: 15 },
          { label: "Data Science Engineer", score: 17 },
          { label: "DevOps Engineer", score: 13 },
        ],
      },
    ],
  },
  {
    label: "STEP 3 OF 4 · AI FLUENCY",
    sideTitle: "Why we ask",
    sideText:
      "AI fluency now separates average profiles from high-impact profiles.",
    title: "How are you working with AI?",
    questions: [
      {
        id: "aiUsage",
        number: "07",
        title: "How does AI show up in your day-to-day work?",
        options: [
          { label: "I build agents or AI-powered features", score: 25 },
          { label: "I use Cursor / Copilot daily", score: 20 },
          { label: "I use it for specific tasks", score: 14 },
          { label: "Only when stuck", score: 9 },
          { label: "Haven't integrated AI into workflow yet", score: 5 },
        ],
      },
      {
        id: "aiBuilt",
        number: "08",
        title: "What have you actually built or shipped using AI?",
        options: [
          { label: "A production feature is live", score: 24 },
          { label: "Internal tool or side project using LLM API", score: 19 },
          { label: "Experimented with prompts/scripts only", score: 11 },
          { label: "Haven't built anything with AI yet", score: 5 },
        ],
      },
    ],
  },
  {
    label: "STEP 4 OF 4 · FUNDAMENTALS",
    sideTitle: "Why we ask",
    sideText:
      "Fundamentals are still what separate candidates in the final round.",
    title: "Where do you stand today?",
    questions: [
      {
        id: "coding",
        number: "09",
        title:
          "How much have you been practicing coding problems recently?",
        options: [
          { label: "Very Active (100+ problems)", score: 22 },
          { label: "Moderately Active (50–100 problems)", score: 17 },
          { label: "Somewhat Active (10–50 problems)", score: 11 },
          { label: "Not Active (0–10 problems)", score: 4 },
        ],
      },
      {
        id: "systemDesign",
        number: "10",
        title: "How comfortable are you with system design?",
        options: [
          { label: "Led design discussions", score: 20 },
          { label: "Participated in discussions", score: 15 },
          { label: "Self-learning only", score: 10 },
          { label: "Not yet, will learn", score: 5 },
        ],
      },
      {
        id: "github",
        number: "11",
        title: "How active is your GitHub / GitLab profile?",
        options: [
          { label: "Strong deployed projects", score: 18 },
          { label: "Some projects uploaded", score: 12 },
          { label: "Basic profile only", score: 7 },
          { label: "Not active yet", score: 3 },
        ],
      },
    ],
  },
];

/* ── SLIDES 1-4: TECH-PRO CHAIN ── */
/* Identical to fresher today. Edit independently for diverging questions. */

export const techProSteps: CareerPathStep[] = [
  {
    label: "STEP 1 OF 4 · YOUR PROFILE",
    sideTitle: "Why we ask",
    sideText:
      "Your role shapes every gap, recommendation, and roadmap in your report.",
    title: "Tell us about your current role",
    questions: [
      {
        id: "role",
        number: "02",
        title: "What's your current role in the tech world?",
        options: [
          { label: "Software Engineer – Product Company", score: 18 },
          { label: "Software Engineer – Service Company", score: 14 },
          { label: "DevOps / Cloud / Infrastructure Engineer", score: 15 },
          { label: "QA / Support / Other Technical Role", score: 10 },
        ],
      },
      {
        id: "experience",
        number: "03",
        title: "How many years have you been in the tech industry?",
        options: [
          { label: "0–2 years", score: 8 },
          { label: "2–3 years", score: 12 },
          { label: "3–5 years", score: 16 },
          { label: "5–8 years", score: 20 },
          { label: "8+ years", score: 22 },
        ],
      },
      {
        id: "learning",
        number: "04",
        title:
          "Where are you currently investing most of your learning time?",
        options: [
          { label: "Full-stack development", score: 14 },
          { label: "AI / ML tools", score: 18 },
          { label: "DSA and problem solving", score: 16 },
          { label: "System design", score: 17 },
          { label: "Cloud / DevOps", score: 13 },
        ],
      },
    ],
  },
  {
    label: "STEP 2 OF 4 · YOUR ASPIRATIONS",
    sideTitle: "Why we ask",
    sideText:
      "Your goal shapes the exact roadmap, target skills, and recommended next moves.",
    title: "Where do you want to go?",
    questions: [
      {
        id: "goal",
        number: "05",
        title: "What's your main career goal right now?",
        options: [
          { label: "Move to a better company", score: 15 },
          { label: "Level up / promotion", score: 16 },
          { label: "Higher compensation", score: 14 },
          { label: "Switch to different tech domain", score: 12 },
          { label: "Upskilling in current role", score: 13 },
        ],
      },
      {
        id: "dreamRole",
        number: "06",
        title: "What's your dream role?",
        options: [
          { label: "Senior Backend Engineer", score: 16 },
          { label: "Senior Full-Stack Engineer", score: 18 },
          { label: "Backend / API Engineer", score: 14 },
          { label: "Full-Stack Engineer", score: 15 },
          { label: "Data Science Engineer", score: 17 },
          { label: "DevOps Engineer", score: 13 },
        ],
      },
    ],
  },
  {
    label: "STEP 3 OF 4 · AI FLUENCY",
    sideTitle: "Why we ask",
    sideText:
      "AI fluency now separates average profiles from high-impact profiles.",
    title: "How are you working with AI?",
    questions: [
      {
        id: "aiUsage",
        number: "07",
        title: "How does AI show up in your day-to-day work?",
        options: [
          { label: "I build agents or AI-powered features", score: 25 },
          { label: "I use Cursor / Copilot daily", score: 20 },
          { label: "I use it for specific tasks", score: 14 },
          { label: "Only when stuck", score: 9 },
          { label: "Haven't integrated AI into workflow yet", score: 5 },
        ],
      },
      {
        id: "aiBuilt",
        number: "08",
        title: "What have you actually built or shipped using AI?",
        options: [
          { label: "A production feature is live", score: 24 },
          { label: "Internal tool or side project using LLM API", score: 19 },
          { label: "Experimented with prompts/scripts only", score: 11 },
          { label: "Haven't built anything with AI yet", score: 5 },
        ],
      },
    ],
  },
  {
    label: "STEP 4 OF 4 · FUNDAMENTALS",
    sideTitle: "Why we ask",
    sideText:
      "Fundamentals are still what separate candidates in the final round.",
    title: "Where do you stand today?",
    questions: [
      {
        id: "coding",
        number: "09",
        title:
          "How much have you been practicing coding problems recently?",
        options: [
          { label: "Very Active (100+ problems)", score: 22 },
          { label: "Moderately Active (50–100 problems)", score: 17 },
          { label: "Somewhat Active (10–50 problems)", score: 11 },
          { label: "Not Active (0–10 problems)", score: 4 },
        ],
      },
      {
        id: "systemDesign",
        number: "10",
        title: "How comfortable are you with system design?",
        options: [
          { label: "Led design discussions", score: 20 },
          { label: "Participated in discussions", score: 15 },
          { label: "Self-learning only", score: 10 },
          { label: "Not yet, will learn", score: 5 },
        ],
      },
      {
        id: "github",
        number: "11",
        title: "How active is your GitHub / GitLab profile?",
        options: [
          { label: "Strong deployed projects", score: 18 },
          { label: "Some projects uploaded", score: 12 },
          { label: "Basic profile only", score: 7 },
          { label: "Not active yet", score: 3 },
        ],
      },
    ],
  },
];

/* ── DERIVED CONSTANTS ── */

export const sidebarChecklist = [
  "Profile Strength Analysis",
  "Skill Gap Assessment",
  "Career Readiness Timeline",
  "Peer Comparison",
];

export const companyLogos = [
  "Razorpay", "Swiggy", "PhonePe", "PWC", "KPMG", "HSBC", "Amazon", "Flipkart",
];

/** Sum of the highest-scoring option across all questions (including entry). */
function maxScoreForQuestions(questions: Question[]): number {
  return questions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
    0,
  );
}

const entryMax = maxScoreForQuestions(entrySlide.questions);
const chainMax = fresherSteps.reduce(
  (sum, s) => sum + maxScoreForQuestions(s.questions),
  0,
);

export const maxScore = entryMax + chainMax;
