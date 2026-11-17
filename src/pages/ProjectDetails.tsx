import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectDetailsProps {
  projects: Project[];
}

export default function ProjectDetails({ projects }: ProjectDetailsProps) {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <main className="page-width detail-page"><h1>Project not found</h1><Link to="/">Return to portfolio</Link></main>;
  }

  return (
    <main className="page-width detail-page">
      <Link className="back-link" to="/"><ArrowLeft size={16} /> Back to portfolio</Link>
      <p className="eyebrow">{project.category} · {project.status}</p>
      <h1>{project.title}</h1>
      <p className="detail-summary">{project.summary}</p>
      <div className="detail-panel">
        <h2>Purpose</h2><p>{project.purpose}</p>
        <h2>My contribution</h2><p>{project.contribution}</p>
        <h2>Key features</h2>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <h2>Technology stack</h2>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      </div>
      {(project.githubUrl || project.demoUrl) && <div className="hero-actions">
        {project.githubUrl && <a className="secondary-button" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={15} /></a>}
        {project.demoUrl && <a className="primary-button" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>}
      </div>}
      <p className="small-note">Add your real repository and demo URLs to the project data when available.</p>
    </main>
  );
}
