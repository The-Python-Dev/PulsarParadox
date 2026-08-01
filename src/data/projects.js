/**
 * src/data/projects.js
 *
 * Portfolio projects for the Work page.
 * Each project: id, number, title, tagline, description, stack,
 *               features, type, status, links.
 *
 * Status types: 'shipped' | 'in-development' | 'classified'
 */

export const projects = [
  {
    id: 'flipodoro',
    number: '01',
    title: 'Flipodoro',
    tagline: 'A Pomodoro timer with a twist.',
    description:
      'A productivity timer with flip-card animations, session tracking, and a clean dark UI. Built because every existing Pomodoro app was either ugly, bloated, or both.',
    stack: ['React', 'Vite', 'CSS Animations', 'LocalStorage'],
    features: [
      'Flip-card countdown animation',
      'Customizable work/break intervals',
      'Session history tracking',
      'Clean, distraction-free interface',
      'Fully responsive',
    ],
    type: 'Productivity Tool',
    status: 'shipped',
    tags: ['PRODUCTIVITY', 'REACT', 'OPEN SOURCE'],
    links: {
      live: null,           // ← Fill in when hosted
      github: 'https://github.com/The-Python-Dev/Flipodoro',
    },
  },
  {
    id: 'neuronotes',
    number: '02',
    title: 'NeuroNotes',
    tagline: 'Notes for developers who think in tags.',
    description:
      'An intelligent note-taking app designed for developers who think in tags, not folders. Built because I needed a notes app that worked the way my brain works — fast, searchable, minimal.',
    stack: ['Python', 'Tkinter', 'JSON Storage'],
    features: [
      'Tag-based organization',
      'Instant search across all notes',
      'Minimal, keyboard-first interface',
      'Auto-save functionality',
      'Export capabilities',
    ],
    type: 'Developer Tool',
    status: 'shipped',
    tags: ['NOTES APP', 'PYTHON', 'OPEN SOURCE'],
    links: {
      live: null,           // Tkinter — not web-deployable
      github: 'https://github.com/The-Python-Dev/NeuroNotes',
    },
  },
  {
    id: 'uchiha-itachi',
    number: '03',
    title: 'Uchiha Itachi',
    tagline: 'A cinematic tribute in vanilla JS.',
    description:
      'A scroll-driven cinematic tribute to Itachi Uchiha — bilingual typography, cursor-tracking Sharingan eyes, frame-by-frame animations, and immersive storytelling. Built with zero frameworks. Proof that vanilla HTML/CSS/JS can go premium.',
    stack: ['Vanilla JavaScript', 'CSS3', 'HTML5', 'Frame Animation'],
    features: [
      'Scroll-driven cinematic narrative',
      'Cursor-tracking Sharingan eyes',
      'Bilingual JP/EN typography system',
      'Frame-by-frame animation engine',
      'Fully responsive across devices',
      'Zero external dependencies',
    ],
    type: 'Interactive Experience',
    status: 'shipped',
    tags: ['CINEMATIC', 'VANILLA JS', 'STORYTELLING'],
    links: {
      live: 'https://uchiha-itachi-2026.netlify.app/',
      github: 'https://github.com/The-Python-Dev/Uchiha_Itachi',
    },
  },
  {
    id: 'classified-01',
    number: '04',
    title: '[CLASSIFIED]',
    tagline: 'Currently in the workshop.',
    description:
      "Being stress-tested, polished, and prepared for deployment. This one pushes into new territory. More details dropping soon.",
    stack: ['[REDACTED]'],
    features: [],
    type: 'In Development',
    status: 'classified',
    tags: ['IN PROGRESS', 'LAUNCHING SOON'],
    links: {
      live: null,
      github: null,
    },
  },
];