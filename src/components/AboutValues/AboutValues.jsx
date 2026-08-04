import { motion } from 'framer-motion';
import { values } from '../../data/values';
import './AboutValues.css';

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

// Renders body text; if a gradient word exists, wraps it with the gradient span
function renderBody(body, gradientWord) {
  if (!gradientWord) {
    return <p className="about-values__card-body">{body}</p>;
  }

  const parts = body.split('{{problem}}');
  return (
    <p className="about-values__card-body">
      {parts[0]}
      <em className="about-values__gradient-word">{gradientWord}</em>
      {parts[1]}
    </p>
  );
}

export default function AboutValues() {
  return (
    <section
      className="about-values"
      aria-label="Values that shape the work"
    >
      <div className="about-values__container">
        <motion.div
          className="about-values__intro"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span className="about-values__label" variants={itemVariants}>
            // WHAT I VALUE
          </motion.span>

          <motion.h2 className="about-values__headline" variants={itemVariants}>
            Three ideas that shape everything else.
          </motion.h2>

          <motion.p className="about-values__subcopy" variants={itemVariants}>
            These aren't rules I follow. They're the reason the work looks
            the way it does.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-values__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {values.map((v) => (
            <motion.article
              key={v.id}
              className="about-values__card"
              variants={itemVariants}
            >
              <span className="about-values__card-number">{v.number}</span>
              <h3 className="about-values__card-title">{v.title}</h3>
              {renderBody(v.body, v.gradientWord)}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}