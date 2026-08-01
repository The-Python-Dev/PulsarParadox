/**
 * src/data/badges.js
 *
 * Rotating badges for Hero section.
 * The "available" badge is CONDITIONAL — controlled via env variable VITE_AVAILABLE.
 * Set VITE_AVAILABLE=false in .env to hide it when fully booked.
 */

// Read env variable (default to true if not set)
const isAvailable = import.meta.env.VITE_AVAILABLE !== 'false';

// Base badges (always shown)
const baseBadges = [
  { id: 1, icon: '⚡', text: "THE FOUNDER'S TOOLKIT" },
  { id: 2, icon: '☕', text: 'POWERED BY CAFFEINE & CHAOS' },
  { id: 3, icon: '🌀', text: '100% HUMAN · 0% BORING' },
  { id: 4, icon: '🌌', text: 'CODING SINCE THE BIG BANG' },
  { id: 5, icon: '💯', text: 'AGENCY QUALITY · SOLO SPEED' },
];

// Conditional availability badge
const availabilityBadge = {
  id: 6,
  icon: '🟢',
  text: 'AVAILABLE FOR NEW PARADOXES',
};

// Export final badge list based on availability
export const heroBadges = isAvailable
  ? [...baseBadges, availabilityBadge]
  : baseBadges;

// Duration each badge shows (in milliseconds)
export const BADGE_DURATION = 3000;