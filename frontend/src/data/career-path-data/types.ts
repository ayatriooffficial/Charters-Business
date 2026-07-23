export interface Option {
  label: string;
  description?: string;
  score: number;
  nextQuestionId?: string;
}

export interface Question {
  id: string;
  number: string;
  title: string;
  options: Option[];
  dependsOn?: { questionId: string; optionLabel: string };
}

export interface CareerPathStep {
  label: string;
  sideTitle: string;
  sideText: string;
  title: string;
  questions: Question[];
}

export interface TenXFeature {
  n: string;
  bold: string;
  rest: string;
}

export interface GrowthChartItem {
  label: string;
  w: string;
  active: boolean;
}

export interface FreePathCard {
  title: string;
  desc: string;
  tag: string;
}

export interface TimelinePath {
  tag: string;
  title: string;
  time: string;
  highlight: boolean;
  steps: string[];
}

export interface StructuredProgramFeature {
  n: string;
  t: string;
}

export interface AiTool {
  icon: string;
  name: string;
  tag: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  before: string;
  after: string;
  quote: string;
  stars: string;
}

export interface ReportData {
  heroTag: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroSubtitle: string;
  heroCtaButton: string;
  heroCtaSub: string;
  heroMetaRead: string;
  heroMetaChapters: string;
  gaugeLabel: string;
  gaugeScorePrefix: string;
  gaugeScoreSuffix: string;

  section02Label: string;
  section02Heading: string;
  section02Sub: string;
  tenXFeatures: TenXFeature[];
  growthChart: GrowthChartItem[];
  hiringManagerStat: string;
  hiringManagerDesc: string;
  hiringManagerSource: string;

  section03Label: string;
  section03Heading: string;
  section03Sub: string;
  strengthsItems: string[];
  gapsItems: string[];

  section04Label: string;
  section04Heading: string;
  section04Sub: string;
  freePaths: FreePathCard[];

  section05Label: string;
  section05Heading: string;
  timelines: TimelinePath[];

  section06Label: string;
  section06Heading: string;
  section06Sub: string;
  structuredProgramLabel: string;
  structuredProgramTitle: string;
  structuredProgramDesc: string;
  structuredProgramRating: string;
  structuredProgramRatingSub: string;
  structuredProgramMonths: string;
  structuredProgramMonthsSub: string;
  structuredProgramFeatures: StructuredProgramFeature[];
  structuredProgramButton1: string;
  structuredProgramButton2: string;

  section07Label: string;
  section07Heading: string;
  section07Sub: string;
  aiTools: AiTool[];

  section08Label: string;
  section08Heading: string;
  testimonials: Testimonial[];

  bottomBarPhone: string;
}
