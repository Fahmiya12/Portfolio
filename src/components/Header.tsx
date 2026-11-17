import { Moon, Sun, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToSection(id: string) {
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Fahmiya Nishad home">
        <span className="brand-mark"><Sparkles size={17} /></span>
        <span>FN<span className="brand-dot">.</span></span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#skills" onClick={(event) => { event.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        <a href="#projects" onClick={(event) => { event.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#education" onClick={(event) => { event.preventDefault(); scrollToSection('education'); }}>Education</a>
        <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
      <button className="theme-button" onClick={onToggleTheme} aria-label="Toggle colour theme">
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </header>
  );
}
