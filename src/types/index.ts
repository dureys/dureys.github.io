export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  location: string;
  /** One metric-first line shown while the item is collapsed. */
  highlight: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  impact?: string;
  technologies: string[];
  isPrivate: boolean;
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai' | 'salesforce' | 'integration' | 'data' | 'web';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
