export interface Student {
  name: string;
  batch: string;
  city: string;
  company: string;
  companyLogo?: string;
  role: string;
  timeToPlace: string;
  previousCollege: string;
  background: string;
  internship: string;
  researchPaper: string;
  caseStudies: string;
  imageSrc: string;
  linkedinUrl?: string;
  category: string;
}

export interface StudentCategory {
  id: string;
  name: string;
}

export const studentCategories: StudentCategory[] = [
  { id: "jul", name: "July'26" },
  { id: "apr", name: "April'26" },
  { id: "jan", name: "January'26" },
  { id: "oct", name: "October'25" },
  { id: "dec", name: "August'25" },
];

export const studentMembers: Student[] = [
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
    name: "Anjali Roy",
    batch: "OCT 2025",
    city: "Kolkata",
    company: "TATA",
    role: "Finance Executive",
    timeToPlace: "Just in 7 months",
    previousCollege: "Jadavpur University",
    background: "BCOM Fresher",
    internship: "EY India — Audit and assurance services",
    researchPaper: "Blockchain applications in financial auditing",
    caseStudies: "How Paytm navigated RBI regulations post-IPO...",
    imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619290/bikrom_tzbjim.avif",
    linkedinUrl: "#",
    category: "oct",
  },
  {
    name: "Karan Gupta",
    batch: "DEC 2025",
    city: "Hyderabad",
    company: "TATA",
    role: "Strategy Analyst",
    timeToPlace: "Just in 7 months",
    previousCollege: "BITS Pilani",
    background: "B.Tech Graduate Fresher",
    internship: "KPMG — Strategy consulting",
    researchPaper: "AI disruption in traditional consulting models",
    caseStudies: "How TCS transformed its delivery model for Gen AI...",
    imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784619290/bikrom_tzbjim.avif",
    linkedinUrl: "#",
    category: "dec",
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
];
