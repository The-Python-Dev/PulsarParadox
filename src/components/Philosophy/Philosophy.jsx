/**
 * src/components/Philosophy/Philosophy.jsx
 *
 * The heart of the brand — 3 core principles displayed as cards.
 * Each principle has an icon, title, and description.
 */

import { motion } from 'framer-motion';
import './Philosophy.css';

// Principles data
const principles = [
  {
    id: 1,
    icon: '🔨',
    title: 'BUILD → ATTACK → BREAK → REPAIR',
    description: `I don't wait for perfection. I build fast, stress-test hard, break what's fragile, and rebuild it stronger. Every paradox is forged in fire.`,
  },
  {
    id: 2,
    icon: '🎯',
    title: 'UNDER PROMISE → OVER DELIVER',
    description: `I'll tell you I'll build something good. Then I'll hand you something that makes you rethink what "good" even meant.`,
  },
  {
    id: 3,
    icon: '👑',
    title: 'QUALITY HAS NO CLIENT TIER',
    description: `Whether it's your first website or your fifth rebrand — the obsession stays the same. No shortcuts. No "good enough." Ever.`,
  },
];

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
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Philosophy = () => {
  return (
    <section className="philosophy" aria-label="Philosophy principles section">
      <div className="philosophy__container">
        {/* Header */}
        <motion.div
          className="philosophy__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span variants={itemVariants} className="philosophy__label">
            // THE PARADOX PRINCIPLES
          </motion.span>

          <motion.h2 variants={itemVariants} className="philosophy__heading">
            Three rules. Zero exceptions.
          </motion.h2>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="philosophy__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {principles.map((principle, index) => (
            <motion.article
              key={principle.id}
              className="philosophy__card"
              variants={cardVariants}
            >
              {/* Number badge */}
              <div className="philosophy__card-number">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="philosophy__card-icon" aria-hidden="true">
                {principle.icon}
              </div>

              {/* Title */}
              <h3 className="philosophy__card-title">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="philosophy__card-description">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;