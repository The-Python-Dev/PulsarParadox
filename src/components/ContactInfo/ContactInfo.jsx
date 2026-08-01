/**
 * ContactInfo — Contact details block (email, socials, location).
 * Left column of the info+form grid.
 */

import { motion } from 'framer-motion';
import { contactConfig } from '../../data/contact';
import './ContactInfo.css';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ContactInfo = () => {
  return (
    <motion.div
      className="contact-info"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.p variants={itemVariants} className="contact-info__label">
        // DIRECT CHANNELS
      </motion.p>

      <motion.h2 variants={itemVariants} className="contact-info__heading">
        Reach me directly.
      </motion.h2>

      <div className="contact-info__list">
        {/* Email */}
        <motion.a
          variants={itemVariants}
          href={`mailto:${contactConfig.email}`}
          className="contact-info__item"
        >
          <span className="contact-info__icon" aria-hidden="true">📧</span>
          <div className="contact-info__text">
            <span className="contact-info__key">EMAIL</span>
            <span className="contact-info__value">{contactConfig.email}</span>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.a
          variants={itemVariants}
          href={contactConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info__item"
        >
          <span className="contact-info__icon" aria-hidden="true">📸</span>
          <div className="contact-info__text">
            <span className="contact-info__key">INSTAGRAM</span>
            <span className="contact-info__value">
              {contactConfig.instagramHandle}
            </span>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          variants={itemVariants}
          href={contactConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info__item"
        >
          <span className="contact-info__icon" aria-hidden="true">💻</span>
          <div className="contact-info__text">
            <span className="contact-info__key">GITHUB</span>
            <span className="contact-info__value">
              {contactConfig.githubHandle}
            </span>
          </div>
        </motion.a>

        {/* Location */}
        <motion.div variants={itemVariants} className="contact-info__item contact-info__item--static">
          <span className="contact-info__icon" aria-hidden="true">📍</span>
          <div className="contact-info__text">
            <span className="contact-info__key">BASED IN</span>
            <span className="contact-info__value">
              {contactConfig.location}
            </span>
            <span className="contact-info__meta">
              Available for remote work globally.
            </span>
          </div>
        </motion.div>

        {/* Response time */}
        <motion.div variants={itemVariants} className="contact-info__item contact-info__item--static">
          <span className="contact-info__icon" aria-hidden="true">⏰</span>
          <div className="contact-info__text">
            <span className="contact-info__key">RESPONSE TIME</span>
            <span className="contact-info__value">
              {contactConfig.responseTime}
            </span>
            <span className="contact-info__meta">Usually faster.</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;