import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const sampleProject: Project = {
  id: 'sample',
  title: 'Sample Portfolio Project',
  category: 'Frontend Project',
  summary: 'A short description of this project.',
  purpose: 'Demonstrate a reusable project card.',
  contribution: 'Built the card component.',
  stack: ['React', 'TypeScript'],
  features: ['Responsive layout'],
  status: 'Personal project',
};

describe('ProjectCard', () => {
  it('shows the project title and a working details link', () => {
    render(<MemoryRouter><ProjectCard project={sampleProject} /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Sample Portfolio Project' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view project details/i })).toHaveAttribute('href', '/projects/sample');
  });
});
