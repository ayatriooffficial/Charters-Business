export interface Student {
  id: string;
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
  courseCategory?: string;
}

export interface StudentCategory {
  id: string;
  name: string;
}

export const homeStudentCategories: StudentCategory[] = [
  { id: "jul", name: "July'26" },
  { id: "apr", name: "April'26" },
  { id: "jan", name: "January'26" },
  { id: "oct", name: "October'25" },
  { id: "dec", name: "August'25" },
];

// Single source of truth: individual student records (referenced by both homeStudents and the course arrays).
const varshaNadia: Student = {
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
  linkedinUrl: "#",
  name: "Varsha Nadia",
  id: "varsha-nadia",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365629/Varsha_nadia_eoiti2.avif",
  category: "jul",
};

const raviPatel: Student = {
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
  linkedinUrl: "#",
  name: "Ravi Patel",
  id: "ravi-patel",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015921/Ravi_Patel_y9uebw.avif",
  category: "jul",
};

const priyaDasgupto: Student = {
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
  linkedinUrl: "#",
  name: "Priya Dasgupto",
  id: "priya-dasgupto",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365628/Priya_dasgupto_mx1qlq.avif",
  category: "jul",
};

const rahulSharma: Student = {
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
  linkedinUrl: "#",
  name: "Rahul Sharma",
  id: "rahul-sharma-jul",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015920/Bikrom_haldar_jjnto8.avif",
  category: "jul",
};

const alokShukla: Student = {
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
  linkedinUrl: "#",
  name: "Alok Shukla",
  id: "alok-shukla",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015921/Alok_Shukla_kw56r0.avif",
  category: "apr",
};

const natasaSikdar: Student = {
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
  linkedinUrl: "#",
  name: "Natasa Sikdar",
  id: "natasa-sikdar",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015920/Natasa_sikdar_io4kpy.avif",
  category: "apr",
};

const bishnuSarkar: Student = {
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
  linkedinUrl: "#",
  name: "Bishnu Sarkar",
  id: "bishnu-sarkar",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015920/Bishnu_sarkar_r3avif.avif",
  category: "apr",
};

const paritoshMajhi: Student = {
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
  linkedinUrl: "#",
  name: "Paritosh Majhi",
  id: "paritosh-majhi",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015920/Paritosh_majhi_aeg6rf.avif",
  category: "apr",
};

const nehaSingh: Student = {
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
  linkedinUrl: "#",
  name: "Neha Singh",
  id: "neha-singh",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365628/Neha_Singh_e4ol1n.avif",
  category: "jan",
};

const parthoSen: Student = {
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
  linkedinUrl: "#",
  name: "Partho Sen",
  id: "partho-sen",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365628/Partho_Sen_kpzary.avif",
  category: "jan",
};

const sanjanaBanerjee: Student = {
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
  linkedinUrl: "#",
  name: "Sanjana Banerjee",
  id: "sanjana-banerjee",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365724/Sanjana_banerjee_phn953.avif",
  category: "jan",
};

const rahulSharmaJan: Student = {
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
  linkedinUrl: "#",
  name: "Rahul Sharma",
  id: "rahul-sharma-jan",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015921/Rahul_Sharma_hansjj.avif",
  category: "jan",
};

const afreenKhan: Student = {
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
  linkedinUrl: "#",
  name: "Afreen Khan",
  id: "afreen-khan",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365725/Afreen_khan_gqnyfw.avif",
  category: "oct",
  courseCategory: "jul",
};

const sunitaDas: Student = {
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
  linkedinUrl: "#",
  name: "Sunita Das",
  id: "sunita-das",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015921/Sunita_Das_ad2knd.avif",
  category: "oct",
  courseCategory: "jul",
};

const somnathJana: Student = {
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
  linkedinUrl: "#",
  name: "Somnath Jana",
  id: "somnath-jana",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365629/Somnath_jana_lofa0k.avif",
  category: "oct",
  courseCategory: "jul",
};

const rohonGupta: Student = {
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
  linkedinUrl: "#",
  name: "Rohon Gupta",
  id: "rohon-gupta",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365628/Rohon_Gupta_ksl8ku.avif",
  category: "oct",
  courseCategory: "jul",
};

