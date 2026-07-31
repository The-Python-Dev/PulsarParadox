/**
 * src/data/projects.js
 *
 * Portfolio project data.
 * STATUS values: 'shipped' | 'in-progress' | 'classified'
 */

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'Flipodoro',
    slug: 'flipodoro',
    tagline: 'Focus timer with a flip.',
    description:
      'A Pomodoro productivity timer with flip-card animations, session tracking, and a clean dark UI. Built because every existing Pomodoro app was either ugly, bloated, or both.',
    stack: ['React', 'Vite', 'CSS Animations', 'LocalStorage'],
    type: 'Productivity Tool',
    tags: ['PRODUCTIVITY', 'REACT', 'OPEN SOURCE'],
    tagColor: 'violet',
    status: 'shipped',
    features: [
      'Flip-card countdown animation',
      'Customizable work/break intervals',
      'Session history tracking',
      'Clean, distraction-free interface',
      'Fully responsive',
    ],
    links: {
      live: '#',    // Update with real URL
      github: '#',  // Update with real GitHub URL
    },
  },
  {
    id: 2,
    number: '02',
    title: 'NeuroNotes',
    slug: 'neuronotes',
    tagline: 'Notes that work like your brain.',
    description:
      'An intelligent note-taking app designed for developers who think in tags, not folders. Built because I needed a notes app that worked the way my brain works — fast, searchable, minimal.',
    stack: ['Python', 'Tkinter', 'JSON Storage'],
    type: 'Developer Tool',
    tags: ['NOTES APP', 'PYTHON', 'OPEN SOURCE'],
    tagColor: 'violet',
    status: 'shipped',
    features: [
      'Tag-based organization',
      'Instant search across all notes',
      'Minimal, keyboard-first interface',
      'Auto-save functionality',
      'Export capabilities',
    ],
    links: {
      live: null,
      github: '#',  // Update with real GitHub URL
    },
  },
  {
    id: 3,
    number: '03',
    title: '[CLASSIFIED]',
    slug: 'classified-01',
    tagline: 'Something new is being forged.',
    description:
      'Currently in the workshop. Being stress-tested, polished, and prepared for deployment. This one pushes into new territory. More details dropping soon.',
    stack: ['[REDACTED]'],
    type: null,
    tags: ['IN PROGRESS', 'LAUNCHING SOON'],
    tagColor: 'gold',
    status: 'classified',
    features: [],
    links: {
      notify: '/contact',
    },
  },
  {
    id: 4,
    number: '04',
    title: '[CLASSIFIED]',
    slug: 'classified-02',
    tagline: 'Another paradox being forged.',
    description:
      'Another paradox being forged. Two classified projects means twice the anticipation.',
    stack: ['[REDACTED]'],
    type: null,
    tags: ['IN PROGRESS'],
    tagColor: 'gold',
    status: 'classified',
    features: [],
    links: {},
  },
];

/** Featured projects shown on the Home page (first 3) */
export const featuredProjects = projects.slice(0, 3);
