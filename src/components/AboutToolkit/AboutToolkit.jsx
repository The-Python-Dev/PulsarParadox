import { motion } from 'framer-motion';
import { toolkit, notOffered } from '../../data/toolkit';
import './AboutToolkit.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutToolkit() {
  return (
    <section className="about-toolkit" aria-label="What I actually do">
      <div className="about-toolkit__container">
        {/* Intro */}
        <motion.div
          className="about-toolkit__intro"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span className="about-toolkit__label" variants={itemVariants}>
            // WHAT I ACTUALLY DO
          </motion.span>

          <motion.h2 className="about-toolkit__headline" variants={itemVariants}>
            The full toolkit — the{' '}
            <em className="about-toolkit__gradient-word">honest</em> version.
          </motion.h2>

          <motion.p className="about-toolkit__subcopy" variants={itemVariants}>
            Ten disciplines. Real capability, not padded claims. What's
            underneath is what I can actually deliver.
          </motion.p>
        </motion.div>

        {/* Disciplines grid */}
        <motion.div
          className="about-toolkit__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {toolkit.map((item) => (
            <motion.article
              key={item.id}
              className="about-toolkit__card"
              variants={itemVariants}
            >
              <div className="about-toolkit__card-header">
                <span className="about-toolkit__card-number">
                  {item.number}
                </span>
                <h3 className="about-toolkit__card-title">{item.title}</h3>
              </div>
              <p className="about-toolkit__card-desc">{item.description}</p>
              <div className="about-toolkit__card-tags">
                {item.tags.map((tag, i) => (
                  <span key={`${item.id}-tag-${i}`} className="about-toolkit__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* "What I don't do" subsection */}
        <motion.div
          className="about-toolkit__not-offered"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            className="about-toolkit__not-label"
            variants={itemVariants}
          >
            // WHAT I DON'T DO (YET)
          </motion.span>

          <motion.p
            className="about-toolkit__not-intro"
            variants={itemVariants}
          >
            {notOffered.intro}
          </motion.p>

          <motion.ul
            className="about-toolkit__not-list"
            variants={containerVariants}
          >
            {notOffered.items.map((item, i) => (
              <motion.li
                key={`not-${i}`}
                className="about-toolkit__not-item"
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}