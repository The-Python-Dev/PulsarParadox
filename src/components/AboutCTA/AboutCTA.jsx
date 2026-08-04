import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutCTA.css';

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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutCTA() {
  return (
    <section className="about-cta" aria-label="About page closing CTA">
      <div className="about-cta__container">
        <motion.div
          className="about-cta__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span className="about-cta__label" variants={itemVariants}>
            // WHERE THIS GOES NEXT
          </motion.span>

          <motion.h2 className="about-cta__headline" variants={itemVariants}>
            PulsarParadox is still at the beginning.
            <br />
            And that's exactly what makes it{' '}
            <em className="about-cta__gradient-word">interesting</em>.
          </motion.h2>

          <motion.div className="about-cta__subcopy" variants={itemVariants}>
            <p>
              You just met the person behind the studio. If any of it
              resonated — the obsession, the way the work gets made, the
              values behind it — I'd rather hear about your project than have
              you leave without saying anything.
            </p>
            <p className="about-cta__manifesto">
              Find something interesting. Build it. Break it. Repair it. And
              see what happens.
            </p>
          </motion.div>

          <motion.div className="about-cta__actions" variants={itemVariants}>
            <Link to="/contact" className="about-cta__btn">
              Let's talk about your project →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}