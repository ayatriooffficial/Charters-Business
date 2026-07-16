export type CategoryKey =
  | "No-code AI Development"
  | "Creator Challenge"
  | "Specialization"
  | "CXO Mentorship Programme"
  | "Dropshipping Challenge";

export interface ProgramData {
  title?: string;
  description?: string;
  achievement?: string;
  linkText?: string;
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
  }>;
  subjectsLink?: string;
  mentors?: Array<{ name: string; title: string; avatar: string }>;
  specializations?: string[];
  tools?: Array<{ name: string; icon: string }>;
  techniques?: Array<{ name: string; icon: string }>;
}
