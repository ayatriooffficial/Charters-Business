"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  entrySlide,
  fresherSteps,
  techProSteps,
  sidebarChecklist,
  companyLogos,
  maxScore,
  careerPathReport,
} from "@/data/career-path-data";
import type { Option } from "@/data/career-path-data";
const GlobalLoginModal = dynamic(
  () => import("@/components/shared/GlobalLoginModal"),
  { ssr: false, loading: () => <div /> }
);

export default function CareerPathPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [showReport, setShowReport] = useState(false);

  const background = answers["background"]?.label;
  const chainSteps = useMemo(
    () =>
      background === "Fresher/Non-Tech" ? fresherSteps : techProSteps,
    [background],
  );

  const allSteps = useMemo(
    () => [entrySlide, ...chainSteps],
    [chainSteps],
  );

  const current = allSteps[step];
  const allCurrentAnswered = current.questions.every((q) => answers[q.id]);

  const score = useMemo(() => {
    const selected = Object.values(answers);
    const raw = selected.reduce((sum, item) => sum + item.score, 0);
    return Math.max(12, Math.min(100, Math.round((raw / maxScore) * 100)));
  }, [answers]);

  const selectOption = (questionId: string, option: Option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleNext = () => {
    if (!allCurrentAnswered) return;
    if (step === allSteps.length - 1) {
      setShowReport(true);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (showReport) { setShowReport(false); return; }
    if (step > 0) setStep((prev) => prev - 1);
  };

  if (showReport) {
    return <ReportPage score={score} answers={answers} />;
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-[#efefef] text-black overflow-hidden">
      <div className="h-screen flex">
        {/* LEFT SIDE PANEL */}
        <aside className="w-[350px] shrink-0 text-black flex flex-col justify-between px-4 py-8">
          <div>
            <img
              src="/Chaters_Union.avif"
              alt="Charters' Union"
              className="h-10 w-auto object-contain"
            />
            <div className="mt-12">
              <p className="text-xs tracking-[0.32em] uppercase text-black/70">
                Free · Takes 1 minutes
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {allSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 ${index <= step ? "bg-black" : "bg-black/25"}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 border border-white/20 bg-white/10 rounded-xl">
              <h2 className="text-2xl font-bold text-black mb-5">
                {current.sideTitle}
              </h2>
              <p className="text-[14px]  font-normal leading-relaxed">{current.sideText}</p>
            </div>
            <ul className="list-disc pt-4 list-inside space-y-1">
              {sidebarChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>

            <p className="mt-6 text-[14px] text-black/70">Our student working at</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {companyLogos.map((item) => (
                <span key={item} className="bg-[#cccccc] px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1 min-w-0 flex flex-col bg-white">
          <div className="h-[60px] shrink-0  bg-white flex items-center justify-between px-10">
            <div>
              <p className="text-[#B30437] text-xs font-bold uppercase">{current.label}</p>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="text-sm font-bold text-[#B30437] border border-[#B30437] rounded-full px-5 py-2 hover:bg-[#B30437] hover:text-white transition"
            >
              Exit
            </button>
          </div>
          {/* Breadcrumb bar */}
          <div className="shrink-0 bg-white px-10 py-2 flex items-center gap-1 text-xs text-[#80868b]">
            <Link href="/" className="hover:text-[#B30437] transition-colors font-medium">Home</Link>
            <span>{'>'}</span>
            <span className="text-[#5f6368] font-semibold">Career Path</span>
          </div>

          <section className="flex-1 overflow-y-auto px-10 lg:px-16 py-10 pb-32">
            <div className="max-w-5xl">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-10 text-[#1f2937]">
                {current.title}
              </h1>
              <div className="space-y-12">
                {current.questions.map((question) => (
                  <div key={question.id}>
                    <h2 className="text-lg font-bold mb-5">
                      <span className="text-pink-300 mr-2">{question.number}</span>
                      {question.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.options.map((option) => {
                        const selected = answers[question.id]?.label === option.label;
                        return (
                          <button
                            key={option.label}
                            onClick={() => selectOption(question.id, option)}
                            className={`min-h-[92px] text-left border px-7 py-5 rounded-xl transition-all ${selected
                              ? "bg-[#B30437] border-[#B30437] text-white shadow-md"
                              : "bg-white border-pink-100 hover:border-[#B30437] hover:shadow-sm"
                              }`}
                          >
                            <p className="text-lg font-bold">{option.label}</p>
                            {option.description && (
                              <p className={`mt-2 text-sm leading-relaxed ${selected ? "text-white/80" : "text-[#5f6368]"}`}>
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

          <div className="h-18 shrink-0 border-t border-pink-100 bg-white flex items-center justify-between px-10 lg:px-16">
            <p className="text-[#80868b] font-medium">Step {step + 1} of {allSteps.length}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="h-8 w-10  text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-50 "
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={!allCurrentAnswered}
                className="h-8 bg-[#B30437] text-white font-extrabold disabled:bg-pink-200 disabled:cursor-not-allowed hover:bg-[#8B0329] transition"
              >
                {step === allSteps.length - 1 ? "SEE MY REPORT →" : "CONTINUE →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  REPORT PAGE                                                */
/* ─────────────────────────────────────────────────────────── */

function ReportPage({ score, answers }: { score: number; answers: Record<string, Option> }) {
  const [showLogin, setShowLogin] = useState(false);
  const level = score >= 75 ? "Advanced" : score >= 50 ? "Growing Fast" : "Beginner";
  const r = careerPathReport;

  useEffect(() => {
    document.body.style.overflow = "";

    const fixPage = () => {

      // make header pure white
      document
        .querySelectorAll<HTMLElement>("header, [class*='Header'], [class*='navbar'], [class*='Navbar']")
        .forEach((el) => {
          el.style.background = "#ffffff";
          el.style.backgroundColor = "#ffffff";
        });

      // push chatbot above bottom bar
      document
        .querySelectorAll<HTMLElement>(
          "#fc_frame, #freshworks-container, #hubspot-messages-iframe-container, .intercom-lightweight-app, .crisp-client, iframe[src*='chat'], iframe[title*='chat'], iframe[title*='Chat']"
        )
        .forEach((el) => {
          el.style.setProperty("bottom", "95px", "important");
          el.style.setProperty("z-index", "999999", "important");
        });
    };

    fixPage();

    const interval = setInterval(fixPage, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /* SVG arc gauge helpers */
  const R = 70;
  const cx = 90;
  const cy = 90;
  const startAngle = -220;
  const endAngle = 40;
  const totalDeg = endAngle - startAngle;
  const filledDeg = (score / 100) * totalDeg;

  function polar(angle: number, r: number) {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(from: number, to: number, r: number) {
    const s = polar(from, r);
    const e = polar(to, r);
    const large = to - from > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  }

  const bgPath = arcPath(startAngle, endAngle, R);
  const fillPath = arcPath(startAngle, startAngle + filledDeg, R);

  return (
    <>
      <style>{`
        @keyframes drift {
          0%   { transform: translateX(0) translateY(0); }
          50%  { transform: translateX(40px) translateY(-20px); }
          100% { transform: translateX(0) translateY(0); }
        }
        @keyframes drift2 {
          0%   { transform: translateX(0) translateY(0); }
          50%  { transform: translateX(-30px) translateY(30px); }
          100% { transform: translateX(0) translateY(0); }
        }
        .line-anim { animation: drift 18s ease-in-out infinite; }
        .line-anim2 { animation: drift2 22s ease-in-out infinite; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.55s ease both; }

        /* header pure white */
        header,
        [class*="Header"],
        [class*="navbar"],
        [class*="Navbar"] {
          background: #ffffff !important;
          background-color: #ffffff !important;
        }

        /* chatbot above bottom footer */
        #hubspot-messages-iframe-container,
        #fc_frame,
        #freshworks-container,
        .intercom-lightweight-app,
        .crisp-client,
        iframe[src*="chat"],
        iframe[title*="chat"],
        iframe[title*="Chat"] {
          bottom: 95px !important;
          z-index: 999999 !important;
        }
      `}</style>

      <div className="min-h-screen bg-white text-[#1f2937] font-sans">
        <div className="shrink-0 border-b border-pink-100 bg-white px-10 py-2 flex items-center gap-1 text-xs text-[#80868b]">
          <Link href="/" className="hover:text-[#B30437] transition-colors font-medium">Home</Link>
          <span>{'>'}</span>
          <span className="text-[#5f6368] font-semibold">Your Career Path</span>
        </div>
        {/* ── HERO — lighter rose with animated diagonal lines ── */}
        <div className="px-10 py-2 flex items-center gap-1 text-xs text-[#80868b]">
          <Link href="/" className="hover:text-[#B30437] transition-colors font-medium">Home</Link>
          <span>{'>'}</span>
          <span className="text-[#5f6368] font-semibold">Career Path</span>
        </div>
        <section className="relative overflow-hidden bg-[#b5174e] text-white">
          {/* Animated line background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#ff4d6d" strokeWidth="0.5" strokeOpacity="0.22" />
                <line x1="0" y1="0" x2="60" y2="0" stroke="#ff4d6d" strokeWidth="0.5" strokeOpacity="0.22" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="line-anim" />
            {/* Additional diagonal accent lines */}
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${i * 14 - 5}%`} y1="0%"
                x2={`${i * 14 + 30}%`} y2="100%"
                stroke="#ff4d6d"
                strokeWidth="0.6"
                strokeOpacity={0.08 + i * 0.01}
                className="line-anim2"
              />
            ))}
          </svg>

          <div className="relative max-w-7xl mx-auto px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <p className="text-pink-400/70 tracking-[0.28em] text-xs font-bold uppercase fade-up-1">
                {r.heroTag}
              </p>
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mt-5 fade-up-2">
                {r.heroHeadingLine1}<br />
                <span className="text-pink-400">{r.heroHeadingLine2}</span>
              </h2>
              <p className="text-white/60 text-lg mt-6 max-w-lg fade-up-3">
                {r.heroSubtitle}
              </p>
              <button
                onClick={() => { setShowLogin(true); document.body.style.overflow = "hidden"; }}
                className="mt-8 bg-white text-[#B30437] px-8 py-4 font-extrabold rounded-xl hover:bg-pink-50 transition flex items-center gap-3 fade-up-4"
              >
                {r.heroCtaButton}
              </button>
              <p className="mt-3 text-white/30 text-xs tracking-[0.2em] uppercase fade-up-4">
                {r.heroCtaSub}
              </p>
              <div className="mt-8 flex items-center gap-6 text-white/40 text-xs tracking-[0.18em] uppercase border-t border-white/10 pt-6 fade-up-4">
                <span>{r.heroMetaRead}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>{r.heroMetaChapters}</span>
              </div>
            </div>

            {/* Right — Score Gauge */}
            <div className="flex flex-col items-center gap-4 fade-up-3">
              <svg width="180" height="180" viewBox="0 0 180 180">
                {/* Track */}
                <path d={bgPath} fill="none" stroke="#ffffff15" strokeWidth="10" strokeLinecap="round" />
                {/* Fill */}
                <path d={fillPath} fill="none" stroke="#ff4d6d" strokeWidth="10" strokeLinecap="round" />
                {/* Score text */}
                <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="32" fontWeight="800">
                  {score}
                </text>
                <text x={cx} y={cy + 16} textAnchor="middle" fill="#ffffff60" fontSize="11">
                  out of 100
                </text>
              </svg>
              <div className="border border-pink-400/40 text-pink-300 text-xs tracking-[0.22em] px-5 py-2 rounded-full uppercase font-bold">
                {r.gaugeLabel}
              </div>
              <p className="text-white/50 text-sm text-center max-w-xs">
                {r.gaugeScorePrefix}
                <span className="text-white font-bold">{score}/100</span>.
                {r.gaugeScoreSuffix.replace("{level}", level)}
              </p>
            </div>
          </div>
        </section>

        {/* ── 02 · THE 10× ENGINEER ── */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section02Label}</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-5 max-w-4xl leading-tight">
            {r.section02Heading}
          </h2>
          <p className="text-[#5f6368] text-lg mt-3">
            {r.section02Sub}
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            {/* Feature lines */}
            <div className="space-y-0">
              {r.tenXFeatures.map(({ n, bold, rest }) => (
                <div key={n} className="flex gap-6 border-b border-pink-100 py-5">
                  <span className="text-2xl text-pink-200 font-bold shrink-0 w-8">{n}</span>
                  <p className="text-base text-[#5f6368] leading-relaxed">
                    <strong>{bold}</strong>{rest}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats cards */}
            <div className="space-y-5">
              <div className="bg-[#fff7f9] border border-pink-100 rounded-2xl p-8">
                <p className="text-[#B30437] text-xs tracking-[0.25em] font-bold uppercase">AI in job postings</p>
                <h3 className="text-5xl font-extrabold mt-4 text-[#1f2937]">4× growth</h3>
                <p className="text-[#5f6368] mt-2">in job postings mentioning generative AI skills — since 2023</p>
                <div className="mt-6 space-y-3">
                  {r.growthChart.map(({ label, w, active }) => (
                    <div key={label} className="flex items-center gap-4">
                      <span className="w-10 text-sm text-[#80868b]">{label}</span>
                      <div className="flex-1 h-2.5 bg-pink-100 rounded-full">
                        <div className={`h-full rounded-full ${active ? "bg-[#B30437]" : "bg-pink-300"}`} style={{ width: w }} />
                      </div>
                      <span className="text-xs text-[#80868b]">{active ? "4×" : ""}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#fff7f9] border border-pink-100 rounded-2xl p-8">
                <p className="text-5xl font-extrabold text-[#B30437]">{r.hiringManagerStat}</p>
                <p className="text-gray-600 mt-2">{r.hiringManagerDesc}</p>
                <p className="text-xs text-[#80868b] mt-3">{r.hiringManagerSource}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 · WHERE YOU STAND ── */}
        <section className="bg-[#fff7f9] border-y border-pink-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
            <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section03Label}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-5">{r.section03Heading}</h2>
            <p className="text-[#5f6368] text-lg mt-3">{r.section03Sub}</p>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-white border border-green-200 rounded-2xl p-8">
                <h3 className="text-green-700 tracking-[0.2em] text-xs font-bold uppercase border-b border-green-100 pb-4 mb-6">
                  ✅ Your Strengths
                </h3>
                <div className="space-y-4">
                  {[
                    r.strengthsItems[0],
                    answers.role?.label || r.strengthsItems[1],
                    answers.aiUsage?.label || r.strengthsItems[2],
                    answers.dreamRole?.label ? `Goal clarity: ${answers.dreamRole.label}` : r.strengthsItems[3],
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <p className="font-semibold text-gray-800">{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-pink-100 rounded-2xl p-8">
                <h3 className="text-[#B30437] tracking-[0.2em] text-xs font-bold uppercase border-b border-pink-100 pb-4 mb-6">
                  ❌ Areas to Improve
                </h3>
                <div className="space-y-4">
                  {r.gapsItems.map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="text-[#B30437] mt-0.5 shrink-0">✗</span>
                      <p className="font-semibold text-gray-800">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 · TWO PATHS ── */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section04Label}</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-5">{r.section04Heading}</h2>
          <p className="text-[#5f6368] text-lg mt-3">{r.section04Sub}</p>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {r.freePaths.map(({ title, desc, tag }) => (
              <div key={title} className="bg-white border border-pink-100 p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-300 transition">
                <p className="text-[#B30437] tracking-[0.2em] text-xs font-bold uppercase">{tag}</p>
                <h3 className="text-xl font-extrabold mt-4">{title}</h3>
                <p className="text-[#5f6368] mt-3 text-sm">{desc}</p>
                <p className="mt-6 font-bold text-[#B30437]">Start Learning →</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05 · CAREER TIMELINE ── */}
        <section className="bg-[#fff7f9] border-y border-pink-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
            <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section05Label}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-5 max-w-5xl leading-tight">
              {r.section05Heading}
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 mt-12">
              {r.timelines.map(({ tag, title, time, highlight, steps: tlSteps }) => (
                <div
                  key={title}
                  className={`bg-white rounded-2xl p-7 ${highlight ? "border-2 border-[#B30437] shadow-md" : "border border-pink-100 shadow-sm"}`}
                >
                  <p className="text-[#B30437] tracking-[0.2em] text-xs font-bold uppercase">{tag}</p>
                  <h3 className="text-xl font-extrabold mt-4 leading-snug">{title}</h3>
                  <p className="text-[#B30437] font-bold mt-4">{time}</p>
                  <div className="mt-5 space-y-3">
                    {tlSteps.map((s) => (
                      <p key={s} className="font-medium text-sm border-t border-pink-50 pt-3 text-gray-600">{s}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 · STRUCTURED PROGRAM ── */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section06Label}</p>
          <h2 className="text-4xl font-extrabold mt-5 max-w-3xl leading-tight">
            {r.section06Heading}
          </h2>
          <p className="text-[#5f6368] text-lg mt-4 max-w-3xl">
            {r.section06Sub}
          </p>

          <div className="grid lg:grid-cols-[0.9fr_1.3fr] mt-12 border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#B30437] text-white p-10">
              <p className="tracking-[0.25em] text-xs text-white/50 uppercase">{r.structuredProgramLabel}</p>
              <h3 className="text-3xl font-extrabold mt-6 leading-snug">
                {r.structuredProgramTitle}
              </h3>
              <p className="text-white/70 mt-5 text-sm leading-relaxed">
                {r.structuredProgramDesc}
              </p>
              <div className="mt-8 flex gap-6 text-white/80 text-sm font-bold">
                <div>
                  <p className="text-3xl font-extrabold text-white">{r.structuredProgramRating}</p>
                  <p className="text-white/50 text-xs mt-1">{r.structuredProgramRatingSub}</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">{r.structuredProgramMonths}</p>
                  <p className="text-white/50 text-xs mt-1">{r.structuredProgramMonthsSub}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fff7f9] p-10 space-y-7">
              {r.structuredProgramFeatures.map(({ n, t }) => (
                <div key={n} className="flex gap-5">
                  <span className="text-xl font-bold text-[#B30437] shrink-0">{n}</span>
                  <p className="text-lg font-semibold text-gray-800">{t}</p>
                </div>
              ))}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => { setShowLogin(true); document.body.style.overflow = "hidden"; }}
                  className="bg-[#B30437] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8B0329] transition text-sm"
                >
                  {r.structuredProgramButton1}
                </button>
                <button className="border border-[#B30437] text-[#B30437] px-6 py-3 rounded-xl font-bold hover:bg-pink-50 transition text-sm">
                  {r.structuredProgramButton2}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 · AI TOOLS ── */}
        <section className="bg-[#fff7f9] border-y border-pink-100">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
            <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section07Label}</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-5">
              {r.section07Heading}
            </h2>
            <p className="text-[#5f6368] text-lg mt-3">{r.section07Sub}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12 border border-pink-100 rounded-2xl overflow-hidden">
              {r.aiTools.map(({ icon, name, tag, desc }, i) => (
                <div
                  key={name}
                  className={`bg-white p-6 flex gap-4 items-start ${i % 3 !== 2 ? "border-r border-pink-100" : ""
                    } ${i < 6 ? "border-b border-pink-100" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-800">{name}</p>
                    <p className="text-[#B30437] text-xs tracking-[0.18em] uppercase font-bold mt-0.5">{tag}</p>
                    <p className="text-[#5f6368] text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08 · PEOPLE LIKE YOU ── */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <p className="text-[#B30437] tracking-[0.25em] text-xs font-bold uppercase">{r.section08Label}</p>
          <h2 className="text-4xl font-extrabold mt-5">{r.section08Heading}</h2>
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {r.testimonials.map(({ name, role, before, after, quote, stars }) => (
              <div key={name} className="bg-[#fff7f9] border border-pink-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-extrabold">{name}</h3>
                <p className="text-[#5f6368] mt-1">{role}</p>
                <div className="flex gap-10 mt-6">
                  <div>
                    <p className="text-xs text-[#80868b] uppercase tracking-[0.2em]">Before</p>
                    <p className="font-bold mt-1">{before}</p>
                  </div>
                  <div className="text-pink-300 text-2xl self-center">→</div>
                  <div>
                    <p className="text-xs text-[#80868b] uppercase tracking-[0.2em]">After</p>
                    <p className="font-bold mt-1 text-[#B30437]">{after}</p>
                  </div>
                </div>
                <p className="italic text-gray-600 mt-6 text-sm">
                  &quot;{quote}&quot;
                </p>
                <p className="text-yellow-500 mt-4">{stars}</p>
              </div>
            ))}
          </div>
        </section>



        {/* ── STICKY BOTTOM BAR ── */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white text-[#1f2937] py-3 px-6 flex items-center justify-center shadow-[0_-2px_12px_rgba(0,0,0,0.08)] border-t border-gray-200">
          <p className="text-sm font-semibold">
            Talk to us at{" "}
            <span className="text-[#B30437] font-bold">{r.bottomBarPhone}</span>
            {" "}or{" "}
            <button
              onClick={() => { setShowLogin(true); document.body.style.overflow = "hidden"; }}
              className="text-[#B30437] font-bold underline underline-offset-2 hover:text-[#8B0329] transition"
            >
              Request Callback ↗
            </button>
          </p>
        </div>

        {/* padding for sticky bar */}
        <div className="h-16" />
      </div>

      {/* Login Modal */}
      <GlobalLoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </>
  );
}

