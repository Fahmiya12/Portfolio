export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  purpose: string;
  contribution: string;
  stack: string[];
  features: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
}
