/**
 * src/data/services.js
 *
 * Services data for the Services page.
 * Categories: development, content, specialty
 */

export const serviceCategories = [
  {
    id: 'development',
    number: '01',
    label: '// 01 · DEVELOPMENT',
    heading: 'Code that performs.',
    icon: '💻',
    services: [
      {
        id: 'website-dev',
        icon: '🌐',
        title: 'WEBSITE DEVELOPMENT',
        description:
          'Custom websites built from scratch with React + Vite. No templates, no page builders, no WordPress themes pretending to be custom. Fast, accessible, and SEO-ready from line one.',
        includes: 'Design, development, responsive optimization, deployment.',
        bestFor: 'Founders who need a website that actually converts.',
      },
      {
        id: '3d-web',
        icon: '🎨',
        title: '3D WEB EXPERIENCES',
        description:
          'Interactive 3D elements powered by Three.js and React Three Fiber. Product showcases, immersive landing pages, scroll-driven animations that make visitors forget they\'re on a website.',
        includes: '3D integration, performance optimization, interaction design.',
        bestFor: 'Brands that want to stand out. Like, really stand out.',
      },
      {
        id: 'fullstack',
        icon: '⚡',
        title: 'FULLSTACK DEVELOPMENT',
        description:
          'End-to-end application development with AI-assisted workflows. Frontend + backend + deployment, handled by one developer who understands the entire pipeline.',
        includes: 'Architecture, API integration, database setup, deployment.',
        bestFor: 'Founders building products, not just pages.',
      },
      {
        id: 'python',
        icon: '🐍',
        title: 'PYTHON PROJECTS',
        description:
          'Automation scripts, CLI tools, data processing utilities, and custom Python applications built to solve specific problems.',
        includes: 'Script development, documentation, maintenance support.',
        bestFor: 'Anyone doing something manually that should be automated.',
      },
      {
        id: 'seo',
        icon: '🔍',
        title: 'SEO OPTIMIZATION',
        description:
          'Technical SEO baked into every build — not bolted on as an afterthought. Meta tags, schema markup, performance optimization, Core Web Vitals, and content structure that Google actually understands.',
        includes: 'Technical audit, on-page optimization, performance tuning.',
        bestFor: "Anyone tired of being invisible on Google.",
      },
      {
        id: 'specialty-exp',
        icon: '💡',
        title: 'SPECIALIZED EXPERIENCE',
        description:
          'Deep familiarity with education, coaching, and creator-brand projects. Speak your industry\'s language from day one.',
        includes: null,
        bestFor: null,
      },
    ],
  },
  {
    id: 'content',
    number: '02',
    label: '// 02 · CONTENT & COPY',
    heading: 'Words that work.',
    icon: '✍️',
    services: [
      {
        id: 'copywriting',
        icon: '✍️',
        title: 'COPYWRITING',
        description:
          'Website copy, landing pages, taglines, and brand messaging that sounds like a human wrote it — because one did. No AI slop, no corporate jargon, no "leverage synergies."',
        includes: 'Brand voice development, page copy, headlines, CTAs.',
        bestFor: 'Founders whose current copy sounds like it was written by a committee.',
      },
      {
        id: 'technical-writing',
        icon: '📝',
        title: 'TECHNICAL WRITING',
        description:
          'Documentation, developer guides, API docs, and READMEs that actual humans can understand. Complex ideas, simple words.',
        includes: 'Doc structure, content writing, formatting, version control.',
        bestFor: 'Dev tools, SaaS products, open source projects.',
      },
      {
        id: 'blog-writing',
        icon: '📰',
        title: 'ARTICLE & BLOG WRITING',
        description:
          'Long-form content that ranks, educates, and establishes authority. SEO-optimized without reading like it was written for an algorithm.',
        includes: 'Topic research, writing, SEO optimization, formatting.',
        bestFor: 'Founders building thought leadership through content.',
      },
      {
        id: 'ghostwriting',
        icon: '👻',
        title: 'GHOST WRITING',
        description:
          "I write. Your name goes on it. Nobody knows. Articles, blog posts, LinkedIn content, and thought pieces written in YOUR voice, not mine.",
        includes: 'Voice matching, research, writing, revisions.',
        bestFor: "Busy founders who need content but don't have time to write.",
      },
    ],
  },
  {
    id: 'specialty',
    number: '03',
    label: '// 03 · SPECIALTY',
    heading: 'The extra edge.',
    icon: '🎨',
    services: [
      {
        id: 'animations',
        icon: '🌀',
        title: 'INTERACTIVE ANIMATIONS',
        description:
          'GSAP, Framer Motion, Lenis smooth scrolling — micro-interactions and scroll-driven animations that make your site feel alive without tanking performance.',
        includes: null,
        bestFor: null,
      },
      {
        id: 'i18n',
        icon: '🌐',
        title: 'MULTILINGUAL SITES (i18n)',
        description:
          'Full internationalization architecture using i18next. Reach audiences in multiple languages without maintaining separate websites.',
        includes: null,
        bestFor: null,
      },
      {
        id: 'ux-design',
        icon: '🎯',
        title: 'PREMIUM UX DESIGN',
        description:
          "User flows, wireframes, and interface design focused on one metric: does the user do the thing you want them to do? If yes, it works.",
        includes: null,
        bestFor: null,
      },
    ],
  },
];
