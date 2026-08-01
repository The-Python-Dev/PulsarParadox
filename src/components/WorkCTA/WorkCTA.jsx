/**
 * WorkCTA — Closing CTA for the Work page.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './WorkCTA.css';

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

const WorkCTA = () => {
  return (
    <section className="work-cta" aria-label="Work call to action">
      <div className="work-cta__container">
        <motion.div
          className="work-cta__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="work-cta__badge">
            <span className="work-cta__badge-icon" aria-hidden="true">💼</span>
            <span className="work-cta__badge-text">NEXT CASE STUDY</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="work-cta__heading">
            Want to be the next{' '}
            <span className="work-cta__heading-accent">case study</span>
            <br />
            on this page?
          </motion.h2>

          <motion.p variants={itemVariants} className="work-cta__body">
            Every project here started with a single conversation.
            <br />
            Yours could too.
          </motion.p>

          <motion.div variants={itemVariants} className="work-cta__button-wrap">
            <Link to="/contact" className="work-cta__button">
              Let's Build Yours
              <span className="work-cta__button-arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="work-cta__micro">
            Discovery calls are free. Always. ⚡
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkCTA;