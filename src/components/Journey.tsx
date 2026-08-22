import { timeline, currentlyExploring } from '../data/experience';
import { useInView } from '../hooks/useInView';

export function Journey() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [timelineRef, timelineInView] = useInView<HTMLDivElement>();
  const [exploringRef, exploringInView] = useInView<HTMLDivElement>();

  return (
    <section id="journey" className="journey-section section" aria-label="Journey">
      <div className="container">
        <div className={`section-header reveal ${headerInView ? 'visible' : ''}`} ref={headerRef} style={{ textAlign: 'center' }}>
          <span className="section-label">Journey</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            The path from curious student to builder.
          </p>
        </div>

        <div className={`timeline reveal ${timelineInView ? 'visible' : ''}`} ref={timelineRef}>
          {timeline.map((entry, i) => (
            <div key={entry.year} className={`timeline-entry reveal-delay-${i + 1}`}>
              <div className="timeline-dot" aria-hidden="true" />
              <span className="timeline-year">{entry.year}</span>
              <h3 className="timeline-title">{entry.title}</h3>
              <p className="timeline-description">{entry.description}</p>
              {entry.tags && (
                <div className="timeline-tags">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Currently Exploring */}
        <div ref={exploringRef} style={{ marginTop: '4rem' }}>
          <h3
            className={`section-title reveal ${exploringInView ? 'visible' : ''}`}
            style={{ fontSize: '1.875rem', textAlign: 'center', marginBottom: '2rem' }}
          >
            Currently Exploring
          </h3>
          <div className="exploring-grid">
            {currentlyExploring.map((item, i) => (
              <div
                key={item.index}
                className={`exploring-card reveal ${exploringInView ? 'visible' : ''} reveal-delay-${i + 1}`}
              >
                <span className="exploring-index">{item.index}</span>
                <h4 className="exploring-title">{item.title}</h4>
                <p className="exploring-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
