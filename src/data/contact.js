/**
 * src/data/contact.js
 *
 * Contact page configuration.
 * Update social URLs / email here — component consumes these.
 *
 * Toggle `isAvailable` to flip the availability status banner.
 */

export const contactConfig = {
  email: 'thepythondev2024@gmail.com',
  instagram: 'https://www.instagram.com/the.python.dev',
  instagramHandle: '@the.python.dev',
  github: 'https://github.com/The-Python-Dev',
  githubHandle: 'The-Python-Dev',
  location: 'Pune, India',
  responseTime: 'Under 24 hours',

  // 🟢 Flip this to `false` when all project slots are filled
  isAvailable: true,
};

// Form dropdown options
export const projectTypes = [
  { value: '',                label: 'Select a project type...' },
  { value: 'website',         label: 'Website Development' },
  { value: 'content',         label: 'Content & Copywriting' },
  { value: 'seo',             label: 'SEO Optimization' },
  { value: '3d',              label: '3D Web Experience' },
  { value: 'full-package',    label: 'Full Package (Website + Copy + SEO)' },
  { value: 'other',           label: 'Something else' },
];

export const budgetRanges = [
  { value: '',              label: 'Select a budget range...' },
  { value: '25k-55k',       label: '₹25K – ₹55K' },
  { value: '55k-1.1L',      label: '₹55K – ₹1.1L' },
  { value: '1.1L+',         label: '₹1.1L+' },
  { value: 'discuss',       label: "Let's discuss" },
];

// Quick FAQ (below the form)
export const quickFaqs = [
  {
    id: 1,
    question: 'Do you do free consultations?',
    answer:
      'Yes. The first discovery call is always free. No strings attached.',
  },
  {
    id: 2,
    question: 'Can we just chat before I commit?',
    answer:
      "Absolutely. That's literally what the discovery call is for.",
  },
  {
    id: 3,
    question: 'I have a tight deadline.',
    answer:
      'Let me know upfront. Rush delivery is possible depending on scope and current workload.',
  },
];