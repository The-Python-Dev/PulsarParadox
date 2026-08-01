/**
 * ContactFAQ — 3 quick reassuring questions.
 * Simpler than the Services FAQ — static, no accordion.
 */

import { motion } from 'framer-motion';
import { quickFaqs } from '../../data/contact';
import './ContactFAQ.css';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const ContactFAQ = () => {
  return (
    <motion.div
      className="contact-faq"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.p variants={itemVariants} className="contact-faq__label">
        // QUICK ANSWERS
      </motion.p>

      <motion.h2 variants={itemVariants} className="contact-faq__heading">
        Before you ask.
      </motion.h2>

      <div className="contact-faq__list">
        {quickFaqs.map((faq) => (
          <motion.div
            key={faq.id}
            variants={itemVariants}
            className="contact-faq__item"
          >
            <p className="contact-faq__question">
              <span className="contact-faq__question-icon" aria-hidden="true">
                💬
              </span>
              {faq.question}
            </p>
            <p className="contact-faq__answer">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactFAQ;