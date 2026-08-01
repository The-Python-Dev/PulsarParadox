/**
 * src/components/ServicesCTA/ServicesCTA.jsx
 *
 * Services page — final CTA section.
 * - Closing pitch after user has read all packages/services/FAQ
 * - Gradient accent on "ready" for brand consistency
 * - Single primary CTA button (no secondary — laser focus)
 * - Micro-copy reinforcing zero friction
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesCTA.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ServicesCTA = () => {
  return (
    <section className="services-cta" aria-label="Get started">
      <div className="services-cta__container">
        <motion.div
          className="services-cta__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="services-cta__badge">
            <span className="services-cta__badge-icon" aria-hidden="true">🚀</span>
            <span className="services-cta__badge-text">
              LAUNCH SEQUENCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="services-cta__heading">
            The toolkit is{' '}
            <span className="services-cta__heading-accent">ready</span>.
            <br />
            Are you?
          </motion.h2>

          {/* Body */}
          <motion.p variants={itemVariants} className="services-cta__body">
            Pick a package. Custom-scope your own.
            <br />
            Or just tell me what you're building —
            we'll figure out the rest together.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="services-cta__button-wrap">
            <Link to="/contact" className="services-cta__button">
              Start Your Project
              <span className="services-cta__button-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>

          {/* Micro-copy */}
          <motion.p variants={itemVariants} className="services-cta__micro">
            Discovery call is always free. Response within 24 hours. ⚡
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;