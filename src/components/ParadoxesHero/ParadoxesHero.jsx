import { motion } from 'framer-motion';
import './ParadoxesHero.css';

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

export default function ParadoxesHero() {
  return (
    <section className="paradoxes-hero" aria-label="Paradoxes page hero">
      <div className="paradoxes-hero__container">
        <motion.div
          className="paradoxes-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mono label */}
          <motion.span
            className="paradoxes-hero__label"
            variants={itemVariants}
          >
            // PARADOXES · THE WORKSHOP
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="paradoxes-hero__headline"
            variants={itemVariants}
          >
            Where{' '}
            <em className="paradoxes-hero__gradient-word">rules</em>{' '}
            go to die
          </motion.h1>

          {/* Subcopy */}
          <motion.div
            className="paradoxes-hero__subcopy"
            variants={itemVariants}
          >
            <p>
              You were taught there's a right way to build.
              <br />
              You were taught to follow patterns.
              <br />
              To stay inside lines.
            </p>
            <p>This is where I test what happens when I don't.</p>
          </motion.div>

          {/* Micro mono line */}
          <motion.p
            className="paradoxes-hero__micro"
            variants={itemVariants}
          >
            No clients. No briefs. No constraints.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}