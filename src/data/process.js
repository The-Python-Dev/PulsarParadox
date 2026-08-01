/**
 * src/data/process.js
 *
 * 5-step client process for the Services page.
 * Each step includes: number, title, description, meta (optional).
 */

export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'DISCOVERY CALL',
    description:
      "We hop on a call (or chat — I'm flexible). You tell me what you need, who your audience is, and what success looks like. I ask annoyingly specific questions.",
    meta: {
      duration: '30-45 minutes',
      cost: 'Free. Always.',
    },
  },
  {
    id: 2,
    number: '02',
    title: 'PROPOSAL & SCOPE',
    description:
      "Within 48 hours, you get a clear proposal: what I'll build, how long it'll take, what it'll cost. No 47-page documents. No hidden fees.",
    meta: {
      turnaround: '48-hour turnaround',
      commitment: 'You say yes, we lock it in.',
    },
  },
  {
    id: 3,
    number: '03',
    title: 'BUILD PHASE',
    description:
      "I disappear into code for a bit. But you don't get ghosted — progress updates, preview links, and check-in points throughout. Milestone reviews keep us aligned.",
    meta: {
      updates: 'Weekly progress updates',
      access: 'Live preview links',
    },
  },
  {
    id: 4,
    number: '04',
    title: 'REVIEW & REFINE',
    description:
      'You review. I refine. This is where we dial in the details — typography, spacing, copy tweaks, color adjustments. Your revisions, my obsession.',
    meta: {
      cycle: 'Iterative feedback loop',
      focus: 'Pixel-level polish',
    },
  },
  {
    id: 5,
    number: '05',
    title: 'LAUNCH & HANDOVER',
    description:
      'We deploy, test across devices, and go live. You get full ownership of the code, documentation, and a human (me) to ping if anything breaks.',
    meta: {
      support: 'Post-launch support included',
      ownership: 'Full code + docs handover',
    },
  },
];