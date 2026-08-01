/**
 * src/components/TestimonialsEmpty/TestimonialsEmpty.jsx
 *
 * Elite empty state for testimonials section.
 * Instead of fake reviews, we show an on-brand "awaiting first signal" message.
 * Doubles as a soft CTA to get first testimonial.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TestimonialsEmpty.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TestimonialsEmpty = () => {
  return (
    <section className="testimonials" aria-label="Testimonials section">
      <div className="testimonials__container">
        <motion.div
          className="testimonials__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Label */}
          <motion.span variants={itemVariants} className="testimonials__label">
            // SIGNAL LOG
          </motion.span>

          {/* Signal Icon (animated pulse) */}
          <motion.div variants={itemVariants} className="testimonials__signal">
            <div className="testimonials__signal-dot" aria-hidden="true"></div>
            <span className="testimonials__signal-text">Transmission incoming...</span>
          </motion.div>

          {/* Message */}
          <motion.p variants={itemVariants} className="testimonials__message">
            This section is currently awaiting its first signal.
            <br />
            <span className="testimonials__message-emphasis">
              Be the first founder to send one.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="testimonials__cta-wrapper">
            <Link to="/contact" className="testimonials__cta">
              Start Your Paradox
              <span className="testimonials__cta-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsEmpty;