"use client";

import { useEffect, useState } from "react";
import { getCountdownData } from "@/lib/utils/timer";

interface CourseTimerProps {
  slug: string;
}

export default function CourseTimer({ slug }: CourseTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    phase: 1,
    dateStr: ""
  });

  useEffect(() => {
    setMounted(true);

    const updateTimer = () => {
      setTimeLeft(getCountdownData(slug));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [slug]);

  if (!mounted) {
    return (
      <div className="w-full max-w-[340px] mt-5 rounded bg-black border border-[#222] p-3 animate-pulse">
        <div className="h-4 bg-gray-800 rounded w-2/3 mb-2"></div>
        <div className="h-6 bg-gray-800 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[350px] text-black">
      {/* --- HIDDEN ORIGINAL LAYOUT --- */}
      {/*
      <div className="text-xs sm:text-[14px] font-medium tracking-wide text-black">
        Final Deadline : <span className="text-black font-semibold">Phase {timeLeft.phase} : {timeLeft.dateStr}</span>
      </div>

      <div className="mt-1 text-[15px] sm:text-base font-bold flex items-center gap-1">
        <span className="text-[#3c4043] font-medium text-xs sm:text-sm mr-1">Ends In :</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.days}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1.5">D</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.hours}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1.5">H</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.minutes}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1.5">M</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.seconds}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px]">S</span>
      </div>
      */}

      {/* --- NEW SIMPLIFIED LAYOUT --- */}
      <div className="text-[15px] sm:text-base font-bold flex flex-wrap items-center gap-1">
        <span className="text-black font-medium text-xs sm:text-[14px] mr-1">Final Deadline :</span>
        
        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.days}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1">D</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.hours}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1">H</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.minutes}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px] mr-1">M</span>

        <span className="text-[#E61E24] font-mono tracking-wider text-base sm:text-[17px]">{timeLeft.seconds}</span>
        <span className="text-[#3c4043] font-semibold text-xs sm:text-[17px]">S</span>
      </div>
    </div>
  );
}
