import { useState, useEffect, useCallback } from 'react';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#stack' },
  { label: 'Experience', href: '#journey' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-64px 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = useCallback(
    (href: string) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
            aria-label="Back to top"
          >
            Ajinkya
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={profile.resumeUrl}
              className="btn-resume"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s var(--ease-out)',
              }}
              data-cursor="link"
              target="_blank"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          <button
            className={`navbar-mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
