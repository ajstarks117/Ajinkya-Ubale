import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-info">
            <span className="footer-name">{profile.name.toUpperCase()}</span>
            <span className="footer-title">Computer Engineer & Developer</span>
          </div>

          <div className="footer-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              data-cursor="link"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              data-cursor="link"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="footer-link">
              Email
            </a>
          </div>

          <div className="footer-right">
            <span className="footer-copyright">© 2026 {profile.name}</span>
            <span className="footer-built">Built with React · Three.js</span>
            <button
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
