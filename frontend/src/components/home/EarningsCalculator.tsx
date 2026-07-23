"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   FINAL FORMULA (site se verified):

   Multiplier = Base × Effort Factor  ← runtime pe multiply hota hai!
   (precomputed literal jaise 2.0125 NAHI — float rounding
    isi wajah se site se ₹1 alag aa raha tha)

   Base (goal-wise):
     Get a Digital Marketing Job = 1.75
     Start Freelancing           = 2.00
     Grow My Business            = 1.50

   Effort factors: Fresher = 0.85 | Intermediate = 1.00 | Senior = 1.15

   Projected  = round(Income × Multiplier)   ← EK hi baar round
   Gain       = Projected − Income           ← ab se sab integers
   Annual     = Gain × 12
   5 Year     = Annual × 5
   Payback    = ceil(Course Fee ÷ Gain)
   ───────────────────────────────────────────── */

const COURSE_FEE = 50000; // ₹50,000

const EFFORT_LABELS = ["Fresher", "Intermediate", "Senior"] as const;
type EffortLabel = (typeof EFFORT_LABELS)[number];

const EFFORT_FACTORS: Record<EffortLabel, number> = {
  Fresher: 0.85,
  Intermediate: 1.0,
  Senior: 1.15,
};

const EFFORT_DESCRIPTIONS: Record<EffortLabel, string> = {
  Fresher: "No prior experience",
  Intermediate: "Less than 1 year experience",
  Senior: "Experienced professional",
};

interface Goal {
  label: string;
  base: number; // sirf base multiplier — effort factor se runtime pe multiply hoga
}

const GOALS: Goal[] = [
  { label: "Get a Digital Marketing Job", base: 1.75 },
  { label: "Start Freelancing", base: 2.0 },
  { label: "Grow My Business", base: 1.5 },
];

// Indian format: ₹1,46,280
const inr = (n: number): string =>
  "₹" + Math.round(n).toLocaleString("en-IN");

interface ResultRowProps {
  label: string;
  value: string;
  orange?: boolean;
}

function ResultRow({ label, value, orange = false }: ResultRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-[18px]">
      <span className="text-sm font-normal text-[#5A6B85]">{label}</span>
      <span
        className={`whitespace-nowrap text-[19px] font-bold ${
          orange ? "text-[#F5921E]" : "text-[#0F2547]"
        }`}
        suppressHydrationWarning
      >
        {value}
      </span>
    </div>
  );
}

export default function EarningsCalculator() {
  const [income, setIncome] = useState<number>(5000);
  const [goalIdx, setGoalIdx] = useState<number>(0);
  const [effortIdx, setEffortIdx] = useState<number>(0);

  const goal = GOALS[goalIdx];
  const effortLabel = EFFORT_LABELS[effortIdx];

  // ── Core formula (site jaisa, exact match) ──
  const multiplier = goal.base * EFFORT_FACTORS[effortLabel];

  const projected = Math.round(income * multiplier); // ek hi baar round
  const monthlyGain = projected - income;            // integers se derive
  const annualJump = monthlyGain * 12;
  const fiveYearUpside = annualJump * 5;
  const paybackMonths = Math.ceil(COURSE_FEE / monthlyGain);

  return (
    <div className="flex items-center justify-center bg-[#F4F6FA] p-6 font-sans">
      {/* Slider ka custom thumb Tailwind se nahi banta, isliye chhota style block */}
      <style>{`
        .ec-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: rgba(215, 226, 240, 0.9);
          outline: none;
          cursor: pointer;
          display: block;
        }
        .ec-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #F5921E;
          border: none;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
          cursor: pointer;
        }
        .ec-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #F5921E;
          border: none;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
          cursor: pointer;
        }
        .ec-slider:focus-visible {
          box-shadow: 0 0 0 3px rgba(245, 146, 30, 0.4);
        }
      `}</style>

      <div className="flex w-full flex-wrap gap-14 border border-[#E4E9F2] bg-white px-11 py-12 shadow-[0_20px_50px_rgba(10,42,94,0.1)]">
        {/* ── Left column ─────────────────────── */}
        <div className="min-w-[300px] flex-[1_1_420px]">
          <h2 className="m-0 text-[22px] font-bold tracking-[0.2px] text-[#0F2547]">
            Tell us about you
          </h2>
          <p className="mb-[34px] mt-2.5 max-w-[440px] text-[14.5px] leading-relaxed text-[#5A6B85]">
            We&apos;ll estimate your earning potential after the program based
            on real graduate outcomes.
          </p>

          {/* Current monthly income */}
          <div className="mb-[30px]">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[13.5px] font-bold text-[#0F2547]">
                Current monthly income
              </span>
              <span className="text-[13.5px] font-bold text-[#0F2547]" suppressHydrationWarning>
                {inr(income)}
              </span>
            </div>
            <input
              type="range"
              className="ec-slider"
              min={5000}
              max={100000}
              step={1000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              aria-label="Current monthly income"
            />
          </div>

          {/* Goal */}
          <div className="mb-[30px]">
            <span className="mb-2.5 block text-[13.5px] font-bold text-[#0F2547]">
              Your Goal
            </span>
            <div className="relative w-full">
              <select
                value={goalIdx}
                onChange={(e) => setGoalIdx(Number(e.target.value))}
                aria-label="Your goal"
                className="w-full cursor-pointer appearance-none rounded-[10px] border border-[#E4E9F2] bg-white py-3.5 pl-4 pr-11 text-[15px] font-medium text-[#0F2547] outline-none"
              >
                {GOALS.map((g, i) => (
                  <option key={g.label} value={i}>
                    {g.label}
                  </option>
                ))}
              </select>
              <img src="/Charters-icon/Dropdown.svg" alt="" width={18} height={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Effort level */}
          <div>
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[13.5px] font-bold text-[#0F2547]">
                Effort level
              </span>
              <span className="text-[13.5px] font-bold text-[#0F2547]">
                {effortLabel}
              </span>
            </div>
            <input
              type="range"
              className="ec-slider"
              min={0}
              max={2}
              step={1}
              value={effortIdx}
              onChange={(e) => setEffortIdx(Number(e.target.value))}
              aria-label="Effort level"
            />
            <p className="mt-2 text-[12.5px] font-normal text-[#5A6B85]">
              {EFFORT_DESCRIPTIONS[effortLabel]}
            </p>
          </div>
        </div>

        {/* ── Right column: results ───────────── */}
        <div className="flex min-w-[300px] flex-[1_1_420px]">
          <div className="flex w-full flex-col justify-center border border-[#E4E9F2] bg-[#F7F9FC] px-[26px] py-3.5">
            <ResultRow
              label="Projected monthly income (12 mo after)"
              value={inr(projected)}
            />
            <div className="h-px bg-[#E4E9F2]" />
            <ResultRow
              label="Annual income jump"
              value={"+" + inr(annualJump)}
              orange
            />
            <div className="h-px bg-[#E4E9F2]" />
            <ResultRow
              label="Course fee payback in"
              value={`${paybackMonths} mo`}
            />
            <div className="h-px bg-[#E4E9F2]" />
            <ResultRow
              label="5-year cumulative upside"
              value={"+" + inr(fiveYearUpside)}
              orange
            />
          </div>
        </div>
      </div>
    </div>
  );
}