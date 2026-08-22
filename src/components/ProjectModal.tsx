import { useEffect, useCallback } from 'react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [project, handleEscape]);

  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-image">
          <img src={project.image} alt={`${project.title} project preview`} />
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-category">{project.category}</p>

          {project.overview && (
            <div className="modal-section">
              <h3 className="modal-section-title">Overview</h3>
              <p>{project.overview}</p>
            </div>
          )}

          {project.problem && (
            <div className="modal-section">
              <h3 className="modal-section-title">The Problem</h3>
              <p>{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div className="modal-section">
              <h3 className="modal-section-title">The Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Key Features</h3>
            <div className="modal-features">
              {project.features.map((feature) => (
                <div key={feature} className="modal-feature">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Technology Stack</h3>
            <div className="modal-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div className="modal-section">
              <h3 className="modal-section-title">Challenges</h3>
              <p>{project.challenges}</p>
            </div>
          )}

          {project.learnings && (
            <div className="modal-section">
              <h3 className="modal-section-title">What I Learned</h3>
              <p>{project.learnings}</p>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Project Gallery</h3>
              <div className="modal-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
                {project.images.map((imgUrl, idx) => (
                  <div key={idx} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <img src={imgUrl} alt={`${project.title} screenshot ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-links">
            <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="btn-icon">↗</span>
            </a>
            <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
              <span className="btn-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
