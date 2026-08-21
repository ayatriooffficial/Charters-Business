import type { Programme, CurriculumSectionData } from "./types";
import { cbaStudentCategories, cbaStudents } from "@/data/students";
import { facultyMembers } from "@/data/faculty";

const cbaCurriculumSection: CurriculumSectionData = {
  eyebrow: "WORLD-CLASS EDUCATION",
  titleHighlight: "AI-Ready:",
  titleRest: "Hands-on Learning",
  subtitle:
    "We trained to contribute in real business environments—earning recognition from managers",
  tabOrder: ["courses", "collaboration", "cultural", "business"],
  tabLabels: { cultural: "Tools & Technology" },
  skillsData: {
    previewSkills: [
      "Business Accounting",
      "Banking & Finance fundamantals",
      "GST Compliances & Return filing",
      "Income Tax Filing/Return",
      "Financial Statement Analysis",
      "TDS/TCS & Auditing",
      "SAP S/4HANA",
      "Payroll",
      "Financial Modelling & Valuation",
      "Communicate & Networking Skills",
      "Bookkeeping",


    ],
    modalTitle: "Skills and tools you'll learn",
    modalSkillsGain: {
      title: "Skills you'll gain",
      skills: [
        "Client Services",
        "Marketing",
        "Data Storytelling",
        "Social Media Strategy",
        "Spreadsheet Software",
        "Campaign Management",
        "Paid media",
        "Email Marketing",
        "Online Advertising",
        "Social Media Marketing",
        "Web Presence",
        "Interviewing Skills",
        "Social Media Management",
        "Order Fulfillment",
        "Search Engine Optimization",
        "Media Planning",
        "Loyalty Programs",
        "Performance Measurement",
        "E-Commerce",
      ],
    },
    modalToolsLearn: {
      title: "Tools you'll learn",
      tools: ["Google Ads"],
    },
  },
  items: [
    {
      id: "dubai",
      term: "Month 01",
      title: "Strategy, Planning & Performance",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Beginner", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "The competencies required to envision the future, lead the strategic planning process, guide decisions, manage risk, and monitor performance.",
      courses: {
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
      },
      business: [
        {
          title:
            "Discuss sustainable solutions, renewable energy, green technology with world leaders, businesses, and investors.",
          subtitle: "The World Green Economy Summit",
        },
        {
          title:
            "Delve into the private luxury aviation market and understand the ins and outs of a $100B exclusive industry.",
          subtitle: "Middle East Business Aviation Summit",
        },
        {
          title:
            "Explore the niche laboratory and instrumentation industry and see how high-tech industries work.",
          subtitle: "ArabLAB Expo",
        },
        {
          title:
            "Get a taste of the global sweet, confectionery, bakery, and snack food industry.",
          subtitle: "Yummex Food Exhibition, Middle East",
        },
        {
          title:
            "Visit YallaMarket, which is redefining the grocery shopping experience, & Huspy, which is transforming the real estate landscape.",
        },
        {
          title:
            "Learn about the Emirates airline's operations, logistics, and customer service strategies.",
          subtitle: "Emirates Airline Headquarters",
        },
      ],
      cultural: [
        {
          title:
            "Take a thrilling desert safari through the Dubai Desert & live the traditional Arabic life.",
          subtitle: "Dubai Inner Desert",
        },
        {
          title:
            "Cruise in a traditional wooden boat and witness the historical landmarks.",
          subtitle: "Dhow Cruise",
        },
        {
          title:
            "Soak in the history of Dubai from its beginnings as a fishing village to its modern metropolis.",
          subtitle: "Dubai Museum, Al Fahidi Fort",
        },
        {
          title:
            "Bargain for gold jewelry, learn about goldsmithing at the largest gold market in the world.",
          subtitle: "Dubai Gold Souk",
        },
        {
          title:
            "Get the inside hook on how the world's tallest building was planned, & constructed.",
          subtitle: "Burj Khalifa",
        },
      ],
      culturalVariant: "orange",
      culturalImage: "/images/dgm-tools/1.jpg",
    },
    {
      id: "india",
      term: "Month 02",
      title: "Reporting & Control",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/digital-growth-_-marketing-classroom_r1pqba.avif",
      badges: [],
      outcome:
        "The competencies required to measure and report an organization's performance in compliance with relevant standards and regulations.",
      courses: {
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
      },
      collaboration: [
        { title: "Data-driven decision making" },
        { title: "Genetic engineering" },
      ],
      business: [
        {
          title: "See what makes Indian Unicorns truly special.",
          subtitle: "StartUp Grind New Delhi",
        },
        {
          title:
            "See how street vendors of India make more money than Silicon Valley startUps.",
          subtitle: "Gurgaon's Banjara Market",
        },
        {
          title:
            "Explore fashion & business at one of the largest leather fairs in Asia.",
          subtitle: "The Indian Leather Fair (May)",
        },
        {
          title:
            "Discover global F&B trends at India's largest food ingredients & flavoring fairs.",
          subtitle: "The Flagship AAHAR 204",
        },
        {
          title:
            "Visit Zomato, which is redefining the Food Delivery market, & PayTM, which is bringing electronic banking to 1B+ Indians",
        },
        {
          title:
            "Get up close with the management and see how the largest Indian conglomerates actually work.",
          subtitle: "Reliance & Tata HQs.",
        },
      ],
      cultural: [
        {
          title:
            "Witness the spectacular military parade and cultural pageantry on India's Republic Day.",
          subtitle: "Republic Day Parade (New Delhi, Jan 26)",
        },
        {
          title:
            "Immerse in the vibrant Holi festivities, a celebration of spring with colorful powders, music, and dance.",
          subtitle: "Holi Festival of Colors (Pan-India)",
        },
        {
          title:
            "Travel through India's villages to uncover grassroot innovations.",
          subtitle: "'Shodh Yatra'",
        },
        {
          title:
            "Witness the majestic elephants participating in processions at this unique festival.",
          subtitle: "Elephant Festival, Jaipur",
        },
        {
          title:
            "Visit the landmark literature festival featuring talks, and readings by global authors.",
          subtitle: "Jaipur Literature Festival",
        },
      ],
      culturalImage: "/images/dgm-tools/2.avif",
    },
    {
      id: "singapore",
      term: "Month 03",
      title: "Technology & Analytics",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-build-ai-agent-for-scale_ifrulw.avif",
      badges: [
        { text: "Intermediate", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "The competencies required to manage technology and analyze data to enhance organizational success.",
      courses: {
        initial: [
          { code: "PRTC 203", title: "Information Systems" },
          { code: "AIML 103", title: "Data Governance" },
          { code: "FIFI 203", title: "Data Analytics" },
          { code: "SAMA 303", title: "Data Visualization" },
          { code: "COMM 103", title: "Leadershiph social impact tranning" },
        ],
        more: [
          {
            code: "FIFI 303",
            title: "Personal Video grwoth strategy creator studio",
          },
        ],
      },
      moreCoursesGray: false,
      collaboration: [{ title: "Angel investing & alternate investments" }],
      business: [
        {
          title: "See how innovation meets inspiration in Singapore.",
          subtitle: "Singapore MetaExpo 2025.",
        },
        {
          title:
            "Visit the world's leading Fintech company and step into the future of Finance.",
          subtitle: "Paypal Innovation Lab.",
        },
        {
          title: "Unravel Financial Insights at IRAS Singapore.",
          subtitle: "Inland Revenue Authority of Singapore.",
        },
        {
          title:
            "Discover Vertical Farming where Innovation meets Sustainability and experience the future of food.",
          subtitle: "Sky Greens Farm Tour.",
        },
        {
          title: "Explore tomorrow's technology where ideas become reality.",
          subtitle: "Microsoft Technology Centre.",
        },
      ],
      cultural: [
        {
          title: "Witness grand parades on Singapore National Day.",
          subtitle: "Singapore National Day (August 9)",
        },
        {
          title: "Immerse yourself in the history and heritage of Singapore.",
          subtitle: "Singapore National Museum.",
        },
        {
          title: "Discover Asia's cultural mosaic at the",
          subtitle: "Asian Civilisations Museum.",
        },
        {
          title:
            "Visit Singapore's cultural heartbeat where tradition meets modernity.",
          subtitle: "Chinatown Singapore.",
        },
        {
          title: "Discover Singapore's military legacy.",
          subtitle: "Fort Siloso",
        },
      ],
      culturalImage: "/images/dgm-tools/3.avif",
    },
    {
      id: "ghana",
      term: "Month 04",
      title: "Business Acumen & Operations",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Advanced", className: "bg-black text-white text-xs px-3 py-1 font-semibold" },
      ],
      highlight: "Faculty Guided Internship Program ",
      outcome:
        "The competencies required to contribute as a cross-functional business partner to transform company-wide operations.",
      courses: {
        initial: [
          { code: "MAST 104", title: "Industry-Specific Knowledge" },
          { code: "MAST 204", title: "Operational Knowledge" },
          {
            code: "MAST 304",
            title: "Quality Management and Continuous Improvement",
          },
          { code: "MAST 404", title: "Project Management" },
        ],
        more: [],
      },
      moreCoursesGray: true,
      business: [
        {
          title:
            "Understand how trade in Africa unfolds at a world record pace!",
          subtitle: "Ghana International Trade Fair",
        },
        {
          title:
            "Witness Africa's cutting edge agricultural technology and unique innovations.",
          subtitle: "AgriTech Ghana",
        },
        {
          title:
            "Meet early stage startups at MEST Accra, Meltwater Incubator & BlueSpace Ghana, pan-African incubators supporting tech startups",
        },
        {
          title: "Learn how Ghana's cocoa & cashews industry is thriving.",
          subtitle: "Nestle HQs, Accra",
        },
        {
          title: "Meet global investors bullish on Africa.",
          subtitle: "Ghana Investment Forum",
        },
      ],
      businessNote: "Summer: Teaching Fellowship or Internship",
      cultural: [
        {
          title: "Explore Ghana's vibrant second hand market.",
          subtitle: "Kantamanto Market, Accra",
        },
        {
          title:
            "Walk the British colonial history of Ghana on an Independence Tour.",
          subtitle: "Accra, Ghana",
        },
        {
          title:
            "See how small businesses become energy self-sufficient using BioGas plants.",
          subtitle: "Kumasi, Ghana",
        },
      ],
      culturalImage: "/images/dgm-tools/4.avif",
    },
    {
      id: "usa",
      term: "Month 05",
      title: "Leadership",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "In-Class Faculty-Guided Internship", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "The competencies required to collaborate with others and inspire teams to achieve organizational goals.",
      courses: {
        initial: [
          { code: "MAST 105", title: "Communication Skills" },
          { code: "MAST 205", title: "Motivating and Inspiring Others" },
          {
            code: "MAST 305",
            title: "Collaboration, Teamwork, and Relationship",
          },
          { code: "SAMA 105", title: "Change Management" },
          { code: "SAMA 205", title: "Conflict Management" },
        ],
        more: [
          { code: "SAMA 305", title: "Negotiation" },
          { code: "SAMA 405", title: "Talent Management" },
        ],
      },
      moreCoursesGray: false,
      collaboration: [
        { title: "AI driven entrepreneurship" },
        { title: "Healthcare management" },
      ],
      business: [
        {
          title:
            "Get a glimpse into new research and products at Google's HQ.",
          subtitle: "Googleplex",
        },
        {
          title:
            "See how animated blockbusters come to life at VFX studio Pixar.",
          subtitle: "Pixar HQs",
        },
        {
          title:
            "Get the BTS on Silicon Valley's top incubator behind Airbnb & Dropbox.",
          subtitle: "Y Combinator's Demo Day",
        },
        {
          title:
            "Get an immersive insight into cutting-edge space technology.",
          subtitle: "Space X HQs",
        },
        {
          title:
            "Delve into hackers' minds at the world's top hackers' conference.",
          subtitle: "Black Hat USA",
        },
        {
          title:
            "Dive into the latest in the world of Robots, AI, Metaverse, & Green tech.",
          subtitle: "Consumer Electronics Show, Vegas",
        },
      ],
      cultural: [
        { title: "Witness a live IPO at the", subtitle: "NASDAQ, New York" },
        {
          title: "Experience the historic American power centers.",
          subtitle: "Pentagon, & Capitol",
        },
        {
          title: "Experience the intersection of art and technology.",
          subtitle: "Berkeley Art Museum",
        },
        {
          title:
            "Traverse the American colonial & civil war history across the eat coast.",
          subtitle: "Various Cities (east coast)",
        },
        {
          title: "Volunteer at the world's largest music stage.",
          subtitle: "Ultra Music Festival",
        },
      ],
      culturalImage: "/images/dgm-tools/5.avif",
    },
    {
      id: "argentina",
      term: "Month 06",
      title: "Professional Ethics & Values",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "On Campus", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "The competencies required to demonstrate the professional values, ethical behavior, and legal compliance essential to a sustainable business model.",
      courses: {
        initial: [
          { code: "MAST 106", title: "Professional Ethical Behavior" },
          {
            code: "MAST 206",
            title: "Recognizing and Resolving Unethical Behavior",
          },
          { code: "MAST 306", title: "Legal and Regulatory Requirements." },
        ],
        more: [],
      },
      moreCoursesGray: true,
      business: [
        {
          title: "Learn how agribusiness is driving innovation at",
          subtitle: "Los Grobo Group's headquarters",
        },
        {
          title: "Understand Argentina's renewable energy transition at",
          subtitle: "YPF Luz",
        },
        {
          title: "Explore the entrepreneurial ecosystem of",
          subtitle: "Buenos Aires' Distrito Arcos and Palermo Soho.",
        },
      ],
      cultural: [
        {
          title: "Experience the traditions of the",
          subtitle: "Pampas region, Argentina's agricultural heartland.",
        },
        {
          title: "Immerse yourself in the passion of Argentine football at",
          subtitle: "La Bombonera Stadium.",
        },
        {
          title: "Discover the artistic and cultural vibrancy of",
          subtitle: "San Telmo and La Boca.",
        },
      ],
      culturalImage: "/images/dgm-tools/1.jpg",
    },
    {
      id: "europe",
      term: "Month 07",
      title: "Capstone: Build & Launch a Digital Marketing Agency",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome: "Pai-Lam help to build won digital company",
      project: undefined,
      courses: {
        initial: [],
        more: [],
      },
      moreCoursesGray: true,
      collaboration: [
        { title: "International trade & business" },
        { title: "Business of chemicals & bio-technology" },
      ],
      collaborationTextBlack: true,
      business: [
        { title: "Learn how Spain is innovating in renewable energy and sustainability at a global leader in clean power.", subtitle: "Iberdrola Headquarters, Madrid" },
        { title: "Immerse yourself in entrepreneurial creativity and emerging startups at Madrid's leading innovation hub.", subtitle: "La Nave Innovation Hub, Madrid" },
        { title: "Explore cutting-edge retail innovation and operations at Spain's largest department store group.", subtitle: "El Corte Inglés Headquarters, Madrid" },
      ],
      cultural: [
        { title: "Immerse yourself in Spain's rich artistic heritage at two of the world's most renowned museums.", subtitle: "Prado Museum and Reina Sofia Museum, Madrid, Spain" },
        { title: "Discover Madrid's vibrant street art, bohemian culture, and countercultural energy.", subtitle: "Lavapiés and Malasaña Districts, Madrid" },
        { title: "Step into royalty and explore Spain's rich history at the largest functioning palace in Europe.", subtitle: "Royal Palace of Madrid, Madrid" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chnarterunion-automation-tool_tvwboh.avif",
    },
  ],
};

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
    imageUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310544/class-of-CBA_Certified_Business_Accountant_v6p16o.avif",
  },

  // Card Data
  card: {
    image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310544/class-of-CBA_Certified_Business_Accountant_v6p16o.avif",
    hasVideo: false,
    rating: { score: 4.8, reviews: 495 / 500 },
    title: "CBA™ (Certified Business Accountant)",
    level: "Certified",
    certificateType: "Corporate Certificate",
    description:
      "Gain real-world corporate accounting through Harvard/Columbia case study, IIMK, US-CMA&CPA/CFA/ACCA integrated AI-led curriculum under top 1% industry faculty.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "~3 Months Foundation + 4 Months Paid Internship" },
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
      traditional: "₹1.7L",
      cmp: "₹735,650",
      label: "CBA™",
    },
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
      { label: "97.7% Avg Placement", value: "93%" },
      { label: "100% Paid Internship", value: "150+" },
    ],
    alumniLabel: "Find our student at -",
    alumniCompanies: [

    ],
    actions: {
      primaryText: "Apply Now",
      secondaryText: "Download Brochure",
    },
    enrolledCount: "1289",
    instructors: {
      badge: "India's top 1%",
      title: "CA/CMA/CFA Faculty & Industry Leaders",
      aiSkills: {
        title: "New AI skills",
        description: "This Professional Certificate includes new videos on how to use AI in business and accounting.",
        skills: [
          "Boost your accounting efficiency with AI",
          "Use AI to automate financial reporting",
          "Improve your data analysis using AI tools"
        ]
      }
    },
    heroImage:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784641527/CBA_aritra-_sanjay-place-top-company_j4g2li.avif",
    floatingCards: {
      topRight: {
        name: "Sanskar Jaiswal",
        students: "3 Internship offser",
        rating: 4.8,
        stars: "★★★★★",
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
    duration: "7 Month",
    details: [
      { label: "DURATION", value: "7 Month (~3 Months Foundation + 4 Months Internship)", dotColor: "bg-cyan-500" },
      { label: "FORMAT", value: "~9 hrs/week, In-Class Tranning", dotColor: "bg-yellow-500" },
      {
        label: "ELIGIBILITY",
        value: "12th/Undergraduate(B.Tech, B.Sc, B.Com, B.A., BBA, BCA). No age limit",
        dotColor: "bg-pink-500",
      },
      { label: "INTERNSHIP", value: "100% Faculty guided internship", dotColor: "bg-yellow-500" },
      { label: "PROGRAM FEES", value: "Zero Cost EMI Easy Monthly Installments", dotColor: "bg-green-500" },
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

    ],
  },

  // Degree Program
  degreeProgram: {
    badge: "DEGREE & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "CBA™",
      suffix: "(Certified Business Accountant)",
    },
    auditorText: "Our placement reports are audited by <strong>Zivanta Analytics</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for transparent and consistent compensation data.",
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
      src: "/charter-partner/certified_business_accountant_internship_partner.avif",
      alt: "ChartersUnion - Modern Campus with State-of-the-Art Facilities",
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
    title: {
      prefix: "Learn. Apply. Reflect.",
      highlight: "Repeat.",
    },
    subtitle: `Hands-on courses and workshops designed to build real businesses—<br class="hidden sm:block" />because real learning comes from real applications.`,
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
  scholarshipConfig: {
    subtitle: "Financial Aid",
    title: { prefix: "Empowering Dreams Through ", highlight: "Scholarships" },
    description: "We never let financial hardships stand in the way of quality education. Scholarships cover up to 100% of the tuition."
  },
  scholarships: [
    {
      id: "outliers",
      title: "The Outliers Scholarship",
      description:
        "Celebrating exceptional talents beyond academics. If you're leading in fields like dance, space science, or robotics, this scholarship is designed to propel your unique journey forward.",
      eligibility: "Recognized in the top 1% in any field.",
    },
    {
      id: "community",
      title: "The Community Leaders Scholarship",
      description:
        "For those who have made significant impact in their communities through leadership, volunteer work, or social initiatives.",
      eligibility: "Demonstrated community leadership and impact.",
    },
    {
      id: "entrepreneur",
      title: "The Entrepreneur & Innovation Scholarship",
      description:
        "Supporting young entrepreneurs and innovators who have started their own ventures or created innovative solutions.",
      eligibility: "Founded a startup or created innovative projects.",
    },
    {
      id: "merit",
      title: "The Merit Scholarship",
      description:
        "Academic excellence scholarship for students with outstanding academic achievements and test scores.",
      eligibility: "High academic scores and strong record.",
    },
    {
      id: "pathfinders",
      title: "The Pathfinders Scholarship",
      description:
        "For students who have overcome significant challenges and demonstrated resilience in their educational journey.",
      eligibility: "Demonstrated resilience and overcoming challenges.",
    },
    {
      id: "transfer",
      title: "The Transfer Students Scholarship",
      description:
        "Supporting students transitioning from other institutions who show exceptional promise and dedication.",
      eligibility: "Transfer students with strong performance.",
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
    eyebrow: "OUR STUDENTS",
    title: { prefix: "Meet our", highlight: "Achievers" },
    subtitle: "Real students. Real placements. See where our graduates are working today.",
    categories: cbaStudentCategories,
    students: cbaStudents,
  },
  faculty: {
    eyebrow: "INSTRUCTORS & MENTORS at CHARTERs’ UNION",
    title: { prefix: "Learn from", highlight: "Top 0.1% of Practitioners" },
    subtitle: "At Charters' Union, your classroom is powered by top 1% business leaders, from  CA to Flipkart, from US-CMA to Google. Our Mentors don't just teach the playbook. They help to build it.",
    categories: [
      { id: "technology", name: "GST Taxation" },
      { id: "entrepreneurship", name: "Accounting" },
      { id: "auditing", name: "Auditing" },
    ],

    faculty: [
      ...facultyMembers.filter(m => m.category === 'technology').map(m => ({ ...m, category: 'technology' })),
      ...facultyMembers.filter(m => m.category === 'leadership').map(m => ({ ...m, category: 'entrepreneurship' })),
      ...facultyMembers.filter(m => m.category === 'finance').map(m => ({ ...m, category: 'auditing' })),
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
    internshipPartnerLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554662/certified_business_accountant_internship_partner_smqygu.avif",

    // Renders as the industrial faculty partnership logo badge in ProgramHero
    industrialFacultyLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539836/charters-faculty-member_tlvkib.avif",
    hiredCompaniesBanner: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784891907/CBA_Hired_Company_p22ehx.avif",
    campusImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840456/Sujata_recived-certified-business-accountant-certification_vkgwh5.avif",
    academicPartnerLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554664/certified_business_accountant_curriculum_partner_fmvkcd.avif",
    disclaimerText: "Every CBA™ (Certified Business Accountant) completed students who fulfil the minimum requirements will be eligible to apply for a US-CMA exam, Visa, Residence permit, allowing them to search for employment at Top 4.",
    timetableImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784606398/day_to_day_at_charters-digital_marketing_f4kdtc.avif",




    // Renders cityscapes in CurriculumSection
    curriculumCityscapes: {
      dubai: "",
      india: "",
      singapore: "",
      ghana: "",
      usa: "",
      argentina: "",
      europe: "",
      internship: "",
    },

    // Renders as ChartCard headers in TrackRecord
    chartTitles: {
      card1: "Paid Internship in 557+ Companies Across 7 Countries",
      card2: "87% student got full time jobs offer before end intrashiph"
    },

    // Renders the EMI value, payment months, and career tracks inside PricingTabs
    pricing: {
      emiLabel: "Starting at",
      primaryButton: { text: "Book a Free Demo" },
      emiAmount: "₹3750",
      emiMonths: "total ₹45000",
      secondaryButton: { text: "VIEW EMI" },
      jobTracks: [
        { name: "Corporate Finance & Accounting" },
        { name: "Financial Planning & Analysis (FP&A)" },
        { name: "US-CMA & ACCA Certifications", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" },
        { name: "AI-led Business Valuation", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" }
      ],
      title: "Admission Process & Course Included?",
      features: {
        fundamentals: "Fundamentals",
        classes: "3 Hours classes and 3 Hours Labs Everyday",
        trainers: "Trainers: CA/CPA/CMA and EX-PWC/KPMG/Deloitte"
      },
      placementSupport: {
        title: "100% Placement Guarantee Support",
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
        { text: "9AM - 9PM Doubt Clarification. 100+ Mentors to help you." },
        { text: "10+ Real-time Projects for strong resume" },
        { text: "24/7 Online CareerPathx™ Access" },
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
    eyebrow: "WHAT YOU'LL MASTER",
    sidebarTitle: "LEARNING OUTCOMES",
    sidebarSubtitle: "Navigate through our mastery areas",

    comparisonTable: {
      title: "How CBA™ is Fundamentally Different",
      subtitle: "CBA™ (Certified Business Accountant) VS TRADITIONAL EDUCATION",
      headers: ["Parameter", "CBA™ (Certified Business Accountant)", "Other Accounting Courses"],
      rows: [
        { icon: "/Charters-icon/fundamental.svg", parameter: "Core focus", column1: "✓ Computer Science + AI + Applied business", column2: "✕ Theoretical CS" },
        { icon: "/Charters-icon/study.svg", parameter: "How students learn", column1: "✓ Build real tech products from day one", column2: "✕ Lectures & exams" },
        { icon: "/Charters-icon/real world project.svg", parameter: "Entrepreneurship", column1: "✓ Learn by building a tech startup", column2: "✕ Optional club" },
        { icon: "/Charters-icon/profile.svg", parameter: "Who teaches", column1: "✓ Meta, Google, OpenAI founders", column2: "✕ Academics" },
        { icon: "/Charters-icon/careerroadmap.svg", parameter: "Career outcomes", column1: "✓ Forward Deployed Eng, Product Eng, AI PMs", column2: "✕ Junior SDE" },
        { icon: "/Charters-icon/jobs.svg", parameter: "Risk & safety net", column1: "✓ Placements + deferred support", column2: "✕ Limited flexibility" }
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
        salaryTable: {
          headers: ["Job Role", "Entry-Level Salary", "Mid-Level Salary", "Senior / Lead Salary"],
          rows: [
            { role: "Digital Marketing Executive", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹12 L per year", senior: "₹12 L – ₹20 L+ per year" },
            { role: "Performance Marketing Specialist", entry: "~₹4 L – ₹8 L per year", mid: "~₹8 L – ₹18 L per year", senior: "₹18 L – ₹30 L+ per year" },
            { role: "SEO Specialist", entry: "~₹3 L – ₹7 L per year", mid: "~₹7 L – ₹15 L per year", senior: "₹15 L – ₹25 L+ per year" },
            { role: "Social Media Manager", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹14 L per year", senior: "₹14 L – ₹25 L+ per year" }
          ]
        },
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
        mainImage: "/images/dgm-tools/1.jpg",
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
        salaryTable: {
          headers: ["Job Role", "Entry-Level Salary", "Mid-Level Salary", "Senior / Lead Salary"],
          rows: [
            { role: "Digital Marketing Executive", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹12 L per year", senior: "₹12 L – ₹20 L+ per year" },
            { role: "Performance Marketing Specialist", entry: "~₹4 L – ₹8 L per year", mid: "~₹8 L – ₹18 L per year", senior: "₹18 L – ₹30 L+ per year" },
            { role: "SEO Specialist", entry: "~₹3 L – ₹7 L per year", mid: "~₹7 L – ₹15 L per year", senior: "₹15 L – ₹25 L+ per year" },
            { role: "Social Media Manager", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹14 L per year", senior: "₹14 L – ₹25 L+ per year" }
          ]
        },
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
        mainImage: "/images/dgm-tools/1.jpg",
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
        mainImage: "/images/dgm-tools/1.jpg",
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
        mainImage: "/images/dgm-tools/1.jpg",
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
            caption: '',
          },
        ],
        mainImage: "/images/dgm-tools/1.jpg",
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
        mainImage: "/images/dgm-tools/1.jpg",
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
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/certified-business-accountant-brochure_r2gsyn.avif",
      imageAlt: "Charters Union Brochure",
      programName: "Certified Business Accountant (CBA™)",
      subtext: "AI-First Curriculums • 4-6 Month Paid Internships • Global Placements",
      buttonText: "Download Brochure",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/certified-business-accountant-brochure_r2gsyn.avif",
      downloadFilename: "charters-cba-brochure.avif"
    },
    advisor: {
      heading: "Ready to join ChartersUnion and take your first step towards success?",
      buttonText: "Talk to an advisor",
      phoneNumber: "+919836465083"
    }
  },
  certificateOverviewData: {
    title: "What is the CBA™ (Certified Business Accountant) from ChartersUnion?",
    descriptionParagraphs: [
      "Today, brands use search engines, social media, paid advertising, email marketing, and content marketing to reach the right audience and drive business growth. Digital Marketing has changed the way businesses operate.",
      "The Job-Ready AI-Poward Certificate in  DGM™ (Digital Growth & Marketing) at the Chartersunion Learning Support Centre helps learners build Job-ready skills through instructor-led digital marketing classes, Hardvard Level Case Study, Live projects, in-class faculty Guided internship and CareerPathx™ AI-Poward English Communication, Personal Branding, Corporate Bodylangusge and AI-poward Mock-interview, AI-ready Profile Base Jobs Search Engine.",
      "3-month theory foundation + 4-month inclass faculty guided internship program teaches modern ai-readay marketing strategies using real brand projects, marketing tools, and live campaign experience.. so that learners can confidently apply their knowledge in professional roles."
    ],
    whyChooseTitle: "Why Choose the Advanced Certificate in CBA™ (Certified Business Accountant)?",
    whyChooseDescription: "Right now, there is a huge demand for digital marketing professionals in the market. Those with the right skills can enter a dynamic marketing field. This program helps learners understand complete digital marketing skills while gaining practical experience with industry tools and live projects.",
    whyChoosePostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    offlineVsOnlineTitle: "Online vs Offline Digital Marketing Course: Why Classroom Training Works",
    offlineVsOnlineDescription: "Although both offline learning and online learning carry their own advantages, they suit people differently. For learners who prefer practical training and immediate feedback, classroom sessions can make learning more engaging and effective.",
    offlineVsOnlinePostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    offlineReasonsTitle: "Many learners prefer offline digital marketing classes because they offer:",
    programHighlights: [
      "Globally recognized certificate from ChartersUnion",
      "Learn 70+ digital marketing tools",
      "Real brand case studies and live campaign practice",
      "Career mentorship with 1:1 guidance",
      "Choose from 5 in-demand specializations across key marketing domains",
      "Access to live sessions and doubt-clearing support",
      "Learn through flexible online classes designed for working professionals"
    ],
    table6: [
      { role: "Role 1", salary: "INR X.XL" },
      { role: "Role 2", salary: "INR X.XL" },
      { role: "Role 3", salary: "INR X.XL" },
      { role: "Role 4", salary: "INR X.XL" },
      { role: "Role 5", salary: "INR X.XL" }
    ],
    syllabusTitle: "Syllabus & Curriculum of the CBA™ (Certified Business Accountant)",
    syllabusDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    syllabusPostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    skillsTitle: "Skills You Will Learn in the CBA™ (Certified Business Accountant)",
    skillsDescription: "The program helps learners build both technical marketing skills and business skills that are useful across industries.",
    skillsPostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    careerTitle: "Career Opportunities After Completing the CBA™ (Certified Business Accountant)",
    careerDescriptionParagraphs: [
      "Digital marketing has become one of the fastest-growing career fields in India. Today, every business wants to invest in their online presence to get leads.",
      "As a result, skilled digital marketers are in demand all over India. You’ll find a huge number of opportunities in this vast field."
    ],
    careerJobRolesTitle: "Job Roles:",
    careerJobRolesDescription: "Digital Marketing in India is amongst the top skills you can master. Some popular career opportunities after completing this digital marketing course include:",
    idealLearners: [
      {
        label: "Students and Fresh Graduates",
        text: "Build strong foundations in digital marketing, branding, and analytics to start your career sooner."
      },
      {
        label: "Marketing Professionals",
        text: "Upgrade your skills with advanced training in SEO, paid ads, automation, and campaign strategy."
      },
      {
        label: "Entrepreneurs and Business Owners",
        text: "Learn how to grow your brand online, increase visibility, and run performance-driven campaigns."
      },
      {
        label: "Freelancers",
        text: "Expand your service portfolio with skills in content marketing, social media, and performance marketing."
      },
      {
        label: "Career Changers",
        text: "Shift into digital marketing roles with practical projects, exposure to real campaigns, and industry-recognized certification."
      }
    ],
    careerTopJobRolesTitle: "Top Job Roles You Can Pursue:",
    certificationTitle: "Certification and Recognition",
    certificationDescription: "When you complete the Advanced Certificate in AI-Powered Digital Marketing & Communication from ChartersUnion, you earn a respected qualification that highlights your understanding of digital marketing strategies, tools, and real-world applications.",
    youWillReceiveTitle: "You Will Receive:",
    youWillReceive: [
      {
        label: "Certificate of Completion from ChartersUnion",
        text: "A globally recognized certificate that adds strong value to your resume."
      },
      {
        label: "Access to Career Services",
        text: "Guidance for job applications, interview preparation, and skill improvement."
      },
      {
        label: "Executive Alumni Status from ChartersUnion",
        text: "Connect with a wide network of marketing professionals and industry leaders."
      }
    ],
    worthItTitle: "Is this Certification Worth It?",
    worthItDescriptionParagraphs: [
      "Many learners want to grow in digital marketing, and this certificate is one of the most trusted ways to build strong skills.",
      "But is it truly worth investing in?",
      "Here are the reasons why this program can be a valuable choice for your career:"
    ],
    worthItReasons: [
      {
        label: "Learn Key Digital Marketing Skills",
        text: "You gain hands-on practice with SEO, social media, Google Ads, content strategy, analytics, and automation tools."
      },
      {
        label: "Improved Job Opportunities",
        text: "The certification helps you stand out during job applications and shows companies that you are trained in modern marketing methods."
      },
      {
        label: "Career Growth Potential",
        text: "Whether you are a fresher or a working professional, this course supports your move into digital marketing roles."
      },
      {
        label: "Flexible Learning Experience",
        text: "The online format allows you to learn at your own pace while managing work, studies, or personal commitments."
      },
      {
        label: "Networking and Industry Exposure",
        text: "The program offers access to expert mentors, professionals, and peers, helping you grow your network."
      }
    ],
    sourcedBy: "Sourced By: Ambitionbox",
    hiringIndustriesTitle: "Industries Hiring Digital Marketing Professionals",
    hiringIndustries: [
      {
        label: "E-Commerce",
        text: "Focus on paid ads, SEO, social commerce, and influencer-led growth."
      },
      {
        label: "EdTech",
        text: "Demand for lead generation, performance campaigns, and content-driven marketing."
      },
      {
        label: "BFSI",
        text: "Branding, digital acquisition, personal finance content, and analytics-led targeting."
      },
      {
        label: "Healthcare",
        text: "Awareness campaigns, reputation management, and customer education online."
      },
      {
        label: "Media & Entertainment",
        text: "Content planning, audience engagement, and community growth."
      },
      {
        label: "Retail & D2C",
        text: "Conversion-focused ads, product marketing, and customer retention."
      }
    ],
    topCompaniesTitle: "Top Companies Hiring",
    topCompaniesDescriptionParagraphs: [
      "Graduates with strong digital skills are in demand across startups, agencies, and global tech giants."
    ],
    topCompaniesSubtitle: "Companies hiring certified marketers include:",
    topCompanies: [
      "Google",
      "Meta",
      "Amazon",
      "Deloitte",
      "Zomato",
      "Nykaa",
      "Adobe",
      "Tata Digital",
      "Accenture",
      "Ogilvy"
    ],
    table1: [
      {
        role: "Role 1",
        salary: "INR X.XL"
      },
      {
        role: "Role 2",
        salary: "INR X.XL"
      },
      {
        role: "Role 3",
        salary: "INR X.XL"
      },
      {
        role: "Role 4",
        salary: "INR X.XL"
      },
      {
        role: "Role 5",
        salary: "INR X.XL"
      }
    ],
    table2: [
      {
        role: "Role 1",
        salary: "INR X.XL"
      },
      {
        role: "Role 2",
        salary: "INR X.XL"
      },
      {
        role: "Role 3",
        salary: "INR X.XL"
      },
      {
        role: "Role 4",
        salary: "INR X.XL"
      },
      {
        role: "Role 5",
        salary: "INR X.XL"
      }
    ],
    table3: [
      {
        role: "Role 1",
        salary: "INR X.XL"
      },
      {
        role: "Role 2",
        salary: "INR X.XL"
      },
      {
        role: "Role 3",
        salary: "INR X.XL"
      },
      {
        role: "Role 4",
        salary: "INR X.XL"
      },
      {
        role: "Role 5",
        salary: "INR X.XL"
      }
    ],
    table4: [
      {
        role: "Role 1",
        salary: "INR X.XL"
      },
      {
        role: "Role 2",
        salary: "INR X.XL"
      },
      {
        role: "Role 3",
        salary: "INR X.XL"
      },
      {
        role: "Role 4",
        salary: "INR X.XL"
      },
      {
        role: "Role 5",
        salary: "INR X.XL"
      }
    ],
    table5: [
      {
        role: "Role 1",
        salary: "INR X.XL"
      },
      {
        role: "Role 2",
        salary: "INR X.XL"
      },
      {
        role: "Role 3",
        salary: "INR X.XL"
      },
      {
        role: "Role 4",
        salary: "INR X.XL"
      },
      {
        role: "Role 5",
        salary: "INR X.XL"
      }
    ]
  },
};
