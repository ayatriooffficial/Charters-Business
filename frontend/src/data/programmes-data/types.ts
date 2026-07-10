// All shared TypeScript interfaces and types for Charters' Union programmes.
// Imported by cba.ts, dgm.ts, tbm.ts, and index.ts.

export type ProgramKey =
  | "certified-business-accountant"
  | "digital-growth-&-marketing"
  | "technology-&-business-management"

// BASE INTERFACES

export interface ProgrammeStat {
  value: string;
  label: string;
}

// DROPDOWN DATA

export interface DropdownData {
  title: string;
  description: string;
  duration: string;
  stats: ProgrammeStat[];
  link: string;
  imageUrl: string;
}

// CARD DATA (Our Programmes Section)

export interface ProgrammeCardData {
  image: string;
  hasVideo: boolean;
  rating: {
    score: number;
    reviews: number;
  };
  title: string;

  level: string;
  certificateType: string;
  description: string;
  format: {
    type: string;
  };
  eligibility: {
    type: string;
  };
  duration: {
    type: string;
  };
  deadline: {
    type: string;
  };
  careerOutcomes: string[];
  jobOpenings: string;
}

// HERO DATA

export interface HeroData {
  badge: string;
  categoryLabel: string;
  title: {
    main: string;


  };
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  alumniCompanies: {
    name: string;
    logo: string;
  }[];
  instructors: {
    badge: string;
    title: string;
  };
  heroImage: string;
  floatingCards: {
    topRight: {
      name?: string;
      badge?: string;
      students: string;
      rating: number;
    };
    bottomLeft: {
      label: string;
      percentage: string;
      subLabel: string;
      ctcIncrease: string;
    };
  };
}

// PROGRAM INFO DATA

export interface ProgramInfoData {
  duration: string;
  details: {
    label: string;
    value: string;
    subtitle?: string;
    dotColor: string;
  }[];
}

// TRACK RECORD DATA

export interface TrackRecordData {
  stats: {
    value: string;
    unit: string;
    label: string;
  }[];
  experienceData: {
    label: string;
    value: number;
    percentage: string;
  }[];
  backgroundData: {
    label: string;
    value: number;
    percentage: string;
  }[];
  impactCards: {
    title: string;
    description: string;
  }[];
  companyLogos: {
    name: string;
    logo: string;
  }[];
}

// AI DEGREE PROGRAM DATA

export interface DegreeProgramData {
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  accordions: {
    id: string;
    title: string;
    items: string[];
  }[];
  academicPartners: {
    name: string;
    logo?: string;
    description?: string;
  }[];
  immersions: {
    name: string;
  }[];
  campusImage: {
    src: string;
    alt: string;
  };
}

// CURRICULUM DATA

export interface CurriculumCategory {
  id: string;
  label: string;
  title: string;
}

export interface CourseSet {
  term: string;
  location: string;
  courses: {
    code: string;
    title: string;
  }[];
}

export interface CurriculumData {
  categories: CurriculumCategory[];
  courseData: Record<string, CourseSet[]>;
}

// CURRICULUM SECTION (below-fold, fully per-programme data-driven)
export type CurriculumTabKey = "courses" | "collaboration" | "business" | "cultural";

export interface CurriculumBadge {
  text: string;
  className: string;
}

export interface CurriculumCourse {
  code: string;
  title: string;
}

export interface CurriculumImmersionItem {
  title: string;
  subtitle?: string;
}

export interface CurriculumTerm {
  id: string;
  term: string;
  title: string;
  badges: CurriculumBadge[];
  highlight?: string;
  project?: { description: string; buttonLabel?: string };
  outcome?: string;
  termImage?: string;
  courses?: { initial: CurriculumCourse[]; more: CurriculumCourse[] };
  moreCoursesGray?: boolean;
  collaboration?: CurriculumImmersionItem[];
  collaborationTextBlack?: boolean;
  business?: CurriculumImmersionItem[];
  businessNote?: string;
  cultural?: CurriculumImmersionItem[];
  culturalVariant?: "orange" | "red";
  culturalImage?: string;
  internship?: { paragraphs: string[]; options: string[] };
}

export interface CurriculumSectionData {
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  items: CurriculumTerm[];
  tabOrder?: CurriculumTabKey[];
  tabLabels?: Partial<Record<CurriculumTabKey, string>>;
}

// LEARN APPLY REFLECT DATA

export interface LearnApplyData {
  categories: CurriculumCategory[];
  courseData: Record<string, CourseSet[]>;
}

// SCHOLARSHIPS DATA

export interface ScholarshipData {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  image: string;
  alt: string;
}

// FAQ DATA

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQItem[];
}

export interface FAQData {
  categories: FAQCategory[];
}

// MAIN PROGRAMME INTERFACE

export interface Programme {
  id: string;
  slug: ProgramKey;
  dropdown: DropdownData;
  card: ProgrammeCardData;
  hero: HeroData;
  programInfo: ProgramInfoData;
  trackRecord: TrackRecordData;
  degreeProgram: DegreeProgramData;
  curriculum: CurriculumData;
  learnApply: LearnApplyData;
  scholarships: ScholarshipData[];
  faq: FAQData;
  students?: any;
  learningOutcomes?: any;
  weekAtUnion?: any;
  pricing?: any;
  faculty?: any;
  curriculumSection?: CurriculumSectionData;
  assets?: ProgrammeAssetConfig;
}

export interface ProgrammeAssetConfig {
  heroImage: string;
  internshipPartnerLogo: string;
  industrialFacultyLogo: string;
  hiredCompaniesBanner: string;
  campusImage: string;
  disclaimerText: string;
  timetableImage: string;
  curriculumCityscapes: {
    dubai: string;
    india: string;
    singapore: string;
    ghana: string;
    usa: string;
    argentina: string;
    europe: string;
    internship: string;
  };
  chartTitles: {
    card1: string;
    card2: string;
  };
  pricing: {
    emiAmount: string;
    emiMonths: string;
    jobTracks: {
      name: string;
      badge?: string;
      badgeDate?: string;
    }[];
  };
}
