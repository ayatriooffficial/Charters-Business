"use client";

import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import ChartersInterviewAi from "@/components/home/Chartersinterview_ai";
type Option = {
  label: string;
  description?: string;
  score: number;
};

type Question = {
  id: string;
  number: string;
  title: string;
  options: Option[];
};

type Step = {
  label: string;
  sideTitle: string;
  sideText: string;
  title: string;
  questions: Question[];
};

const steps: Step[] = [
  {
    label: "01 · START",
    sideTitle: "Your AI Career Report",
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
            label: "Non-Tech / Career Switcher",
            description: "Looking to transition into tech from a non-technical background.",
            score: 8,
          },
          {
            label: "Software, Data & AI Professional",
            description: "Working in software, data, ML, AI, or DevOps — and looking to grow.",
            score: 16,
          },
        ],
      },
    ],
  },
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
        title: "Where are you currently investing most of your learning time?",
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
        title: "How much have you been practicing coding problems recently?",
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

export default function CareerPathPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [showReport, setShowReport] = useState(false);

  const current = steps[step];

  const allCurrentAnswered = current.questions.every((q) => answers[q.id]);

  const score = useMemo(() => {
    const selected = Object.values(answers);
    const raw = selected.reduce((sum, item) => sum + item.score, 0);
    const maxPossible = 204;
    return Math.max(12, Math.min(100, Math.round((raw / maxPossible) * 100)));
  }, [answers]);

  const selectOption = (questionId: string, option: Option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleNext = () => {
    if (!allCurrentAnswered) return;
    if (step === steps.length - 1) {
      setShowReport(true);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (showReport) {
      setShowReport(false);
      return;
    }
    if (step > 0) setStep((prev) => prev - 1);
  };

  if (showReport) {
    return <ReportPage score={score} answers={answers} />;
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-[#f8f5f2] text-[#1f2937] overflow-hidden">
      <div className="h-screen flex">
        {/* LEFT SIDE PANEL */}
        <aside className="w-[360px] shrink-0 bg-[#B30437] text-white flex flex-col justify-between px-8 py-8">
          <div>
            <img
              src="/charters-logo.png"
              alt="Charters Business"
              className="h-14 w-auto object-contain bg-white rounded-sm p-1"
            />

            <div className="mt-12">
              <p className="text-xs tracking-[0.32em] uppercase text-white/70">
                Step {step + 1} of {steps.length}
              </p>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full ${
                      index <= step ? "bg-white" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 border border-white/20 bg-white/10 rounded-xl p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-5">
                {current.sideTitle}
              </p>
              <p className="text-xl font-bold leading-relaxed">
                {current.sideText}
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full border border-white/30 py-4 rounded-xl font-bold hover:bg-white hover:text-[#B30437] transition"
            >
              Back to Home
            </button>

            <p className="mt-8 text-xs tracking-[0.3em] uppercase text-white/50">
              Alumni working at
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Razorpay", "Swiggy", "PhonePe", "Uber", "CRED", "Google", "Amazon", "Flipkart"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-white/10 border border-white/10 px-3 py-2 text-sm rounded"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col bg-[#fbfaf8]">
          <header className="h-20 shrink-0 border-b border-gray-200 bg-white flex items-center justify-between px-10">
            <div>
              <p className="text-[#B30437] text-xs font-bold tracking-[0.28em] uppercase">
                {current.label}
              </p>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="text-sm font-bold text-[#B30437] border border-[#B30437] rounded-full px-5 py-2 hover:bg-[#B30437] hover:text-white transition"
            >
              Exit
            </button>
          </header>

          {/* only questions/content scroll */}
          <section className="flex-1 overflow-y-auto px-10 lg:px-16 py-10 pb-32">
            <div className="max-w-5xl">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-10">
                {current.title}
              </h1>

              <div className="space-y-12">
                {current.questions.map((question) => (
                  <div key={question.id}>
                    <h2 className="text-lg font-bold mb-5">
                      <span className="text-gray-400 mr-2">{question.number}</span>
                      {question.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.options.map((option) => {
                        const selected = answers[question.id]?.label === option.label;

                        return (
                          <button
                            key={option.label}
                            onClick={() => selectOption(question.id, option)}
                            className={`min-h-[92px] text-left border px-7 py-5 rounded-none transition-all ${
                              selected
                                ? "bg-[#B30437] border-[#B30437] text-white shadow-md"
                                : "bg-white border-gray-300 hover:border-[#B30437] hover:shadow-sm"
                            }`}
                          >
                            <p className="text-lg font-bold">{option.label}</p>
                            {option.description && (
                              <p
                                className={`mt-2 text-sm leading-relaxed ${
                                  selected ? "text-white/80" : "text-gray-500"
                                }`}
                              >
                                {option.description}
                              </p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FIXED FOOTER ACTION */}
          <footer className="h-24 shrink-0 border-t border-gray-200 bg-white flex items-center justify-between px-10 lg:px-16">
            <p className="text-gray-500 font-medium">
              Step {step + 1} of {steps.length}
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="h-12 w-14 border border-gray-300 text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                ←
              </button>

              <button
                onClick={handleNext}
                disabled={!allCurrentAnswered}
                className="h-12 px-9 bg-[#B30437] text-white font-extrabold disabled:bg-[#e4a2b6] disabled:cursor-not-allowed hover:bg-[#8B0329]"
              >
                {step === steps.length - 1 ? "SEE MY REPORT →" : "CONTINUE →"}
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function ReportPage({
  score,
  answers,
}: {
  score: number;
  answers: Record<string, Option>;
}) {
    const [showLogin, setShowLogin] = useState(false);
  const level =
    score >= 75 ? "Advanced" : score >= 50 ? "Growing Fast" : "Beginner";

  return (
    <div className="fixed inset-0 z-[99999] bg-[#f8f5f2] text-[#1f2937] overflow-y-auto">
      {/* TOP HEADER */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
            <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center"
            >
            <img
                src="/charters-logo.png"
                alt="Charters Business"
                className="h-14 w-auto object-contain"
            />
            </button>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => {
                        setShowLogin(true);
                        document.body.style.overflow = "hidden";
                    }}
                    className="bg-[#B30437] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#8B0329]"
                >
                    Request Callback
                </button>

                <button
                    onClick={() => {
                        setShowLogin(true);
                        document.body.style.overflow = "hidden";
                    }}
                    className="border border-[#B30437] text-[#B30437] px-5 py-3 rounded-xl font-bold hover:bg-[#B30437] hover:text-white"
                >
                    Book Counselling Session
                </button>
            </div>
        </div>
     </header>

      {/* HERO REPORT */}
      <section className="bg-[#B30437] text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/50 tracking-[0.25em] text-sm font-bold uppercase">
              Career Profile Evaluation · 2026
            </p>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mt-6">
              Hey Harshit,
              <br />
              Build your AI-powered career path.
            </h1>

            <p className="text-white/70 text-lg mt-6 max-w-2xl">
              Based on your answers, your current readiness score is{" "}
              <span className="text-white font-bold">{score}/100</span>.
              Your next step is to improve projects, AI fluency, GitHub quality
              and interview fundamentals.
            </p>

            <button className="mt-10 bg-white text-[#1f2937] px-8 py-4 font-extrabold rounded-xl hover:bg-gray-100">
              Book Free 1:1 Career Call
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full border-[18px] border-[#B30437] flex flex-col items-center justify-center bg-white/5">
              <span className="text-7xl font-extrabold">{score}</span>
              <span className="text-white/60 mt-2">out of 100</span>
              <span className="mt-4 text-xs tracking-[0.22em] border border-white/20 px-4 py-2 rounded-full">
                {level}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10X ENGINEER SECTION */}
      <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
        <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
          02 · The 10× Engineer
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold mt-5 max-w-5xl">
          What an AI-powered full-stack engineer actually looks like.
        </h2>

        <p className="text-gray-600 text-lg mt-4">
          Not a unicorn. A real engineer who uses AI as leverage every single day.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <FeatureLine
              number="01"
              text="Uses AI coding agents end-to-end for components, API routes and database schemas."
            />
            <FeatureLine
              number="02"
              text="Reviews AI-generated code critically before shipping."
            />
            <FeatureLine
              number="03"
              text="Builds AI-integrated features like smart search, forms and content generation."
            />
            <FeatureLine
              number="04"
              text="Designs full-stack systems with scalable architecture and clean backend flows."
            />
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <p className="text-[#B30437] text-xs tracking-[0.25em] font-bold uppercase">
              AI in job postings
            </p>

            <h3 className="text-5xl font-extrabold mt-6">4× growth</h3>
            <p className="text-gray-600 mt-2">
              in job postings mentioning generative AI skills.
            </p>

            <div className="mt-8 space-y-4">
              <Bar label="2022" width="25%" />
              <Bar label="2023" width="50%" />
              <Bar label="2024" width="75%" />
              <Bar label="2025" width="100%" active />
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS AND GAPS */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
            03 · Where you stand
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold mt-5">
            Your strengths. Your gaps. No spin.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 mt-12 bg-[#f8f5f2] border border-gray-200 rounded-2xl p-8 lg:p-12">
            <div>
              <h3 className="text-green-700 tracking-[0.2em] text-sm font-bold uppercase border-b border-green-600 pb-4">
                Your Strengths
              </h3>

              <div className="mt-8 space-y-5">
                <CheckItem text="Good problem-solving mindset" />
                <CheckItem text={answers.role?.label || "Strong learning intent"} />
                <CheckItem text={answers.aiUsage?.label || "Interest in AI tools"} />
              </div>
            </div>

            <div>
              <h3 className="text-[#B30437] tracking-[0.2em] text-sm font-bold uppercase border-b border-[#B30437] pb-4">
                Areas to Improve
              </h3>

              <div className="mt-8 space-y-5">
                <CrossItem text="More production-level full-stack projects" />
                <CrossItem text="Better GitHub, README and portfolio presentation" />
                <CrossItem text="Interview preparation for product companies" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
        <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
          04 · Two Paths Forward
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold mt-5">
          Two paths to close your gaps.
        </h2>

        <p className="text-gray-600 text-lg mt-3">
          One is free. One is faster. Both work.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <CourseCard
            title="Full-Stack Architecture"
            desc="Master end-to-end application design from frontend to backend."
            tag="Free Path"
          />
          <CourseCard
            title="React Advanced Patterns"
            desc="Level up your React skills with production-grade patterns."
            tag="Free Path"
          />
          <CourseCard
            title="System Design Fundamentals"
            desc="Learn how to design scalable systems for senior roles."
            tag="Free Path"
          />
        </div>
      </section>

      {/* STRUCTURED PROGRAM */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
            Path 02 · Structured · Faster
          </p>

          <h2 className="text-4xl font-extrabold mt-5">
            Stop patching gaps alone. Get a system that closes them.
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-5xl">
            Mentorship, projects, mock interviews and a clear roadmap can help
            you close skill gaps faster.
          </p>

          <div className="grid lg:grid-cols-[0.9fr_1.3fr] mt-12 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-[#B30437] text-white p-10">
              <p className="tracking-[0.25em] text-xs text-white/60 uppercase">
                For builders
              </p>

              <h3 className="text-4xl font-extrabold mt-6">
                Modern Software & AI Engineering
              </h3>

              <p className="text-white/70 mt-6">
                A structured path for early-career engineers to build strong
                fundamentals and ship AI-powered projects.
              </p>
            </div>

            <div className="bg-[#f8f5f2] p-10 space-y-8">
              <ProgramPoint
                number="01"
                text="Strong engineering fundamentals — DSA, system design and backend architecture."
              />
              <ProgramPoint
                number="02"
                text="AI woven into projects, assignments and problem-solving practice."
              />
              <ProgramPoint
                number="03"
                text="Specialisation in Generative AI — build, evaluate and ship AI systems."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
        <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
          05 · Career Timeline
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold mt-5 max-w-5xl">
          Realistic timelines to achieve your target roles based on current skill gaps.
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <TimelineCard
            title="Senior Full-Stack Engineer"
            time="10–12 months"
            steps={[
              "Month 1–2: Deep technical preparation",
              "Month 3–4: Build portfolio projects",
              "Month 5+: Interview readiness",
            ]}
            highlight
          />
          <TimelineCard
            title="Full-Stack Engineer @ Product Unicorns"
            time="8–10 months"
            steps={[
              "Month 1–2: Strengthen core skills",
              "Month 3: Interview preparation",
              "Month 4+: Apply and negotiate",
            ]}
          />
          <TimelineCard
            title="Backend Engineer @ Big Tech"
            time="11–13 months"
            steps={[
              "Month 1–2: System fundamentals",
              "Month 3–4: Backend projects",
              "Month 5+: Deep interview prep",
            ]}
          />
        </div>
      </section>

      {/* PEOPLE LIKE YOU */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-sm font-bold uppercase">
            06 · People Like You
          </p>

          <h2 className="text-4xl font-extrabold mt-5">
            They were exactly where you are. Here&apos;s what changed.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <Testimonial
              name="Subham Soni"
              role="Backend Developer at Google"
              before="Credit Suisse"
              after="Google"
            />
            <Testimonial
              name="Rishi Prakash"
              role="Software Engineer 2 at Microsoft"
              before="Accenture"
              after="Microsoft"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#B30437] text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold">
              Ready to work on your career path?
            </h2>
            <p className="text-white/80 mt-2">
              Use this report as your starting roadmap.
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="bg-white text-[#B30437] px-8 py-4 rounded-xl font-extrabold hover:bg-gray-100"
          >
            Go Back Home
          </button>
        </div>
      </section>
      {showLogin &&
        createPortal(
            <div className="fixed inset-0 flex items-center justify-center z-[999999] bg-black/30">
                <div className="w-[80%] h-[90%] relative">
                    <button
                        onClick={() => {
                            setShowLogin(false);
                            document.body.style.overflow = "";
                        }}
                        className="absolute -top-3 -right-3 z-40 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:text-red-500"
                    >
                        ✕
                    </button>

                    <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white">
                        <ChartersInterviewAi />
                    </div>
                </div>
            </div>,
            document.body
        )}
    </div>
  );
}

function FeatureLine({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-6 border-b border-gray-200 pb-5">
      <span className="text-3xl text-gray-300 font-bold">{number}</span>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}

function Bar({ label, width, active }: { label: string; width: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-10 text-sm text-gray-500">{label}</span>
      <div className="flex-1 h-3 bg-gray-200">
        <div
          className={`h-full ${active ? "bg-[#B30437]" : "bg-gray-400"}`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return <p className="font-semibold text-lg">✅ {text}</p>;
}

function CrossItem({ text }: { text: string }) {
  return <p className="font-semibold text-lg">❌ {text}</p>;
}

function CourseCard({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <div className="bg-white border border-gray-200 p-7 rounded-2xl shadow-sm">
      <p className="text-[#B30437] tracking-[0.2em] text-xs font-bold uppercase">
        {tag}
      </p>
      <h3 className="text-2xl font-extrabold mt-4">{title}</h3>
      <p className="text-gray-600 mt-3">{desc}</p>
      <p className="mt-8 font-bold">Start Learning →</p>
    </div>
  );
}

function ProgramPoint({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-6">
      <span className="text-2xl font-bold text-[#B30437]">{number}</span>
      <p className="text-xl font-semibold">{text}</p>
    </div>
  );
}

function TimelineCard({
  title,
  time,
  steps,
  highlight,
}: {
  title: string;
  time: string;
  steps: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`bg-white border p-7 rounded-2xl shadow-sm ${
        highlight ? "border-[#B30437]" : "border-gray-200"
      }`}
    >
      <p className="text-[#B30437] tracking-[0.2em] text-xs font-bold uppercase">
        Target Role
      </p>
      <h3 className="text-2xl font-extrabold mt-4">{title}</h3>
      <p className="text-[#B30437] font-bold mt-5">{time}</p>

      <div className="mt-6 space-y-4">
        {steps.map((item) => (
          <p key={item} className="font-semibold border-t border-gray-200 pt-4">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function Testimonial({
  name,
  role,
  before,
  after,
}: {
  name: string;
  role: string;
  before: string;
  after: string;
}) {
  return (
    <div className="bg-[#f8f5f2] border border-gray-200 p-8 rounded-2xl">
      <h3 className="text-2xl font-extrabold">{name}</h3>
      <p className="text-gray-600 mt-1">{role}</p>

      <div className="flex gap-8 mt-6">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
            Before
          </p>
          <p className="font-bold">{before}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
            After
          </p>
          <p className="font-bold">{after}</p>
        </div>
      </div>

      <p className="italic text-gray-700 mt-6">
        “The right roadmap helped me focus on exactly what mattered.”
      </p>

      <p className="text-yellow-500 mt-5">★★★★★</p>
    </div>
  );
}