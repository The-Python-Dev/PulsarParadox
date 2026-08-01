/**
 * src/components/ServicesHero/ServicesHero.jsx
 *
 * Services page hero section.
 * - Section label (mono, code-style)
 * - Main headline with "Nothing" in serif italic accent
 * - Subheadline
 * - No CTAs (page hero, not landing hero)
 */

import { motion } from 'framer-motion';
import './ServicesHero.css';

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

const ServicesHero = () => {
  return (
    <section className="services-hero" aria-label="Services hero">
      <div className="services-hero__container">
        <motion.div
          className="services-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Label */}
          <motion.p variants={itemVariants} className="services-hero__label">
            // SERVICES · THE FOUNDER'S TOOLKIT
          </motion.p>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="services-hero__headline">
            <span className="services-hero__headline-line">
              Everything you need.
            </span>
            <span className="services-hero__headline-line">
              <span className="services-hero__headline-accent">Nothing</span>{' '}
              you don't.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="services-hero__subheadline">
            From code to copy to SEO — one studio, one point of contact,
            <br />
            one obsessive standard of quality across every deliverable.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;