/**
 * src/components/FeaturedProjects/FeaturedProjects.jsx
 *
 * Home page section showing 3 featured projects.
 * Each project is a card with tags, description, and CTA.
 * Includes a "See All Work" CTA at the bottom.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProjects } from '../../data/projects';
import './FeaturedProjects.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const FeaturedProjects = () => {
  return (
    <section className="featured-projects" aria-label="Featured projects section">
      <div className="featured-projects__container">
        {/* Header */}
        <motion.div
          className="featured-projects__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span variants={itemVariants} className="featured-projects__label">
            // SELECTED WORK
          </motion.span>

          <motion.h2 variants={itemVariants} className="featured-projects__heading">
            Paradoxes, shipped.
          </motion.h2>

          <motion.p variants={itemVariants} className="featured-projects__subheading">
            Each project is a problem solved, a brand elevated,
            and a founder who stopped worrying about their digital presence.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="featured-projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card project-card--${project.tagColor}`}
              variants={cardVariants}
            >
              {/* Number */}
              <div className="project-card__number">
                PROJECT {project.number}
              </div>

              {/* Tags */}
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`project-card__tag project-card__tag--${project.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="project-card__title">{project.title}</h3>

              {/* Description */}
              <p className="project-card__description">{project.description}</p>

              {/* Stack (only for shipped projects) */}
              {project.status === 'shipped' && (
                <div className="project-card__stack">
                  <span className="project-card__stack-label">STACK</span>
                  <div className="project-card__stack-pills">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-card__stack-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="project-card__status">
                {project.statusLabel}
              </div>

              {/* CTA */}
              <div className="project-card__cta-wrapper">
                {project.status === 'shipped' ? (
                  <a
                    href={project.links.github}
                    className="project-card__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span className="project-card__cta-arrow" aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="project-card__cta project-card__cta--disabled">
                    Get Notified
                    <span className="project-card__cta-arrow" aria-hidden="true">→</span>
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* See All Work CTA */}
        <motion.div
          className="featured-projects__see-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link to="/projects" className="featured-projects__see-all-link">
            See All Work
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;