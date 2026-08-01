/**
 * OpenSourceNote — Small callout between projects and CTA.
 */

import { motion } from 'framer-motion';
import { contactConfig } from '../../data/contact';
import './OpenSourceNote.css';

const OpenSourceNote = () => {
  return (
    <motion.div
      className="opensource"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="opensource__container">
        <span className="opensource__icon" aria-hidden="true">📖</span>
        <div className="opensource__text">
          <p className="opensource__label">// OPEN SOURCE</p>
          <p className="opensource__body">
            All shipped projects are open source on GitHub.
            <br />
            Good code should be inspectable, not hidden behind a login wall.
          </p>
        </div>
        <a
          href={contactConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="opensource__cta"
        >
          Visit GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.div>
  );
};

export default OpenSourceNote;