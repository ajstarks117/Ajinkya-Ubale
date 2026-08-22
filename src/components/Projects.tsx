import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { useInView } from '../hooks/useInView';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [featuredRef, featuredInView] = useInView<HTMLDivElement>();
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="projects-section section" aria-label="Selected Work">
      <div className="container">
        <div className={`section-header reveal ${headerInView ? 'visible' : ''}`} ref={headerRef}>
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of things I've built, explored, and shipped.
          </p>
        </div>

        <div className="projects-grid">
          {/* Featured Project */}
          {featured && (
            <div
              ref={featuredRef}
              className={`project-featured reveal ${featuredInView ? 'visible' : ''}`}
              onClick={() => setSelectedProject(featured)}
              data-cursor="project"
              role="button"
              tabIndex={0}
              aria-label={`View ${featured.title} project details`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(featured)}
            >
              <div className="project-featured-image">
                <img src={featured.image} alt={`${featured.title} project preview`} loading="lazy" />
              </div>
              <div className="project-featured-content">
                <span className="project-featured-label">Featured Project</span>
                <h3 className="project-featured-title">{featured.title}</h3>
                <p className="project-featured-category">{featured.category}</p>
                <p className="project-featured-description">{featured.description}</p>
                <span className="project-featured-link">
                  Explore Project <span>→</span>
                </span>
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div ref={cardsRef} className="projects-cards">
            {others.map((project, i) => (
              <div
                key={project.id}
                className={`project-card reveal ${cardsInView ? 'visible' : ''} reveal-delay-${i + 1}`}
                onClick={() => setSelectedProject(project)}
                data-cursor="project"
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} project details`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                <div className="project-card-image">
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                </div>
                <div className="project-card-body">
                  <span className="project-card-index">Project {project.index}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-category">{project.category}</p>
                  <p className="project-card-description">{project.description}</p>
                  <div className="project-card-footer">
                    <span className="project-card-link">
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
