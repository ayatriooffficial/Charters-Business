'use client';
import { useRef, useEffect, useState } from 'react';
import React from "react";
import { TrackRecordData, ProgrammeAssetConfig } from "@/data/programmes";
import HighlightText from "../shared/HighlightObserver";

// when 20% of element scrolls into view
function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return inView;
}

function useCountUp(end: number, duration: number, active: boolean, delay: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let rafId: number;
    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [active]);
  return count;
}

interface BarItem { value: number; percentage: string; label: string; }

interface VerticalBarProps {
  item: BarItem;
  index: number;
  maxValue: number;
  inView: boolean;
  duration?: number;
  textSize?: 'small' | 'base';
}

function VerticalBar({ item, index, maxValue, inView, duration = 600, textSize = 'base' }: VerticalBarProps) {
  const numericEnd = parseInt(item.percentage.replace(/\D/g, ''), 10) || 0;
  const suffix = item.percentage.replace(/[0-9]/g, '');
  const delay = index * 100;
  const count = useCountUp(numericEnd, duration, inView, delay);

  const textClass = textSize === 'small'
    ? 'text-[10px] sm:text-xs md:text-base'
    : 'text-base';

  return (
    <div className="flex flex-col items-center justify-end flex-1 h-full min-w-0">
      <div className={`${textClass} font-semibold text-black mb-1 sm:mb-2`}>
        {count}{suffix}
      </div>
      <div
        className="w-full bg-[#56BAB3]"
        style={{
          height: `${(item.value / maxValue) * 100}%`,
          transformOrigin: 'bottom',
          animationName: inView ? 'growUp' : 'none',
          animationDuration: '1s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both',
          animationDelay: `${delay}ms`,
        }}
      />
      <div className="text-[10px] text-gray-800 mt-3 text-center font-medium leading-tight w-full overflow-hidden truncate px-0.5">
        {item.label}
      </div>
    </div>
  );
}



interface TrackRecordProps {
  data: TrackRecordData;
  assets?: ProgrammeAssetConfig;
}

interface ChartCardProps {
  title: string;
  description: string;
  data: BarItem[];
  duration: number;
  textSize: 'small' | 'base';
  inView: boolean;
}

function ChartCard({ title, description, data, duration, textSize, inView }: ChartCardProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full min-w-full shrink-0 lg:min-w-0 lg:shrink lg:border-t-1 lg:flex-1 lg:border-r last:lg:border-t-1 last:lg:border-r-0 lg:border-gray-200 snap-start">
      <div className="h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 sm:gap-2 md:gap-4">
        {data.map((item, index) => (
          <VerticalBar
            key={index}
            item={item}
            index={index}
            maxValue={maxValue}
            inView={inView}
            duration={duration}
            textSize={textSize}
          />
        ))}
      </div>
      <h3 className="text-[14px] text-center text-black mt-2 sm:mt-4">
        {title}
      </h3>
      <p className="sr-only">{description}</p>
    </div>
  );
}

const TrackRecord: React.FC<TrackRecordProps> = ({ data, assets }) => {
  const config = assets;
  const chartRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chartRef);

  return (
    <div className="bg-white pt-16 pb-6 sm:pb-6 md:py-8">
      <style>{`
        @keyframes growUp {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes growRight {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      <div className="mx-auto max-w-[85rem] pt-6 sm:pt-8 md:pt-10">

        {/*Track Record Header*/}
        <div aria-labelledby="track-record-heading">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#B30437] tracking-wider mb-2 sm:mb-3" role="text">PLACEMENT REPORT</p>
            <h2
              id="track-record-heading"
              className="leading-none text-black text-2xl sm:text-3xl md:text-[35px] font-bold pb-[17px]"
            >
              A Proven{" "}
              <HighlightText className="font-bold hl-px-0">Track Record</HighlightText>
            </h2>
            <h3 className="text-base px-[20px] md:px-[50px] lg:px-[70px] sm:text-lg text-[#5f6368]">
              {data.auditorText ? (
                <span dangerouslySetInnerHTML={{ __html: data.auditorText }} />
              ) : (
                <>
                  Our placement reports are audited by <strong>AnalystPK</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for
                  transparent and consistent compensation data.
                </>
              )}
            </h3>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-0 pb-0 border border-gray-200 sm:border-0 md:flex md:flex-nowrap md:justify-between md:items-center md:gap-x-4 md:gap-y-2">
            {data.stats.map((stat, index) => {
              const isLeft = index % 2 === 0;
              const isTop = index < 2;
              const edgeClasses = `${!isLeft ? 'border-l' : ''} ${isTop ? '' : 'border-t'} border-gray-200 sm:border-0 md:border-0`;
              return (
                <div
                  key={index}
                  className={`text-center px-4 sm:px-6 py-3 md:py-0 md:flex-1 md:min-w-0 ${edgeClasses}`}
                >
                  <div className="text-lg sm:text-3xl lg:text-3xl font-bold text-black mb-1 sm:mb-2 whitespace-nowrap">
                    {stat.value}
                    <span className="text-lg sm:text-3xl lg:text-3xl">{stat.unit}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Diversity Charts ── */}
        <div ref={chartRef} aria-labelledby="diversity-heading">
          <h3 id="diversity-heading" className="sr-only">Student Diversity Statistics</h3>

          <div className="lg:hidden">
            <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide">
              <div className="w-[85vw] min-w-[85vw] flex-shrink-0 snap-start">
                <ChartCard
                  title={config?.chartTitles?.card1 || ""}
                  description="Experience distribution chart"
                  data={data.experienceData}
                  duration={1000}
                  textSize="small"
                  inView={inView}
                />
              </div>

              <div className="w-[85vw] min-w-[85vw] flex-shrink-0 snap-start">
                <ChartCard
                  title={config?.chartTitles?.card2 || ""}
                  description="Background distribution chart"
                  data={data.backgroundData}
                  duration={600}
                  textSize="small"
                  inView={inView}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex pt-[30px] lg:flex-row lg:divide-x lg:divide-gray-200 lg:items-stretch">
            <ChartCard
              title={config?.chartTitles?.card1 || ""}
              description="Experience distribution chart"
              data={data.experienceData}
              duration={1000}
              textSize="small"
              inView={inView}
            />

            <ChartCard
              title={config?.chartTitles?.card2 || ""}
              description="Background distribution chart"
              data={data.backgroundData}
              duration={600}
              textSize="small"
              inView={inView}
            />
          </div>
        </div>

        {/* ── Career Impact Cards ── */}
        <div className="mb-4 sm:mb-6 text-center" aria-labelledby="career-impact-heading">
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:flex-row sm:flex-wrap sm:overflow-visible sm:snap-none">
            {data.impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F4F2EE] p-4 sm:p-6 lg:p-8 transition-all duration-300 w-[85vw] min-w-[85vw] shrink-0 snap-start sm:flex-1 sm:min-w-[260px] md:min-w-[300px] border-r border-b border-t border-gray-200"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-4 text-left">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5f6368] leading-relaxed line-clamp-3 text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Company Logos ── */}
        <div className="text-center" aria-labelledby="companies-heading">
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center">

            <div className="flex items-center justify-center w-full h-full">
              {config?.hiredCompaniesBanner && (
                <img
                  src={config.hiredCompaniesBanner}
                  alt=""
                  className="w-full sm:h-[50px] md:h-[70px] lg:h-[120px] object-contain"
                  loading="lazy"
                />
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TrackRecord;