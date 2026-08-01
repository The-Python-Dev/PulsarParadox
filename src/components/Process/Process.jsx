/**
 * src/components/Process/Process.jsx
 *
 * Services page — 5-step process section.
 * - Vertical timeline layout
 * - Connecting line runs down the left, pulses on scroll
 * - Each step: number circle → title → description → meta grid
 * - whileInView animations for scroll-triggered reveal
 */

import { motion } from 'framer-motion';
import { processSteps } from '../../data/process';
import './Process.css';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Process = () => {
  return (
    <section className="process" aria-label="Our process">
      <div className="process__container">
        {/* Header */}
        <motion.div
          className="process__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="process__label">// HOW IT WORKS</p>
          <h2 className="process__heading">
            From "I need a website" to{' '}
            <span className="process__heading-accent">
              "Wait, this is mine?"
            </span>
          </h2>
          <p className="process__subheading">
            A clear, no-BS process that keeps you in the loop
            without drowning you in Jira tickets.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="process__timeline">
          {/* Vertical connecting line */}
          <div className="process__line" aria-hidden="true" />

          {/* Steps */}
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className="process-step"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
            >
              {/* Number circle */}
              <div className="process-step__marker">
                <span className="process-step__number">{step.number}</span>
              </div>

              {/* Content */}
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">
                  {step.description}
                </p>

                {step.meta && (
                  <div className="process-step__meta">
                    {Object.entries(step.meta).map(([key, value]) => (
                      <div key={key} className="process-step__meta-item">
                        <span className="process-step__meta-key">
                          {key}
                        </span>
                        <span className="process-step__meta-value">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;