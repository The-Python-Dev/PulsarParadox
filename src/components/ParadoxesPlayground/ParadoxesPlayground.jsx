import { motion } from 'framer-motion';
import './ParadoxesPlayground.css';

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

const upcomingExperiments = [
  {
    id: 'exp-01',
    codename: 'EXP-01',
    hint: 'A scroll experience that reads you back.',
  },
  {
    id: 'exp-02',
    codename: 'EXP-02',
    hint: 'CSS-only motion. No JavaScript. No apologies.',
  },
  {
    id: 'exp-03',
    codename: 'EXP-03',
    hint: 'A landing page that argues with itself.',
  },
];

export default function ParadoxesPlayground() {
  return (
    <section
      className="paradoxes-playground"
      aria-label="Paradoxes playground experiments"
    >
      <div className="paradoxes-playground__container">
        {/* ─── Featured Experiment — Placeholder ─── */}
        <motion.div
          className="paradoxes-playground__featured"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            className="paradoxes-playground__label"
            variants={itemVariants}
          >
            // FEATURED EXPERIMENT
          </motion.span>

          <motion.article
            className="paradoxes-playground__placeholder-card"
            variants={itemVariants}
          >
            <div className="paradoxes-playground__placeholder-inner">
              <span className="paradoxes-playground__placeholder-status">
                [ IN THE WORKSHOP ]
              </span>
              <h2 className="paradoxes-playground__placeholder-title">
                Featured experiment{' '}
                <em className="paradoxes-playground__gradient-word">
                  incoming
                </em>
                .
              </h2>
              <p className="paradoxes-playground__placeholder-copy">
                Something new is being built in the background. When it's
                ready, it'll live here — no filler, no placeholders pretending
                otherwise.
              </p>
              <span className="paradoxes-playground__placeholder-tag">
                Check back soon.
              </span>
            </div>
          </motion.article>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="paradoxes-playground__divider" aria-hidden="true" />

        {/* ─── Upcoming Experiments ─── */}
        <motion.div
          className="paradoxes-playground__upcoming"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span
            className="paradoxes-playground__label"
            variants={itemVariants}
          >
            // MORE EXPERIMENTS INCOMING
          </motion.span>

          <motion.p
            className="paradoxes-playground__upcoming-intro"
            variants={itemVariants}
          >
            Half-formed ideas that shouldn't exist but probably will anyway.
          </motion.p>

          <motion.div
            className="paradoxes-playground__grid"
            variants={containerVariants}
          >
            {upcomingExperiments.map((exp) => (
              <motion.div
                key={exp.id}
                className="paradoxes-playground__soon-card"
                variants={itemVariants}
              >
                <span className="paradoxes-playground__soon-codename">
                  {exp.codename}
                </span>
                <p className="paradoxes-playground__soon-hint">{exp.hint}</p>
                <span className="paradoxes-playground__soon-status">
                  [ ENCRYPTED ]
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}