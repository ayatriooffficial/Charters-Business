import type { Programme } from "./types";
import { defaultCurriculumSection } from "./curriculum-default";

// TBM — Technology & Business Management course data
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
      imageUrl: "/images/programmes/P10714292.webp",
    },

    // Card Data
    card: {
      image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081779/ajbcjzco3yfsj7ns1f2j_dvqing.avif",
      hasVideo: false,
      rating: { score: 4.9, reviews: 956 },
      title: "TBM™(Technology & Business Management)",

      level: "Certified",
      certificateType: "Corporate Certificate",
      description:
        "Gain real-world corporate accounting through Harvard/Columbia case study, IIMK, US-CMA&CPA/CFA/ACCA integrated AI-led curriculum under top 1% industry faculty.",
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
        { label: "98% Retention", value: "98%" },
        { label: "Executive Projects", value: "50+" },
      ],
      alumniCompanies: [
        { name: "McKinsey", logo: "/images/companies/mckinsey.png" },
        { name: "BCG", logo: "/images/companies/bcg.png" },
        { name: "Accenture", logo: "/images/companies/accenture.png" },
      ],
      instructors: {
        badge: "C-Suite Leaders",
        title: "CEOs & Industry Veterans",
      },
      heroImage: "/images/programmes/P10714292.webp",
      floatingCards: {
        topRight: {
          badge: "Weekend Classes",
          students: "950+",
          rating: 4.9,
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
      badge: "EXECUTIVE DEGREE",
      title: {
        prefix: "Graduate with prestigious",
        highlight: "TBM™(Technology & Business Management)",
        suffix: "from Charter's Executive Business School",
      },
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
    curriculumSection: structuredClone(defaultCurriculumSection),

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
      categories: [
        { id: "executive", label: "EXEC", title: "Executive Skills" },
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
    scholarships: [
      {
        id: "senior-executive",
        title: "Senior Executive Scholarship",
        description:
          "For senior professionals with 10+ years experience demonstrating exceptional leadership and impact.",
        eligibility: "10+ years experience in leadership roles",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        alt: "Senior executive",
      },
      {
        id: "women-leader",
        title: "Women in Leadership Scholarship",
        description:
          "Supporting women executives to advance to C-suite positions.",
        eligibility: "Women in senior management roles",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        alt: "Women leaders",
      },
      {
        id: "entrepreneur",
        title: "Entrepreneur Scholarship",
        description:
          "For business owners and founders looking to scale their ventures.",
        eligibility: "Founders/business owners with 3+ years",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        alt: "Entrepreneurs",
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
        { id: "jan", name: "January" },
        { id: "apr", name: "April" },
        { id: "dec", name: "December" },
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
          internship:
            "Kripton PVT Ltd / Horyzen PVT Ltd — Quarter Taxation, 2025 income tax, strategy on price section",
          researchPaper:
            "How AI impacts on taxation automation at global countries",
          caseStudies:
            "Why Amule SAP automation failed 100 million revenue at 2...",
          imageSrc:
            "https://res.cloudinary.com/ducgcl4dg/image/upload/v1777886820/t6szcvb54fwgjs0swgh1_xuaz6y.avif",
          linkedinUrl: "#",
          category: "jan",
        },

        {
          name: "Neha Singh",
          batch: "APR 2025",
          city: "Pune",
          company: "Wipro",
          role: "HR Executive",
          timeToPlace: "Just in 7 months",
          previousCollege: "Symbiosis College",
          background: "BBA HR Fresher",
          internship:
            "Wipro HR — Talent acquisition and onboarding",
          researchPaper:
            "Employee retention strategies in post-pandemic era",
          caseStudies:
            "How Zomato scaled its workforce from 500 to 5000...",
          imageSrc:
            "https://res.cloudinary.com/ducgcl4dg/image/upload/v1777886822/wsp4kdxh2fsyp6ehxrpp_gttfyp.avif",
          linkedinUrl: "#",
          category: "apr",
        },

        {
          name: "Karan Gupta",
          batch: "DEC 2025",
          city: "Hyderabad",
          company: "McKinsey",
          role: "Strategy Analyst",
          timeToPlace: "Just in 7 months",
          previousCollege: "BITS Pilani",
          background: "B.Tech Graduate Fresher",
          internship:
            "McKinsey & Company — Strategy consulting",
          researchPaper:
            "AI disruption in traditional consulting models",
          caseStudies:
            "How TCS transformed its delivery model for Gen AI...",
          imageSrc:
            "https://res.cloudinary.com/ducgcl4dg/image/upload/v1777886817/a07zod5okvybawy1kj0u_ef4niw.avif",
          linkedinUrl: "#",
          category: "dec",
        },
      ],
    },
    faculty: {
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
      hiredCompaniesBanner: "/images/program-placements/CBA_Hired_Company.avif",
      
      // Renders on the right side of AIDegreeProgram
      campusImage: "/images/programmes/certificate.JPG",
      
      // Renders at the bottom of the accreditation details in AIDegreeProgram
      disclaimerText: "Every TBM™ (Technology & Business Management) completed student who fulfils the minimum requirements will be eligible to apply for global leadership credentials, C-suite mentoring pathways, and executive placement opportunities.",
      
      // Renders as the weekly timetable schedule image in WeekAtUnion
      timetableImage: "charters-business/images/weekattetr/ug-timetable",
      
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
        emiAmount: "₹9,999",
        emiMonths: "10 months",
        jobTracks: [
          { name: "Product Management" },
          { name: "Tech Startup Scaling" },
          { name: "AI & Tech Strategy", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jan 2026" },
          { name: "C-Suite Strategic Leadership", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jan 2026" }
        ]
      }
    }
};
