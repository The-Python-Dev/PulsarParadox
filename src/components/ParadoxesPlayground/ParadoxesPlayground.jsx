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
        {/* ─── Featured Experiment ─── */}
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
            className="paradoxes-playground__card"
            variants={itemVariants}
          >
            {/* Image */}
            <a
              href="https://uchiha-itachi-2026.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="paradoxes-playground__image-link"
              aria-label="View Uchiha Itachi live site"
            >
              <div className="paradoxes-playground__image-wrapper">
                <img
                  src="/images/itachi-preview.jpg"
                  alt="Uchiha Itachi tribute site — Sharingan eyes with Japanese calligraphy"
                  className="paradoxes-playground__image"
                  loading="lazy"
                />
                <div className="paradoxes-playground__image-overlay">
                  <span className="paradoxes-playground__view-live">
                    VIEW LIVE →
                  </span>
                </div>
              </div>
            </a>

            {/* Content */}
            <div className="paradoxes-playground__content">
              <div className="paradoxes-playground__meta">
                <span className="paradoxes-playground__meta-item">
                  VANILLA JS
                </span>
                <span className="paradoxes-playground__meta-dot">·</span>
                <span className="paradoxes-playground__meta-item">
                  ZERO DEPENDENCIES
                </span>
                <span className="paradoxes-playground__meta-dot">·</span>
                <span className="paradoxes-playground__meta-item">
                  SHIPPED
                </span>
              </div>

              <h2 className="paradoxes-playground__title">
                Uchiha Itachi
              </h2>

              <div className="paradoxes-playground__story">
                <p>
                  I wanted to see if restraint could feel like{' '}
                  <em className="paradoxes-playground__gradient-word">
                    cinema
                  </em>
                  .
                </p>
                <p>
                  So I closed every tab. Uninstalled every library. Started
                  with a blank HTML file and a stubborn idea — that vanilla
                  JavaScript, given enough obsession, could do things people
                  reach for frameworks to accomplish.
                </p>
                <p>
                  Cursor-tracking Sharingan. Scroll-driven narrative.
                  Bilingual JP/EN typography. Frame animations. All of it,
                  no dependencies.
                </p>
                <p className="paradoxes-playground__story-punch">
                  Turns out, the constraint was the point.
                </p>
              </div>

              <div className="paradoxes-playground__actions">
                <a
                  href="https://uchiha-itachi-2026.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paradoxes-playground__btn paradoxes-playground__btn--primary"
                >
                  View Live →
                </a>
                <a
                  href="https://github.com/The-Python-Dev/Uchiha_Itachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paradoxes-playground__btn paradoxes-playground__btn--ghost"
                >
                  Source Code
                </a>
              </div>
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