/**
 * src/components/FinalCTA/FinalCTA.jsx
 *
 * Final call-to-action section at the bottom of Home page.
 * Last chance to convert visitors before they hit the footer.
 * Big, bold, unmissable.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FinalCTA.css';

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
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const FinalCTA = () => {
  return (
    <section className="final-cta" aria-label="Final call to action section">
      <div className="final-cta__container">
        <motion.div
          className="final-cta__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Decorative badge */}
          <motion.div variants={itemVariants} className="final-cta__badge">
            <span className="final-cta__badge-icon" aria-hidden="true">🌀</span>
            <span className="final-cta__badge-text">FINAL TRANSMISSION</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="final-cta__heading">
            Ready to build something{' '}
            <span className="final-cta__heading-accent">paradoxical</span>?
          </motion.h2>

          {/* Body */}
          <motion.p variants={itemVariants} className="final-cta__body">
            Whether you need a website that converts, copy that connects,
            or a complete digital overhaul — let's talk.
          </motion.p>

          <motion.p variants={itemVariants} className="final-cta__body final-cta__body--emphasis">
            No pitch decks. No 47-step onboarding forms.
            <br />
            Just a conversation about what you need and how I'll build it.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="final-cta__button-wrapper">
            <Link to="/contact" className="final-cta__button">
              Let's Talk
              <span className="final-cta__button-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Micro-copy */}
          <motion.p variants={itemVariants} className="final-cta__microcopy">
            Average response time: under 24 hours{' '}
            <span className="final-cta__microcopy-bolt" aria-hidden="true">⚡</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;