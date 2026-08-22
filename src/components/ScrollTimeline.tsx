import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', num: '01' },
  { id: 'about', num: '02' },
  { id: 'work', num: '03' },
  { id: 'journey', num: '04' },
  { id: 'contact', num: '05' },
];

export function ScrollTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      // Find the current active section index based on offsetTop
      let currentIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPos >= el.offsetTop) {
          currentIdx = i;
        }
      }
      setActiveIdx(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-timeline" aria-hidden="true">
      <div className="timeline-line">
        <div 
          className="timeline-progress-dot" 
          style={{ 
            transform: `translateY(${activeIdx * 40}px)` 
          }} 
        />
      </div>
      <div className="timeline-numbers">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            className={`timeline-number ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => {
              const el = document.getElementById(sec.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {sec.num}
          </button>
        ))}
      </div>

      <style>{`
        .scroll-timeline {
          position: fixed;
          left: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .timeline-line {
          position: relative;
          width: 2px;
          height: 160px;
          background-color: var(--border);
          border-radius: var(--radius-full);
          display: flex;
          flex-direction: column;
        }

        .timeline-progress-dot {
          position: absolute;
          left: -4px;
          top: 8px; /* Offset to center with the first number */
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--accent);
          box-shadow: 0 0 12px var(--accent);
          transition: transform 0.4s var(--ease-out);
        }

        .timeline-numbers {
          display: flex;
          flex-direction: column;
          gap: 24px; /* Matches dot transform step of 40px (16px element + 24px gap) */
        }

        .timeline-number {
          font-family: var(--font-sans);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-tertiary);
          transition: color 0.3s ease;
          text-align: left;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .timeline-number.active {
          color: var(--text-primary);
        }

        /* Hide on tablets and mobile screens to prevent layout overlaps */
        @media (max-width: 1024px) {
          .scroll-timeline {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
