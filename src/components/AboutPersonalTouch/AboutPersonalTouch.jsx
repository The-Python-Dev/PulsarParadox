import { motion } from 'framer-motion';
import { personalTouch, personalTouchCloser } from '../../data/personalTouch';
import './AboutPersonalTouch.css';

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

export default function AboutPersonalTouch() {
  return (
    <section
      className="about-personal"
      aria-label="Personal touch — when I'm not coding"
    >
      <div className="about-personal__container">
        <motion.div
          className="about-personal__intro"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            className="about-personal__label"
            variants={itemVariants}
          >
            // WHEN I'M NOT CODING
          </motion.span>

          <motion.h2
            className="about-personal__headline"
            variants={itemVariants}
          >
            The same brain, running{' '}
            <em className="about-personal__gradient-word">deeper</em> on other
            things.
          </motion.h2>

          <motion.p className="about-personal__subcopy" variants={itemVariants}>
            If you're wondering whether the obsession stops at the laptop —
            it doesn't.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-personal__blocks"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {personalTouch.map((block) => (
            <motion.article
              key={block.id}
              className="about-personal__block"
              variants={itemVariants}
            >
              <h3 className="about-personal__block-heading">{block.heading}</h3>
              <div className="about-personal__block-body">
                {block.paragraphs.map((p, i) => (
                  <p key={`p-${i}`}>{p}</p>
                ))}

                {block.quote && (
                  <blockquote className="about-personal__block-quote">
                    {block.quote}
                  </blockquote>
                )}

                {block.afterQuote &&
                  block.afterQuote.map((p, i) => (
                    <p key={`aq-${i}`}>{p}</p>
                  ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="about-personal__closer"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.p
            className="about-personal__closer-text"
            variants={itemVariants}
          >
            {personalTouchCloser}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}