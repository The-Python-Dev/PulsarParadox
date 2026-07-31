/**
 * src/utils/index.js
 *
 * Utility functions — exported here as they're built.
 *
 * UPCOMING utilities:
 * - cn()          (className concatenation)
 * - formatDate()  (for blog posts)
 * - clamp()       (numeric clamping)
 */

/**
 * Concatenate class names, filtering falsy values.
 * Usage: cn('base-class', isActive && 'active', modifier)
 */
export const cn = (...classes) =>
  classes.filter(Boolean).join(' ');
