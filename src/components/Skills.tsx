import { skillCategories } from '../data/skills';
import { SkillsScene } from '../three/SkillsScene';
import { useInView } from '../hooks/useInView';
import { useIsMobile } from '../hooks/useMediaQuery';

export function Skills() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [contentRef, contentInView] = useInView<HTMLDivElement>();
  const isMobile = useIsMobile();

  return (
    <section id="stack" className="skills-section section" aria-label="Technology Stack">
      <div className="container">
        <div className={`section-header reveal ${headerInView ? 'visible' : ''}`} ref={headerRef}>
          <span className="section-label">Stack</span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            Technologies and tools I work with across different domains.
          </p>
        </div>

        <div className="skills-layout" ref={contentRef}>
          <div className="skills-categories">
            {skillCategories.map((category, i) => (
              <div
                key={category.name}
                className={`skill-category reveal ${contentInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <h3 className="skill-category-name">{category.name}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`skills-canvas reveal ${contentInView ? 'visible' : ''} reveal-delay-2`} aria-hidden="true">
            <SkillsScene isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}
