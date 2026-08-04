import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline';
import './AboutJourney.css';

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

export default function AboutJourney() {
  return (
    <section className="about-journey" aria-label="Journey timeline">
      <div className="about-journey__container">
        <motion.div
          className="about-journey__intro"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span className="about-journey__label" variants={itemVariants}>
            // HOW IT BEGAN
          </motion.span>

          <motion.h2 className="about-journey__headline" variants={itemVariants}>
            Five moments the studio{' '}
            <em className="about-journey__gradient-word">began</em> from.
          </motion.h2>

          <motion.p className="about-journey__subcopy" variants={itemVariants}>
            No time markers. Just the beats that mattered.
          </motion.p>
        </motion.div>

        <motion.ol
          className="about-journey__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {timeline.map((beat) => (
            <motion.li
              key={beat.id}
              className="about-journey__beat"
              variants={itemVariants}
            >
              <div className="about-journey__beat-header">
                <span className="about-journey__beat-number">
                  BEAT {beat.number}
                </span>
                <h3 className="about-journey__beat-title">{beat.title}</h3>
                {beat.timestamp && (
                  <span className="about-journey__beat-timestamp">
                    {beat.timestamp}
                  </span>
                )}
              </div>

              <div className="about-journey__beat-body">
                {beat.paragraphs.map((p, i) => (
                  <p key={`p-${i}`} className="about-journey__beat-para">
                    {p}
                  </p>
                ))}

                {beat.quote && (
                  <blockquote className="about-journey__beat-quote">
                    {beat.quote}
                  </blockquote>
                )}

                {beat.afterQuote &&
                  beat.afterQuote.map((p, i) => (
                    <p key={`aq-${i}`} className="about-journey__beat-para">
                      {p}
                    </p>
                  ))}

                {beat.secondQuote && (
                  <blockquote className="about-journey__beat-quote">
                    {beat.secondQuote}
                  </blockquote>
                )}

                {beat.afterSecondQuote &&
                  beat.afterSecondQuote.map((p, i) => (
                    <p key={`asq-${i}`} className="about-journey__beat-para">
                      {p}
                    </p>
                  ))}

                {beat.finalQuote && (
                  <blockquote className="about-journey__beat-quote about-journey__beat-quote--final">
                    {beat.finalQuote}
                  </blockquote>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}