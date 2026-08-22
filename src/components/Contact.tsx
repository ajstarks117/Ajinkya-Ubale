import { profile } from '../data/profile';
import { ContactScene } from '../three/ContactScene';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="contact-section section" aria-label="Contact">
      <div className="container" ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <h2 className="contact-title">Let's build something.</h2>
          <p className="contact-text">
            Have an interesting idea, project, internship opportunity, or just want to
            talk about technology?
          </p>

          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Get in touch
            <span className="btn-icon">→</span>
          </a>

          <p className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>

          <div className="contact-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              data-cursor="link"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              data-cursor="link"
            >
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`} className="contact-social">
              Email ↗
            </a>
          </div>
        </div>

        <div className={`contact-canvas reveal ${inView ? 'visible' : ''} reveal-delay-2`} aria-hidden="true">
          <ContactScene />
        </div>
      </div>
    </section>
  );
}
