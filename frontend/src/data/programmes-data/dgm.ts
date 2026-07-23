import type { Programme } from "./types";
import { defaultCurriculumSection } from "./curriculum-default";
import { facultyMembers } from "@/data/faculty";
// DGM reorders its term tabs: Cultural Immersions appears before Business Immersions
const dgmCurriculumSection = structuredClone(defaultCurriculumSection);

// ── "AI-Ready: Hands-on Learning" Section ──
// You can customize the subtitle text and the "Skills you'll learn" bubbles specifically for the DGM course here.
// Any edits made here will NOT affect the CBA or TBM pages.
dgmCurriculumSection.subtitle = "We trained to contribute in real business environments—earning recognition from managers";
dgmCurriculumSection.tabOrder = [
  "courses",
  "collaboration",
  "cultural",
  "business",
];
dgmCurriculumSection.skillsData = {
  previewSkills: ["Client Services", "Marketing", "Data Storytelling", "Social Media Strategy", "Spreadsheet Software", "Campaign Management", "Paid media", "Email Marketing", "Online Advertising", "Social Media Marketing", "Web Presence"],
  modalTitle: "Skills and tools you'll learn",
  modalSkillsGain: {
    title: "Skills you'll gain",
    skills: [
      "Client Services", "Marketing", "Data Storytelling", "Social Media Strategy",
      "Spreadsheet Software", "Campaign Management", "Paid media", "Email Marketing",
      "Online Advertising", "Social Media Marketing", "Web Presence", "Interviewing Skills",
      "Social Media Management", "Order Fulfillment", "Search Engine Optimization",
      "Media Planning", "Loyalty Programs", "Performance Measurement", "E-Commerce"
    ]
  },
  modalToolsLearn: {
    title: "Tools you'll learn",
    tools: ["Google Ads", "Google Analytics", "Canva"]
  }
};
dgmCurriculumSection.tabLabels = { cultural: "Tools & Technology" };

// ── DUBAI (Term 1 / Month 1) overrides ──
const dubai = dgmCurriculumSection.items[0];
dubai.term = "Month 01";
dubai.title = "FOUNDATION";
dubai.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
  { text: "Beginner", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2" },
];
dubai.outcome = "Understanding AI impact on Marketing & Customer persona, Build a website + write SEO content, Google ranking best practices";
dubai.project = undefined;
dubai.termImage = "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif";
dubai.courses = {
  initial: [
    { code: "MAST 101", title: "Digital Marketing orientation, sales funnel & 4Ps/7Ps" },
    { code: "MAST 201", title: "Understanding AI - Gen AI and Agentic AI; Assistive and Autonomous Marketing (ChatGPT, Claude and Priplexity)" },
    { code: "MAST 301", title: "Introduction of ai-driven customer understanding & journey mapping" },
    { code: "MAST 401", title: "Website UX Principles + Tools, domains, hosting, DNS, browsers - Designing Landing Pages that Convert" },
    { code: "MAST 501", title: "AI-Powerd Graphic design for websites & social media calender (Canva, adobe)" },
  ],
  more: [
    { code: "SAMA 101", title: "Website plugins - Ai-chatbot, lead form, WhatsApp button" },
    { code: "SAMA 201", title: "Introduction of SEO, AEO & GEO difference with ranking factors" },
    { code: "SAMA 301", title: "On-Page SEO — Titles, Meta, Topic Clusters, internal links" },
    { code: "SAMA 401", title: "Keyword research & Search-intent mapping, Google trands analysis" },
    { code: "FIFI 101", title: "AI-Powerd compititor Analysis, google (E-E-A-T) model & google penalizetion" },
    { code: "PRTC 101", title: "Corporate english specking" },
    { code: "COMM 101", title: "Profesonal personal branding" },
    { code: "COMM 201", title: "Profesonal digital Networking" },
  ],
};

// ── MONTH 02 ──
const m2 = dgmCurriculumSection.items[1];
m2.term = "Month 02";
m2.title = "SEO & SOCIAL";
m2.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
];
m2.outcome = "Rank content on Google, grow organic social following";
m2.project = undefined;
m2.termImage = "/images/dgm-tools/Charters-classroom.avif";
m2.courses = {
  initial: [
    { code: "MAST 102", title: "Technical SEO: Crawl engineering, Rendering, Schema markup site speed, Core Web Vitals, sitemaps" },
    { code: "MAST 202", title: "Entity SEO, Knowledge graph, EEAT engineering, Topical maps, Compititor web analysis with AI" },
    { code: "MAST 302", title: "Google Search Console setup & analysis" },
    { code: "MAST 402", title: "Backlink building: white hat strategies" },
    { code: "MAST 502", title: "Locazation architecture & GBP domination" },
  ],
  more: [
    { code: "SAMA 102", title: "Instagram Marketing - Reels, hashtags, algorithm" },
    { code: "SAMA 202", title: "Facebook Page & Group marketing" },
    { code: "SAMA 302", title: "YouTube channel setup & video SEO" },
    { code: "SAMA 402", title: "LinkedIn for personal branding & B2B" },
    { code: "FIFI 102", title: "Structure thinking" },
    { code: "PRTC 102", title: "Personal Video creator studio" },
    { code: "COMM 102", title: "Body lunguage tranning" },
  ],
};

// ── MONTH 03 (Intermediate+) ──
const m3 = dgmCurriculumSection.items[2];
m3.term = "Month 03";
m3.title = "AI-Powered Content Marketing & ANALYTICS";
m3.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
  { text: "Intermediate", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2" },
];
m3.project = undefined;
m3.termImage = "/images/dgm-tools/Charters-classroom.avif";
m3.courses = {
  initial: [
    { code: "MAST 103", title: "Developing a Content with Flywheel Strategy, Goals, User Personas, Content Types, Channel Selection & Distributing and Promoting Content" },
    { code: "MAST 203", title: "Content Calendar creation & Optimization, Content Performance analysis Post, Email, WhatsApp(30-day plan)" },
    { code: "MAST 303", title: "Google Tag Manager and Google Analytics 4 — setup, events, goals" },
    { code: "MAST 403", title: "Whatsapp growth marketing & automation— list building, segmentation" },
    { code: "MAST 503", title: "Bulk Email marketing strategy, automation, analysis" },
  ],
  more: [
    { code: "SAMA 103", title: "Campaign Content Calendar creation — subject lines, CTAs, design" },
    { code: "SAMA 203", title: "Conversion Rate Optimisation (CRO) & heatmaps" },
    { code: "SAMA 303", title: "Marketing funnel mapping (TOFU/MOFU/BOFU)" },
    { code: "SAMA 403", title: "Google Data Studio dashboards & reporting" },
    { code: "FIFI 103", title: "Mobile Marketing" },
    { code: "PRTC 103", title: "Viral Grwoth hack Gtrategy" },
    { code: "COMM 103", title: "Leadershiph social impact tranning" },
    { code: "COMM 203", title: "Personal Video grwoth strategy creator studio" },
  ],
};

// ── MONTH 04 ──
const m4 = dgmCurriculumSection.items[3];
m4.term = "Month 04";
m4.title = "Google Ads - Architecture, Auction & Bidding Mastery";
m4.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
];
m4.outcome = "Set up & manage paid campaigns with real budgets";
m4.project = undefined;
m4.termImage = "/images/dgm-tools/Charters-classroom.avif";
m4.courses = {
  initial: [
    { code: "MAST 104", title: "Introduction to PPC: how ad auctions work" },
    { code: "MAST 204", title: "Google Search Ads: structure, match types, extensions, Account architecture for automation" },
    { code: "MAST 304", title: "Auction mechanics, Quality Score deep dive, Smart Bidding (tCPA, tROAS, MaxConv, MaxConvValue)" },
    { code: "MAST 404", title: "Portfolio strategies, Bid strategy testing, Budget pacing, Conversion value rules" },
    { code: "MAST 504", title: "Advanced Search (RSA pinning, AI Max, negatives, search themes)" },
  ],
  more: [
    { code: "SAMA 104", title: "Shopping feed engineering, custom labels, PMax asset groups" },
    { code: "SAMA 204", title: "Audience signals, Brand exclusions, PMax + Standard Shopping hybrid, Scripts for placement & search-term mining" },
    { code: "SAMA 304", title: "YouTube ABCDs creative framework, Video Reach, Video Action, Demand Gen campaigns, Display & Discovery" },
    { code: "SAMA 404", title: "Customer match + lookalikes, App Campaigns (ACi/ACe), Brand Lift & Search Lift studies, Full-funnel attribution" },
    { code: "FIFI 104", title: "Meta Ads Manager - Facebook & Instagram Account simplification" },
    { code: "PRTC 104", title: "Meta auction dynamics, Advantage+ Shopping (ASC) vs BAU, Advantage+ App, CBO vs ABO, Ad set consolidation" },
    { code: "COMM 104", title: "Learning phase exit, Cost cap vs bid cap vs lowest cost, ROAS-based scaling, Audience consolidation" },
    { code: "COMM 204", title: "Creative concept vs iteration framework, UGC pipeline & hook libraries, Dynamic creative" },
    { code: "COMM 304", title: "Frequency & CPMr management, CAPI + server-side GTM, Event Match Quality (EMQ)" },
    { code: "COMM 404", title: "Aggregated Event Measurement, iOS 17/18 attribution, Geo holdout testing" },
    { code: "COMM 504", title: "Custom audiences, lookalike, and retargeting, Ad copywriting - hook, body, CTA frameworks" },
    { code: "COMM 604", title: "Google partner Display & YouTube Ads" },
  ],
};

// ── MONTH 05 (PRO) ──
const m5 = dgmCurriculumSection.items[4];
m5.term = "Month 05";
m5.title = "PRO & Faculty guided internship";
m5.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
  { text: "PRO", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2" },
];
m5.project = undefined;
m5.termImage = "/images/dgm-tools/Charters-classroom.avif";
m5.courses = {
  initial: [
    { code: "MAST 105", title: "E-Commerce landscape in India — Amazon, Flipkart, Shopify" },
    { code: "MAST 205", title: "Product listing optimization — titles, images, A+ content" },
    { code: "MAST 305", title: "Performance marketing for e-commerce (Shopping Ads)" },
    { code: "MAST 405", title: "Meta Catalog & dynamic product ads" },
    { code: "MAST 505", title: "Influencer marketing — micro vs macro, ROI" },
  ],
  more: [
    { code: "SAMA 105", title: "AI tools — ChatGPT, Canva AI, Jasper, Copy.ai" },
    { code: "SAMA 205", title: "Video marketing & Reels strategy" },
    { code: "SAMA 305", title: "Online Reputation Management (ORM)" },
    { code: "SAMA 405", title: "App Marketing & ASO basics" },
  ],
};

// ── MONTH 06 (PRO) ──
const m6 = dgmCurriculumSection.items[5];
m6.term = "Month 06";
m6.title = "Growth Engineer, PRO & Faculty guided internship";
m6.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
  { text: "PRO", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2" },
];
m6.project = undefined;
m6.termImage = "/images/dgm-tools/Charters-classroom.avif";
m6.courses = {
  initial: [
    { code: "MAST 106", title: "Full-funnel 360° campaign strategy" },
    { code: "MAST 206", title: "Digital marketing for local businesses" },
    { code: "MAST 306", title: "The Growth Engineer and growth hack" },
    { code: "MAST 406", title: "Freelancing — platforms, pricing, proposals" },
    { code: "MAST 506", title: "Portfolio building — case studies, personal brand" },
  ],
  more: [
    { code: "SAMA 106", title: "Agency model — client management, retainers" },
    { code: "SAMA 206", title: "Resume + LinkedIn optimization for DM jobs" },
    { code: "SAMA 306", title: "Interview preparation — mock rounds" },
    { code: "SAMA 406", title: "Emerging trends 2025 — AI, voice, short video" },
    { code: "FIFI 106", title: "CAPSTONE: Full campaign presentation" },
  ],
};

// ── MONTH 07 (PRO) ──
const m7 = dgmCurriculumSection.items[6];
m7.term = "Month 07";
m7.title = "Capstone: Build & Launch a Digital Marketing Agency";
m7.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
  { text: "PRO", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2" },
];
m7.outcome = "Pai-Lam help to build won digital company";
m7.project = undefined;
m7.termImage = "/images/dgm-tools/Charters-classroom.avif";
m7.courses = {
  initial: [],
  more: [],
};

// Each term (1-5) gets its own image; terms 6-7 reuse the first image
dgmCurriculumSection.items[0].culturalImage = "/images/dgm-tools/1.jpg";
dgmCurriculumSection.items[1].culturalImage = "/images/dgm-tools/2.avif";
dgmCurriculumSection.items[2].culturalImage = "/images/dgm-tools/3.avif";
dgmCurriculumSection.items[3].culturalImage = "/images/dgm-tools/4.avif";
dgmCurriculumSection.items[4].culturalImage = "/images/dgm-tools/5.avif";
dgmCurriculumSection.items[5].culturalImage = "/images/dgm-tools/1.jpg";
dgmCurriculumSection.items[6].culturalImage = "/images/dgm-tools/1.jpg";

// ── MONTH 08 ──
const m8 = dgmCurriculumSection.items[7];
m8.term = "Month 08";
m8.title = "Internship";
m8.badges = [
  { text: "On Campus", className: "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold" },
];
m8.termImage = "/images/dgm-tools/Charters-classroom.avif";

// DGM — Digital Growth & Marketing course data
export const dgm: Programme = {
  id: "2",
  slug: "digital-growth-&-marketing",
  // Dropdown Data
  dropdown: {
    title: "DGM™ (Digital Growth & Marketing)",
    description:
      "Industry-focused program that bridges the gap between academic learning and corporate requirements. Emphasis on practical skills, live projects, and leadership development through hands-on experience with real business challenges.",
    duration: "7 Months Full-time",
    stats: [
      { value: "24", label: "MONTHS" },
      { value: "200+", label: "CASE STUDIES" },
      { value: "250+", label: "COMPANIES" },
      { value: "92%", label: "SUCCESS RATE" },
    ],
    link: "/post-graduate-diploma-in-management",
    imageUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310639/class-of-DGM_Digital_Growth_Marketing_kilwdn.avif",
  },

  // Card Data
  card: {
    image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310639/class-of-DGM_Digital_Growth_Marketing_kilwdn.avif",
    hasVideo: false,
    rating: { score: 4.7, reviews: 1876 },
    title: "DGM™(Digital Growth & Marketing)",
    level: "Certified",
    certificateType: "Corporate Certificate",
    description:
      "Master AI-driven performance marketing, SEO, social media, e-commerce growth, brand strategy, and media planning with top industry mentors.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "3 Months theory + 4 Months in-class intranship" },
    deadline: { type: "Round 1: 30th Oct '25" },
    careerOutcomes: ["Management Trainee", "Project Manager"],
    jobOpenings: "2.12 Cr",
    expectedCtc: {
      traditional: "2.8L",
      cmp: "7.3L",
    },
    partnerLogos: {
      partners: "/charter-partner/charter-digital-growth-marketing-partners.avif",
      internships: "/charter-partner/digital_growth_marketing_internship_partner.avif",
    },
  },
  // Hero Data
  hero: {
    badge: "Professional Course",
    categoryLabel: "MANAGEMENT SPECIALIZATION",
    title: {
      main: "POST GRADUATE DIPLOMA IN",


    },
    description:
      "POST GRADUATE DIPLOMA IN",
    stats: [
      { label: "Average CTC", value: "7.5 LPA" },
      { label: "Placement Rate", value: "95%" },
    ],
    alumniLabel: "Find our student at -",
    alumniCompanies: [
      { name: "KPMG", logo: "/images/companies/kpmg.png" },
      { name: "TCS", logo: "/images/companies/tcs.png" },
      { name: "Infosys", logo: "/images/companies/infosys.png" },
    ],
    actions: {
      primaryText: "Apply Now",
      secondaryText: "Download Brochure",
    },
    enrolledCount: "1,127",
    instructors: {
      badge: "India's top 1%",
      title: "CMO/Sr Ads Specialist/Growth Hacker Industry Leaders",
      aiSkills: {
        title: "New AI skills",
        description: "This Professional Certificate includes new videos on how to use AI in digital marketing & e-commerce.",
        skills: [
          "Boost your digital marketing skills with AI",
          "Use AI to help you understand your audience",
          "Kickstart marketing strategy ideas with AI",
          "Use AI to compare two campaign proposals",
          "Improve your email marketing using AI",
          "Brainstorm website copy ideas with AI"
        ]
      }
    },
    heroImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784641527/DGM_sashank-_dabjani-place-top-company_h8okn7.avif",
    floatingCards: {
      topRight: {
        badge: "Live Sessions",
        students: "1,800+",
        rating: 4.7,
        stars: "★★★★★",
      },
      bottomLeft: {
        label: "Placement Rate",
        percentage: "92%",
        subLabel: "Career Growth",
        ctcIncrease: "↗ 2.5x Salary Hike",
      },
    },
  },
  // Program Info
  programInfo: {
    duration: "2 Years",
    details: [
      { label: "LOCATION", value: "4 Countries", dotColor: "bg-cyan-500" },
      {
        label: "ELIGIBILITY",
        value: "Bachelor's Degree",
        dotColor: "bg-pink-500",
      },
      { label: "FORMAT", value: "Full Time", dotColor: "bg-yellow-500" },
      { label: "START DATE", value: "Sept 2026", dotColor: "bg-green-500" },
    ],
  },

  // Track Record
  trackRecord: {
    stats: [
      { value: "24.5", unit: "LPA", label: "Average CTC" },
      { value: "2.5", unit: "x", label: "Average CTC Jump" },
      { value: "15-40", unit: "LPA", label: "CTC Salary Range" },
      { value: "92", unit: "%", label: "Students Placed" },
    ],
    experienceData: [
      { label: "0-1 YRS", value: 12, percentage: "12%" },
      { label: "1-3 YRS", value: 45, percentage: "45%" },
      { label: "3-5 YRS", value: 28, percentage: "28%" },
      { label: "5-8 YRS", value: 10, percentage: "10%" },
      { label: "8-10YR", value: 3, percentage: "3%" },
      { label: "10+ YRS", value: 2, percentage: "2%" },
    ],
    backgroundData: [
      { label: "GENERALISTS", value: 28, percentage: "28%" },
      { label: "MARKETING", value: 18, percentage: "18%" },
      { label: "SALES_DEV", value: 16, percentage: "16%" },
      { label: "ENTREPRENEURS", value: 12, percentage: "12%" },
      { label: "ENGINEERING", value: 9, percentage: "9%" },
      { label: "FINANCE", value: 10, percentage: "10%" },
      { label: "PRODUCT", value: 7, percentage: "7%" },
    ],
    impactCards: [
      {
        title: "Fast-track career growth through practical learning",
        description:
          "Management Trainee, Project Manager, Business Development roles designed for rapid career progression in leading companies.",
      },
      {
        title: "Industry-ready skills through live projects",
        description:
          "Work on real business challenges with 200+ live projects, case studies, and hands-on assignments that prepare you for corporate roles.",
      },
      {
        title: "Strong industry network and placement support",
        description:
          "Connect with 250+ recruiting companies, industry mentors, and successful alumni network for career opportunities.",
      },
    ],
    companyLogos: [
      { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
      { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
      { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
      { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
      { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
      {
        name: "Tech Mahindra",
        logo: "https://logo.clearbit.com/techmahindra.com",
      },
      { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
      { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
      { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
      { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
      { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
      { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
      { name: "HP", logo: "https://logo.clearbit.com/hp.com" },
      { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
      { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
      {
        name: "Salesforce",
        logo: "https://logo.clearbit.com/salesforce.com",
      },
    ],
  },

  degreeProgram: {
    badge: "CERTIFICATION & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "DGM™",
      suffix: "Certification",
    },
    auditorText: "Our placement reports are audited by <strong>AnalystPK</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for transparent and consistent compensation data.",
    accordions: [
      {
        id: "placement",
        title: "Outstanding Placement Record and Career Support",
        items: [
          "**92% placement** rate with top companies across diverse industries",
          "**2.5x average salary** jump post-PGDM with CTC ranging from 15-40 LPA",
          "Alumni at **KPMG, TCS, Infosys, Wipro, HCL, Accenture** in managerial roles",
          "**250+ recruiting partners** including IT giants, consulting firms, and FMCG companies",
          "**100% placement assistance** with dedicated support until job placement",
        ],
      },
      {
        id: "practical",
        title: "Industry-Focused Practical Learning Approach",
        items: [
          "**200+ live projects** with real companies providing practical management experience",
          "**Mandatory summer internship** with stipend at leading companies",
          "**Industry mentorship program** - learn from practicing managers and business leaders",
          "**Guest lectures** by 50+ CEOs, entrepreneurs, and senior executives annually",
          "**Simulation exercises** for supply chain, finance, marketing, and operations management",
        ],
      },
      {
        id: "curriculum",
        title: "Flexible and Industry-Relevant Curriculum",
        items: [
          "**Autonomous curriculum** - updated every 6 months based on industry requirements",
          "**Specialization tracks** in Marketing, Finance, HR, Operations, Business Analytics",
          "**Skill development modules** in Excel, PowerBI, SQL, Python, and business tools",
          "**Soft skills training** - communication, leadership, negotiation, presentation skills",
          "**Capstone project** in final term solving real business problems",
        ],
      },
      {
        id: "recognition",
        title: "PGDM Recognition and Career Advantages",
        items: [
          "**AICTE approved** Post Graduate Diploma in Management",
          "**Equivalent to MBA** as per AICTE and accepted by all employers",
          "**Industry preferred** due to practical focus and updated curriculum",
          "**Fast career growth** - PGDM graduates reach managerial positions 20% faster",
          "**Higher education ready** - eligible for PhD and executive programs",
        ],
      },
    ],
    academicPartners: [{ name: "Charter's Business College" }],
    immersions: [{ name: "Industry Visits" }],
    campusImage: {
      src: "/images/programmes/indus.webp",
      alt: "Charter's Business College Campus",
    },
  },
  // Curriculum Section (per-programme, isolated copy)
  curriculumSection: dgmCurriculumSection,

  // Curriculum
  curriculum: {
    categories: [
      { id: "core", label: "CORE", title: "Core Management Courses" },
      { id: "specialization", label: "SPEC", title: "Specialization Tracks" },
    ],
    courseData: {
      core: [
        {
          term: "TERM 1",
          location: "India",
          courses: [
            { code: "PGDM 101", title: "Principles of Management" },
            { code: "PGDM 102", title: "Business Economics" },
            { code: "PGDM 103", title: "Accounting for Managers" },
            { code: "PGDM 104", title: "Marketing Fundamentals" },
            { code: "PGDM 105", title: "Organizational Behavior" },
          ],
        },
        {
          term: "TERM 2",
          location: "India",
          courses: [
            { code: "PGDM 201", title: "Financial Management" },
            { code: "PGDM 202", title: "Operations & Supply Chain" },
            { code: "PGDM 203", title: "Business Analytics" },
            { code: "PGDM 204", title: "Human Resource Management" },
            { code: "PGDM 205", title: "Strategic Management" },
          ],
        },
      ],
      specialization: [
        {
          term: "TERM 3",
          location: "Mumbai",
          courses: [
            { code: "SPEC 301", title: "Advanced Marketing Strategy" },
            { code: "SPEC 302", title: "Financial Analysis & Planning" },
            { code: "SPEC 303", title: "Operations Excellence" },
            { code: "SPEC 304", title: "HR Analytics" },
          ],
        },
      ],
    },
  },

  // Learn Apply
  learnApply: {
    title: {
      prefix: "Learn. Apply. Reflect.",
      highlight: "Repeat.",
    },
    subtitle: `Hands-on courses and workshops designed to build real businesses—<br class="hidden sm:block" />because real learning comes from real applications.`,
    categories: [
      { id: "growth", label: "GRW", title: "Growth Marketing" },
      { id: "leadership", label: "LEAD", title: "Leadership Skills" },
    ],
    courseData: {
      practical: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            { code: "PRAC 101", title: "How to manage projects effectively" },
            { code: "PRAC 102", title: "How to lead diverse teams" },
            { code: "PRAC 103", title: "How to solve business problems" },
          ],
        },
      ],
      leadership: [
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            { code: "LEAD 101", title: "How to develop leadership presence" },
            { code: "LEAD 102", title: "How to make strategic decisions" },
          ],
        },
      ],
    },
  },

  // Scholarships
  scholarshipConfig: {
    subtitle: "Financial Aid",
    title: { prefix: "Empowering Dreams Through ", highlight: "Scholarships" },
    description: "We never let financial hardships stand in the way of quality education. Scholarships cover up to 100% of the tuition."
  },
  scholarships: [
    {
      id: "merit",
      title: "The Merit Scholarship",
      description:
        "For outstanding academic achievers with exceptional entrance exam scores and strong academic records.",
      eligibility: "High entrance exam scores",
    },
    {
      id: "diversity",
      title: "The Diversity Scholarship",
      description:
        "Supporting diverse backgrounds and perspectives in management education.",
      eligibility: "Underrepresented backgrounds",
    },
    {
      id: "women",
      title: "Women Leadership Scholarship",
      description:
        "Empowering women to take leadership roles in business and management.",
      eligibility: "Women candidates with leadership potential",
    },
  ],
  // FAQ
  faq: {
    subtitle: "FAQS",
    title: "Have more Questions?",
    categories: [
      {
        id: "program",
        name: "Program",
        faqs: [
          {
            id: "what-is-pgdm",
            question: "What is PGDM?",
            answer:
              "Post Graduate Diploma in Management (PGDM) is a 2-year industry-focused management program that emphasizes practical learning, live projects, and real-world business challenges. Unlike MBA, PGDM is offered by autonomous institutes and has more flexibility in curriculum design based on industry needs.",
          },
          {
            id: "pgdm-vs-mba",
            question: "What is the difference between PGDM and MBA?",
            answer:
              "PGDM is a diploma program offered by autonomous business schools with industry-focused curriculum, while MBA is a degree offered by universities. PGDM programs are often more flexible and updated frequently based on industry trends. Both are equally valued by employers and offer similar career opportunities.",
          },
          {
            id: "eligibility",
            question: "What are the eligibility criteria?",
            answer:
              "Candidates must have a Bachelor's degree in any discipline from a recognized university. Work experience is preferred but not mandatory. We welcome candidates from diverse backgrounds including engineering, commerce, arts, and sciences.",
          },
          {
            id: "practical-learning",
            question: "How much practical learning is included?",
            answer:
              "Our PGDM program emphasizes 60% practical learning through 200+ live projects, case studies, industry visits, and internships. Students work on real business challenges with guidance from industry mentors and faculty.",
          },
        ],
      },
      {
        id: "admission",
        name: "Admission",
        faqs: [
          {
            id: "how-to-apply",
            question: "How do I apply for PGDM?",
            answer:
              "Applications can be submitted online through our admission portal. The process includes entrance exam scores, group discussion, and personal interview. We accept scores from CAT, XAT, GMAT, and CMAT.",
          },
          {
            id: "entrance-exams",
            question: "Which entrance exams are accepted?",
            answer:
              "We accept CAT, XAT, GMAT, and CMAT scores. Candidates must have valid scores from current or previous year.",
          },
        ],
      },
      {
        id: "placement",
        name: "Placement",
        faqs: [
          {
            id: "placement-record",
            question: "What is the placement record?",
            answer:
              "92% of our PGDM graduates receive job offers with an average CTC of ₹24.5 LPA and average salary jump of 2.5x. Top recruiters include KPMG, TCS, Infosys, and leading startups.",
          },
          {
            id: "internships",
            question: "Are internships provided?",
            answer:
              "Yes, summer internships are mandatory between first and second year. Our placement cell facilitates internships with 250+ partner companies offering stipends ranging from ₹30,000 to ₹80,000 per month.",
          },
        ],
      },
      {
        id: "fees",
        name: "Fees",
        faqs: [
          {
            id: "fee-structure",
            question: "What is the fee structure?",
            answer:
              "The program fee is competitive with flexible payment options including semester-wise installments and EMI plans. Scholarships are available for meritorious students covering up to 100% tuition. Contact admissions for detailed fee information.",
          },
        ],
      },
    ],
  },
  students: {
    categories: [
      { id: "jan", name: "January" },
      { id: "apr", name: "April" },
      { id: "jul", name: "July" },
    ],

    students: [
      {
        name: "Sunita Das",
        batch: "AUG 2025",
        city: "Kolkata",
        company: "TATA",
        role: "Executive Finance",
        timeToPlace: "Just in 7 months",
        previousCollege: "Goenka College",
        background: "2nd Year BCOM Fresher",
        internship: "Kripton PVT Ltd / Horyzen PVT Ltd — Quarter Taxation, 2025 income tax, strategy on price section",
        researchPaper: "How AI impacts on taxation automation at global countries",
        caseStudies: "Why Amule SAP automation failed 100 million revenue at 2...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619361/Varsha_Nadia_cpaagy.avif",
        linkedinUrl: "#",
        category: "jan",
      },
      {
        name: "Rahul Sharma",
        batch: "JAN 2025",
        city: "Mumbai",
        company: "TATA",
        role: "Finance Analyst",
        timeToPlace: "Just in 7 months",
        previousCollege: "Mumbai University",
        background: "3rd Year BCOM Fresher",
        internship: "Deloitte India — Tax advisory and financial reporting",
        researchPaper: "Impact of GST on SME growth in India",
        caseStudies: "How Infosys restructured its finance division post-2020...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619359/Somnath_jha_zdztpx.avif",
        linkedinUrl: "#",
        category: "jan",
      },
      {
        name: "Priya Mehta",
        batch: "JAN 2025",
        city: "Delhi",
        company: "TATA",
        role: "Operations Executive",
        timeToPlace: "Just in 6 months",
        previousCollege: "Delhi University",
        background: "Graduate Fresher",
        internship: "PwC India — Business process optimization",
        researchPaper: "Digital transformation in Indian banking sector",
        caseStudies: "Why Jet Airways failed despite strong brand equity...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619360/susmita_roy_umrfar.avif",
        linkedinUrl: "#",
        category: "jan",
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
        internship: "WishCare — Brand marketing and influencer campaigns",
        researchPaper: "Social media growth strategies for D2C brands",
        caseStudies: "How WishCare built a beauty-first digital audience...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619358/sneha_shing_kymmxk.avif",
        linkedinUrl: "#",
        category: "jan",
      },
      {
        name: "Amit Kumar",
        batch: "APR 2025",
        city: "Bangalore",
        company: "TATA",
        role: "Business Analyst",
        timeToPlace: "Just in 7 months",
        previousCollege: "Christ University",
        background: "BBA Graduate Fresher",
        internship: "KPMG — Market research and data analysis",
        researchPaper: "Role of fintech in financial inclusion in rural India",
        caseStudies: "How Byju's lost market cap despite rapid expansion...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619356/sankar_g4btwe.avif",
        linkedinUrl: "#",
        category: "apr",
      },
      {
        name: "Neha Singh",
        batch: "APR 2025",
        city: "Pune",
        company: "TATA",
        role: "HR Executive",
        timeToPlace: "Just in 7 months",
        previousCollege: "Symbiosis College",
        background: "BBA HR Fresher",
        internship: "Wipro HR — Talent acquisition and onboarding",
        researchPaper: "Employee retention strategies in post-pandemic era",
        caseStudies: "How Zomato scaled its workforce from 500 to 5000...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619355/Nishita_varma_ttxyb9.avif",
        linkedinUrl: "#",
        category: "apr",
      },
      {
        name: "Riya Kapoor",
        batch: "APR 2026",
        city: "Kolkata",
        company: "Jio",
        role: "Growth Engineer",
        timeToPlace: "10 Months later",
        previousCollege: "Techno India",
        background: "2nd Year MCA Fresher",
        internship: "Jio Platforms — Growth engineering and analytics",
        researchPaper: "AI-based customer engagement strategies in telecom industry",
        caseStudies: "How Jio scaled digital adoption across India...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619354/i5nqr8hxd3j1gbbyxtdu_mfkng1.avif",
        linkedinUrl: "#",
        category: "apr",
      },
      {
        name: "Sarah Jenkins",
        batch: "APR 2026",
        city: "Chennai",
        company: "Infosys",
        role: "Financial Auditor",
        timeToPlace: "Just in 6 months",
        previousCollege: "Madras University",
        background: "BCOM Fresher",
        internship: "Infosys — Corporate Finance",
        researchPaper: "Impact of AI on modern auditing",
        caseStudies: "Infosys financial restructuring...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619348/Govinth_mrrqka.avif",
        linkedinUrl: "#",
        category: "apr",
      },
      {
        name: "Ravi Patel",
        batch: "JUL 2025",
        city: "Ahmedabad",
        company: "TATA",
        role: "Marketing Executive",
        timeToPlace: "Just in 7 months",
        previousCollege: "Gujarat University",
        background: "BCOM Graduate Fresher",
        internship: "Ogilvy India — Digital marketing campaigns",
        researchPaper: "Social media influence on consumer buying behavior",
        caseStudies: "How Amul maintained brand dominance for 70+ years...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619353/gpfdgbkgv6dxnksnqhpq_kbxbod.avif",
        linkedinUrl: "#",
        category: "jul",
      },
      {
        name: "John Doe",
        batch: "JUL 2025",
        city: "Delhi",
        company: "Amazon",
        role: "Financial Analyst",
        timeToPlace: "Just in 5 months",
        previousCollege: "Delhi University",
        background: "BCOM Fresher",
        internship: "Amazon India — Financial Planning",
        researchPaper: "E-commerce profitability metrics",
        caseStudies: "Amazon's inventory management...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619348/Govinth_mrrqka.avif",
        linkedinUrl: "#",
        category: "jul",
      },
      {
        name: "Jane Smith",
        batch: "JUL 2025",
        city: "Mumbai",
        company: "Google",
        role: "Marketing Manager",
        timeToPlace: "Just in 6 months",
        previousCollege: "Mumbai University",
        background: "BBA Fresher",
        internship: "Google India — Ad campaigns",
        researchPaper: "Search engine marketing trends",
        caseStudies: "Google Ads optimization...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619347/ca6lpkxc1aeaqngb0wwg_ttqr7a.avif",
        linkedinUrl: "#",
        category: "jul",
      },
      {
        name: "Alex Kumar",
        batch: "JUL 2025",
        city: "Bangalore",
        company: "Microsoft",
        role: "Business Consultant",
        timeToPlace: "Just in 8 months",
        previousCollege: "Christ University",
        background: "MBA Fresher",
        internship: "Microsoft India — Strategy",
        researchPaper: "Cloud adoption strategies",
        caseStudies: "Microsoft Azure growth...",
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619346/anupom_banarjee_ax0gnc.avif",
        linkedinUrl: "#",
        category: "jul",
      },
    ],
  },
  faculty: {
    subtitle: "Learn from industry leaders, academic experts, and seasoned practitioners who bring real-world experience to your education.",
    categories: [
      { id: "leadership", name: "Leadership" },
      { id: "finance", name: "Finance" },
      { id: "consulting", name: "Consulting" },
    ],
    faculty: [
      // Map 'technology' (Digital Marketing) to the 'leadership' tab
      ...facultyMembers.filter(m => m.category === 'technology').map(m => ({ ...m, category: 'leadership' })),

      // Map 'consulting' (Digital Growth Engineer) to the 'finance' tab
      ...facultyMembers.filter(m => m.category === 'consulting').map(m => ({ ...m, category: 'finance' })),

      // Map 'leadership' (Accountancy) to the 'consulting' tab (since consulting data is missing)
      ...facultyMembers.filter(m => m.category === 'leadership').map(m => ({ ...m, category: 'consulting' })),
    ],
  },

  // =========================================================================
  // DIGITAL GROWTH & MARKETING (DGM) LAYOUT ASSETS CONFIGURATION
  // Renders on: /digital-growth-&-marketing
  // =========================================================================
  assets: {
    // Renders as the main student hero cover image in ProgramHero
    heroImage: "/images/certified-business-accountant-student-sunitha-raj-got-jobs.png",

    // Renders under "Find our faculty at -" banner in ProgramHero
    internshipPartnerLogo: "/charter-partner/certified_business_accountant_internship_partner.avif",

    // Renders as the industrial faculty partnership logo badge in ProgramHero
    industrialFacultyLogo: "/images/programmes/industrial_faculty.avif",

    // Renders as the list of placement partner logos in TrackRecord
    hiredCompaniesBanner: "/images/program-placements/DGM_Hired_Company.png",
    campusImage: "/images/programmes/certificate.JPG",
    academicPartnerLogo: "/charter-partner/charter-academic-partner.avif",
    degreeInternshipPartnerLogo: "/charter-partner/charter-intrenshiph-company-around-the-world.avif",
    disclaimerText: "Every DGM™ (Digital Growth & Marketing) completed student who fulfils the minimum requirements will be eligible to apply for professional certifications, international marketing credentials, and global job placement opportunities.",
    timetableImage: "/images/week-at-chartersunion/dgm-week-at-charters-union.png",

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
      emiAmount: "₹6430",
      emiMonths: "total ₹45000",
      secondaryButton: { text: "VIEW EMI" },
      emiPlans: [
        { tenure: 12, type: "No Cost", loanAmount: 379000, rate: "0%", emi: 31583, totalLoanAmount: 379000 },
        { tenure: 18, type: "No Cost", loanAmount: 379000, rate: "0%", emi: 21056, totalLoanAmount: 379000 },
        { tenure: 24, type: "Low Cost", loanAmount: 379000, rate: "4%", emi: 16423, totalLoanAmount: 394160 },
        { tenure: 36, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 14002, totalLoanAmount: 504070 },
        { tenure: 48, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 11370, totalLoanAmount: 545760 },
        { tenure: 60, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 9791, totalLoanAmount: 587450 },
      ],
      jobTracks: [
        { name: "SEO & Growth Marketing" },
        { name: "Brand & Product Management" },
        { name: "Marketing Analytics & Automation", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" }
      ],
      title: "What's included ?",
      features: {
        fundamentals: "Fundamentals",
        classes: "3 Hours classes and 3 Hours Labs Everyday",
        trainers: "Trainers: IIT alumni and Ex-FAANG"
      },
      placementSupport: {
        title: "100% Placement Support",
        items: [
          "Aptitude Training",
          "Soft Skills Training",
          "Resume Preparation",
          "AI-Powered Mock Interviews",
          "Mock Interviews by Tech and HR Panels",
          "300+ Senior Interview Experiences",
          "Scheduling Interviews",
          "Access to Placement Portal",
          "Mega Offline Placement Drives",
          "Negotiation with companies for higher salaries"
        ]
      },
      benefits: [
        { text: "9AM - 9PM Doubt Clarification. 1500+ Mentors to help you." },
        { text: "10+ Real-time Projects for strong resume" },
        { text: "24/7 Online Lab Access" },
        { text: "Charters' 100% Job Ready Program.", isDisclaimer: true }
      ],
      cardFeatures: {
        freeTrial: { title: "A Free Trial Session", subtitle: "No Fee Required" },
        scholarships: { title: "Assured Scholarships", subtitle: "After Free Trial" }
      }
    }
  },
  weekAtUnion: {
    title: "What's a Week at Charters' Union Like?",
    subtitle: "Start your day with ambition and end it with impact. At Charters' Union, every week pushes boundaries.",
  },
  learningOutcomes: {
    comparisonTable: {
      title: "How DGM is fundamentally different",
      subtitle: "DGM VS TRADITIONAL EDUCATION",
      headers: ["Parameter", "Engineering", "Business", "Charter's Business (DGM)"],
      rows: [
        { icon: "/Charters-icon/fundamental.svg", parameter: "Core focus", column1: "✕ Theoretical CS", column2: "✕ Theoretical management", column3: "✓ Computer Science + AI + Applied business" },
        { icon: "/Charters-icon/study.svg", parameter: "How students learn", column1: "✕ Lectures & exams", column2: "✕ Case studies", column3: "✓ Build real tech products from day one" },
        { icon: "/Charters-icon/real world project.svg", parameter: "Entrepreneurship", column1: "✕ Optional club", column2: "✕ Competitions", column3: "✓ Learn by building a tech startup" },
        { icon: "/Charters-icon/profile.svg", parameter: "Who teaches", column1: "✕ Academics", column2: "✕ Limited tech exposure", column3: "✓ Meta, Google, OpenAI founders" },
        { icon: "/Charters-icon/careerroadmap.svg", parameter: "Career outcomes", column1: "✕ Junior SDE", column2: "✕ Analyst roles", column3: "✓ Forward Deployed Eng, Product Eng, AI PMs" },
        { icon: "/Charters-icon/jobs.svg", parameter: "Risk & safety net", column1: "✕ Limited flexibility", column2: "✕ No tech skills", column3: "✓ Placements + deferred support" }
      ]
    },
    title: {
      prefix: "The",
      highlight: "7",
      suffix: "learning outcomes"
    },
    description: "We interviewed 100+ founders, CEO, CXOs,COO with one question: What makes someone genuinely useful in a Top Company globally within 5–7 months?\n\nTheir answers became 7 core outcomes that now shape every Charter course, project and pathway.",
    items: [
      {
        title: 'Data-driven decision making',
        description: "In today's digital age, data and the digital footprint it leaves are everywhere. The ability to use it effectively for evidence-backed decisions can truly set you apart.",
        highlight: 'The ability to use it effectively for evidence-backed decisions can truly set you apart.',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Identify relevant data to solve problems, extract and analyze datasets, and generate actionable insights',
          'Effectively communicate insights through clear visualizations and a compelling narrative',
          'Align business decisions, experiments, or hypotheses with data-driven insights for impactful outcomes.',
        ],
        images: [
          {
            src: '',
            caption: 'Learn tools like Excel, Powerquery, SQL, Python and PowerBI',
          },
          {
            src: '',
            caption: 'Work on 25+ real-world startup datasets and get your hands dirty',
          },
          {
            src: '',
            caption: 'Get regular 1:1 mentorship, support and practice',
          },
        ],
      },
      {
        title: 'Customer Obsession',
        description: "One of Amazon's key leadership principles is deeply understanding your customer—their pain points, motivations, and alternatives—as the foundation for building effective solutions.",
        highlight: 'deeply understanding your customer',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Define and communicate clear customer personas for a product or service',
          'Conduct thorough user research, interpret insights, and understand customer messaging',
          'Use frameworks like JTBD (Job-To-Be-Done), User Stories, and User Quotes to define user requirements',
        ],
        images: [
          {
            src: '',
            caption: 'Learn marketing and user research from top professors',
          },
          {
            src: '',
            caption: 'Interact with real customers while building a business',
          },
          {
            src: '',
            caption: 'Conduct customer discovery with early-stage startups',
          },
        ],
      },
      {
        title: 'Effective Communication',
        description: 'Effective communication with team members, senior leadership, and external stakeholders is the most important predictor of career growth—especially as automation increases.',
        highlight: 'most important predictor of career growth',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Confidently represent yourself and your ideas with clear and concise articulation',
          'Write compelling, brief and purpose driven documents',
          'Influence without authority at the workplace',
        ],
        images: [
          {
            src: '',
            caption: 'Learn the art of business storytelling, negotiations and presentations',
          },
          {
            src: '',
            caption: 'Gain 50+ public speaking opportunities and present ideas to top startup leaders',
          },
          {
            src: '',
            caption: 'Receive 1:1 coaching on executive presence and crafting your elevator pitch',
          },
        ],
      },
      {
        title: 'First Principles Problem Solving',
        description: 'As Elon Musk says, this is "the only thing worth mastering." Understanding problems at their core and building solutions is vital in startups\' ambiguous environments.',
        highlight: 'the only thing worth mastering',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Deeply understand and communicate core problems',
          'Break down problems using frameworks like MECE and 80/20',
          'Identify key problem-solving levers and prioritize efforts on identified issues',
        ],
        images: [
          {
            src: '',
            caption: 'Analyze & break 100+ real startup business cases',
          },
          {
            src: '',
            caption: 'Access 50+ hours of workshops on structured problem-solving with examples',
          },
          {
            src: '',
            caption: 'Join bi-monthly moderated group discussions on trending business topics',
          },
        ],
      },
      {
        title: 'Business Acumen',
        description: '"What will it really take for this business to be successful?" is a nuanced question that lies at the intersection of core business domains like marketing, finance, operations, and strategy.',
        highlight: 'What will it really take for this business to be successful?',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Grasp and apply essential business frameworks and concepts',
          'Understand core business models, metrics, and flywheels',
          'Analyze revenue, cost, LTV, CAC and other levers that move the needle',
        ],
        images: [
          {
            src: '',
            caption: 'Attend 500+ hours of lectures by top B-school professors',
          },
          {
            src: '',
            caption: 'Work on live startup projects with leadership on real-world business challenges',
          },
          {
            src: '',
            caption: 'Solve 100+ renowned business cases in teams of 3-4',
          },
        ],
      },
      {
        title: 'Agile Product Thinking',
        description: 'To succeed in high-growth startups, the key is to launch fast, fail fast; listen to customers, and continuously iterate on your product. This agile approach is fundamental to startup success.',
        highlight: 'launch fast, fail fast',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Define hypotheses, launch experiments, and build solutions based on customer needs',
          'Develop a Minimum Viable Product and craft a GTM strategy to secure your first 100 customers',
          'Create clear success metrics, track them and iterate solutions based on feedback',
        ],
        images: [
          {
            src: '',
            caption: 'Attend 40+ hours of Product Management coursework',
          },
          {
            src: '',
            caption: 'Launch real products and go to market with Charters Startup Lab',
          },
          {
            src: '',
            caption: 'Gain an Agile scrum certification',
          },
        ],
      },
      {
        title: 'Sales',
        description: 'The ability to effectively sell products or services is crucial for any business success. Understanding customer psychology, building relationships, and closing deals are essential startup skills.',
        highlight: 'crucial for any business success',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Understand the process of selling in both B2C & B2B contexts',
          'Work backwards from an audience and product to create an efficient sales funnel',
          'Create a sales strategy for acquiring the first 100 customers for any product/service',
        ],
        images: [
          {
            src: '',
            caption: 'Undergo 40+ hours of sales coursework',
          },
          {
            src: '',
            caption: 'Get real exposure to selling via 1-day sales challenges with popular brands',
          },
          {
            src: '',
            caption: 'Make upwards of 5L in revenue via the dropshipping challenge in Term 1',
          },
        ],
      },
      {
        title: 'Process Thinking',
        description: 'The ability to plan, execute and monitor a process is often overlooked. It is a key muscle to build if you want to be indispensable at the workplace and deliver end outcomes.',
        highlight: 'indispensable at the workplace',
        subtitle: 'At Charters, our goal is that by the end of the program every student will be able to:',
        outcomes: [
          'Understand what goes behind setting up business processes from scratch',
          'Deconstruct a customer journey funnel, conversion metrics and interventions required at every stage',
          'Build comprehensive trackers, define micro success metrics and create task distributions',
        ],
        images: [
          {
            src: '',
            caption: '25+ hours of workshops on program managing processes',
          },
          {
            src: '',
            caption: 'Internships at startups where you get to own a process end-to-end',
          },
          {
            src: '',
            caption: 'Manage business processes for your small business in term 1',
          },
        ],
      },
    ]
  },
  layoutBanner: {
    placement: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
      imageAlt: "Charters Union Career Report 2025",
      heading: {
        highlight1: " 97%'",
        text1: " of students secured full time job offer by their ",
        highlight2: "4",
        text2: "th month of Internship, with \nthe highest CTC being ",
        highlight3: " ₹12",
        text3: "lakhs/month."
      },
      subtext: "100% Internship Rate • Average Salary Jump 2.35x • Proven track record verified by MarketQuation.",
      buttonText: "Placement Report",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
      downloadFilename: "charters-placement-report-2025.jpg"
    },
    brochure: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
      imageAlt: "Charters Union Brochure",
      programName: "Digital Growth & Marketing (DGM™)",
      subtext: "AI-First Curriculums • 4-6 Month Paid Internships • Global Placements",
      buttonText: "Download Brochure",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
      downloadFilename: "charters-dgm-brochure.avif"
    },
    advisor: {
      heading: "Want to learn more about ventures and collaborations?",
      buttonText: "Talk to an advisor",
      phoneNumber: "+919836465083"
    }
  }
};
