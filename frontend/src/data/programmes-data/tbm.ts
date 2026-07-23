import type { Programme } from "./types";
import { defaultCurriculumSection } from "./curriculum-default";

// TBM — Technology & Business Management course data
const tbmCurriculumSection = structuredClone(defaultCurriculumSection);

// ── "AI-Ready: Hands-on Learning" Section ──
// You can customize the subtitle text and the "Skills you'll learn" bubbles specifically for the TBM course here.
// Any edits made here will NOT affect the CBA or DGM pages.
tbmCurriculumSection.subtitle = "We trained to contribute in real business environments—earning recognition from managers";
tbmCurriculumSection.skillsData = {
  previewSkills: ["Agile Methodology", "Product Management", "Data Structures", "System Design", "Cloud Computing", "Team Leadership", "Budgeting", "Risk Management", "Business Analytics", "API Development"],
  modalTitle: "Skills and tools you'll learn",
  modalSkillsGain: {
    title: "Skills you'll gain",
    skills: [
      "Agile Methodology", "Product Management", "Data Structures", "System Design",
      "Cloud Computing", "Team Leadership", "Budgeting", "Risk Management",
      "Business Analytics", "API Development", "Microservices", "DevOps",
      "Strategic Planning", "Negotiation", "Financial Modeling", "Market Analysis"
    ]
  },
  modalToolsLearn: {
    title: "Tools you'll learn",
    tools: ["AWS", "Docker", "Jira", "Figma"]
  }
};

