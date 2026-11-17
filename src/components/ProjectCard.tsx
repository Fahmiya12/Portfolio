import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-list">
        {project.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
      </div>
      <Link className="text-link" to={`/projects/${project.id}`}>
        View project details <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
