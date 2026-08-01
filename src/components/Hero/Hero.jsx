/**
 * src/components/Hero/Hero.jsx
 *
 * Home page hero section.
 * - Full viewport height
 * - Rotating badge (imported component)
 * - Main headline with "paradoxes" in serif italic accent
 * - Subheadline
 * - 2 CTAs (primary + ghost)
 * - Scroll indicator at bottom
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RotatingBadge from '../RotatingBadge';
import './Hero.css';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Rotating Badge */}
          <motion.div variants={itemVariants} className="hero__badge-wrapper">
            <RotatingBadge />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="hero__headline">
            <span className="hero__headline-line">I don't build websites.</span>
            <span className="hero__headline-line">
              I forge{' '}
              <span className="hero__headline-accent">paradoxes</span>
              <span className="hero__headline-punctuation">.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="hero__subheadline">
            The complete digital toolkit for founders —{' '}
            <span className="hero__subheadline-break">
              websites, copy, SEO, and everything in between.
            </span>
            <br />
            <span className="hero__subheadline-emphasis">
              Agency quality. Freelancer speed. Zero fluff.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="hero__ctas">
            <Link to="/contact" className="hero__cta hero__cta--primary">
              Start Your Paradox
              <span className="hero__cta-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/projects" className="hero__cta hero__cta--ghost">
              Explore Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="hero__scroll-text">Scroll to explore</span>
          <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;