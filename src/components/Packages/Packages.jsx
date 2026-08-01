/**
 * src/components/Packages/Packages.jsx
 *
 * Services page — packages section.
 * - Launch Offer banner (amber accent)
 * - Section header
 * - 3 package cards (Growth Engine = "Most Popular" with violet glow)
 * - Custom-quote callout (escape hatch for in-between clients)
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../../data/packages';
import './Packages.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Packages = () => {
  return (
    <section className="packages" aria-label="Service packages">
      <div className="packages__container">
        {/* Launch Offer Banner */}
        <motion.div
          className="packages__launch-banner"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <span className="packages__launch-badge" aria-hidden="true">🎁</span>
          <div className="packages__launch-content">
            <p className="packages__launch-title">
              LAUNCH OFFER · FIRST 5 CLIENTS
            </p>
            <p className="packages__launch-text">
              To celebrate the studio launch, the first 5 projects get
              introductory rates in exchange for a testimonial and case
              study rights. Serious inquiries only.
            </p>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="packages__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="packages__label">// PACKAGES · CHOOSE YOUR PARADOX</p>
          <h2 className="packages__heading">Three tiers. One standard.</h2>
          <p className="packages__subheading">
            Every package is custom-scoped after our first conversation.
            These are starting points, not limitations.
          </p>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="packages__grid">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              className={`package-card ${
                pkg.popular ? 'package-card--popular' : ''
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
              {pkg.popular && (
                <div className="package-card__popular-badge">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="package-card__header">
                <span className="package-card__emoji" aria-hidden="true">
                  {pkg.emoji}
                </span>
                <h3 className="package-card__name">{pkg.name}</h3>
                <p className="package-card__subtitle">{pkg.subtitle}</p>
              </div>

              {/* Price */}
              <div className="package-card__price-block">
                <p className="package-card__price-note">{pkg.priceNote}</p>
                <p className="package-card__price">{pkg.price}</p>
                <p className="package-card__timeline">
                  Timeline: {pkg.timeline}
                </p>
              </div>

              {/* Base note (for tiers 2 & 3) */}
              {pkg.baseFeatures && (
                <p className="package-card__base-note">{pkg.baseFeatures}</p>
              )}

              {/* Features */}
              <ul className="package-card__features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="package-card__feature">
                    <span
                      className="package-card__feature-check"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Best For */}
              <div className="package-card__best-for">
                <p className="package-card__best-for-label">Best for:</p>
                <p className="package-card__best-for-text">{pkg.bestFor}</p>
              </div>

              {/* CTA */}
              <Link
                to={pkg.ctaLink}
                className={`package-card__cta ${
                  pkg.popular ? 'package-card__cta--popular' : ''
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Custom Quote Escape Hatch */}
        <motion.div
          className="packages__custom-quote"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="packages__custom-quote-content">
            <span
              className="packages__custom-quote-icon"
              aria-hidden="true"
            >
              💡
            </span>
            <div className="packages__custom-quote-text">
              <p className="packages__custom-quote-title">
                Not sure which fits? Or want something in between?
              </p>
              <p className="packages__custom-quote-body">
                Every package can be custom-scoped. Tell me your goals
                and budget — I'll build the paradox around it.
              </p>
            </div>
            <Link
              to="/contact"
              className="packages__custom-quote-cta"
            >
              Get a Custom Quote →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;