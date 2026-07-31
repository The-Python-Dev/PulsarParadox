/**
 * src/data/badges.js
 *
 * Rotating badge data for the Hero section.
 * The "AVAILABLE" badge is conditionally rendered based on
 * the VITE_AVAILABLE environment variable.
 *
 * Badge rotation: 6 items, 3s each, continuous loop.
 */

export const heroBadges = [
  {
    id: 1,
    icon: '⚡',
    text: "THE FOUNDER'S TOOLKIT",
    conditional: false,
  },
  {
    id: 2,
    icon: '☕',
    text: 'POWERED BY CAFFEINE & CHAOS',
    conditional: false,
  },
  {
    id: 3,
    icon: '🌀',
    text: '100% HUMAN · 0% BORING',
    conditional: false,
  },
  {
    id: 4,
    icon: '🌌',
    text: 'CODING SINCE THE BIG BANG',
    conditional: false,
  },
  {
    id: 5,
    icon: '💯',
    text: 'AGENCY QUALITY · SOLO SPEED',
    conditional: false,
  },
  {
    id: 6,
    icon: '🟢',
    text: 'AVAILABLE FOR NEW PARADOXES',
    conditional: true, // Only shown when VITE_AVAILABLE=true
  },
];
