export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: 'Academic' | 'Personal' | 'Hackathon';
  year?: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'education' | 'work';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SpokenLanguage {
  language: string;
  proficiency: string;
  flagCode: string; // e.g., 'FR', 'US', 'MA'
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}