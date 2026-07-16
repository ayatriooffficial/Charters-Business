import { memo } from "react";

function AssessmentBanner() {
  return (
    <section
      role="region"
      aria-label="Assessment banner"
      className="w-full border-t border-[#2A2A2A]"
      style={{
        background: `
          radial-gradient(120% 260% at 100% 0%, rgba(255,255,255,0.35) 0%, rgba(0,0,0,0) 55%),
          radial-gradient(120% 260% at 0% 100%, rgba(255,255,255,0.35) 0%, rgba(0,0,0,0) 55%),
          #000000
        `,
      }}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-20 sm:py-7">
        {/* Left */}
        <div className="flex items-center gap-3.5">
          <p className="text-[17px] font-bold leading-snug text-white sm:text-[19px]">
            Based on the 2026 Scaler career transition assessment
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <a
            href="#"
            style={{ backgroundColor: "#0284C7" }}
            className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-bold uppercase tracking-[0.12em] text-white whitespace-nowrap"
          >
            Placement Report
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(AssessmentBanner);