export interface DevProfile {
  name: string;
  role: string;
  education: string;
  location: string;
  email: string;
  status: string;
  bio: string;
}

export interface Job {
  company: string;
  period: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechGroup {
  title: string;
  items: TechItem[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}
