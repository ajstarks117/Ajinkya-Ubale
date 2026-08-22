import { publications } from '../data/publications';
import { useInView } from '../hooks/useInView';

export function Publications() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="publications"
      className="publications-section section"
      aria-label="Publications"
    >
      <div className="container">
        <div
          className={`section-header reveal ${headerInView ? 'visible' : ''}`}
          ref={headerRef}
          style={{ textAlign: 'center' }}
        >
          <span className="section-label">Research</span>
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Peer-reviewed papers I've authored and published.
          </p>
        </div>

        <div className="publications-grid" ref={cardsRef}>
          {publications.map((pub, i) => (
            <article
              key={pub.id}
              className={`publication-card reveal ${cardsInView ? 'visible' : ''} reveal-delay-${i + 1}`}
            >
              {/* Accent bar */}
              <div className="publication-accent" aria-hidden="true" />

              <div className="publication-body">
                <div className="publication-meta">
                  <span className="publication-journal">{pub.journal}</span>
                  <span className="publication-date">{pub.date}</span>
                </div>

                <h3 className="publication-title">{pub.title}</h3>

                {pub.abstract && (
                  <p className="publication-abstract">{pub.abstract}</p>
                )}

                <div className="publication-authors">
                  {pub.authors.map((author, j) => (
                    <span key={j} className="publication-author">
                      {author}
                      {j < pub.authors.length - 1 && (
                        <span className="publication-author-sep">,</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="publication-footer">
                  <div className="publication-tags">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="publication-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={pub.url}
                    className="publication-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    aria-label={`Read ${pub.title}`}
                  >
                    <span>Read Paper</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
