/**
 * ContactHero — Page hero for Contact.
 * Simple, no CTAs (the form IS the CTA).
 */

import { motion } from 'framer-motion';
import './ContactHero.css';

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

const ContactHero = () => {
  return (
    <section className="contact-hero" aria-label="Contact hero">
      <div className="contact-hero__container">
        <motion.div
          className="contact-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="contact-hero__label">
            // CONTACT · LET'S BUILD
          </motion.p>

          <motion.h1 variants={itemVariants} className="contact-hero__headline">
            Start your{' '}
            <span className="contact-hero__headline-accent">paradox</span>.
          </motion.h1>

          <motion.p variants={itemVariants} className="contact-hero__subheadline">
            Whether it's a quick question or a full project brief —
            <br />
            I'm one message away. No contact forms asking for your blood type.
            Just the essentials.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;