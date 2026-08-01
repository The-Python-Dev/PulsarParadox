/**
 * src/pages/NotFound.jsx
 * Route: * (catch-all fallback)
 *
 * The paradox 404 page.
 * - Massive glitched "404" number
 * - Paradox-themed messaging
 * - 3 escape routes back to real pages
 * - Easter egg error code at the bottom
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const glitchVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const NotFound = () => {
  return (
    <section className="notfound" aria-label="Page not found">
      <div className="notfound__container">
        <motion.div
          className="notfound__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Label */}
          <motion.p variants={itemVariants} className="notfound__label">
            // ERROR 404
          </motion.p>

          {/* Massive 404 Number */}
          <motion.div variants={glitchVariants} className="notfound__code">
            <span className="notfound__code-digit">4</span>
            <span className="notfound__code-digit notfound__code-digit--zero">0</span>
            <span className="notfound__code-digit">4</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="notfound__heading">
            You've drifted into the{' '}
            <span className="notfound__heading-accent">void</span>.
          </motion.h1>

          {/* Body */}
          <motion.p variants={itemVariants} className="notfound__body">
            This page doesn't exist. Yet.
            <br />
            Maybe it's a paradox — it exists because it doesn't.
          </motion.p>

          <motion.p variants={itemVariants} className="notfound__sub-body">
            Either the link is broken, the page moved, or you typed
            something creative in the URL bar. No judgment.
          </motion.p>

          {/* Escape Routes */}
          <motion.div variants={itemVariants} className="notfound__ctas">
            <Link to="/" className="notfound__cta notfound__cta--primary">
              Take Me Home
              <span className="notfound__cta-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/projects" className="notfound__cta notfound__cta--ghost">
              View Work
            </Link>
            <Link to="/contact" className="notfound__cta notfound__cta--ghost">
              Contact
            </Link>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            variants={itemVariants}
            className="notfound__easter-egg"
          >
            <p className="notfound__easter-line">
              <span className="notfound__easter-key">Error Code:</span>
              <span className="notfound__easter-value">PARADOX_NOT_FOUND</span>
            </p>
            <p className="notfound__easter-line">
              <span className="notfound__easter-key">Status:</span>
              <span className="notfound__easter-value">
                The page is simultaneously here and not here.
              </span>
            </p>
            <p className="notfound__easter-line">
              <span className="notfound__easter-key">Resolution:</span>
              <span className="notfound__easter-value">
                Schrödinger would understand.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;