export const tbm: Programme = {
  id: "3",
  slug: "technology-&-business-management",
  // Dropdown Data
  dropdown: {
    title: "TBM™(Technology & Business Management)",
    description:
      "Designed for working professionals with significant management experience. Flexible schedule with weekend classes and online modules for career advancement while continuing your job. Focus on executive leadership, strategic thinking, and C-suite preparation.",
    duration: "12 Months Full-time",
    stats: [
      { value: "12", label: "MONTHS" },
      { value: "50+", label: "EXECUTIVES" },
      { value: "5+", label: "YRS EXP AVG" },
      { value: "98%", label: "RETENTION RATE" },
    ],
    link: "/product-growth-engineering",
    imageUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310688/class-of-TBM_Technology_Business_Management_kt0px5.avif",
  },

  // Card Data
  card: {
    image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310688/class-of-TBM_Technology_Business_Management_kt0px5.avif",
    hasVideo: false,
    rating: { score: 4.9, reviews: 956 },
    title: "TBM™(Technology & Business Management)",

    level: "Certified",
    certificateType: "Corporate Certificate",
    description:
      "Bridge business strategy, technology management, AI workflows, and tech leadership for high-growth enterprise roles under top industry mentors.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "6 Months theory + 6 Months in-class intranship" },
    deadline: { type: "Round 1: 30th Oct '25" },
    careerOutcomes: [
      "Foundations in Industry-led learning base on Hardvard casestudy with US-CMA/CPA, Indian CA and ACCA specialisation carruculam.",
      "In-class live projects intranship under faculty with top Startup & MNC from India, USA, CANADA, SAUDI, QATAR and Singapore.",
      "AI-powered corporate accountant, finance, FP&A, fintech & GCC-ready roles.",
      "Personal devlopment prep with communication, bodylangusge and placement cell.",
      "Applying class carruiculam with small amd medium busness at real-world ",
    ],
    jobOpenings: "2.12 Cr",
    expectedCtc: {
      traditional: "2.8L",
      cmp: "7.3L",
    },
    partnerLogos: {
      partners: "/charter-partner/business_technology_curriculum_partner.avif",
      internships: "/charter-partner/business_technology_internship_partner.avif",
    },
  },
  // Hero Data
  hero: {
    badge: "Executive Program",
    categoryLabel: "EXECUTIVE LEADERSHIP",
    title: {
      main: "EXECUTIVE",

    },
    description:
      "Designed for working professionals: Weekend classes, online modules, and executive networking to accelerate your career to senior leadership roles.",
    stats: [
      { label: "Average CTC", value: "12 LPA" },
      { label: "Placement Rate", value: "95%" },
    ],
    alumniLabel: "Find our student at -",
    alumniCompanies: [
      { name: "McKinsey", logo: "/images/companies/mckinsey.png" },
      { name: "BCG", logo: "/images/companies/bcg.png" },
      { name: "Accenture", logo: "/images/companies/accenture.png" },
    ],
    actions: {
      primaryText: "Apply Now",
      secondaryText: "Download Brochure",
    },
    enrolledCount: "892,100",
    instructors: {
      badge: "C-Suite Leaders",
      title: "CEOs & Industry Veterans",
      aiSkills: {
        title: "New AI skills",
        description: "This Professional Certificate includes new modules on how to leverage AI for business management and technology scaling.",
        skills: [
          "Automate business processes using AI",
          "Enhance operational decision-making with AI",
          "Scale tech infrastructure efficiently with AI insights"
        ]
      }
    },
    heroImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784641527/PGPTM_rajnish-_debjani-place-top-company_ufmnfk.avif",
    floatingCards: {
      topRight: {
        badge: "Weekend Classes",
        students: "950+",
        rating: 4.9,
        stars: "★★★★★",
      },
      bottomLeft: {
        label: "Career Growth",
        percentage: "98%",
        subLabel: "Promotion Rate",
        ctcIncrease: "↗ Director & VP Roles",
      },
    },
  },

  // Program Info
  programInfo: {
    duration: "18 Months",
    details: [
      { label: "LOCATION", value: "3 Countries", dotColor: "bg-cyan-500" },
      {
        label: "ELIGIBILITY",
        value: "3+ Years Experience",
        dotColor: "bg-pink-500",
      },
      {
        label: "FORMAT",
        value: "Weekend Classes",
        dotColor: "bg-yellow-500",
      },
      { label: "START DATE", value: "Jan 2026", dotColor: "bg-green-500" },
    ],
  },

  // Track Record
  trackRecord: {
    stats: [
      { value: "38.5", unit: "LPA", label: "Average CTC" },
      { value: "1.8", unit: "x", label: "Average CTC Jump" },
      { value: "28-65", unit: "LPA", label: "CTC Salary Range" },
      { value: "98", unit: "%", label: "Career Advancement" },
    ],
    experienceData: [
      { label: "3-5 YRS", value: 18, percentage: "18%" },
      { label: "5-8 YRS", value: 35, percentage: "35%" },
      { label: "8-10YR", value: 25, percentage: "25%" },
      { label: "10-15YR", value: 15, percentage: "15%" },
      { label: "15+ YRS", value: 7, percentage: "7%" },
    ],
    backgroundData: [
      { label: "SENIOR MGMT", value: 30, percentage: "30%" },
      { label: "CONSULTANTS", value: 22, percentage: "22%" },
      { label: "TECH LEADS", value: 18, percentage: "18%" },
      { label: "FINANCE", value: 15, percentage: "15%" },
      { label: "ENTREPRENEURS", value: 10, percentage: "10%" },
      { label: "OTHERS", value: 5, percentage: "5%" },
    ],
    impactCards: [
      {
        title: "Accelerate to C-Suite positions",
        description:
          "Senior Manager to Director, VP to C-Suite transitions. Executive roles designed for strategic leadership in Fortune 500 companies and startups.",
      },
      {
        title: "Executive network and mentorship",
        description:
          "Connect with 100+ CXOs, senior executives, and successful entrepreneurs. Build relationships that accelerate your career trajectory.",
      },
      {
        title: "Strategic thinking and innovation",
        description:
          "Learn from CEOs and industry veterans through case studies, executive projects, and real-world business challenges.",
      },
    ],
    companyLogos: [
      { name: "McKinsey", logo: "https://logo.clearbit.com/mckinsey.com" },
      { name: "BCG", logo: "https://logo.clearbit.com/bcg.com" },
      { name: "Bain", logo: "https://logo.clearbit.com/bain.com" },
      { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
      { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
      { name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
      { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
      {
        name: "Goldman Sachs",
        logo: "https://logo.clearbit.com/goldmansachs.com",
      },
      { name: "JP Morgan", logo: "https://logo.clearbit.com/jpmorgan.com" },
      {
        name: "Morgan Stanley",
        logo: "https://logo.clearbit.com/morganstanley.com",
      },
      { name: "Google", logo: "https://logo.clearbit.com/google.com" },
      { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
      { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
      { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
      { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
    ],
  },

  // Degree Program
  degreeProgram: {
    badge: "CERTIFICATION & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "TBM™",
      suffix: "Certification",
    },
    auditorText: "Our placement reports are audited by <strong>AnalystPK</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for transparent and consistent compensation data.",
    accordions: [
      {
        id: "leadership",
        title: "Executive Leadership and C-Suite Preparation",
        items: [
          "**98% career advancement** to senior roles - Director, VP, or C-suite within 2 years",
          "**1.8x average salary** increase with total CTC ranging from 28-65 LPA",
          "Alumni in **CXO positions** at Fortune 500 companies and unicorn startups",
          "**Senior role transitions** - 85% participants promoted within program duration",
          "**Strategic leadership training** by CEOs and board members",
        ],
      },
      {
        id: "network",
        title: "Exclusive Executive Network and Peer Learning",
        items: [
          "**100+ CXO network** for mentorship, guidance, and career opportunities",
          "Executive **peer learning cohort** - average 8 years experience per participant",
          "Access to **CEO roundtables** and exclusive industry conclaves",
          "**Alumni network** of 500+ senior executives across industries",
          "**Board membership opportunities** through executive connections",
        ],
      },
      {
        id: "flexibility",
        title: "Work-Friendly Flexible Learning Format",
        items: [
          "**Weekend classes** (Saturday-Sunday) allowing you to continue your job",
          "**Online modules** for weekday learning at your own pace",
          "**18-month duration** - shorter than traditional MBA while maintaining quality",
          "**Residential modules** - 4 intensive weeks spread across program",
          "**No career break needed** - designed for working professionals",
        ],
      },
      {
        id: "curriculum",
        title: "Strategic and Executive-Level Curriculum",
        items: [
          "**C-suite focused content** - board governance, M&A, corporate strategy",
          "**Executive projects** with real strategic business challenges",
          "**CEO as faculty** - learn directly from business leaders",
          "**Global business perspective** through international immersion",
          "**Digital transformation** modules on AI, blockchain, and emerging tech",
        ],
      },
      {
        id: "recognition",
        title: "Elite Recognition and Global Acceptance",
        items: [
          "**UGC approved Executive MBA** from Charter's Executive Business School",
          "**Globally recognized** degree accepted for international careers",
          "**Association with global B-schools** for exchange and learning",
          "**Executive credential** valued higher than regular MBA by recruiters",
          "**Lifetime access** to executive education programs and workshops",
        ],
      },
    ],
    academicPartners: [{ name: "Charter's Executive Business School" }],
    immersions: [{ name: "Silicon Valley Immersion" }],
    campusImage: {
      src: "/images/programmes/indus.webp",
      alt: "Executive Campus",
    },
  },
  // Curriculum Section (per-programme, isolated copy)
  curriculumSection: tbmCurriculumSection,

  // Curriculum
  curriculum: {
    categories: [
      { id: "leadership", label: "LEAD", title: "Executive Leadership" },
      { id: "strategy", label: "STRAT", title: "Strategic Management" },
    ],
    courseData: {
      leadership: [
        {
          term: "MODULE 1",
          location: "Weekend - India",
          courses: [
            { code: "EXEC 101", title: "Executive Leadership Principles" },
            { code: "EXEC 102", title: "Strategic Decision Making" },
            { code: "EXEC 103", title: "Leading High-Performance Teams" },
            { code: "EXEC 104", title: "Change Management" },
          ],
        },
        {
          term: "MODULE 2",
          location: "Weekend - India",
          courses: [
            { code: "EXEC 201", title: "C-Suite Executive Skills" },
            { code: "EXEC 202", title: "Board Governance" },
            { code: "EXEC 203", title: "Crisis Leadership" },
            { code: "EXEC 204", title: "Innovation Management" },
          ],
        },
      ],
      strategy: [
        {
          term: "MODULE 3",
          location: "International Immersion",
          courses: [
            { code: "STRAT 301", title: "Global Business Strategy" },
            { code: "STRAT 302", title: "Digital Transformation" },
            { code: "STRAT 303", title: "M&A Strategy" },
            { code: "STRAT 304", title: "Corporate Finance for Executives" },
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
      { id: "tech", label: "TECH", title: "Technology Leadership" },
      { id: "strategic", label: "STRAT", title: "Strategic Leadership" },
    ],
    courseData: {
      executive: [
        {
          term: "MODULE 1",
          location: "Online",
          courses: [
            { code: "EXEC 101", title: "How to lead as a senior executive" },
            {
              code: "EXEC 102",
              title: "How to drive organizational transformation",
            },
            { code: "EXEC 103", title: "How to build executive presence" },
          ],
        },
      ],
      strategic: [
        {
          term: "MODULE 2",
          location: "Weekend Campus",
          courses: [
            {
              code: "STRAT 201",
              title: "How to formulate corporate strategy",
            },
            {
              code: "STRAT 202",
              title: "How to manage stakeholders effectively",
            },
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
      id: "senior-executive",
      title: "Senior Executive Scholarship",
      description:
        "For senior professionals with 10+ years experience demonstrating exceptional leadership and impact.",
      eligibility: "10+ years experience in leadership roles",
    },
    {
      id: "women-leader",
      title: "Women in Leadership Scholarship",
      description:
        "Supporting women executives to advance to C-suite positions.",
      eligibility: "Women in senior management roles",
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur Scholarship",
      description:
        "For business owners and founders looking to scale their ventures.",
      eligibility: "Founders/business owners with 3+ years",
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
            id: "what-is-emba",
            question: "What is Executive MBA?",
            answer:
              "Executive MBA (EMBA) is designed for working professionals with significant management experience. The program focuses on executive leadership, strategic thinking, and C-suite preparation while allowing you to continue your job. Classes are held on weekends and some modules are online.",
          },
          {
            id: "work-continue",
            question: "Can I continue working while doing EMBA?",
            answer:
              "Yes! The Executive MBA is specifically designed for working professionals. Classes are scheduled on weekends (Saturday-Sunday) and some modules are online, allowing you to continue your current job while pursuing the degree.",
          },
          {
            id: "experience-required",
            question: "How much work experience is required?",
            answer:
              "We require minimum 3 years of full-time work experience after graduation. The average work experience of our EMBA cohort is 7-10 years, with many participants in senior management positions.",
          },
          {
            id: "time-commitment",
            question: "What is the time commitment?",
            answer:
              "The program requires 18 months with weekend classes (Saturday-Sunday), online modules during weekdays, and occasional residential modules. Expect to dedicate 15-20 hours per week including classes, assignments, and projects.",
          },
        ],
      },
      {
        id: "admission",
        name: "Admission",
        faqs: [
          {
            id: "how-to-apply",
            question: "How do I apply for Executive MBA?",
            answer:
              "Application process includes online application, work experience validation, GMAT/GRE waiver for experienced professionals, personal interview, and employer recommendation (optional). Focus is on leadership experience and career achievements.",
          },
          {
            id: "entrance-exam",
            question: "Is GMAT/CAT required?",
            answer:
              "GMAT/GRE can be waived for candidates with substantial work experience (7+ years) and strong professional track record. However, good scores can strengthen your application.",
          },
        ],
      },
      {
        id: "career",
        name: "Career",
        faqs: [
          {
            id: "career-impact",
            question: "What is the career impact?",
            answer:
              "98% of our EMBA graduates report significant career advancement within 2 years - promotions to Director, VP, or C-suite positions. Average salary increase is 1.8x with many transitioning to strategic leadership roles.",
          },
          {
            id: "network",
            question: "What about networking opportunities?",
            answer:
              "Executive MBA provides exclusive access to CXO network, CEO roundtables, and executive peer learning. Build relationships with 100+ senior leaders, entrepreneurs, and industry veterans.",
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
              "Executive MBA fees are higher than regular MBA reflecting the program's premium nature, experienced faculty, and executive facilities. Payment plans and corporate sponsorship options available. Many participants get employer sponsorship.",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619392/tsatahspbvazlmeppp1r_xp8ys8.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619391/sarmista_dey_clpwc6.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619390/Rohit_gupta_b8ro7b.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619389/rahi_roy_asyrei.avif",
        linkedinUrl: "#",
        category: "jul",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619387/ragini_gupta_v2chi3.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619386/Preyanka_das_oten08.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619385/Mohit_Bansal_vwkydc.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619384/gulam_azad_yc8ggz.avif",
        linkedinUrl: "#",
        category: "apr",
      },
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619382/Afreen_khan_qvglwx.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619385/Mohit_Bansal_vwkydc.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619384/gulam_azad_yc8ggz.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619382/Afreen_khan_qvglwx.avif",
        linkedinUrl: "#",
        category: "jan",
      },
    ],
  },
  faculty: {
    subtitle: "Learn from industry leaders, academic experts, and seasoned practitioners who bring real-world experience to your education.",
    categories: [
      { id: "technology", name: "Technology" },
      { id: "consulting", name: "Consulting" },
      { id: "entrepreneurship", name: "Entrepreneurship" },
    ],
    faculty: [
      {
        name: "Mr. Tech Expert 2",
        title: "CTO",
        company: "TechGiant",
        subtitle: "Chief Technology Officer",
        experience: "20+ years in technology",
        teaching: "Technology strategy",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "technology",
      },
      {
        name: "Mr. Arjun Vaidya",
        title: "Founder",
        company: "DR. VAIDYA's",
        subtitle: "Founder & CMD at Dr. Vaidya's",
        experience: "Built Ayurveda brand from scratch",
        teaching: "Founding a health-tech venture",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "entrepreneurship",
      },
      {
        name: "Mr. Consulting Expert 3",
        title: "Strategy Consultant",
        company: "StrategyCo",
        subtitle: "Principal Consultant",
        experience: "18+ years in strategy",
        teaching: "Strategic consulting",
        imageSrc: "/images/faculty/home.jpeg",
        linkedinUrl: "#",
        category: "consulting",
      },
    ],
  },

  // =========================================================================
  // TECHNOLOGY & BUSINESS MANAGEMENT (TBM) LAYOUT ASSETS CONFIGURATION
  // Renders on: /technology-&-business-management
  // =========================================================================
  assets: {
    // Renders as the main student hero cover image in ProgramHero
    heroImage: "/images/certified-business-accountant-student-sunitha-raj-got-jobs.png",

    // Renders under "Find our faculty at -" banner in ProgramHero
    internshipPartnerLogo: "/charter-partner/certified_business_accountant_internship_partner.avif",

    // Renders as the industrial faculty partnership logo badge in ProgramHero
    industrialFacultyLogo: "/images/programmes/industrial_faculty.avif",

    // Renders as the list of placement partner logos in TrackRecord
    hiredCompaniesBanner: "/images/program-placements/TBM_Hired_Company.png",
    campusImage: "/images/programmes/certificate.JPG",
    academicPartnerLogo: "/charter-partner/charter-academic-partner.avif",
    degreeInternshipPartnerLogo: "/charter-partner/charter-intrenshiph-company-around-the-world.avif",
    disclaimerText: "Every TBM™ (Technology & Business Management) completed student who fulfils the minimum requirements will be eligible to apply for global leadership credentials, C-suite mentoring pathways, and executive placement opportunities.",
    timetableImage: "/images/week-at-chartersunion/tbm-week-at-charters-union.png",

    // Renders cityscapes in CurriculumSection
    curriculumCityscapes: {
      dubai: "/images/curriculumsection/dubaicurriculum.webp",
      india: "/images/curriculumsection/indiacurriculum.webp",
      singapore: "/images/curriculumsection/europe.webp",
      ghana: "/images/curriculumsection/ghana.webp",
      usa: "/images/curriculumsection/us.webp",
      argentina: "/images/curriculumsection/argentina.webp",
      europe: "/images/curriculumsection/europe.webp",
      internship: "/images/curriculumsection/internship.webp",
    },

    // Renders as ChartCard headers in TrackRecord
    chartTitles: {
      card1: "Years of Work Experience Distribution",
      card2: "Industry Background of Participants"
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
        { name: "Product Management" },
        { name: "Tech Startup Scaling" },
        { name: "AI & Tech Strategy", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jan 2026" },
        { name: "C-Suite Strategic Leadership", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jan 2026" }
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
      title: "How TBM is fundamentally different",
      subtitle: "TBM VS TRADITIONAL EDUCATION",
      headers: ["Parameter", "Engineering", "Business", "Charter's Business (TBM)"],
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
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
            caption: 'Learn tools like Excel, Powerquery, SQL, Python and PowerBI',
          },
          {
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
            caption: 'Work on 25+ real-world startup datasets and get your hands dirty',
          },
          {
            src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
            caption: 'Learn marketing and user research from top professors',
          },
          {
            src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=200&fit=crop',
            caption: 'Interact with real customers while building a business',
          },
          {
            src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
            caption: 'Learn the art of business storytelling, negotiations and presentations',
          },
          {
            src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop',
            caption: 'Gain 50+ public speaking opportunities and present ideas to top startup leaders',
          },
          {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=300&h=200&fit=crop',
            caption: 'Analyze & break 100+ real startup business cases',
          },
          {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
            caption: 'Access 50+ hours of workshops on structured problem-solving with examples',
          },
          {
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
            caption: 'Attend 500+ hours of lectures by top B-school professors',
          },
          {
            src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop',
            caption: 'Work on live startup projects with leadership on real-world business challenges',
          },
          {
            src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
            caption: 'Attend 40+ hours of Product Management coursework',
          },
          {
            src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
            caption: 'Launch real products and go to market with Charters Startup Lab',
          },
          {
            src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop',
            caption: 'Undergo 40+ hours of sales coursework',
          },
          {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
            caption: 'Get real exposure to selling via 1-day sales challenges with popular brands',
          },
          {
            src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
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
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
            caption: '25+ hours of workshops on program managing processes',
          },
          {
            src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
            caption: 'Internships at startups where you get to own a process end-to-end',
          },
          {
            src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop',
            caption: 'Manage business processes for your small business in term 1',
          },
        ],
      },
    ]
  },
  layoutBanner: {
    placement: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
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
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
      downloadFilename: "charters-placement-report-2025.jpg"
    },
    brochure: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
      imageAlt: "Charters Union Brochure",
      programName: "Technology & Business Management (TBM™)",
      subtext: "AI-First Curriculums • 4-6 Month Paid Internships • Global Placements",
      buttonText: "Download Brochure",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784611644/charters-placement-report-2026_gyuu4p.avif",
      downloadFilename: "charters-tbm-brochure.avif"
    },
    advisor: {
      heading: "Want to learn more about ventures and collaborations?",
      buttonText: "Talk to an advisor",
      phoneNumber: "+919836465083"
    }
  }
};