const kousikBanerjee: Student = {
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
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365628/Kousik_Banerjee_uezwse.avif",
  linkedinUrl: "#",
  name: "Kousik Banerjee",
  id: "kousik-banerjee",
  category: "dec",
  courseCategory: "jul",
};

const poojaGupta: Student = {
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
  linkedinUrl: "#",
  name: "Pooja Gupta",
  id: "pooja-gupta",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786015920/Anuska_das_hpnipd.avif",
  category: "dec",
  courseCategory: "apr",
};

const arshiRoy: Student = {
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
  linkedinUrl: "#",
  name: "Arshi Roy",
  id: "arshi-roy",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365725/arshi_roy_kdvx0l.avif",
  category: "dec",
  courseCategory: "jan",
};

const mohitBansal: Student = {
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
  linkedinUrl: "#",
  name: "Mohit Bansal",
  id: "mohit-bansal",
  imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786365725/Mohit_Bansal_yrwivb.avif",
  category: "dec",
  courseCategory: "jul",
};

export const homeStudents: Student[] = [
  varshaNadia,
  raviPatel,
  priyaDasgupto,
  rahulSharma,
  alokShukla,
  natasaSikdar,
  bishnuSarkar,
  paritoshMajhi,
  nehaSingh,
  parthoSen,
  sanjanaBanerjee,
  rahulSharmaJan,
  afreenKhan,
  sunitaDas,
  somnathJana,
  rohonGupta,
  kousikBanerjee,
  poojaGupta,
  arshiRoy,
  mohitBansal,
];


export const cbaStudentCategories: StudentCategory[] = [
  { id: "jul", name: "July" },
  { id: "apr", name: "April" },
  { id: "jan", name: "January" },
];

export const cbaStudents: Student[] = [
  // July
  raviPatel,
  rahulSharma,
  afreenKhan,
  sunitaDas,
  // April
  alokShukla,
  natasaSikdar,
  poojaGupta,
  paritoshMajhi,
  // January
  sanjanaBanerjee,
  rahulSharmaJan,
  arshiRoy,
  // Phase 2 filler (course-only copy to complete January → 4)
  { ...raviPatel, id: "ravi-patel-jan", category: "jan" },
];

export const dgmStudentCategories: StudentCategory[] = [
  { id: "jan", name: "January" },
  { id: "apr", name: "April" },
  { id: "jul", name: "July" },
];

export const dgmStudents: Student[] = [
  // January
  nehaSingh,
  parthoSen,
  // Phase 2 fillers (course-only copies to complete January → 4)
  { ...varshaNadia, id: "varsha-nadia-jan", category: "jan" },
  { ...priyaDasgupto, id: "priya-dasgupto-jan", category: "jan" },
  // April
  bishnuSarkar,
  // Phase 2 fillers (course-only copies to complete April → 4)
  { ...somnathJana, id: "somnath-jana-apr", category: "apr" },
  { ...kousikBanerjee, id: "kousik-banerjee-apr", category: "apr" },
  { ...nehaSingh, id: "neha-singh-apr", category: "apr" },
  // July
  varshaNadia,
  priyaDasgupto,
  somnathJana,
  kousikBanerjee,
];

export const tbmStudentCategories: StudentCategory[] = [
  { id: "jul", name: "July" },
  { id: "apr", name: "April" },
  { id: "jan", name: "January" },
];

export const tbmStudents: Student[] = [
  // July
  rohonGupta,
  mohitBansal,
  // Phase 2 fillers (course-only copies to complete July → 4)
  { ...sanjanaBanerjee, id: "sanjana-banerjee-jul", category: "jul" },
  { ...rahulSharmaJan, id: "rahul-sharma-jan-jul", category: "jul" },
  // January
  sanjanaBanerjee,
  rahulSharmaJan,
  // Phase 2 fillers (course-only copies to complete January → 4)
  { ...rohonGupta, id: "rohon-gupta-jan", category: "jan" },
  { ...mohitBansal, id: "mohit-bansal-jan", category: "jan" },
  // April (had no students — Phase 2 fillers make it 4)
  { ...rohonGupta, id: "rohon-gupta-apr", category: "apr" },
  { ...mohitBansal, id: "mohit-bansal-apr", category: "apr" },
  { ...sanjanaBanerjee, id: "sanjana-banerjee-apr", category: "apr" },
  { ...rahulSharmaJan, id: "rahul-sharma-jan-apr", category: "apr" },
];
