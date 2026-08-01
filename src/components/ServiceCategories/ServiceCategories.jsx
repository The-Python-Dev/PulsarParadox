/**
 * src/components/ServiceCategories/ServiceCategories.jsx
 *
 * Services page — service categories section.
 * - 3 vertical category bands (Development, Content, Specialty)
 * - Each band has a header + auto-fit grid of service cards
 * - Optional `includes` and `bestFor` fields rendered conditionally
 */

import { motion } from 'framer-motion';
import { serviceCategories } from '../../data/services';
import './ServiceCategories.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ServiceCategories = () => {
  return (
    <section className="service-categories" aria-label="Service categories">
      <div className="service-categories__container">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            className="service-categories__band"
            id={category.id}
          >
            {/* Category Header */}
            <motion.div
              className="service-categories__header"
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p className="service-categories__label">{category.label}</p>
              <h2 className="service-categories__heading">
                <span className="service-categories__heading-icon" aria-hidden="true">
                  {category.icon}
                </span>
                {category.heading}
              </h2>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="service-categories__grid">
              {category.services.map((service, i) => (
                <motion.article
                  key={service.id}
                  className="service-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                >
                  <div className="service-card__icon" aria-hidden="true">
                    {service.icon}
                  </div>

                  <h3 className="service-card__title">{service.title}</h3>

                  <p className="service-card__description">
                    {service.description}
                  </p>

                  {(service.includes || service.bestFor) && (
                    <div className="service-card__meta">
                      {service.includes && (
                        <p className="service-card__meta-line">
                          <span className="service-card__meta-label">
                            Includes:
                          </span>{' '}
                          {service.includes}
                        </p>
                      )}
                      {service.bestFor && (
                        <p className="service-card__meta-line">
                          <span className="service-card__meta-label">
                            Best for:
                          </span>{' '}
                          {service.bestFor}
                        </p>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCategories;