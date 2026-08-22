import { GitHubCalendar } from 'react-github-calendar';
import { profile } from '../data/profile';
import { useInView } from '../hooks/useInView';

/**
 * GitHub-style contribution graph fetched directly from GitHub API.
 */
export function GitHubActivity() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const username = profile.github.split('/').pop() || 'ajstarks117';

  return (
    <section className="github-section section" aria-label="GitHub Activity">
      <div className="container">
        <div className={`section-header reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <span className="section-label">Open Source & Experiments</span>
          <h2 className="section-title" style={{ fontSize: '1.875rem' }}>
            Contribution Activity
          </h2>
        </div>

        <div className={`reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', width: '100%', overflowX: 'auto', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <GitHubCalendar 
              username={username} 
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>

          <div className="github-footer" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              data-cursor="link"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
