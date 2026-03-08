"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// DATA
const SECTION_HEADING = {
  eyebrow: "CAREER OUTCOMES",
  title: "Our Placement Statistics",
  starIcon: "https://files.mastersunion.link/resources/svg/star.svg",
};

const KPI_METRICS = [
  {
    label: "Salary jump from Pre MBA level",
    value: "3.03",
    suffix: "x",
    icon: "https://images.mastersunion.link/uploads/21012025/v1/ArrowUp.svg",
  },
  {
    label: "Total Recruiters",
    value: "145",
    suffix: "+",
    icon: "https://images.mastersunion.link/uploads/21012025/v1/ArrowUp.svg",
  },
];

const PLACEMENT_GRAPHS = [
  {
    src: "https://images.mastersunion.link/uploads/28012025/v1/ylcgraphf.webp",
    alt: "PGP TBM YLC Placement Statistics",
  },
  {
    src: "https://images.mastersunion.link/uploads/23012025/v1/pgpTbmNewPlacement.webp",
    alt: "PGP TBM Placement Statistics",
  },
];

const COHORT_HIGHLIGHT = {
  numbers: ["₹29.12L", "₹33.10L", "₹34.07L"],
  description:
    "First, Second & Third cohorts' average CTC surpassed that of Top B Schools, making us the most valued graduates in India.",
};

const REPORTS = [
  {
    href: "https://cdn.mastersunion.org/assets/img/newmu/placementreporet2021.pdf",
    label: "Cohort 2021",
    img: "https://files.mastersunion.link/resources/img/report.webp",
    arrow: "https://files.mastersunion.link/resources/svg/gradientArow.svg",
  },
  {
    href: "https://cdn.mastersunion.org/assets/img/newmu/placementreport2022.pdf",
    label: "Cohort 2022",
    img: "https://files.mastersunion.link/resources/img/report.webp",
    arrow: "https://files.mastersunion.link/resources/svg/gradientArow.svg",
  },
  {
    href: "https://cdn.mastersunion.org/assets/imgV2/Masters_Union_Placement_Report_Cohort_Of_2023.pdf",
    label: "Cohort 2023",
    img: "https://files.mastersunion.link/resources/img/report.webp",
    arrow: "https://files.mastersunion.link/resources/svg/gradientArow.svg",
  },
  {
    href: "https://new.mastersunion.link/brochures/MasterUnion_Placement_Report_2024.pdf",
    label: "Cohort 2024",
    img: "https://files.mastersunion.link/resources/img/report.webp",
    arrow: "https://files.mastersunion.link/resources/svg/gradientArow.svg",
  },
];

const VERIFICATION_TEXT =
  "These placement reports have been verified & audited by Brickworks Analytics, an auditor for IIM Ahmedabad's placement report.";

const ECONOMICS_ARTICLE = {
  href: "https://economictimes.indiatimes.com/jobs/hr-policies-trends/masters-union-mba-cohort-2024-reports-rs-28-52-lakh-average-salary-top-offers-reach-rs-61-8-lakh/articleshow/115755571.cms?from=mdr",
  label: "Read The Economics Times article here",
};

const YLC_HIGHLIGHT = {
  title: "For PGP TBM YLC",
  numbers: ["₹23.57L", "₹27.17L", "₹27.76L"],
  description: "First, Second & Third cohort's average CTC",
};

const RECRUITER_TABS = [
  {
    id: "consulting",
    label: "Consulting",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-1.webp",
  },
  {
    id: "finance",
    label: "Finance And Fintech",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-2.webp",
  },
  {
    id: "large-tech",
    label: "Large Tech",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-3.webp",
  },
  {
    id: "vc",
    label: "Venture Capital",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-4.webp",
  },
  {
    id: "consumer",
    label: "Consumer Tech",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-5.webp",
  },
  {
    id: "emerging",
    label: "Emerging",
    img: "https://files.mastersunion.link/media/img/ug-recruiter-6.webp",
  },
];

const PGP_TBM_TABLE = [
  {
    cohort: "Cohort '24",
    avg: "28.52 L",
    median: "27.77 L",
    highest: "61.80 L",
    top25: "43.79 L",
    bottom25: "19.30 L",
    middle80: "27.05 L",
  },
  {
    cohort: "Cohort '23",
    avg: "34.07 L",
    median: "32.19 L",
    highest: "57.08 L",
    top25: "44.67 L",
    bottom25: "22.35 L",
    middle80: "34.09 L",
  },
  {
    cohort: "Cohort '22",
    avg: "33.1 L",
    median: "30.92 L",
    highest: "64.15 L",
    top25: "44.52 L",
    bottom25: "20.02 L",
    middle80: "33.73 L",
  },
  {
    cohort: "Cohort '21",
    avg: "29.12 L",
    median: "29.5 L",
    highest: "45 L",
    top25: "41.14 L",
    bottom25: "19.38 L",
    middle80: "28.76 L",
  },
];

const PGP_YLC_TABLE = [
  { cohort: "Cohort '24", avg: "23.59 L", median: "22.69 L", highest: "36 L" },
  { cohort: "Cohort '23", avg: "27.76 L", median: "26 L", highest: "38 L" },
  { cohort: "Cohort '22", avg: "27.17 L", median: "25 L", highest: "42 L" },
  { cohort: "Cohort '21", avg: "23.57 L", median: "24 L", highest: "30 L" },
];

const SALARY_COMPONENTS = {
  title: "Salary Components",
  desktop:
    "https://images.mastersunion.link/uploads/19052025/v1/Group1171279927.webp",
  mobile: "https://files.mastersunion.link/resources/img/ctccomponentmob.webp",
};

const SALARY_DISTRIBUTION = {
  title: "Salary Distribution",
  img: "https://files.mastersunion.link/media/img/pgp-salary-distribution.png",
};

