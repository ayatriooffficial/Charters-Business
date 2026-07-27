// All shared TypeScript interfaces and types for Charters' Union programmes.
// Imported by cba.ts, dgm.ts, tbm.ts, and index.ts.

export type ProgramKey =
  | "certified-business-accountant"
  | "digital-growth-marketing"
  | "technology-business-management"

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
  expectedCtc?: {
    traditional: string;
    cmp: string;
  };
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
  alumniLabel?: string;
  alumniCompanies: {
    name: string;
    logo: string;
  }[];
  enrolledCount?: string;
  actions?: {
    primaryText: string;
    secondaryText: string;
  };
  instructors: {
    badge: string;
    title: string;
    aiSkills?: {
      title: string;
      description: string;
      skills: string[];
    };
  };
  heroImage: string;
  floatingCards: {
    topRight: {
      name?: string;
      badge?: string;
      students: string;
      rating: number;
      stars?: string;
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
  auditorText?: string;
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

export interface DegreeAccordionItem {
  id: string;
  title: string;
  items: string[];
}

export interface DegreeProgramData {
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix?: string;
  };
  auditorText?: string;
  accordions: DegreeAccordionItem[];
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

export interface CurriculumSkillsData {
  previewSkills: string[];
  modalTitle: string;
  modalSkillsGain: {
    title: string;
    skills: string[];
  };
  modalToolsLearn: {
    title: string;
    tools: string[];
  };
}

export interface CurriculumSectionData {
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  items: CurriculumTerm[];
  tabOrder?: CurriculumTabKey[];
  tabLabels?: Partial<Record<CurriculumTabKey, string>>;
  skillsData?: CurriculumSkillsData;
}

// LEARN APPLY REFLECT DATA

export interface LearnApplyData {
  title?: {
    prefix: string;
    highlight: string;
    suffix?: string;
  };
  subtitle?: string;
  categories: CurriculumCategory[];
  courseData: Record<string, CourseSet[]>;
}

export interface LearningOutcomeItem {
  title: string;
  description: string;
  highlight: string;
  subtitle: string;
  outcomes: string[];
  images: { src: string; caption: string }[];
  salaryTable?: {
    headers: string[];
    rows: {
      role: string;
      entry: string;
      mid: string;
      senior: string;
    }[];
  };
  mainImage?: string;
}

export interface ComparisonTableRow {
  icon: string;
  parameter: string;
  column1: string;
  column2: string;
}

export interface ComparisonTableData {
  title: string;
  subtitle: string;
  headers: [string, string, string];
  rows: ComparisonTableRow[];
}

export interface LearningOutcomesData {
  eyebrow?: string;
  sidebarTitle?: string;
  sidebarSubtitle?: string;
  title?: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  comparisonTable?: ComparisonTableData;
  description?: string;
  items: LearningOutcomeItem[];
}

export interface WeekAtUnionData {
  title: string;
  subtitle: string;
}

// SCHOLARSHIPS DATA

export interface ScholarshipData {
  id: string;
  title: string;
  description: string;
  eligibility: string;
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
  subtitle?: string;
  title?: string;
  categories: FAQCategory[];
}

export interface LayoutBannerConfig {
  placement: {
    imageSrc: string;
    imageAlt: string;
    heading: {
      highlight1: string;
      text1: string;
      highlight2: string;
      text2: string;
      highlight3: string;
      text3: string;
    };
    subtext: string;
    buttonText: string;
    downloadUrl: string;
    downloadFilename: string;
  };
  brochure: {
    imageSrc: string;
    imageAlt: string;
    programName: string;
    subtext: string;
    buttonText: string;
    downloadUrl: string;
    downloadFilename: string;
  };
  advisor: {
    heading: string;
    buttonText: string;
    phoneNumber: string;
  };
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
  scholarshipConfig?: {
    subtitle?: string;
    title: { prefix: string; highlight: string; };
    description: string;
  };
  scholarships: ScholarshipData[];
  faq: FAQData;
  students?: any;
  learningOutcomes?: LearningOutcomesData;
  weekAtUnion?: WeekAtUnionData;
  pricing?: any;
  faculty?: any;
  curriculumSection?: CurriculumSectionData;
  assets?: ProgrammeAssetConfig;
  layoutBanner?: LayoutBannerConfig;
  micaCertificateData?: MicaCertificateData;
}

export interface MicaCertificateData {
  table1: { role: string; salary: string; }[];
  table2: { role: string; salary: string; }[];
  table3: { role: string; salary: string; }[];
  table4: { role: string; salary: string; }[];
  table5: { role: string; salary: string; }[];
}

export interface ProgrammeAssetConfig {
  heroImage: string;
  internshipPartnerLogo: string;
  industrialFacultyLogo: string;
  hiredCompaniesBanner: string;
  campusImage: string;
  disclaimerText: string;
  academicPartnerLogo?: string;
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
    title?: string;
    features?: {
      fundamentals?: string;
      classes?: string;
      trainers?: string;
      opportunities?: string;
    };
    placementSupport?: {
      title?: string;
      items?: string[];
    };
    benefits?: {
      text: string;
      isDisclaimer?: boolean;
    }[];
    cardFeatures?: {
      freeTrial?: { title: string; subtitle: string; };
      scholarships?: { title: string; subtitle: string; };
    };
    scholarshipBanner?: {
      subtitle: string;
      title: string;
      linkText: string;
    };
    emiLabel?: string;
    primaryButton?: {
      text: string;
    };
    secondaryButton?: {
      text: string;
    };
    seatsLeft?: {
      prefix: string;
      suffix: string;
    };
    emiPlans?: {
      tenure: string | number;
      type: string;
      loanAmount: string | number;
      rate: string | number;
      emi: string | number;
      totalLoanAmount: string | number;
    }[];
    scholarshipBannerIcon?: string;
  };
}
