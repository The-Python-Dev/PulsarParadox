/**
 * AvailabilityStatus — Shows current availability.
 * Reads from contactConfig.isAvailable — toggle in data/contact.js
 */

import { motion } from 'framer-motion';
import { contactConfig } from '../../data/contact';
import './AvailabilityStatus.css';

const AvailabilityStatus = () => {
  const { isAvailable } = contactConfig;

  return (
    <motion.div
      className={`availability ${
        isAvailable ? 'availability--open' : 'availability--closed'
      }`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="availability__dot" aria-hidden="true" />
      <div className="availability__content">
        <p className="availability__status">
          {isAvailable ? 'CURRENTLY AVAILABLE' : 'CURRENTLY BOOKED'}
        </p>
        <p className="availability__text">
          {isAvailable
            ? 'Taking on new projects. Slots are intentionally limited to 2-3 active projects to maintain quality.'
            : 'All project slots are filled. Send a message to join the waitlist.'}
        </p>
      </div>
    </motion.div>
  );
};

export default AvailabilityStatus;