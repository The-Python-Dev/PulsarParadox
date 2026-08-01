/**
 * WorkHero — Page hero for Work/Projects.
 */

import { motion } from 'framer-motion';
import './WorkHero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const WorkHero = () => {
  return (
    <section className="work-hero" aria-label="Work hero">
      <div className="work-hero__container">
        <motion.div
          className="work-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="work-hero__label">
            // WORK · SHIPPED PARADOXES
          </motion.p>

          <motion.h1 variants={itemVariants} className="work-hero__headline">
            Every paradox has a{' '}
            <span className="work-hero__headline-accent">purpose</span>.
          </motion.h1>

          <motion.p variants={itemVariants} className="work-hero__subheadline">
            Real projects. Real problems solved. Real code you can inspect.
            <br />
            No mockups, no "concept only" — everything here is built and shipped.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHero;