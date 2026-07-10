import type { Programme } from "./types";
import { defaultCurriculumSection } from "./curriculum-default";

const cbaCurriculumSection = structuredClone(defaultCurriculumSection);
cbaCurriculumSection.tabOrder = ["courses", "cultural", "business"];
cbaCurriculumSection.tabLabels = { cultural: "Tools & Technology" };

for (let i = 0; i < 8; i++) {
  const term = cbaCurriculumSection.items[i];
  term.term = `Month 0${i + 1}`;
  term.badges = [{ text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" }];
  term.termImage = "/images/dgm-tools/Charters-classroom.avif";
  term.project = undefined;
}

// ── Month 01: Strategy, Planning & Performance ──
const m1 = cbaCurriculumSection.items[0];
m1.title = "Strategy, Planning & Performance";
m1.outcome = "The competencies required to envision the future, lead the strategic planning process, guide decisions, manage risk, and monitor performance.";
m1.courses = {
  initial: [
    { code: "MAST 101", title: "Strategic and Tactical Planning" },
    { code: "MAST 201", title: "Decision Analysis" },
    { code: "MAST 301", title: "Strategic Cost Management" },
    { code: "MAST 401", title: "Capital Investment Decisions" },
    { code: "MAST 501", title: "Enterprise Risk Management" },
  ],
  more: [
    { code: "SAMA 101", title: "Budgeting and Forecasting" },
    { code: "SAMA 201", title: "Corporate Finance" },
    { code: "SAMA 301", title: "Performance Management" },
    { code: "SAMA 401", title: "Corporate english specking" },
    { code: "FIFI 101", title: "Profesonal personal branding" },
    { code: "FIFI 102", title: "Profesonal digital Networking" },
  ],
};

// ── Month 02: Reporting & Control ──
const m2 = cbaCurriculumSection.items[1];
m2.title = "Reporting & Control";
m2.outcome = "The competencies required to measure and report an organization's performance in compliance with relevant standards and regulations.";
m2.courses = {
  initial: [
    { code: "MAST 102", title: "Internal Control" },
    { code: "MAST 202", title: "Financial Recordkeeping" },
    { code: "MAST 302", title: "Cost Accounting" },
    { code: "MAST 402", title: "Financial Statement Preparation" },
    { code: "SAMA 102", title: "Financial Statement Analysis" },
  ],
  more: [
    { code: "SAMA 202", title: "Tax Compliance and Planning" },
    { code: "SAMA 302", title: "Integrated Reporting" },
    { code: "SAMA 402", title: "LinkedIn for personal branding & B2B" },
    { code: "FIFI 201", title: "Structure thinking" },
    { code: "FIFI 202", title: "Personal Video creator studio" },
    { code: "PRTC 102", title: "Body lunguage tranning" },
  ],
};

// ── Month 03: Technology & Analytics ──
const m3 = cbaCurriculumSection.items[2];
m3.title = "Technology & Analytics";
m3.outcome = "The competencies required to manage technology and analyze data to enhance organizational success.";
m3.courses = {
  initial: [
    { code: "PRTC 203", title: "Information Systems" },
    { code: "AIML 103", title: "Data Governance" },
    { code: "FIFI 203", title: "Data Analytics" },
    { code: "SAMA 303", title: "Data Visualization" },
    { code: "COMM 103", title: "Leadershiph social impact tranning" },
  ],
  more: [
    { code: "FIFI 303", title: "Personal Video grwoth strategy creator studio" },
  ],
};
m3.moreCoursesGray = false;

// ── Month 04: Business Acumen & Operations ──
const m4 = cbaCurriculumSection.items[3];
m4.title = "Business Acumen & Operations";
m4.outcome = "The competencies required to contribute as a cross-functional business partner to transform company-wide operations.";
m4.courses = {
  initial: [
    { code: "MAST 104", title: "Industry-Specific Knowledge" },
    { code: "MAST 204", title: "Operational Knowledge" },
    { code: "MAST 304", title: "Quality Management and Continuous Improvement" },
    { code: "MAST 404", title: "Project Management" },
  ],
  more: [],
};

// ── Month 05: Leadership ──
const m5 = cbaCurriculumSection.items[4];
m5.title = "Leadership";
m5.outcome = "The competencies required to collaborate with others and inspire teams to achieve organizational goals.";
m5.courses = {
  initial: [
    { code: "MAST 105", title: "Communication Skills" },
    { code: "MAST 205", title: "Motivating and Inspiring Others" },
    { code: "MAST 305", title: "Collaboration, Teamwork, and Relationship" },
    { code: "SAMA 105", title: "Change Management" },
    { code: "SAMA 205", title: "Conflict Management" },
  ],
  more: [
    { code: "SAMA 305", title: "Negotiation" },
    { code: "SAMA 405", title: "Talent Management" },
  ],
};
m5.moreCoursesGray = false;

// ── Month 06: Professional Ethics & Values ──
const m6 = cbaCurriculumSection.items[5];
m6.title = "Professional Ethics & Values";
m6.outcome = "The competencies required to demonstrate the professional values, ethical behavior, and legal compliance essential to a sustainable business model.";
m6.courses = {
  initial: [
    { code: "MAST 106", title: "Professional Ethical Behavior" },
    { code: "MAST 206", title: "Recognizing and Resolving Unethical Behavior" },
    { code: "MAST 306", title: "Legal and Regulatory Requirements." },
  ],
  more: [],
};

cbaCurriculumSection.items.splice(6, 1);

cbaCurriculumSection.items[0].culturalImage = "/images/dgm-tools/1.jpg";
cbaCurriculumSection.items[1].culturalImage = "/images/dgm-tools/2.avif";
cbaCurriculumSection.items[2].culturalImage = "/images/dgm-tools/3.avif";
cbaCurriculumSection.items[3].culturalImage = "/images/dgm-tools/4.avif";
cbaCurriculumSection.items[4].culturalImage = "/images/dgm-tools/5.avif";
cbaCurriculumSection.items[5].culturalImage = "/images/dgm-tools/1.jpg";

// CBA — Certified Business Accountant course data
export const cba: Programme = {
  id: "1",
  slug: "certified-business-accountant",
  // Dropdown Data
  dropdown: {
    title: "CBA™ (Certified Business Accountant)",
    description:
      "Comprehensive MBA program designed for future business leaders Comprehensive MBA program designed for. Combines theoretical knowledge with practical application through real-world case studies and industry partnerships.",
    duration: "7 Month",
    stats: [
      { value: "24", label: "MONTHS" },
      { value: "150+", label: "COMPANIES" },
      { value: "95%", label: "PLACEMENT RATE" },
    ],
    link: "/CBA™ (Certified Business Accountant)",
    imageUrl: "/images/programmes/mba.jpg",
  },

  // Card Data
  card: {
    image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081780/mn8bwcdnx9ld2kmmywvz_crgadc.avif",
    hasVideo: false,
    rating: { score: 4.8, reviews: 495 / 500 },
    title: "CBA™ (Certified Business Accountant)",
    level: "Certified",
    certificateType: "Corporate Certificate",
    description:
      "Gain real-world corporate accounting through Harvard/Columbia case study, IIMK, US-CMA&CPA/CFA/ACCA integrated AI-led curriculum under top 1% industry faculty.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "3 Months theory + 4 Months in-class intranship" },
    deadline: { type: "Round 1: 30th Oct '25" },
    careerOutcomes: [
      "Foundations in Industry-led learning base on Hardvard casestudy with US-CMA/CPA, Indian CA and ACCA specialisation carruculam.",
      "In-class live projects intranship under faculty with top Startup & MNC from India, USA, CANADA, SAUDI, QATAR and Singapore.",
      "AI-powered corporate accountant, finance, FP&A, fintech & GCC-ready roles.",
      "Personal devlopment prep with communication, bodylangusge and placement cell.",
      "Applying class carruiculam with small amd medium busness at real-world ",
    ],
    jobOpenings: "2.12 Cr",
  },
  // Hero Data
  hero: {
    badge: "",
    categoryLabel: "",
    title: {
      main: "India's #1 Job-Ready AI-Poweard Global Business Accounting",

    },
    description:
      "AI-Ready curriculum build on USCMA, ACCA, ICAI, and Hardvard Case Study based Corporate Accounting. 1:1 mentorship.  Paid internship in 7 countries.",
    stats: [
      { label: "93% Avg Placement", value: "93%" },
      { label: "100% Paid Internship", value: "150+" },
      { label: "753 Hiring Partners", value: "752+" },
      { label: "1:1 Mentorship", value: "1:1" },
    ],
    alumniCompanies: [
      { name: "Google", logo: "/images/companies/google.png" },
      { name: "Amazon", logo: "/images/companies/amazon.png" },
      { name: "Deloitte", logo: "/images/companies/deloitte.png" },
    ],
    instructors: {
      badge: "India's top 1%",
      title: "CA/CMA/CFA Faculty & Industry Leaders",
    },
    heroImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400",
    floatingCards: {
      topRight: {
        name: "Sanskar Jaiswal",
        students: "2,500+",
        rating: 4.8,
      },
      bottomLeft: {
        label: "Roshni Agarwal",
        percentage: "95%",
        subLabel: "Average Salary",
        ctcIncrease: "↗ 3.05x Salary Jump",
      },
    },
  },

  // Program Info
  programInfo: {
    duration: "7 Months",
    details: [
      {
        label: "DURATION",
        value: "7 Months",
        subtitle: "(3 Months foundation + 4 Months in-class internship)",
        dotColor: "bg-cyan-500",
      },
      { label: "100% PAID-INTERNSHIP", value: "7 Countries", dotColor: "bg-cyan-500" },
      {
        label: "ELIGIBILITY",
        value: "12th · Under Graduate · Diploma · Post-graduate.",
        dotColor: "bg-pink-500",
      },
      { label: "FORMAT", value: "In-class Residential", dotColor: "bg-yellow-500" },
      { label: "NO. OF SEATS LEFT", value: "3", dotColor: "bg-green-500" },
    ],
  },

  // Track Record
  trackRecord: {
    stats: [
      { value: "12.5", unit: "LPA", label: "Highest CTC" },
      { value: ">2.7", unit: "x", label: "Internshiph offer per student" },
      { value: "16-42", unit: "LPA", label: "Internshiph highest salary " },
      { value: ">95", unit: "%", label: "Joined full-time roles before end internship" },
    ],
    experienceData: [
      { label: "QATAR", value: 9, percentage: "5%" },
      { label: "INDIA", value: 47, percentage: "67%" },
      { label: "DUBAI", value: 18, percentage: "13%" },
      { label: "SAUDI", value: 10, percentage: "10%" },
      { label: "SINGAPOR", value: 7, percentage: "3%" },
      { label: "CANADA", value: 5, percentage: "2%" },
    ],
    backgroundData: [
      { label: "CONSULTANCY", value: 26, percentage: "46%" },
      { label: "ACCOUNTANTCY", value: 10, percentage: "37%" },
      { label: "MARKETING", value: 8, percentage: "25%" },
      { label: "ENTREPRENEURS", value: 5, percentage: "18%" },
      { label: "FINANCE", value: 3, percentage: "17%" },
      { label: "PRODUCT", value: 1, percentage: "13%" },
    ],
    impactCards: [
      {
        title: "Unlock high-impact roles with significant growth potential",
        description:
          "Business Manager, Strategy Consultant, Operations Director. These roles are designed for fast-tracked career growth in leading organizations.",
      },
      {
        title: "Build leadership skills through real-world experience",
        description:
          "Gain hands-on experience with live projects, case studies, and industry partnerships that prepare you for C-suite positions.",
      },
      {
        title: "Network with industry leaders and successful alumni",
        description:
          "Connect with top executives, entrepreneurs, and alumni working at Fortune 500 companies and leading startups.",
      },
    ],
    companyLogos: [
      { name: "Google", logo: "https://logo.clearbit.com/google.com" },
      { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
      { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
      { name: "McKinsey", logo: "https://logo.clearbit.com/mckinsey.com" },
      {
        name: "Goldman Sachs",
        logo: "https://logo.clearbit.com/goldmansachs.com",
      },
      { name: "BCG", logo: "https://logo.clearbit.com/bcg.com" },
      { name: "Bain", logo: "https://logo.clearbit.com/bain.com" },
      { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
      { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
      { name: "JP Morgan", logo: "https://logo.clearbit.com/jpmorgan.com" },
      { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
      { name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
      { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
      { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
      { name: "Paytm", logo: "https://logo.clearbit.com/paytm.com" },
    ],
  },

  // Degree Program
  degreeProgram: {
    badge: "DEGREE & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "CBA™ (Certified Business Accountant)",
      suffix: "",
    },
    accordions: [
      {
        id: "placement",
        title: "Outstanding Placement Record and Career Support",
        items: [
          "**95% placement** rate with top companies across consulting, finance, and technology sectors",
          "**3.05x average salary** jump post-MBA with CTC ranging from 16-42 LPA",
          "Alumni at **Google, Amazon, Deloitte, McKinsey, Goldman Sachs** in leadership positions",
          "**300+ recruiting partners** including Fortune 500 companies and unicorn startups",
          "Dedicated **career services team** with resume workshops, mock interviews, and 1:1 coaching",
        ],
      },
      {
        id: "curriculum",
        title: "World-Class Curriculum and Learning Experience",
        items: [
          "**150+ live projects** with real companies providing hands-on business experience",
          "**200+ case studies** from Harvard, INSEAD, and Stanford covering global business scenarios",
          "**Industry-designed curriculum** updated annually based on market trends and employer feedback",
          "Learn from **top 1% faculty** - professors with PhDs from IIMs/ISB and industry veterans from McKinsey, Google",
          "**Specializations available** in Finance, Marketing, Strategy, Operations, Entrepreneurship, Analytics",
        ],
      },
      {
        id: "global",
        title: "Global Exposure and International Immersions",
        items: [
          "**International immersion** in Singapore, Dubai, or Europe during final year",
          "Visit **global business schools** and Fortune 500 headquarters for cross-cultural learning",
          "**Exchange programs** with partner universities in 5+ countries",
          "Global case competitions and **international conferences** exposure",
          "Build **worldwide network** with students and alumni across continents",
        ],
      },
      {
        id: "accreditation",
        title: "Prestigious Accreditation and Recognition",
        items: [
          "**UGC approved** and **AICTE recognized** MBA degree from Charter's Business College",
          "**AACSB accreditation** - top 5% business schools globally hold this credential",
          "**NIRF ranked** among India's leading business schools",
          "Degree **globally recognized** and accepted for higher education and employment worldwide",
          "**Industry partnerships** with 50+ multinational corporations for curriculum and placements",
        ],
      },
      {
        id: "facilities",
        title: "State-of-the-Art Campus and Learning Facilities",
        items: [
          "**Smart classrooms** with latest teaching technology and hybrid learning capabilities",
          "**Bloomberg terminals** and financial databases for real-time market analysis",
          "**Business incubation center** for aspiring entrepreneurs with seed funding opportunities",
          "**World-class library** with 50,000+ business books, journals, and digital resources",
          "**Industry-grade software** access - Tableau, SPSS, SAP, Salesforce, and more",
        ],
      },
    ],
    academicPartners: [
      {
        name: "Charter's Business College",
        description: "UGC Approved & AICTE Recognized",
      },
      {
        name: "Harvard Business School",
        description: "Case Study Partnership",
      },
    ],
    immersions: [{ name: "Singapore Business Immersion" }],
    campusImage: {
      src: "/images/programmes/indus.webp",
      alt: "Charter's Business College - Modern Campus with State-of-the-Art Facilities",
    },
  },
  // Curriculum
  curriculum: {
    categories: [
      { id: "core", label: "CORE", title: "Core Business Courses" },
      { id: "elective", label: "ELECT", title: "Elective Specializations" },
    ],
    courseData: {
      core: [
        {
          term: "TERM 1",
          location: "India",
          courses: [
            { code: "MBA 101", title: "Strategic Management" },
            { code: "MBA 102", title: "Financial Accounting" },
            { code: "MBA 103", title: "Marketing Management" },
          ],
        },
      ],
      elective: [
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            { code: "MBA 301", title: "Digital Marketing Strategy" },
            { code: "MBA 302", title: "Investment Banking" },
          ],
        },
      ],
    },
  },

  // Curriculum Section (per-programme, isolated copy)
  curriculumSection: cbaCurriculumSection,

  // Learn Apply Reflect - Full Content
  learnApply: {
    categories: [
      { id: "strategy", label: "STRAT", title: "Strategy & Leadership" },
      { id: "finance", label: "FIN", title: "Finance & Analytics" },
      { id: "marketing", label: "MKT", title: "Marketing & Sales" },
      { id: "operations", label: "OPS", title: "Operations & Supply Chain" },
      {
        id: "entrepreneur",
        label: "ENT",
        title: "Entrepreneurship & Innovation",
      },
      { id: "tech", label: "TECH", title: "Technology & Digital Business" },
    ],
    courseData: {
      strategy: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "STRAT 101",
              title: "How to build a comprehensive business strategy",
            },
            {
              code: "STRAT 102",
              title: "How to lead high-performing teams effectively",
            },
            {
              code: "STRAT 103",
              title: "How to analyze competitive landscapes",
            },
            {
              code: "STRAT 104",
              title: "How to create sustainable competitive advantages",
            },
            {
              code: "STRAT 105",
              title: "How to drive organizational change",
            },
          ],
        },
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            {
              code: "STRAT 201",
              title: "How to make strategic decisions under uncertainty",
            },
            {
              code: "STRAT 202",
              title: "How to manage corporate portfolios",
            },
            {
              code: "STRAT 203",
              title: "How to build strategic alliances and partnerships",
            },
            {
              code: "STRAT 204",
              title: "How to lead digital transformation initiatives",
            },
            {
              code: "STRAT 205",
              title: "How to develop growth strategies for emerging markets",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Bangalore",
          courses: [
            {
              code: "STRAT 301",
              title: "How to manage mergers and acquisitions",
            },
            {
              code: "STRAT 302",
              title: "How to create blue ocean strategies",
            },
            {
              code: "STRAT 303",
              title: "How to implement strategic initiatives",
            },
            {
              code: "STRAT 304",
              title: "How to build resilient organizations",
            },
            {
              code: "STRAT 305",
              title: "How to develop crisis management frameworks",
            },
          ],
        },
      ],
      finance: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "FIN 101",
              title: "How to analyze financial statements comprehensively",
            },
            {
              code: "FIN 102",
              title: "How to value companies using DCF models",
            },
            {
              code: "FIN 103",
              title: "How to build financial forecasting models",
            },
            {
              code: "FIN 104",
              title: "How to manage working capital efficiently",
            },
            {
              code: "FIN 105",
              title: "How to understand corporate finance fundamentals",
            },
          ],
        },
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            {
              code: "FIN 201",
              title: "How to structure investment portfolios",
            },
            {
              code: "FIN 202",
              title: "How to assess and manage financial risks",
            },
            {
              code: "FIN 203",
              title: "How to analyze mergers and acquisitions deals",
            },
            { code: "FIN 204", title: "How to raise capital for businesses" },
            {
              code: "FIN 205",
              title: "How to conduct due diligence for investments",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            {
              code: "FIN 301",
              title: "How to structure private equity deals",
            },
            { code: "FIN 302", title: "How to manage hedge fund strategies" },
            {
              code: "FIN 303",
              title: "How to analyze derivatives and options",
            },
            {
              code: "FIN 304",
              title: "How to implement treasury management systems",
            },
            { code: "FIN 305", title: "How to prepare companies for IPOs" },
          ],
        },
      ],
      marketing: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "MKT 101",
              title: "How to build compelling brand narratives",
            },
            {
              code: "MKT 102",
              title: "How to design customer acquisition funnels",
            },
            {
              code: "MKT 103",
              title: "How to conduct market research effectively",
            },
            {
              code: "MKT 104",
              title: "How to develop product positioning strategies",
            },
            {
              code: "MKT 105",
              title: "How to create integrated marketing campaigns",
            },
          ],
        },
        {
          term: "TERM 2",
          location: "Bangalore",
          courses: [
            {
              code: "MKT 201",
              title: "How to master digital marketing channels",
            },
            {
              code: "MKT 202",
              title: "How to optimize conversion rates systematically",
            },
            {
              code: "MKT 203",
              title: "How to build social media strategies that work",
            },
            {
              code: "MKT 204",
              title: "How to create viral content campaigns",
            },
            {
              code: "MKT 205",
              title: "How to implement marketing automation tools",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Dubai",
          courses: [
            {
              code: "MKT 301",
              title: "How to expand into international markets",
            },
            {
              code: "MKT 302",
              title: "How to build influencer partnerships",
            },
            {
              code: "MKT 303",
              title: "How to create omnichannel customer experiences",
            },
            {
              code: "MKT 304",
              title: "How to measure and optimize marketing ROI",
            },
            {
              code: "MKT 305",
              title: "How to manage brand portfolios effectively",
            },
          ],
        },
      ],
      operations: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "OPS 101",
              title: "How to build efficient supply chains",
            },
            {
              code: "OPS 102",
              title: "How to optimize production processes",
            },
            {
              code: "OPS 103",
              title: "How to implement lean manufacturing principles",
            },
            { code: "OPS 104", title: "How to manage inventory effectively" },
            { code: "OPS 105", title: "How to design service operations" },
          ],
        },
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            {
              code: "OPS 201",
              title: "How to implement Six Sigma methodologies",
            },
            {
              code: "OPS 202",
              title: "How to manage global supply chain networks",
            },
            {
              code: "OPS 203",
              title: "How to optimize logistics and distribution",
            },
            {
              code: "OPS 204",
              title: "How to implement quality management systems",
            },
            {
              code: "OPS 205",
              title: "How to manage supplier relationships",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            {
              code: "OPS 301",
              title: "How to build resilient supply chains",
            },
            {
              code: "OPS 302",
              title: "How to implement Industry 4.0 technologies",
            },
            { code: "OPS 303", title: "How to manage project portfolios" },
            {
              code: "OPS 304",
              title: "How to optimize warehouse operations",
            },
            {
              code: "OPS 305",
              title: "How to implement sustainable operations",
            },
          ],
        },
      ],
      entrepreneur: [
        {
          term: "TERM 1",
          location: "Bangalore",
          courses: [
            {
              code: "ENT 101",
              title: "How to identify and validate business ideas",
            },
            {
              code: "ENT 102",
              title: "How to create minimum viable products",
            },
            { code: "ENT 103", title: "How to write winning business plans" },
            {
              code: "ENT 104",
              title: "How to pitch to investors effectively",
            },
            { code: "ENT 105", title: "How to build founding teams" },
          ],
        },
        {
          term: "TERM 2",
          location: "Mumbai",
          courses: [
            {
              code: "ENT 201",
              title: "How to raise seed and Series A funding",
            },
            { code: "ENT 202", title: "How to achieve product-market fit" },
            { code: "ENT 203", title: "How to scale startups rapidly" },
            {
              code: "ENT 204",
              title: "How to build startup culture and values",
            },
            { code: "ENT 205", title: "How to manage startup finances" },
          ],
        },
        {
          term: "TERM 3",
          location: "Silicon Valley",
          courses: [
            {
              code: "ENT 301",
              title: "How to navigate exits and acquisitions",
            },
            {
              code: "ENT 302",
              title: "How to build venture-backable businesses",
            },
            { code: "ENT 303", title: "How to create innovation frameworks" },
            {
              code: "ENT 304",
              title: "How to manage high-growth organizations",
            },
            {
              code: "ENT 305",
              title: "How to build sustainable competitive advantages",
            },
          ],
        },
      ],
      tech: [
        {
          term: "TERM 1",
          location: "Bangalore",
          courses: [
            {
              code: "TECH 101",
              title: "How to understand technology trends",
            },
            {
              code: "TECH 102",
              title: "How to build digital business models",
            },
            {
              code: "TECH 103",
              title: "How to implement cloud computing solutions",
            },
            {
              code: "TECH 104",
              title: "How to leverage artificial intelligence",
            },
            { code: "TECH 105", title: "How to design user experiences" },
          ],
        },
        {
          term: "TERM 2",
          location: "Mumbai",
          courses: [
            {
              code: "TECH 201",
              title: "How to build data analytics capabilities",
            },
            {
              code: "TECH 202",
              title: "How to implement blockchain solutions",
            },
            { code: "TECH 203", title: "How to manage cybersecurity risks" },
            {
              code: "TECH 204",
              title: "How to develop mobile-first strategies",
            },
            {
              code: "TECH 205",
              title: "How to implement agile methodologies",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            { code: "TECH 301", title: "How to build IoT ecosystems" },
            {
              code: "TECH 302",
              title: "How to implement machine learning models",
            },
            { code: "TECH 303", title: "How to manage API economies" },
            {
              code: "TECH 304",
              title: "How to scale technical infrastructure",
            },
            { code: "TECH 305", title: "How to build platform businesses" },
          ],
        },
      ],
    },
  },

  // Scholarships
  scholarships: [
    {
      id: "outliers",
      title: "The Outliers Scholarship",
      description:
        "Celebrating exceptional talents beyond academics. If you're leading in fields like dance, space science, or robotics, this scholarship is designed to propel your unique journey forward.",
      eligibility: "Recognized in the top 1% in any field.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      alt: "Confident young professional in modern office setting",
    },
    {
      id: "community",
      title: "The Community Leaders Scholarship",
      description:
        "For those who have made significant impact in their communities through leadership, volunteer work, or social initiatives.",
      eligibility: "Demonstrated community leadership and impact.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      alt: "Community leaders working together",
    },
    {
      id: "entrepreneur",
      title: "The Entrepreneur & Innovation Scholarship",
      description:
        "Supporting young entrepreneurs and innovators who have started their own ventures or created innovative solutions.",
      eligibility: "Founded a startup or created innovative projects.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      alt: "Young entrepreneur working on startup",
    },
    {
      id: "merit",
      title: "The Merit Scholarship",
      description:
        "Academic excellence scholarship for students with outstanding academic achievements and test scores.",
      eligibility: "High academic scores and strong record.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      alt: "Student studying with books",
    },
    {
      id: "pathfinders",
      title: "The Pathfinders Scholarship",
      description:
        "For students who have overcome significant challenges and demonstrated resilience in their educational journey.",
      eligibility: "Demonstrated resilience and overcoming challenges.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      alt: "Determined student overcoming challenges",
    },
    {
      id: "transfer",
      title: "The Transfer Students Scholarship",
      description:
        "Supporting students transitioning from other institutions who show exceptional promise and dedication.",
      eligibility: "Transfer students with strong performance.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      alt: "Transfer students collaborating",
    },
  ],

  // FAQ
  faq: {
    categories: [
      {
        id: "program",
        name: "Program",
        faqs: [
          {
            id: "what-is-mba",
            question: "What is the MBA program about?",
            answer:
              "Our MBA program is a comprehensive 2-year full-time course designed to develop business leaders through rigorous academics, practical experience, and industry exposure. The curriculum covers core business disciplines including finance, marketing, operations, strategy, and leadership. Students engage in real-world case studies, live projects, and internships with leading companies.",
          },
          {
            id: "who-is-eligible",
            question: "Who is eligible for the MBA program?",
            answer:
              "Candidates must have a Bachelor's degree with minimum 50% marks from a recognized university. Work experience is preferred but not mandatory. We welcome candidates from diverse backgrounds including engineering, commerce, arts, and sciences. Prior business knowledge is helpful but not required as we provide foundational courses.",
          },
          {
            id: "can-join-as-fresher",
            question: "Can I join as a fresher without work experience?",
            answer:
              "Yes, freshers can join the MBA program! We have specific tracks designed for recent graduates. Our curriculum includes foundational business courses, soft skills development, and extensive internship opportunities to help you build practical experience and transition smoothly into corporate roles.",
          },
          {
            id: "when-are-classes",
            question: "When are the live classes held?",
            answer:
              "Classes are conducted from Monday to Friday, typically between 9 AM to 5 PM. The schedule is designed as a full-time residential program with a mix of lectures, case discussions, group projects, and workshops. Weekend activities include guest lectures, industrial visits, and networking events with alumni and industry leaders.",
          },
          {
            id: "what-if-miss-lecture",
            question: "What if I miss a lecture?",
            answer:
              "If you miss a live lecture due to genuine reasons, recordings are available on our learning management system. However, since our program emphasizes interactive learning through case discussions and group activities, regular attendance is strongly recommended. Our faculty and teaching assistants are available for doubt clarification during office hours.",
          },
          {
            id: "program-duration",
            question: "What is the program duration?",
            answer:
              "The MBA program is a 2-year full-time course divided into 6 terms. Each term is approximately 3-4 months long with breaks between terms. The program includes classroom learning, summer internships, live projects, and an international immersion experience in the final year.",
          },
          {
            id: "does-give-certificates",
            question: "Does the program provide certification?",
            answer:
              "Yes, upon successful completion of the program, you will receive a Master of Business Administration (MBA) degree from Charter's Business College. This degree is recognized globally and demonstrates your proficiency in business management, strategic thinking, and leadership skills.",
          },
          {
            id: "is-certification-worth-it",
            question: "Is the MBA degree worth it?",
            answer:
              "Absolutely! Our MBA program has a proven track record with 95% placement rate and an average salary jump of 3.05x. Graduates work at top companies like Google, Amazon, Deloitte, and McKinsey. The degree, combined with practical skills, industry exposure, and strong alumni network, significantly enhances your career prospects and opens doors to leadership positions.",
          },
        ],
      },
      {
        id: "curriculum",
        name: "Curriculum",
        faqs: [
          {
            id: "curriculum-structure",
            question: "How is the curriculum structured?",
            answer:
              "The MBA curriculum is divided into three main components: Core Courses (60%), Elective Specializations (25%), and Practical Learning (15%). Core courses cover fundamental business subjects like finance, marketing, operations, and strategy. Electives allow you to specialize in areas like Digital Marketing, Investment Banking, or Entrepreneurship. Practical learning includes case studies, simulations, live projects, and internships.",
          },
          {
            id: "specializations",
            question: "What specializations are available?",
            answer:
              "We offer multiple specializations including Marketing, Finance, Operations, Human Resources, Strategy & Consulting, Entrepreneurship, Digital Business, and Business Analytics. Students can choose dual specializations to enhance their skill set and career options.",
          },
          {
            id: "curriculum-updates",
            question: "How often is the curriculum updated?",
            answer:
              "Our curriculum is reviewed and updated annually based on industry trends, feedback from corporate partners, and emerging business practices. We regularly invite industry experts to co-design courses and ensure our students learn the most relevant and current business concepts and tools.",
          },
          {
            id: "international-exposure",
            question: "Is there international exposure?",
            answer:
              "Yes! The program includes an international immersion experience where students visit a global business school and leading companies abroad. Past immersions have been to institutions in Singapore, Dubai, and Europe. This provides exposure to global business practices and cross-cultural management.",
          },
          {
            id: "case-studies",
            question: "How many case studies will we analyze?",
            answer:
              "Throughout the 2-year program, students analyze over 200 case studies from Harvard Business School, INSEAD, and other top institutions. These cases cover real business scenarios from companies like Amazon, Netflix, Tesla, and Indian conglomerates, helping develop analytical and decision-making skills.",
          },
        ],
      },
      {
        id: "teaching",
        name: "Teaching",
        faqs: [
          {
            id: "teaching-methodology",
            question: "What is the teaching methodology?",
            answer:
              "We use a blend of teaching methodologies including interactive lectures, case method discussions, simulations, role plays, group projects, and experiential learning. The focus is on practical application rather than rote learning. Classes are discussion-based with active student participation, encouraging critical thinking and problem-solving.",
          },
          {
            id: "instructor-quality",
            question: "What is the quality of instructors?",
            answer:
              "Our faculty comprises experienced academics with PhDs from top institutions and industry practitioners from leading companies. Many professors have worked at Google, McKinsey, Goldman Sachs, and other Fortune 500 companies. They bring both theoretical knowledge and real-world business insights to the classroom.",
          },
          {
            id: "guest-lectures",
            question: "Are there guest lectures?",
            answer:
              "Yes, we regularly host guest lectures by CEOs, entrepreneurs, industry leaders, and alumni. Past speakers include founders of unicorn startups, senior executives from Google and Amazon, and successful entrepreneurs. These sessions provide invaluable insights into industry trends and career paths.",
          },
          {
            id: "class-size",
            question: "What is the class size?",
            answer:
              "Each MBA batch has approximately 60-80 students, ensuring personalized attention and meaningful peer interaction. Classes are conducted in sections of 30-40 students for core courses and smaller groups for electives and workshops.",
          },
        ],
      },
      {
        id: "mentors",
        name: "Mentors",
        faqs: [
          {
            id: "mentor-allocation",
            question: "How are mentors allocated?",
            answer:
              "Each student is assigned a faculty mentor and an industry mentor within the first month. Faculty mentors guide academic progress and career planning, while industry mentors provide real-world insights and networking opportunities. Mentors are allocated based on student interests and career goals.",
          },
          {
            id: "mentor-sessions",
            question: "How frequent are mentor sessions?",
            answer:
              "Regular one-on-one mentor sessions are conducted bi-weekly throughout the program. Additional sessions are available as needed for career guidance, project discussions, and personal development. Mentors also help with resume building, interview preparation, and job search strategies.",
          },
          {
            id: "industry-mentors",
            question: "Who are the industry mentors?",
            answer:
              "Our industry mentors include senior executives from top companies, successful entrepreneurs, and accomplished alumni. They provide guidance on career transitions, industry insights, networking strategies, and help students navigate the corporate world.",
          },
        ],
      },
      {
        id: "internships",
        name: "Internships",
        faqs: [
          {
            id: "internship-opportunities",
            question: "Are internship opportunities provided?",
            answer:
              "Yes, summer internships are a mandatory part of the MBA program. Students complete 8-10 week internships between first and second year with leading companies. Our placement cell facilitates internships with over 150 partner companies across industries including consulting, finance, technology, FMCG, and startups.",
          },
          {
            id: "internship-stipend",
            question: "Do internships offer stipends?",
            answer:
              "Yes, most summer internships offer stipends ranging from ₹30,000 to ₹1,00,000 per month depending on the company and role. Top consulting and finance firms offer higher stipends. Many internships convert to Pre-Placement Offers (PPOs) based on performance.",
          },
          {
            id: "international-internships",
            question: "Can I do international internships?",
            answer:
              "Yes, students can apply for international internships with our global partner companies. We have partnerships with firms in Singapore, Dubai, UK, and USA. However, international internships are competitive and require strong academic performance and relevant skills.",
          },
        ],
      },
      {
        id: "placement",
        name: "Placement Support",
        faqs: [
          {
            id: "placement-assistance",
            question: "What kind of placement assistance is provided?",
            answer:
              "We provide comprehensive placement support including resume workshops, mock interviews, group discussions, case interview preparation, and soft skills training. Our placement cell maintains relationships with 300+ recruiting companies and facilitates on-campus interviews, pre-placement talks, and networking sessions throughout the year.",
          },
          {
            id: "placement-record",
            question: "What is the placement record?",
            answer:
              "95% of our MBA graduates receive job offers within 3 months of graduation. The average CTC is ₹26.5 LPA with an average salary jump of 3.05x. Highest package in recent years reached ₹61.8 LPA. Our graduates work at top companies including Google, Amazon, Deloitte, McKinsey, KPMG, and leading startups.",
          },
          {
            id: "placement-guarantee",
            question: "Do you guarantee placements?",
            answer:
              "While we cannot guarantee placements, our track record shows that 95% of students receive job offers with significant salary improvements. We provide extensive support and opportunities, but final placement depends on individual performance, skills, and market conditions. Students must actively participate in the placement process and maintain good academic standing.",
          },
          {
            id: "career-services",
            question: "Do you offer lifetime career services?",
            answer:
              "Yes! Alumni have lifetime access to our career services including job postings, networking events, skill development workshops, and career counseling. Many alumni return for mid-career transitions and entrepreneurship support.",
          },
        ],
      },
      {
        id: "fees",
        name: "Tuition Fee",
        faqs: [
          {
            id: "fee-structure",
            question: "What is the fee structure?",
            answer:
              "The total program fee for the 2-year MBA is competitive with other top business schools. The fee includes tuition, study materials, library access, computer lab facilities, and placement services. Hostel and mess charges are separate. Contact our admissions team for detailed fee structure and payment plans.",
          },
          {
            id: "payment-options",
            question: "What payment options are available?",
            answer:
              "We offer multiple payment options including one-time payment with discount, semester-wise installments, EMI options through partner banks, and education loans with major banks. Scholarships and financial aid are available for meritorious and deserving students.",
          },
          {
            id: "scholarships",
            question: "Are scholarships available?",
            answer:
              "Yes, we offer merit-based and need-based scholarships covering up to 100% of tuition fees. Scholarships are awarded based on entrance exam scores, academic performance, work experience, diversity criteria, and financial need. Women candidates and students from underrepresented backgrounds receive special consideration.",
          },
          {
            id: "education-loan",
            question: "Can I get education loans?",
            answer:
              "Yes, we have tie-ups with major banks including SBI, HDFC, ICICI, and Axis Bank for education loans. The college assists students in the loan application process. Most students secure loans covering 80-100% of the program fee with flexible repayment options starting after course completion.",
          },
        ],
      },
      {
        id: "admission",
        name: "Admission",
        faqs: [
          {
            id: "how-to-apply",
            question: "How do I apply?",
            answer:
              "Applications can be submitted online through our admission portal. The process includes submitting academic transcripts, entrance exam scores (CAT/XAT/GMAT), essays, and letters of recommendation. Shortlisted candidates are invited for group discussion and personal interview rounds.",
          },
          {
            id: "entrance-exams",
            question: "Which entrance exams are accepted?",
            answer:
              "We accept scores from CAT, XAT, GMAT, and our own entrance test. Candidates must have valid scores from the current or previous year. Minimum percentile requirements vary but typically CAT 85+ percentile, GMAT 650+, or equivalent scores are preferred.",
          },
          {
            id: "application-deadline",
            question: "What is the application deadline?",
            answer:
              "We conduct admissions in multiple rounds. Round 1 deadline is October 30th, Round 2 is November 15th, and Round 3 is December 31st. Early application is recommended as seats fill up quickly and scholarship opportunities are better in early rounds.",
          },
        ],
      },
    ],
  },
  students: {
    categories: [
      { id: "jul", name: "July" },
      { id: "apr", name: "April" },
      { id: "jan", name: "January" },
    ],

    students: [
      {
        name: "Riya Kapoor",
        batch: "APR 2026",
        city: "Kolkata",
        company: "Jio",
        role: "Growth Engineer",
        timeToPlace: "10 Months later",
        previousCollege: "Techno India",
        background: "2nd Year MCA Fresher",
        internship:
          "Jio Platforms — Growth engineering and analytics",
        researchPaper:
          "AI-based customer engagement strategies in telecom industry",
        caseStudies:
          "How Jio scaled digital adoption across India...",
        imageSrc:
          "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081839/21_bnm51l.jpg",
        linkedinUrl: "#",
        category: "apr",
      },

      {
        name: "Sneha Dutta",
        batch: "DEC 2025",
        city: "Kolkata",
        company: "WishCare",
        role: "Digital Marketing",
        timeToPlace: "Just in 9 months",
        previousCollege: "Loreto College",
        background: "2025 Pass Out Fresher",
        internship:
          "WishCare — Brand marketing and influencer campaigns",
        researchPaper:
          "Social media growth strategies for D2C brands",
        caseStudies:
          "How WishCare built a beauty-first digital audience...",
        imageSrc:
          "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081840/23_obnfxo.jpg",
        linkedinUrl: "#",
        category: "jan",
      },

      {
        name: "Arjun Malhotra",
        batch: "JUL 2025",
        city: "Bangalore",
        company: "Google",
        role: "SEO Growth Associate",
        timeToPlace: "Just in 8 months",
        previousCollege: "Christ University",
        background: "BBA Marketing Fresher",
        internship:
          "Google India — Search and content optimization",
        researchPaper:
          "Consumer retention through AI recommendation systems",
        caseStudies:
          "How Swiggy increased retention using growth loops...",
        imageSrc:
          "https://res.cloudinary.com/ducgcl4dg/image/upload/v1777886817/bytg0uyh5ebkd2zwuzm0_yalhuk.avif",
        linkedinUrl: "#",
        category: "jul",
      },
    ],
  },
  faculty: {
    categories: [
      { id: "technology", name: "GST Taxation" },
      { id: "entrepreneurship", name: "Accounting" },
      { id: "auditing", name: "Auditing" },
    ],

    faculty: [
      // ===========================
      // GST Taxation (5 Faculty)
      // ===========================

      {
        name: "Mr. Manoj Kohli",
        title: "Former Country Head",
        company: "SoftBank",
        subtitle: "Former Country Head at SoftBank India",
        experience: "Ex MD at Bharti Airtel",
        teaching: "Tech investments and growth strategy",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },

      {
        name: "Mr. Rajat Mathur",
        title: "Director - Corporate Tax",
        company: "Morgan Stanley",
        subtitle: "Director, Corporate Tax Advisory",
        experience: "Ex Managing Director at Goldman Sachs",
        teaching: "Corporate taxation and GST compliance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },

      {
        name: "Mr. Naveen Munjal",
        title: "Indirect Tax Consultant",
        company: "Hero Electric",
        subtitle: "Industry Tax & Compliance Advisor",
        experience: "Ex VP at Hero MotoCorp",
        teaching: "GST implementation for manufacturing businesses",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },

      {
        name: "Ms. Shalini Iyer",
        title: "GST Advisory Partner",
        company: "BCG",
        subtitle: "Partner - Tax Strategy",
        experience: "15+ years in indirect taxation",
        teaching: "GST strategy and business taxation",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },

      {
        name: "Mr. Devendra Shah",
        title: "Senior Tax Advisor",
        company: "Apex Financial",
        subtitle: "Head of Tax Advisory",
        experience: "Former Director of Corporate Finance",
        teaching: "Advanced GST planning and compliance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },

      // ===========================
      // Accounting (Starts Here)
      // ===========================
      {
        name: "Mr. Naveen Munjal",
        title: "Managing Director",
        company: "Hero Electric",
        subtitle: "Founder & MD at Hero Electric",
        experience: "Ex VP at Hero MotoCorp",
        teaching: "Corporate accounting and business finance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },

      {
        name: "Mr. Rajat Mathur",
        title: "Managing Director",
        company: "Morgan Stanley",
        subtitle: "MD, India at Morgan Stanley",
        experience: "Ex Managing Director at Goldman Sachs",
        teaching: "Financial reporting and corporate accounting",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },

      {
        name: "Mr. Manoj Kohli",
        title: "Corporate Finance Advisor",
        company: "SoftBank",
        subtitle: "Former Country Head at SoftBank India",
        experience: "Ex MD at Bharti Airtel",
        teaching: "Business accounting and financial planning",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },

      {
        name: "Ms. Shalini Iyer",
        title: "Financial Accounting Partner",
        company: "BCG",
        subtitle: "Partner - Corporate Finance",
        experience: "15+ years in finance consulting",
        teaching: "Financial statement analysis and accounting standards",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },

      {
        name: "Mr. Devendra Shah",
        title: "Chief Financial Officer",
        company: "Apex Financial",
        subtitle: "CFO & Corporate Finance Leader",
        experience: "Former Director of Portfolio Strategy",
        teaching: "Management accounting and corporate finance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },

      // ===========================
      // Auditing (Starts Here)
      // ===========================
      {
        name: "Mr. Rajat Mathur",
        title: "Managing Director",
        company: "Morgan Stanley",
        subtitle: "MD, India at Morgan Stanley",
        experience: "Ex Managing Director at Goldman Sachs",
        teaching: "Corporate strategy and financial markets",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "auditing",
      },

      {
        name: "Mr. Manoj Kohli",
        title: "Corporate Audit Advisor",
        company: "SoftBank",
        subtitle: "Former Country Head at SoftBank India",
        experience: "Ex MD at Bharti Airtel",
        teaching: "Internal audit and corporate governance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "auditing",
      },

      {
        name: "Mr. Naveen Munjal",
        title: "Audit & Compliance Director",
        company: "Hero Electric",
        subtitle: "Founder & MD at Hero Electric",
        experience: "Ex VP at Hero MotoCorp",
        teaching: "Operational auditing and compliance frameworks",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "auditing",
      },

      {
        name: "Ms. Shalini Iyer",
        title: "Risk & Audit Partner",
        company: "BCG",
        subtitle: "Partner - Governance & Risk Advisory",
        experience: "15+ years in audit and consulting",
        teaching: "Risk assessment and corporate governance",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "auditing",
      },

      {
        name: "Mr. Devendra Shah",
        title: "Chief Audit Executive",
        company: "Apex Financial",
        subtitle: "Head of Internal Audit",
        experience: "Former Director of Corporate Finance",
        teaching: "Internal controls and financial auditing",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "auditing",
      },
    ],
  },
  
  // =========================================================================
  // CERTIFIED BUSINESS ACCOUNTANT (CBA) LAYOUT ASSETS CONFIGURATION
  // Renders on: /certified-business-accountant
  // =========================================================================
  assets: {
    // Renders as the main student hero cover image in ProgramHero
    heroImage: "/images/certified-business-accountant-student-sunitha-raj-got-jobs.png",
    
    // Renders under "Find our faculty at -" banner in ProgramHero
    internshipPartnerLogo: "/charter-partner/certified_business_accountant_internship_partner.avif",
    
    // Renders as the industrial faculty partnership logo badge in ProgramHero
    industrialFacultyLogo: "/images/programmes/industrial_faculty.avif",
    
    // Renders as the list of placement partner logos in TrackRecord
    hiredCompaniesBanner: "/images/program-placements/CBA_Hired_Company.avif",
    
    // Renders on the right side of AIDegreeProgram
    campusImage: "/images/programmes/certificate.JPG",
    
    // Renders at the bottom of the accreditation details in AIDegreeProgram
    disclaimerText: "Every CBA™ (Certified Business Accountant) completed students who fulfil the minimum requirements will be eligible to apply for a US-CMA exam, Visa, Residence permit, allowing them to search for employment at Top 4.",
    
    // Renders as the weekly timetable schedule image in WeekAtUnion
    timetableImage: "charters-business/images/weekattetr/ug-timetable",
    
    // Renders cityscapes in CurriculumSection
    curriculumCityscapes: {
      dubai: "/images/dgm-tools/Charters-classroom.avif",
      india: "/images/dgm-tools/Charters-classroom.avif",
      singapore: "/images/dgm-tools/Charters-classroom.avif",
      ghana: "/images/dgm-tools/Charters-classroom.avif",
      usa: "/images/dgm-tools/Charters-classroom.avif",
      argentina: "/images/dgm-tools/Charters-classroom.avif",
      europe: "/images/dgm-tools/Charters-classroom.avif",
      internship: "/images/dgm-tools/Charters-classroom.avif",
    },
    
    // Renders as ChartCard headers in TrackRecord
    chartTitles: {
      card1: "Paid Internship in 557+ Companies Across 7 Countries",
      card2: "87% student got full time jobs offer before end intrashiph"
    },
    
    // Renders the EMI value, payment months, and career tracks inside PricingTabs
    pricing: {
      emiAmount: "₹5,499",
      emiMonths: "8 months",
      jobTracks: [
        { name: "Corporate Finance & Accounting" },
        { name: "Financial Planning & Analysis (FP&A)" },
        { name: "US-CMA & ACCA Certifications", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" },
        { name: "AI-led Business Valuation", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" }
      ]
    }
  }
};
