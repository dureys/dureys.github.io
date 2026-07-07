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

export interface Tradeoff {
  /** The decision, shaped "X over Y". */
  head: string;
  /** The constraint that decided it. */
  because: string;
}

export interface DeepDive {
  status:
    | 'In production'
    | 'Running daily'
    | 'Built'
    | 'In development'
    | 'Reference design';
  /** When it was built or since when it runs, only where verifiable. */
  timeframe?: string;
  /** True when the work is covered by an NDA and described at pattern level. */
  nda?: boolean;
  /** Who has this pain, one line. */
  audience: string;
  /** Architecture flow, rendered as a pipeline strip on the card. */
  flow?: string[];
  problem: string;
  solution: string;
  tradeoffs: Tradeoff[];
  impactDetail: string;
  watchNext: string[];
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
  /** Full senior treatment: problem, architecture, tradeoffs, honest impact. */
  deepDive?: DeepDive;
  /** Position in the ten system registry shown on /systems. */
  systemNo?: number;
  /** Key into SystemArtifact for an illustrative inline visual. */
  artifactId?: string;
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
