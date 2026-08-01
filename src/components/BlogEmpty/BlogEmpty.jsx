/**
 * BlogEmpty — Pre-content state for the Blog page.
 * Shows "First Transmission Incoming" message + upcoming topics + Instagram CTA.
 */

import { motion } from 'framer-motion';
import { upcomingTopics } from '../../data/blog';
import { contactConfig } from '../../data/contact';
import './BlogEmpty.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const topicVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const BlogEmpty = () => {
  return (
    <section className="blog-empty" aria-label="Blog coming soon">
      <div className="blog-empty__container">
        <motion.div
          className="blog-empty__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="blog-empty__badge">
            <span className="blog-empty__badge-dot" aria-hidden="true" />
            <span className="blog-empty__badge-text">
              📡 First Transmission Incoming...
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="blog-empty__heading">
            The blog is being{' '}
            <span className="blog-empty__heading-accent">calibrated</span>.
          </motion.h2>

          <motion.p variants={itemVariants} className="blog-empty__intro">
            First posts are in the writing queue.
            Here's what's on the radar:
          </motion.p>

          {/* Topics Grid */}
          <div className="blog-empty__topics">
            {upcomingTopics.map((topic, i) => (
              <motion.article
                key={topic.id}
                className="topic-card"
                variants={topicVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
              >
                <span className="topic-card__icon" aria-hidden="true">
                  {topic.icon}
                </span>
                <div className="topic-card__content">
                  <h3 className="topic-card__title">{topic.title}</h3>
                  <p className="topic-card__description">{topic.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Follow CTA */}
          <motion.div variants={itemVariants} className="blog-empty__cta-wrap">
            <p className="blog-empty__cta-text">
              Want real-time updates when the first post drops?
            </p>
            <a
              href={contactConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-empty__cta-button"
            >
              <span className="blog-empty__cta-icon" aria-hidden="true">📸</span>
              Follow {contactConfig.instagramHandle}
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          {/* Micro-copy */}
          <motion.p variants={itemVariants} className="blog-empty__micro">
            No newsletter spam. No subscription pop-ups.
            <br />
            Just posts when there's something worth reading.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogEmpty;