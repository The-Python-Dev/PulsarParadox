import { motion } from 'framer-motion';
import './AboutHero.css';

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

export default function AboutHero() {
  return (
    <section className="about-hero" aria-label="About page hero">
      <div className="about-hero__container">
        <motion.div
          className="about-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="about-hero__label" variants={itemVariants}>
            // ABOUT · THE PERSON BEHIND IT
          </motion.span>

          <motion.h1 className="about-hero__headline" variants={itemVariants}>
            Young mind.
            <br />
            Veteran{' '}
            <em className="about-hero__gradient-word">obsession</em>.
          </motion.h1>

          <motion.div className="about-hero__subcopy" variants={itemVariants}>
            <p>
              I'm going to try to tell you who I am without giving you my
              name or my age.
            </p>
            <p>
              It won't be a conventional introduction. But I think you'll
              understand the shape of the person behind the work by the end.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}