import type { Programme, CurriculumSectionData } from "./types";
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
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
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
          { code: "SAMA 401", title: "Corporate English Speaking" },
          { code: "FIFI 101", title: "Professional Personal Branding" },
          { code: "FIFI 102", title: "Professional Digital Networking" },
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
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
      ],
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
          { code: "PRTC 102", title: "Body Language Training" },
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
      termImage:
        "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
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
            title: "Personal Video Growth Strategy Creator Studio",
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
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
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
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
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
        {
          text: "On Campus",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
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
      outcome: "Build your own digital company with hands-on guidance",
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
      "7-month job-ready Certified Business Accountant program. AI-powered curriculum aligned with US-CMA, CPA, ACCA, and ICAI frameworks. Includes 4-month paid internship in 7 countries, corporate English, and placement support.",
    duration: "7 Month",
    stats: [
      { value: "7", label: "MONTHS" },
      { value: "150+", label: "COMPANIES" },
      { value: "92%", label: "PLACEMENT RATE" },
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
      "Gain real-world corporate accounting skills through Harvard-style case studies and US-CMA, CPA, ACCA integrated AI-led curriculum under top 1% industry faculty.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "3 Months theory + 4 Months in-class intranship" },
    deadline: { type: "Round 1: 30th Oct '25" },
    careerOutcomes: [
      "Foundations in Industry-led learning based on Harvard Case Study with US-CMA/CPA, Indian CA and ACCA specialization curriculum.",
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
  },
  // Hero Data
  hero: {
    badge: "",
    categoryLabel: "",
    title: {
      main: "India's #1 Job-Ready AI-Powered Global Business Accounting",

    },
    description:
      "AI-Ready curriculum built on USCMA, ACCA, ICAI, and Harvard Case Study based Corporate Accounting. 1:1 mentorship. Paid internship in 7 countries.",
    stats: [
      { label: "97.7% Avg Placement", value: "93%" },
      { label: "100% Paid Internship", value: "150+" },
    ],
    alumniLabel: "Find our student at -",
    alumniCompanies: [
      { name: "Google", logo: "/images/companies/google.png" },
      { name: "Amazon", logo: "/images/companies/amazon.png" },
      { name: "Deloitte", logo: "/images/companies/deloitte.png" },
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
      { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
      { name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
      { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
      { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
      { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
      { name: "Paytm", logo: "https://logo.clearbit.com/paytm.com" },
    ],
  },

  // Degree Program
  degreeProgram: {
    badge: "DEGREE & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "CBA™",
      suffix: "Certification",
    },
    auditorText: "Our placement reports are audited by <strong>Zivanta Analytics</strong> and follow the IPRS Revision 2.2 framework for transparent and consistent compensation data.",
    accordions: [
      {
        id: "placement",
        title: "Outstanding Placement Record and Career Support",
        items: [
          "**92% placement** rate with top companies across accounting, finance, and technology sectors",
          "**2.35x average salary** jump with CTC ranging from 4-12 LPA",
          "Graduates placed at **KPMG, Deloitte, EY, PwC, Accenture, Flipkart, Google** across India and globally",
          "**150+ recruiting partners** including leading MNCs and fast-growing startups",
          "Dedicated **career services team** with resume workshops, mock interviews, and 1:1 coaching",
        ],
      },
      {
        id: "curriculum",
        title: "World-Class Curriculum and Learning Experience",
        items: [
          "**Live projects** with real companies providing hands-on business experience",
          "**Harvard-style case studies** covering real-world accounting and finance scenarios",
          "**Industry-designed curriculum** updated annually based on market trends and employer feedback",
          "Learn from **top 1% industry faculty** including CAs, CPAs, CMAs, and CMOs with decades of corporate experience",
          "**Specialized tracks** in Corporate Accounting, FP&A, Taxation, and FinTech",
        ],
      },
      {
        id: "global",
        title: "Global Exposure and International Internships",
        items: [
          "**4-month paid internship** in 7 countries: India, USA, Canada, Saudi Arabia, Qatar, Singapore, and Ghana",
          "Work with **global companies** for cross-cultural business experience",
          "**International networking** opportunities with students and alumni across continents",
          "Exposure to **global accounting standards** — US GAAP, IFRS, Ind AS",
          "Build **worldwide professional network** during your program",
        ],
      },
      {
        id: "accreditation",
        title: "Industry-Aligned Certification",
        items: [
          "Curriculum aligned with **US-CMA, CPA, ACCA, and ICAI** frameworks",
          "AI-integrated learning across all modules for future-ready skills",
          "Certificate recognized by **Charters' Union's 150+ corporate partners**",
          "**Industry partnerships** with leading accounting and finance organizations",
          "Continuous curriculum updates based on **employer feedback and market trends**",
        ],
      },
      {
        id: "facilities",
        title: "Modern Learning Environment",
        items: [
          "**AI-enabled classrooms** with latest teaching technology",
          "**Real-time business data** for hands-on financial analysis",
          "**Student-run businesses** for practical entrepreneurial experience",
          "Access to **industry-standard software** — Tally, QuickBooks, Excel, Power BI, and ERP systems",
          "**Corporate-style campus** designed to simulate professional work environments",
        ],
      },
    ],
    academicPartners: [
      {
        name: "Charters' Union Learning Support Centre",
        description: "AI-Powered Job-Ready Training",
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
            { code: "CBA 101", title: "Financial Accounting Fundamentals" },
            { code: "CBA 102", title: "Management Accounting" },
            { code: "CBA 103", title: "Business Taxation" },
          ],
        },
      ],
      elective: [
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            { code: "CBA 301", title: "Corporate Finance & FP&A" },
            { code: "CBA 302", title: "Audit & Assurance" },
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
            id: "what-is-cba",
            question: "What is the Certified Business Accountant (CBA) program?",
            answer:
              "The CBA program is a 7-month job-ready certification course designed to prepare you for corporate accounting and finance roles. The curriculum is aligned with US-CMA, CPA, ACCA, and ICAI frameworks, with AI-integrated learning across all modules. It includes 3 months of classroom theory and a 4-month faculty-guided paid internship in 7 countries.",
          },
          {
            id: "who-is-eligible",
            question: "Who is eligible for the CBA program?",
            answer:
              "The program is open to 12th pass-outs and early undergraduates from any stream — Commerce, Science, or Arts. No prior accounting knowledge is required. We provide foundational courses to help you build skills from the ground up.",
          },
          {
            id: "can-join-as-fresher",
            question: "Can I join as a fresher?",
            answer:
              "Absolutely! The CBA program is specifically designed for freshers. You'll learn practical accounting, taxation, auditing, and ERP systems from scratch through hands-on training, live projects, and a guided internship.",
          },
          {
            id: "when-are-classes",
            question: "When are the live classes held?",
            answer:
              "Classes are conducted Monday to Friday on campus in Kolkata. The schedule alternates between theory sessions, practical lab work, and project-based learning to ensure a well-rounded experience.",
          },
          {
            id: "what-if-miss-lecture",
            question: "What if I miss a lecture?",
            answer:
              "If you miss a session, class recordings and materials are available through our learning platform. However, our program emphasizes hands-on, interactive learning, so regular attendance is strongly encouraged. Faculty and teaching assistants are available for additional support.",
          },
          {
            id: "program-duration",
            question: "What is the program duration?",
            answer:
              "The CBA program is 7 months total: 3 months of intensive classroom theory followed by a 4-month paid internship. The internship provides real-world corporate accounting experience with partner companies across 7 countries.",
          },
          {
            id: "does-give-certificates",
            question: "Does the program provide certification?",
            answer:
              "Yes, upon successful completion, you receive the CBA™ (Certified Business Accountant) corporate certificate from Charters' Union. The certification is recognized by our 150+ corporate hiring partners and demonstrates your proficiency in practical accounting, taxation, and financial reporting.",
          },
          {
            id: "is-certification-worth-it",
            question: "Is the CBA certification worth it?",
            answer:
              "Yes! CBA graduates are placed at companies like KPMG, Deloitte, EY, and PwC with starting salaries averaging ₹3.5 LPA. The 4-month paid internship gives you real experience that employers value. The program has a 92% placement rate and opens doors to careers in corporate accounting, FP&A, taxation, and fintech.",
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
              "The CBA curriculum has two phases: 3 months of classroom theory (accounting fundamentals, taxation, auditing, ERP systems) and a 4-month faculty-guided paid internship. The entire curriculum is AI-integrated, with hands-on training using industry tools like Tally, QuickBooks, Excel, and Power BI.",
          },
          {
            id: "specializations",
            question: "What topics are covered?",
            answer:
              "You'll learn financial accounting, management accounting, corporate taxation, auditing & assurance, financial reporting (IFRS/Ind AS), ERP systems, and business communication. The program also covers AI tools for accounting, corporate English, and professional branding.",
          },
          {
            id: "curriculum-updates",
            question: "How often is the curriculum updated?",
            answer:
              "Our curriculum is reviewed every 6 months based on feedback from our 150+ corporate hiring partners. Industry experts co-design course modules to ensure you learn the tools and practices that employers currently demand.",
          },
          {
            id: "international-exposure",
            question: "Is there international exposure?",
            answer:
              "Yes! The 4-month paid internship includes placements across 7 countries: India, USA, Canada, Saudi Arabia, Qatar, Singapore, and Ghana. You'll gain cross-cultural business experience working with global teams and learn international accounting standards.",
          },
          {
            id: "case-studies",
            question: "Do you use case studies?",
            answer:
              "Yes, we use Harvard-style case studies throughout the program. You'll analyze real business scenarios from companies across accounting, finance, and commerce, helping you develop analytical and decision-making skills valued by top employers.",
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
              "We use a practical, hands-on approach. Classes blend interactive lectures, case discussions, live project work, and lab sessions using real accounting software. You'll apply what you learn immediately through student-run businesses and industry projects.",
          },
          {
            id: "instructor-quality",
            question: "Who are the instructors?",
            answer:
              "Our faculty includes practicing CAs, CPAs (USA), CMAs (USA), CMOs, and industry practitioners with decades of corporate experience. They bring real-world insights from leading accounting firms and multinational corporations directly to the classroom.",
          },
          {
            id: "guest-lectures",
            question: "Are there guest lectures?",
            answer:
              "Yes, we regularly host guest sessions by CFOs, finance directors, audit partners, and entrepreneurs. These sessions provide invaluable insights into industry practices, career paths, and emerging trends in accounting and finance.",
          },
          {
            id: "class-size",
            question: "What is the class size?",
            answer:
              "Each CBA batch has 25-40 students, ensuring personalized attention and hands-on mentorship. Small class sizes mean you get more one-on-one time with faculty and better guidance during practical exercises and projects.",
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
              "Each student is paired with a faculty mentor and an industry mentor within the first month. Faculty mentors guide your learning and career planning, while industry mentors — practicing accountants and finance professionals — provide real-world guidance and networking opportunities.",
          },
          {
            id: "mentor-sessions",
            question: "How frequent are mentor sessions?",
            answer:
              "Regular one-on-one sessions are held weekly throughout the program. Mentors also help with resume building, interview preparation, LinkedIn branding, and job search strategies tailored to accounting and finance roles.",
          },
          {
            id: "industry-mentors",
            question: "Who are the industry mentors?",
            answer:
              "Our industry mentors include senior accountants, audit managers, FP&A leads, tax consultants, and finance directors from companies like KPMG, Deloitte, EY, PwC, and leading startups. They provide practical career guidance and industry connections.",
          },
        ],
      },
      {
        id: "internships",
        name: "Internships",
        faqs: [
          {
            id: "internship-opportunities",
            question: "Is the internship paid?",
            answer:
              "Yes! The 4-month internship is paid — you earn while you learn. Placements are available with 150+ partner companies across 7 countries in accounting, taxation, audit, and FP&A roles. The internship is faculty-guided, ensuring you have support throughout.",
          },
          {
            id: "internship-stipend",
            question: "What is the internship stipend?",
            answer:
              "Internship stipends vary by company and role, typically ranging from ₹5,000 to ₹25,000 per month for domestic placements and higher for international roles. Many students receive full-time job offers from their internship companies before the program ends.",
          },
          {
            id: "international-internships",
            question: "Can I do an international internship?",
            answer:
              "Yes! We offer international internship placements in the USA, Canada, Saudi Arabia, Qatar, Singapore, and Ghana. These are competitive and based on performance, English proficiency, and relevant skills demonstrated during the theory phase.",
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
              "We provide comprehensive placement support: resume workshops, AI-powered mock interviews, LinkedIn profile optimization, soft skills training, and direct access to our 150+ hiring partners. The placement cell actively connects you with companies hiring for accounting and finance roles.",
          },
          {
            id: "placement-record",
            question: "What is the placement record?",
            answer:
              "92% of CBA graduates receive job offers within the program duration. The average starting salary is ₹3.5 LPA, with top performers reaching ₹7.3 LPA. Graduates work at KPMG, Deloitte, EY, PwC, Accenture, Flipkart, and leading startups across India.",
          },
          {
            id: "placement-guarantee",
            question: "Do you guarantee placements?",
            answer:
              "While no ethical institution can guarantee placement, our track record shows 92% of students receive job offers. We provide extensive support including AI interview coaching, professional branding, and direct company connections. Your placement depends on your performance, skills, and active participation in the process.",
          },
          {
            id: "career-services",
            question: "Do you offer ongoing career support?",
            answer:
              "Yes! Alumni have access to our career services including job postings, networking events, skill development workshops, and career counseling. Our alumni network stays connected and supports each other's career growth.",
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
              "The 7-month CBA program fee is structured to be accessible. The fee includes tuition, study materials, software access, and placement services. Contact our admissions team at admissions@chartersunion.com or call 9836465083 for the detailed fee structure and current offers.",
          },
          {
            id: "payment-options",
            question: "What payment options are available?",
            answer:
              "We offer flexible payment options: one-time payment with discount, monthly installments, and 0% interest EMI plans for 12 or 18 months through our partner banks. Scholarship and financial aid options are also available.",
          },
          {
            id: "scholarships",
            question: "Are scholarships available?",
            answer:
              "Yes, we offer merit-based scholarships covering up to 100% of tuition fees. Scholarships are awarded based on academic performance, entrance assessment scores, and financial need. Contact admissions to learn about current scholarship opportunities.",
          },
          {
            id: "education-loan",
            question: "Can I get an education loan?",
            answer:
              "Yes, we have partnerships with leading banks for education loans. Our team assists students with the loan application process. Most students can secure loans with flexible repayment options starting after program completion and job placement.",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/daz77u7w0mph9fuq6q3x_xbxagc.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/bishnu_kar_yza5zq.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/bishnu_kar_yza5zq.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/bishnu_kar_yza5zq.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619295/Paritosh_majhi_g7tq54.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619292/Harshi_Shing_agzcbr.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/bishnu_kar_yza5zq.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619291/bishnu_kar_yza5zq.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619293/Leehsa_ohod3o.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619296/ujxrqahyhb8ewaohrb1m_syggo4.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619294/Natasa_sikdar_qvmlj1.avif",
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
        imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619290/bikrom_tzbjim.avif",
        linkedinUrl: "#",
        category: "jan",
      },
    ],
  },
  faculty: {
    eyebrow: "LEARN FROM THE BEST",
    title: { prefix: "Meet your", highlight: "Faculty" },
    subtitle: "Learn from industry leaders, academic experts, and seasoned practitioners who bring real-world experience to your education.",
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
      card2: "87% of students got full time job offers before end of internship"
    },

    // Renders the EMI value, payment months, and career tracks inside PricingTabs
    pricing: {
      emiLabel: "Starting at",
      primaryButton: { text: "Book a Free Demo" },
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
        { name: "Corporate Finance & Accounting" },
        { name: "Financial Planning & Analysis (FP&A)" },
        { name: "US-CMA & ACCA Certifications", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" },
        { name: "AI-led Business Valuation", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" }
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
    eyebrow: "WHAT YOU'LL MASTER",
    sidebarTitle: "LEARNING OUTCOMES",
    sidebarSubtitle: "Navigate through our mastery areas",

    comparisonTable: {
      title: "How CBA™ is fundamentally different",
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
      downloadUrl: "#",
      downloadFilename: "charters-cba-brochure.avif"
    },
    advisor: {
      heading: "Want to learn more about ventures and collaborations?",
      buttonText: "Talk to an advisor",
      phoneNumber: "+919836465083"
    }
  }
};
