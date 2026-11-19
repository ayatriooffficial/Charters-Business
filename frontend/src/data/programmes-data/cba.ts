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
      "Banking & Finance fundamentals",
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
      title: "Foundational & Transaction Processing",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Associate-entry", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "Build a strong foundation in accounting fundamentals, transaction processing, and AI-powered accounting workflows.",
      courses: {
        initial: [
          { code: "", title: "Accounting fundamentals & double-entry", category: "Foundational & Transaction Processing" },
          { code: "", title: "Journal, Ledger & Trial Balance", category: "Foundational & Transaction Processing" },
          { code: "", title: "Vouchers, invoices & documentation", category: "Foundational & Transaction Processing" },
          { code: "", title: "AP/AR accounting", category: "Foundational & Transaction Processing" },
          { code: "", title: "Fixed assets & depreciation", category: "Foundational & Transaction Processing" },
        ],
        more: [
          { code: "", title: "Accounting for Partnership, Hire Purchase, and NGO & NPO" },
          { code: "", title: "Real Company Case Study Discussion" },
          { code: "", title: "Microsoft Power Automate for Accounting Workflows" },
          { code: "", title: "AI for Accountants & Managers" },
          { code: "", title: "Excel + AI for reconciliation & reporting" },
          { code: "", title: "Live Clients Project Practice" },
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
      title: "Financial Close, TDS/TCS & AI Automation",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/digital-growth-_-marketing-classroom_r1pqba.avif",
      badges: [],
      outcome:
        "Master financial close processes, reconciliations, and TDS/TCS compliance with AI-powered automation tools.",
      courses: {
        initial: [
          { code: "", title: "Bank Reconciliation (BRS)", category: "Financial Reconciliation, Close & Intelligent Reporting" },
          { code: "", title: "Vendor & customer reconciliation", category: "Financial Reconciliation, Close & Intelligent Reporting" },
          { code: "", title: "Balance-sheet reconciliation", category: "Financial Reconciliation, Close & Intelligent Reporting" },
          { code: "", title: "Accruals, prepayments & provisions", category: "Financial Reconciliation, Close & Intelligent Reporting" },
          { code: "", title: "Intercompany reconciliation", category: "Financial Reconciliation, Close & Intelligent Reporting" },
        ],
        more: [
          { code: "", title: "Journal adjustments & Depreciation" },
          { code: "", title: "Business Intelligence & Dashboards with Power BI" },
          { code: "", title: "AI/ML-Assisted Financial Analysis" },
          { code: "", title: "Basic concept of TDS & TCS", category: "TDS & TCS" },
          { code: "", title: "Registration for TDS & TCS", category: "TDS & TCS" },
          { code: "", title: "Different TDS rates", category: "TDS & TCS" },
          { code: "", title: "TDS on TALLY", category: "TDS & TCS" },
          { code: "", title: "Filling of various returns", category: "TDS & TCS" },
          { code: "", title: "Copilot Studio: Building AI Agents", category: "TDS & TCS" },
          { code: "", title: "AI-Assisted TDS Analysis", category: "TDS & TCS" },
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
      title: "Tally, Compliance, AI in Tax, & GST",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-build-ai-agent-for-scale_ifrulw.avif",
      badges: [
        { text: "Associate-entry", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome:
        "Get hands-on with Tally ERP-9/Prime, corporate compliance, income tax, and GST, powered by AI-assisted tools.",
      courses: {
        initial: [
          { code: "", title: "Company creation", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Cost center & cost category", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Purchase & sale entries", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Accounting with inventory & godowns", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Generation of returns", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Report generation", category: "Practical Training & Tally ERP-9 / Prime" },
        ],
        more: [
          { code: "", title: "Start-up Registration Overview", category: "Corporate Compliance" },
          { code: "", title: "Concept of company & LLP", category: "Corporate Compliance" },
          { code: "", title: "Creation of DSC and DIN", category: "Corporate Compliance" },
          { code: "", title: "Practice on live projects", category: "Corporate Compliance" },
          { code: "", title: "Annual form filling for company, LLP and OPC", category: "Corporate Compliance" },
          { code: "", title: "Types of meeting and directors", category: "Corporate Compliance" },
          { code: "", title: "Regulatory Compliance Evaluation with AI", category: "Corporate Compliance" },
          { code: "", title: "AI-fast Regulatory Compliance", category: "Corporate Compliance" },
          { code: "", title: "Live Clients Project Practice", category: "Corporate Compliance" },
          { code: "", title: "Basic of Income Tax", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Different heads of Income", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Deduction under chapter VI-A", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Computation of Total Income", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Filling of various returns", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "AI-Assisted Tax Roadmap Analysis", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "AI-Optimised Tax Saving", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Applied AI in Tax on Client Projects", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Live Client Projects & Case Study", category: "Practical Training & Tally ERP-9 / Prime" },
          { code: "", title: "Basic concept of GST", category: "Goods & Services Tax (GST)" },
          { code: "", title: "Rate of GST, Supply of goods & services", category: "Goods & Services Tax (GST)" },
          { code: "", title: "Levy and collection of Tax", category: "Goods & Services Tax (GST)" },
          { code: "", title: "GST Registration and different GST Scheme", category: "Goods & Services Tax (GST)" },
          { code: "", title: "Practice on live client projects", category: "Goods & Services Tax (GST)" },
          { code: "", title: "AI GST Compliance", category: "Goods & Services Tax (GST)" },
          { code: "", title: "GST Calculation help of AI", category: "Goods & Services Tax (GST)" },
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
      title: "Strategy, Planning & Performance",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Senior Associate", className: "bg-black text-white text-xs px-3 py-1 font-semibold" },
      ],
      highlight: "Faculty Guided Internship Program ",
      outcome:
        "Sharpen decision analysis, strategic cost management, and capital investment skills, along with budgeting and corporate finance expertise.",
      courses: {
        initial: [
          { code: "", title: "Relevant Costing", category: "Decision Analysis" },
          { code: "", title: "CVP & Break-even Analysis", category: "Decision Analysis" },
          { code: "", title: "Pricing Decisions", category: "Decision Analysis" },
          { code: "", title: "Activity-Based Costing", category: "Strategic Cost Management" },
          { code: "", title: "Life-Cycle & Target Costing", category: "Strategic Cost Management" },
          { code: "", title: "Value Chain Analysis", category: "Strategic Cost Management" },
        ],
        more: [
          { code: "", title: "NPV, IRR & Payback", category: "Capital Investment Decisions" },
          { code: "", title: "Risk-Adjusted Analysis", category: "Capital Investment Decisions" },
          { code: "", title: "COSO ERM Framework", category: "Enterprise Risk Management" },
          { code: "", title: "Risk Quantification", category: "Enterprise Risk Management" },
          { code: "", title: "Operating & Master Budgets", category: "Budgeting and Forecasting" },
          { code: "", title: "Rolling Forecasts & Variance Analysis", category: "Budgeting and Forecasting" },
          { code: "", title: "Operating & Master Budgets", category: "Corporate Finance & Performance" },
          { code: "", title: "Rolling Forecasts & Variance Analysis", category: "Corporate Finance & Performance" },
          { code: "", title: "Balanced Scorecard", category: "Corporate Finance & Performance" },
          { code: "", title: "Responsibility Accounting & KPIs", category: "Corporate Finance & Performance" },
        ],
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
      title: "Reporting & Control",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Senior Associate at Big 4", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
      ],
      outcome:
        "Strengthen internal controls, cost accounting, and reporting skills required to measure and report organisational performance.",
      courses: {
        initial: [
          { code: "", title: "COSO Internal Control Framework", category: "Internal Control" },
          { code: "", title: "Fraud Risk & SOX-Style Controls", category: "Internal Control" },
          { code: "", title: "Job, Process & Standard Costing", category: "Cost Accounting" },
          { code: "", title: "Overhead Allocation", category: "Cost Accounting" },
          { code: "", title: "Ind AS / IFRS Alignment", category: "Financial Statement Preparation" },
        ],
        more: [
          { code: "", title: "Ratio & Trend Analysis", category: "Financial Statement Analysis" },
          { code: "", title: "Quality of Earnings", category: "Financial Statement Analysis" },
          { code: "", title: "IR Framework & Six Capitals", category: "Integrated Reporting" },
          { code: "", title: "Connecting Financial & Non-Financial Narrative", category: "Integrated Reporting" },
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
      title: "Technology & Analytics",
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Senior Associate at Big 4", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
      ],
      outcome:
        "Build technology governance and data analytics skills needed to manage systems and drive data-informed decisions.",
      courses: {
        initial: [
          { code: "", title: "SAP ERP Fundamentals", category: "Internal Control" },
          { code: "", title: "IT General Controls", category: "Internal Control" },
          { code: "", title: "Data Quality & Ownership", category: "Data Governance" },
          { code: "", title: "Master Data Management", category: "Data Governance" },
          { code: "", title: "Excel & Query-Based Analysis", category: "Data Analytics" },
          { code: "", title: "AI-Assisted Analytics Workflows", category: "Data Analytics" },
        ],
        more: [
          { code: "", title: "Dashboard Design Principles", category: "Data Analytics" },
        ],
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
      title: "Business Acumen & Operations",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [],
      outcome: "Develop leadership, operational awareness, and project management skills to apply compliance, tax, GST, and quality frameworks on real client engagements.",
      project: undefined,
      courses: {
        initial: [
          { code: "", title: "Leading Without Authority", category: "Leadership & Social Impact Training" },
          { code: "", title: "Social Impact & CSR Context", category: "Leadership & Social Impact Training" },
          { code: "", title: "Reading Operations into Financials", category: "Operational & Industry-led Knowledge" },
          { code: "", title: "Sector Financial Drivers", category: "Operational & Industry-led Knowledge" },
          { code: "", title: "Process Improvement Basics", category: "Project and Quality Management" },
          { code: "", title: "Engagement Planning & Tracking", category: "Project and Quality Management" },
        ],
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
      "Foundations in Industry-led learning base on Harvard casestudy with US-CMA/CPA, Indian CA and ACCA specialisation carruculam.",
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
      main: "India's #1 Job-Ready AI-Powered Global Business Accounting",

    },
    description:
      "AI-Ready curriculum build on USCMA, ACCA, ICAI, and Harvard Case Study based Corporate Accounting. 1:1 mentorship.  Paid internship in 7 countries.",
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
      { value: ">2.7", unit: "x", label: "Internship offer per student" },
      { value: "16-42", unit: "LPA", label: "Internship highest salary " },
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
    subtitle: `Hands-on courses and workshops designed to build real businesses— because real learning <br class="hidden sm:block" /> comes from apply on real company.`,
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
      title: "Young Charter Fellowship ",
      description:
        "Celebrating exceptional talents beyond academics. If you're leading in fields like dance, space science, or robotics, this scholarship is designed to propel your unique journey forward.",
      eligibility: "Recognized in the top 1% in any field.",
    },
    {
      id: "community",
      title: "MAA Sarifa Fellowship",
      description:
        "For those who have made significant impact in their communities through leadership, volunteer work, or social initiatives.",
      eligibility: "Demonstrated community leadership and impact.",
    },
    {
      id: "entrepreneur",
      title: "Vidyavarthi Merit Scholarship",
      description:
        "Supporting young entrepreneurs and innovators who have started their own ventures or created innovative solutions.",
      eligibility: "Founded a startup or created innovative projects.",
    },
    {
      id: "merit",
      title: "Young Women in Global Leadership Scholarship",
      description:
        "Academic excellence scholarship for students with outstanding academic achievements and test scores.",
      eligibility: "High academic scores and strong record.",
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
            id: "what-is-cba",
            question: "What is the Certified Business Accountant (CBA™) course by Charters' Union?",
            answer:
              "The Certified Business Accountant (CBA™) is an advanced, job-aligned professional program designed by Charters' Union to equip students with practical skills in corporate accounting, taxation, financial analysis, and AI-driven business tools modeled after international frameworks (US-CMA, CPA, ACCA, CFA).",
          },
          {
            id: "who-is-duration",
            question: "What is the total duration of the CBA™ accounting certification?",
            answer:
              "The program duration 7 months, divided into 3 months of intensive campus training & practical labs, followed by a 4-month guaranteed paid corporate internship.",
          },
          {
            id: "can-join-as-fresher",
            question: "Can I join as a fresher without work experience?",
            answer:
              "Yes, freshers can join the  CBA™ accounting certification? program! We have specific tracks designed for recent graduates. Our curriculum includes foundational business courses, soft skills development, and extensive internship opportunities to help you build practical experience and transition smoothly into corporate roles.",
          },
          {
            id: "when-certification-recognized",
            question: "Is the CBA™ certification recognized by corporate employers?",
            answer:
              "Yes. The CBA™ certification is audited by third-party analytics and backed by top accreditation standards, making it widely recognized across Big 4 accounting firms, multinational corporations (MNCs), and fast-growing corporate enterprises.",
          },
          {
            id: "what-if-program-differ",
            question: "How does the CBA™ program differ from traditional B.Com or M.Com degrees?",
            answer:
              "Unlike theoretical university degrees, the CBA™ focuses on 100% practical execution—teaching real-world tax filing, ERP workflows, corporate auditing, and AI accounting tools using Harvard and Columbia business case study methodologies.",
          },
        ],
      },
      {
        id: "curriculum",
        name: "Curriculum",
        faqs: [
          {
            id: "curriculum-structure",
            question: "What subjects are included in the Certified Business Accountant syllabus?",
            answer:
              "1. Financial Accounting & Reporting (General ledger maintenance, trial balance, final financial statements), 2. Corporate Taxation & Statutory Compliance (Corporate Taxation & Statutory Compliance: Direct tax, GST/VAT computation, TDS/TCS, and e-filing), 3. Management Accounting (Budgeting, cost management, Ratio analysis), 4. AI & Digital Accounting (AI & Digital, Automated financial workflows, QuickBooks, and advanced corporate Excel).",
          },
          {
            id: "specializations",
            question: "What accounting software and AI tools will I learn in this course?",
            answer:
              "Students gain hands-on training in industry-standard AI Agent workflows designed to automate routine GST filing, Reminder, bookkeeping and financial reporting and tools including QuickBooks, Advanced Excel, Tally Prime/modern ERP frameworks.",
          },
          {
            id: "curriculum-updates",
            question: "Does the CBA™ curriculum include real-world case studies?",
            answer:
              "Yes. Practical learning is anchored in live corporate datasets and case study methodologies from Harvard and Columbia, preparing students to solve real business finance challenges.",
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
              "Throughout the 7-Month program, students analyze over 50 case studies from Harvard Business School, INSEAD, and other top institutions. These cases cover real business scenarios from companies like PWC, Delloit, KPMG, and Indian conglomerates, helping develop analytical and decision-making skills.",
          },
        ],
      },
      {
        id: "teaching",
        name: "Teaching",
        faqs: [
          {
            id: "teaching-methodology",
            question: "Are CBA™ classes available in online and offline modes?",
            answer:
              "Yes. Charters' Union offers on-campus classes at the Kolkata campus as well as live interactive online batches for working professionals and students across India.",
          },
          {
            id: "instructor-quality",
            question: "What is the practical teaching approach used by Charters' Union?",
            answer:
              "The pedagogy follows a Learn by Doing model: 20% conceptual framework paired with 80% practical execution through live software simulation labs, group problem-solving, and peer benchmarking.",
          },
          {
            id: "guest-lectures",
            question: "What happens if I miss a live class?",
            answer:
              "All live online sessions are recorded and made available on the student portal, accompanied by class notes, practical datasets, and dedicated doubt-clearing sessions.",
          },
        ],
      },
      {
        id: "mentors",
        name: "Mentors",
        faqs: [
          {
            id: "mentor-allocation",
            question: "Who teaches the Certified Business Accountant (CBA™) classes?",
            answer:
              "Classes are mentored by top 1% industry practitioners, including practicing Chartered Accountants (CAs), US-CMAs, CPAs, ACCA holders, CFA charterholders, and corporate finance heads.",
          },
          {
            id: "mentor-sessions",
            question: "Will I get 1:1 mentorship and guidance during the program?",
            answer:
              "Yes. Every student is paired with an industry mentor for personalized 1:1 guidance on academic progress, portfolio reviews, and career roadmap building through CareerPathx™.",
          },
          {
            id: "industry-mentors",
            question: "Can students interact directly with mentors for doubt resolution?",
            answer:
              "Yes. Students have direct access to mentors during live lab sessions, dedicated weekly Q&A hours, and offline faculty hours on campus.",
          },
        ],
      },
      {
        id: "internships",
        name: "Internships",
        faqs: [
          {
            id: "internship-opportunities",
            question: "Is the corporate internship guaranteed for all CBA™ students?",
            answer:
              "Yes. Charters' Union provides a 100% guaranteed 4-month corporate internship as an integral part of the 7-month program structure.",
          },
          {
            id: "internship-stipend",
            question: "Is the CBA™ internship paid, and how much stipend can I expect?",
            answer:
              "Yes, the internship is paid. Students earn a competitive monthly stipend while working on real accounting and finance projects for corporate clients.",
          },
          {
            id: "international-internships",
            question: "Can I do international internships?",
            answer:
              "Yes, students can apply for international internships with our global partner companies. We have partnerships with firms in Singapore, Dubai, UK, and USA. However, international internships are competitive and require strong academic performance and relevant skills.",
          },
          {
            id: "internships-responsibilities",
            question: "What responsibilities do interns handle during their 4-month corporate internship?",
            answer:
              "Interns work directly on live financial tasks, such as GST reconciliation, ledger audits, tax returns preparation, monthly financial closes, and management reporting.",
          },
          {
            id: "internship convert-job-offer",
            question: "Can the 4-month internship convert into a full-time job offer?",
            answer:
              "Yes. A significant portion of Charters' Union interns receive direct Pre-Placement Offers (PPOs) or full-time conversion offers from their host companies before completing the 4-month internship period.",
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
            question: "What is the placement success rate for CBA™ graduates?",
            answer:
              "Over 97% of CBA™ students secure full-time job offers by their 4th month of internship, achieving an average salary increase of 2.35x.",
          },
          {
            id: "placement-guarantee",
            question: "Do you guarantee placements?",
            answer:
              "While we cannot guarantee placements, our track record shows that 97% of students receive job offers with significant salary improvements. We provide extensive support and opportunities, but final placement depends on individual performance, skills, and market conditions. Students must actively participate in the placement process and maintain good academic standing.",
          },
          {
            id: "placement-companies",
            question: "Which top companies recruit Certified Business Accountants from Charters' Union?",
            answer:
              "Graduates are placed at leading companies and financial networks, including PwC, KPMG, Deloitte, EY, Accenture, Razorpay, Swiggy, PhonePe, and HSBC.",
          },
          {
            id: "career-acceleration-services",
            question: "What career acceleration services are provided by CareerPathx™?",
            answer:
              "The CareerPathx™ provides end-to-end career support: Offers Corporate English Speaking, Body Language & presentation skills, 1:1 resume builder tools, Barsonal Branding, LinkedIn optimization, mock HR/technical interviews, domain-specific interview prep, and direct employer referral drives.",
          },
          {
            id: "job-roles-certification",
            question: "What job roles can I apply for after completing the CBA™ certification?",
            answer:
              "Graduates qualify for mid-to-senior entry roles such as Corporate Accountant, Financial Analyst, Tax Associate, GST Consultant, Accounts Manager, and Audit Executive.",
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
            question: "What is the course fee for the Certified Business Accountant (CBA™) program?",
            answer:
              "Tuition fees vary depending on the delivery mode. Flexible installment plans and No-Cost EMI options are available to make payments manageable.",
          },
          {
            id: "payment-options",
            question: "Does Charters' Union offer scholarships for the CBA™ program?",
            answer:
              "Yes. Charters' Union provides merit-based and need-based scholarships covering up to 100% of the tuition fee for eligible undergraduate and postgraduate applicants.",
          },
          {
            id: "scholarships",
            question: "How can I apply for the up to 100% tuition scholarship?",
            answer:
              "Applicants must complete the online registration form and take the 1:1 Career Assessment Test (CareerPathx™) to determine scholarship eligibility.",
          },
        ],
      },
      {
        id: "admission",
        name: "Admission",
        faqs: [
          {
            id: "how-to-apply",
            question: "What are the eligibility criteria for enrolling in the CBA™ program?",
            answer:
              "1. Open to undergraduates and graduates in B.Com, BBA, Economics, Finance, or related business tracks, 2. Graduates from non-finance backgrounds seeking a structured transition into corporate accounting are also eligible, 3. Basic numerical literacy; prior advanced accounting experience is not required as training starts from fundamental principles.",
          },
          {
            id: "entrance-exams",
            question: "How do I submit an application for the CBA™ course?",
            answer:
              "1. Visit the official page at https://chartersunion.com/certified-business-accountant, 2. Fill out the application form with your academic details, 3. Schedule your 1:1 Career Assessment Test, 4. Attend the counseling call to finalize your cohort seat and financial aid",
          },
          {
            id: "application-deadline",
            question: "Is there an entrance exam for admission into the CBA™ cohort?",
            answer:
              "Admission includes an initial Career Assessment via CareerPathx™ to evaluate analytical capability, learning goals, and scholarship brackets rather than a strict competitive elimination exam.",
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
      card2: "87% student got full time jobs offer before end Internship"
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
      },
      pricingCard: {
        title: "CBA™ (Certified Business Accountant)",
        highlightText: "₹3,750",
        highlightSuffix: "/month",
        startingAtLabel: "Starts at",
        startingAtValue: "INR 3,500",
        startingAtSuffix: "/month",
        noCostEmiText: "Zero cost EMI options available.",
        viewPlansLabel: "View Plans",
        admissionFeeLabel: "Admission Fee (Non-Refundable)",
        admissionFeeValue: "Rs. 1,000/-",
        admissionGstText: "(Add GST) Rs. 4,500",
        tuitionFeeLabel: "One Time Laptop Fee(Optional)",
        tuitionFeeValue: "Rs. 6,000/-",
        tuitionGstText: "(Add GST) Rs. 70,200",
        totalLabel: "Total Programme Fee:",
        totalValue: "INR 42,000/-",
        highlightFeatures: [
          "Live Instruction From CA/CMA & Big-4 Faculty",
          "Vibrant Community Across India, GCC & Singapore",
          "Hands-On Curriculum With Real Corporate Case Studies",
          "Official Certification In Business Accounting"
        ],
        footerNote: "The Course Fee is payable through Net Banking and Credit/Debit Cards.",
        ctaPrimary: "Book a Free Demo",
        ctaSecondary: "VIEW EMI"
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
      "The Job-Ready AI-Poward Certificate in  DGM™ (Digital Growth & Marketing) at the Chartersunion Learning Support Centre helps learners build Job-ready skills through instructor-led digital marketing classes, Harvard Level Case Study, Live projects, in-class faculty Guided internship and CareerPathx™ AI-Poward English Communication, Personal Branding, Corporate Body Language and AI-poward Mock-interview, AI-ready Profile Base Jobs Search Engine.",
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
