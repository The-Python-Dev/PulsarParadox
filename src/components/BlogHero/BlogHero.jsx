/**
 * BlogHero — Page hero for Blog.
 */

import { motion } from 'framer-motion';
import './BlogHero.css';

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

const BlogHero = () => {
  return (
    <section className="blog-hero" aria-label="Blog hero">
      <div className="blog-hero__container">
        <motion.div
          className="blog-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="blog-hero__label">
            // BLOG · TRANSMISSIONS FROM THE PARADOX
          </motion.p>

          <motion.h1 variants={itemVariants} className="blog-hero__headline">
            Dispatches from the{' '}
            <span className="blog-hero__headline-accent">workshop</span>.
          </motion.h1>

          <motion.p variants={itemVariants} className="blog-hero__subheadline">
            Code breakdowns, design philosophy, freelance lessons,
            <br />
            and the occasional rant about bad UX.
            All signal. Zero fluff.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;