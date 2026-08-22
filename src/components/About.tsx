import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';

export function About() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [contentRef, contentInView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="about-section section" aria-label="About">
      <div className="container">
        <div className={`section-header reveal ${headerInView ? 'visible' : ''}`} ref={headerRef}>
          <span className="section-label">About</span>
          <h2 className="section-title">A little about me.</h2>
        </div>

        <div className="about-grid" ref={contentRef}>
          <div className={`about-text reveal ${contentInView ? 'visible' : ''}`}>
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="about-availability">
              <span className="pulse" aria-hidden="true" />
              {profile.availability}
            </div>
          </div>

          <div className={`about-canvas reveal ${contentInView ? 'visible' : ''} reveal-delay-2`} aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <img 
              src="/images/about-model.png" 
              alt="About graphic" 
              style={{ 
                width: '100%', 
                maxWidth: '1000px', 
                maxHeight: '1000px',
                objectFit: 'contain',
                animation: 'floatImage 6s ease-in-out infinite' 
              }} 
            />
            <style>{`
              @keyframes floatImage {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
              }
              @media (prefers-reduced-motion: reduce) {
                @keyframes floatImage {
                  0%, 100% { transform: translateY(0px); }
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

