/**
 * ProjectShowcase — Vertical stack of full-width project cards.
 * Alternates layout direction on desktop (odd = left content, even = right).
 * Stacks vertically on mobile.
 */

import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import './ProjectShowcase.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ProjectShowcase = () => {
  return (
    <section className="project-showcase" aria-label="Project portfolio">
      <div className="project-showcase__container">
        {projects.map((project, i) => {
          const isClassified = project.status === 'classified';
          const isEven = i % 2 === 1;

          return (
            <motion.article
              key={project.id}
              className={`project ${isClassified ? 'project--classified' : ''} ${
                isEven ? 'project--reverse' : ''
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Left/Right: Info column */}
              <div className="project__info">
                <p className="project__number">PROJECT {project.number}</p>

                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="project__title">{project.title}</h2>
                <p className="project__tagline">{project.tagline}</p>
                <p className="project__description">{project.description}</p>

                {project.features.length > 0 && (
                  <div className="project__features">
                    <p className="project__features-label">Features:</p>
                    <ul className="project__features-list">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="project__features-item">
                          <span className="project__features-check" aria-hidden="true">
                            ✦
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project__meta">
                  <div className="project__meta-block">
                    <span className="project__meta-label">TYPE</span>
                    <span className="project__meta-value">{project.type}</span>
                  </div>
                  <div className="project__meta-block">
                    <span className="project__meta-label">STATUS</span>
                    <span
                      className={`project__meta-value project__meta-value--${project.status}`}
                    >
                      {project.status === 'shipped' && '✅ Shipped'}
                      {project.status === 'in-development' && '🔷 In Development'}
                      {project.status === 'classified' && '🔒 Classified'}
                    </span>
                  </div>
                </div>

                {/* Links */}
                {(project.links.live || project.links.github) && (
                  <div className="project__links">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link project__link--primary"
                      >
                        Live Demo
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link project__link--ghost"
                      >
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {isClassified && (
                      <span className="project__link project__link--disabled">
                        Get Notified Soon
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Right/Left: Stack visual column */}
              <div className="project__visual">
                <div className="project__stack-block">
                  <p className="project__stack-label">STACK</p>
                  <div className="project__stack-list">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project__stack-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;