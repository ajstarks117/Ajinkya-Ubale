import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';

export function Hero() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="home" className="hero" ref={ref} aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-content">
          <span className={`hero-intro reveal ${inView ? 'visible' : ''}`} style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
            Hi, I'm
          </span>

          <h1 className={`hero-heading reveal ${inView ? 'visible' : ''} reveal-delay-1`} style={{ fontSize: 'var(--text-6xl)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <span className="hero-name" style={{ display: 'block' }}>
              Ajinkya <span style={{ color: 'var(--accent)' }}>Ubale.</span>
            </span>
          </h1>

          <h2 className={`hero-subtitle reveal ${inView ? 'visible' : ''} reveal-delay-1`} style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Computer Engineer & Developer
          </h2>

          <p className={`hero-desc reveal ${inView ? 'visible' : ''} reveal-delay-2`} style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            I build software, intelligent systems and interactive experiences that solve real world problems.
          </p>

          <div className={`hero-cta reveal ${inView ? 'visible' : ''} reveal-delay-2`} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#work" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View My Work
              <span className="btn-icon">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right column setup photo */}
        <div className="hero-canvas" aria-hidden="true" style={{ overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className={`hero-image-wrapper reveal ${inView ? 'visible' : ''} reveal-delay-1`} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/images/setup.png"
              alt="Workspace setup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Show the full image without cropping
                opacity: 0.92,
                transform: 'scale(1.15)', // Scale up slightly to occupy full container width
                maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 98%)',
                WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 98%)',
              }}
            />
          </div>
        </div>

        {/* Scroll indicator bottom-left */}
        <div className="hero-scroll-indicator" style={{ position: 'absolute', bottom: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
          <div className="mouse-wheel" style={{ width: '20px', height: '32px', border: '1.5px solid var(--border)', borderRadius: '10px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <span style={{ width: '3px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%', position: 'absolute', top: '6px', animation: 'mouseScroll 1.6s ease-in-out infinite' }} />
          </div>
          <span>Scroll to explore</span>
          <style>{`
            @keyframes mouseScroll {
              0% { transform: translateY(0); opacity: 0; }
              20% { opacity: 1; }
              80% { transform: translateY(8px); opacity: 0; }
              100% { opacity: 0; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
