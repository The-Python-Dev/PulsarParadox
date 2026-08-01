/**
 * src/components/IntroSection/IntroSection.jsx
 *
 * Home page intro section.
 * - Section label in mono font
 * - Main heading
 * - Body paragraph explaining PulsarParadox
 * - 4 stat cards in a horizontal row
 *
 * Uses framer-motion for scroll-triggered entrance animations.
 */

import { motion } from 'framer-motion';
import './IntroSection.css';

// Stats data (easy to edit)
const stats = [
  { id: 1, value: '2',    label: 'Ships Launched'    },
  { id: 2, value: '100%', label: 'Built From Scratch' },
  { id: 3, value: '0',    label: 'Templates Used'    },
  { id: 4, value: '24h',  label: 'Response Time'     },
];

// Container variants for staggered entrance
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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const IntroSection = () => {
  return (
    <section className="intro" aria-label="Introduction section">
      <div className="intro__container">
        <motion.div
          className="intro__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Label */}
          <motion.span variants={itemVariants} className="intro__label">
            // WHAT IS PULSARPARADOX?
          </motion.span>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="intro__heading">
            Your brand deserves more than a template.
          </motion.h2>

          {/* Body Paragraph */}
          <motion.p variants={itemVariants} className="intro__body">
            PulsarParadox is a one-person digital studio that builds websites,
            writes copy, and engineers growth systems for founders who refuse
            to blend in.
          </motion.p>

          <motion.p variants={itemVariants} className="intro__body intro__body--emphasis">
            No cookie-cutter templates. No bloated teams. No endless revision cycles.
            Just sharp code, sharper words, and obsessive attention to every pixel.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="intro__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="intro__stat-card"
              variants={statVariants}
            >
              <div className="intro__stat-value">{stat.value}</div>
              <div className="intro__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;