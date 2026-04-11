"use client";
import Image from "next/image";
import HighlightText from "../shared/HighlightObserver";

export default function TalkToAdvisor() {
  const benefits = [
    "Personalized Career Roadmap",
    "Free Career Counselling",
    "Free Access to Scaler Events",
  ];

  return (
    <section
      className="mx-[0%] relative z-[5] bg-white pt-16"
      aria-labelledby="enrich-learning-heading"
      role="region"
    >
      <div className="max-w-7xl w-full px-2 md:mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3" role="text">
            PERSONALIZED LEARNING
          </p>
          <header className="mb-8">
            <h2 id="enrich-learning-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6">
              Enrich and{" "}
              <HighlightText className="font-bold italic">
                personalize learning
              </HighlightText>
            </h2>
            <p className="text-xl lg:text-xl text-black mx-auto leading-relaxed">
              Drive student agency with tools that meet students where they are – and build skills for their future.
            </p>
          </header>
        </div>
      </div>
      <section className="flex w-full min-h-[200px] overflow-hidden">
        {/* Left - Content */}
        <div className="w-1/2 bg-[#f5f0eb] flex flex-col justify-center px-10 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Talk to our advisor</h2>
          <p className="text-sm text-gray-600 mt-1 mb-4">AND GET</p>

          <ul className="space-y-3 mb-6">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Image
                  src="/dot-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="text-gray-800 text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 bg-[#B30437] text-white text-sm font-semibold px-5 py-3 w-fit hover:bg-[#8f0229] transition-colors">
            REQUEST A CALL
            <span className="text-base">↗</span>
          </button>
        </div>

        {/* Right - Image */}
        <div className="w-1/2 relative">
          <Image
            src="/home/Capdsdsfture.JPG"
            alt="Students at career counselling session"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </section>
  );
}