/**
 * src/components/RotatingBadge/RotatingBadge.jsx
 *
 * Animated badge that cycles through a list every N seconds.
 * - Fade + slide up transitions between badges
 * - Pauses on hover (accessibility)
 * - Reduced motion support
 * - Continuous infinite loop
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroBadges, BADGE_DURATION } from '../../data/badges';
import './RotatingBadge.css';

const RotatingBadge = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Check user's reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroBadges.length);
    }, BADGE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, prefersReducedMotion]);

  const currentBadge = heroBadges[currentIndex];

  return (
    <div
      className="rotating-badge"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="status"
      aria-live="polite"
      aria-label={`Current badge: ${currentBadge.text}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBadge.id}
          className="rotating-badge__pill"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span className="rotating-badge__icon" aria-hidden="true">
            {currentBadge.icon}
          </span>
          <span className="rotating-badge__text">{currentBadge.text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingBadge;