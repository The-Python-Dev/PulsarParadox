/**
 * src/data/projects.js
 *
 * Projects data — used by FeaturedProjects section on Home
 * AND the full /projects (Work) page.
 *
 * Add new projects here as they ship.
 */

export const projects = [
  {
    id: 'flipodoro',
    number: '01',
    title: 'Flipodoro',
    tags: ['PRODUCTIVITY', 'REACT', 'OPEN SOURCE'],
    tagColor: 'primary',
    description: 'A Pomodoro timer with a twist — flip-card animations, session tracking, and a clean UI that makes focus feel premium.',
    stack: ['React', 'Vite', 'CSS Animations', 'LocalStorage'],
    features: [
      'Flip-card countdown animation',
      'Customizable work/break intervals',
      'Session history tracking',
      'Clean, distraction-free interface',
      'Fully responsive',
    ],
    status: 'shipped',
    statusLabel: '✅ Shipped · Open Source',
    type: 'Productivity Tool',
    links: {
      demo: 'https://github.com/The-Python-Dev/flipodoro',
      github: 'https://github.com/The-Python-Dev/flipodoro',
    },
    featured: true,
  },
  {
    id: 'neuronotes',
    number: '02',
    title: 'NeuroNotes',
    tags: ['NOTES APP', 'PYTHON', 'OPEN SOURCE'],
    tagColor: 'primary',
    description: 'An intelligent note-taking app designed for developers. Tag, search, and organize thoughts at the speed of typing.',
    stack: ['Python', 'Tkinter', 'JSON Storage'],
    features: [
      'Tag-based organization',
      'Instant search across all notes',
      'Minimal, keyboard-first interface',
      'Auto-save functionality',
      'Export capabilities',
    ],
    status: 'shipped',
    statusLabel: '✅ Shipped · Open Source',
    type: 'Developer Tool',
    links: {
      github: 'https://github.com/The-Python-Dev/neuronnotes',
    },
    featured: true,
  },
  {
    id: 'classified-01',
    number: '03',
    title: 'Project Classified',
    tags: ['IN PROGRESS', 'LAUNCHING SOON'],
    tagColor: 'accent',
    description: 'Something new is being forged in the workshop. Stay tuned — this one\'s going to break things (in a good way).',
    stack: ['[REDACTED]'],
    features: [],
    status: 'in-progress',
    statusLabel: '🔄 In Development',
    type: 'Coming Soon',
    links: {},
    featured: true,
  },
  {
    id: 'classified-02',
    number: '04',
    title: 'Project Classified',
    tags: ['IN PROGRESS', 'LAUNCHING SOON'],
    tagColor: 'accent',
    description: 'Another paradox being forged. Two classified projects means twice the anticipation.',
    stack: ['[REDACTED]'],
    features: [],
    status: 'in-progress',
    statusLabel: '🔄 In Development',
    type: 'Coming Soon',
    links: {},
    featured: false,
  },
];

// Helper: get only featured projects (for Home page)
export const featuredProjects = projects.filter((p) => p.featured);