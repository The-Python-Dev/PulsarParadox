/**
 * src/components/FAQ/FAQ.jsx
 *
 * Services page — FAQ accordion section.
 * - 8 collapsible questions
 * - Only one open at a time (accordion behavior)
 * - Smooth height + opacity animation on expand/collapse
 * - Fully keyboard-accessible (ARIA attributes + button semantics)
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/faq';
import './FAQ.css';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="faq" aria-label="Frequently asked questions">
      <div className="faq__container">
        {/* Header */}
        <motion.div
          className="faq__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="faq__label">// FREQUENTLY ASKED</p>
          <h2 className="faq__heading">Questions I hear a lot.</h2>
          <p className="faq__subheading">
            Everything you're wondering — answered before you ask.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="faq__list" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                role="listitem"
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="faq-item__question">{faq.question}</span>
                  <span
                    className="faq-item__icon"
                    aria-hidden="true"
                  >
                    <span className="faq-item__icon-line faq-item__icon-line--horizontal" />
                    <span className="faq-item__icon-line faq-item__icon-line--vertical" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${faq.id}`}
                      className="faq-item__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <p className="faq-item__answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;