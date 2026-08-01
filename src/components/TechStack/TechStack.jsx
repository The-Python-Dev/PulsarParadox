/**
 * src/components/TechStack/TechStack.jsx
 *
 * Displays tech arsenal organized by category.
 * Each category has an icon, title, and pills of technologies.
 */

import { motion } from 'framer-motion';
import { techStack } from '../../data/techStack';
import './TechStack.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const TechStack = () => {
  return (
    <section className="tech-stack" aria-label="Tech stack section">
      <div className="tech-stack__container">
        <motion.div
          className="tech-stack__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Label */}
          <motion.span variants={itemVariants} className="tech-stack__label">
            // TECH ARSENAL
          </motion.span>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="tech-stack__heading">
            The stack behind every paradox.
          </motion.h2>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="tech-stack__subheading">
            Every tool chosen with intent. No framework FOMO —
            just the right weapon for the right battle.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="tech-stack__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {techStack.map((category) => (
            <motion.div
              key={category.id}
              className="tech-stack__category"
              variants={itemVariants}
            >
              <div className="tech-stack__category-header">
                <span className="tech-stack__category-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="tech-stack__category-title">
                  {category.category}
                </h3>
              </div>

              <motion.ul
                className="tech-stack__pills"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="list"
              >
                {category.items.map((tech) => (
                  <motion.li
                    key={tech}
                    className="tech-stack__pill"
                    variants={pillVariants}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="tech-stack__footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          And always learning more. The toolkit never stops expanding.
        </motion.p>
      </div>
    </section>
  );
};

export default TechStack;