// COMPONENT
export default function StatsSection() {
  const [activeTab, setActiveTab] = useState(RECRUITER_TABS[0].id);

  return (
    <>
      {/*Placement Statistics Header */}
      <section
        id="statistics"
        aria-label="Placement statistics"
        className="w-full py-16"
      >
        <div className="mx-auto max-w-7xl ">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
            {/* Left */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                  {SECTION_HEADING.eyebrow}
                </span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                {SECTION_HEADING.title}
              </h2>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 lg:max-w-2xl">
              {KPI_METRICS.map((kpi, i) => (
                <div
                  key={i}
                  className="p-6  flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <div className="text-sm text-gray-600 pr-2">
                      {kpi.label}
                    </div>
                    <Image
                      src={kpi.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                  </div>
                  <div className="text-5xl font-extrabold text-gray-900">
                    {kpi.value}
                    <span style={{ color: "#B30437" }}>{kpi.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PLACEMENT_GRAPHS.map((graph) => (
              <div
                key={graph.alt}
                className="flex justify-center items-start p-6 "
              >
                <Image
                  src={graph.src}
                  alt={graph.alt}
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTC Highlight */}
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col  gap-10 items-start">
            {/* CTC Numbers */}
            <div className="flex-1">
              <h3 className="text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-snug">
                {COHORT_HIGHLIGHT.numbers.map((num, i) => (
                  <span key={i}>
                    <span style={{ color: "#B30437" }}>{num}</span>
                    {i < COHORT_HIGHLIGHT.numbers.length - 1 && <span>, </span>}
                  </span>
                ))}
              </h3>
              <p className="text-gray-700">{COHORT_HIGHLIGHT.description}</p>
            </div>

            {/*  Reports */}
            <div className="flex gap-5">
              <div className="flex flex-wrap gap-3 items-start">
                {REPORTS.map((rep) => (
                  <div
                    key={rep.label}
                    className="flex flex-col items-center min-w-[100px]"
                  >
                    <Image
                      src={rep.img}
                      alt={rep.label}
                      width={80}
                      height={60}
                    />
                    <Link
                      href={rep.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-xs underline flex items-center gap-1 hover:opacity-75"
                      style={{ color: "#B30437" }}
                    >
                      {rep.label}
                      <Image
                        src={rep.arrow}
                        alt="arrow"
                        width={12}
                        height={12}
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Verification + CTA */}
              <div className="flex-1 min-w-[220px]">
                <p className="text-gray-600 mb-4 text-sm max-w-xl">
                  {VERIFICATION_TEXT}
                </p>
                <Link
                  href={ECONOMICS_ARTICLE.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90"
                  style={{ backgroundColor: "#B30437" }}
                >
                  {ECONOMICS_ARTICLE.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*YLC Highlight */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-5">
          <h3 className="text-2xl lg:text-6xl font-semibold text-gray-900 mb-2">
            {YLC_HIGHLIGHT.title}
          </h3>
          <h4 className="text-3xl lg:text-6xl font-semibold mb-3">
            {YLC_HIGHLIGHT.numbers.map((num, i) => (
              <span key={i}>
                <span style={{ color: "#B30437" }}>{num}</span>
                {i < YLC_HIGHLIGHT.numbers.length - 1 && <span>, </span>}
              </span>
            ))}
          </h4>
          <p className="text-gray-700">{YLC_HIGHLIGHT.description}</p>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                Placement
              </span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Our Recruiters
            </h3>
          </div>

          {/* Tabs */}
          <div className=" p-2 mb-8 flex flex-wrap gap-2">
            {RECRUITER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {RECRUITER_TABS.map(
              (tab) =>
                activeTab === tab.id && (
                  <Image
                    key={tab.id}
                    src={tab.img}
                    alt={tab.label}
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                )
            )}
          </div>
        </div>
      </section>

      {/* PGP TBM Table */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                Placement Statistics
              </span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">
              PGP TBM
            </h3>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full text-gray-900 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600"></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Avg. CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Median CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Highest CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Top 25%
                    <br />
                    Avg. CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Bottom 25%
                    <br />
                    Avg. CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Middle 80%
                    <br />
                    Avg. CTC
                  </th>
                </tr>
              </thead>
              <tbody>
                {PGP_TBM_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">{row.cohort}</td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.avg}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.median}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.highest}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.top25}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.bottom25}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.middle80}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Please note that the YLC numbers have been taken from the students
            having 0-1 years of experience from PGP TBM Cohort
          </p>
        </div>
      </section>

      {/* PGP TBM YLC Table */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                Placement Statistics
              </span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">
              PGP TBM YLC
            </h3>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full text-gray-900 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600"></th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Avg. CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Median CTC
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">
                    Highest CTC
                  </th>
                </tr>
              </thead>
              <tbody>
                {PGP_YLC_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-700">{row.cohort}</td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.avg}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.median}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {row.highest}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Please note that the YLC numbers have been taken from the students
            having 0-1 years of experience from PGP TBM Cohort
          </p>
        </div>
      </section>

      {/* Salary Components + Distribution  */}
      <section className="w-full  py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Salary Components */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                {SALARY_COMPONENTS.title}
              </h3>
              <div className=" p-6 ">
                <Image
                  src={SALARY_COMPONENTS.desktop}
                  alt="Salary Components"
                  width={600}
                  height={400}
                  className="hidden md:block w-full h-auto invert"
                />
                <Image
                  src={SALARY_COMPONENTS.mobile}
                  alt="Salary Components Mobile"
                  width={400}
                  height={300}
                  className="md:hidden w-full h-auto invert"
                />
              </div>
              <p className="text-gray-500 text-xs mt-4 text-center">
                Cohort '24 Placement Statistics
              </p>
            </div>

            {/* Salary Distribution */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                {SALARY_DISTRIBUTION.title}
              </h3>
              <div className=" p-6 ">
                <Image
                  src={SALARY_DISTRIBUTION.img}
                  alt="Salary Distribution"
                  width={600}
                  height={400}
                  className="w-full h-auto invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
