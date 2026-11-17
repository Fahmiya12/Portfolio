
import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import portrait from '../components/IMG_1488.png';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript'],
  },
  {
    title: 'Database & Backend',
    skills: ['SQL', 'Database fundamentals'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Git & GitHub', 'Vite', 'Figma (learning)'],
  },
];

// Gmail compose link
const emailLink =
  'https://mail.google.com/mail/?view=cm&fs=1&to=fahmiyanishad123@gmail.com';

export default function HomePage() {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const scrollToSection =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      });
    };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR LEARNING & OPPORTUNITIES
          </p>

          <h1>
            Designing thoughtful
            <br />
            <span>digital experiences.</span>
          </h1>

          <p className="hero-intro">
            Hi, I’m <strong>Fahmiya Nishad</strong> — a BCA student and
            frontend development enthusiast who enjoys turning ideas
            into clean, user-friendly websites.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="#projects"
              onClick={scrollToSection('projects')}
            >
              Explore my work <ArrowUpRight size={17} />
            </a>

            {/* Get in touch - Opens Gmail */}
            <a
              className="secondary-button"
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={17} /> Get in touch
            </a>
          </div>

          <a
            className="scroll-cue"
            href="#about"
            onClick={scrollToSection('about')}
          >
            <ArrowDown size={15} /> Scroll to explore
          </a>
        </div>

        <div
          className="hero-art"
          aria-label="Portrait of Fahmiya Nishad"
        >
          <div className="portrait-frame">
            <img
              className="hero-portrait"
              src={portrait}
              alt="Fahmiya Nishad"
            />
          </div>

          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />

          <div className="art-monogram">
            F<span>N</span>
          </div>

          <div className="art-note note-top">
            CREATIVE THINKING
          </div>

          <div className="art-note note-bottom">
            CODE WITH PURPOSE ✳
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="content-section page-width" id="about">
        <SectionHeading
          eyebrow="A LITTLE INTRODUCTION"
          title="About me"
        />

        <div className="about-grid">
          <p className="about-lead">
            I’m interested in building websites that feel simple,
            useful and enjoyable to use.
          </p>

          <div className="about-copy">
            <p>
              I have an academic background in Computer Applications
              and I’m developing my skills in frontend technologies,
              especially React, JavaScript and TypeScript.
            </p>

            <p>
              I enjoy learning by building practical projects,
              exploring interface ideas and improving the small
              details that make a digital experience better.
            </p>

            <p>
              <strong>Career goal:</strong> To grow as a frontend
              developer, strengthen my problem-solving skills and
              contribute to real-world web projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="content-section section-tint" id="skills">
        <div className="page-width">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Skills & tools"
            description="A growing toolkit for designing and developing web experiences."
          />

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="small-note">
            Please edit this list to include only technologies you
            can confidently explain and demonstrate.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="content-section page-width" id="projects">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects"
          description="A selection of academic and personal project work."
        />

        <div
          className="filter-row"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                filter === category ? 'active' : ''
              }`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="content-section section-tint" id="education">
        <div className="page-width">
          <SectionHeading
            eyebrow="MY LEARNING JOURNEY"
            title="Education"
          />

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker" />

              <div>
                <p className="timeline-date">2023 – 2026</p>
                <h3>
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p>Ilahia College of Arts and Science</p>
                <span className="timeline-caption" />
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" />

              <div>
                <p className="timeline-date">2021 – 2023</p>
                <h3>Higher Secondary – Bio-Maths</h3>
                <p>St. Thomas HSS, Malayatoor</p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" />

              <div>
                <p className="timeline-date">2021</p>
                <h3>SSLC</h3>
                <p>St. Thomas HSS, Malayatoor</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section page-width" id="contact">
        <p className="eyebrow">LET’S CONNECT</p>

        <h2>
          Have a project or opportunity
          <br />
          in mind?
        </h2>

        <p>
          I’d be happy to connect, learn and discuss ideas.
        </p>

        {/* Email me - Opens Gmail */}
        <a
          className="primary-button"
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me <Mail size={17} />
        </a>

        <div className="social-links">
          <a
            href="https://github.com/Fahmiya12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/fahmiya-nishad"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="small-note">
          You can reach me by email or connect with me on GitHub
          and LinkedIn.
        </p>
      </section>

      {/* Footer */}
      <footer className="site-footer page-width">
        <span>
          © {new Date().getFullYear()} Fahmiya Nishad
        </span>

        <span>Designed & built with care.</span>
      </footer>
    </main>
  );
}
