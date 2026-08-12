export type CategoryKey =
  | "Reflections of Industry Practitioners"
  | "AI-Integrated Core Modules"
  | "Industry Experience with Real Internship"
  | "Corporate Personal Branding & Leadership"
  | "Accelerate Your Career Growth";

export interface ProgramData {
  title?: string;
  description?: string;
  achievement?: string;
  linkText?: string;
  month?: string;
  image?: string;
  stores?: Array<{ name: string; url: string | null; logo: string | null }>;
  profiles?: Array<{ name: string; handle: string; avatar: string }>;
  specializationTracks?: string[];
  skills?: string[];
  projects?: Array<{
    name: string;
    description: string;
    icon: string;
    color: string;
    chips?: Array<{
      text?: string;
      secondText?: string;
      icon?: string;
      color?: string;
      isImage?: boolean; // true = faculty photo (object-cover crop); default (false/undefined) = icon (object-contain, never cut)
    }>;
  }>;
  subjectsLink?: string;
  mentors?: Array<{ name: string; title: string; avatar: string }>;
  specializations?: string[];
  tools?: Array<{ name: string; icon: string }>;
  techniques?: Array<{ name: string; icon: string }>;
}
