export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  status: string;
  educationSummary: string;
  bio: string;
  focusAreas: string[];
  workstation: {
    os: string;
    kernel: string;
    host: string;
    shell: string;
    terminal: string;
    cpu: string;
    memory: string;
    disk: string;
    editor: string;
    uptime: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  logo?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  architectureDiagram?: string;
  images: {
    url: string;
    caption: string;
    alt: string;
  }[];
  features: string[];
  lessonsLearned: string;
  futureImprovements: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  scoreOrId?: string;
  validity: string;
  badgeUrl?: string;
  pdfUrl?: string;
  description: string;
  skillsVerified: string[];
  verificationUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpaOrGrade?: string;
  courses: string[];
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Competent';
    tags: string[];
  }[];
}

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: FileNode[];
  size?: string;
  permissions?: string;
  updatedAt?: string;
}

export interface CommandOutput {
  id: string;
  command: string;
  timestamp: string;
  type: 'text' | 'react' | 'error' | 'success' | 'warning' | 'info';
  content: React.ReactNode;
  rawText?: string;
}
