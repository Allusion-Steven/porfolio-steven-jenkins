export interface PersonalInfo {
  name: string;
  title: string;
  headshot: string;
  summary: string;
  professionalSummary: string;
  location: string;
  phone?: string;
  email: string;
  github: string;
  linkedin: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  concurrent?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  year: number;
  techStack: string[];
  liveUrls: {
    label: string;
    url: string;
  }[];
  overview: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  gifPath?: string;
}

export interface TechnicalSkills {
  languagesFrameworks: string[];
  infrastructureCloud: string[];
  apisIntegrations: string[];
  developmentTools: string[];
  databases: string[];
  methodologies: string[];
}

export interface Education {
  degree: string;
  diploma: string;
  field?: string;
  institution: string;
  location: string;
  graduationDate: string;
  minors?: string[];
}

export interface Resume {
  experience: Experience[];
  achievements: Achievement[];
  technicalSkills: TechnicalSkills;
  education: Education;
}

export interface PortfolioData {
  personal: PersonalInfo;
  resume: Resume;
}
