/**
 * src/data/blog.js
 *
 * Blog page content — currently empty pre-content state.
 * Future blog posts will be added to `posts[]` array.
 */

// Topics coming soon (shown on empty state)
export const upcomingTopics = [
  {
    id: 1,
    icon: '🔨',
    title: 'Why I build everything from scratch',
    description: 'No templates. No page builders. Here\'s the case for custom code in an AI-generated world.',
  },
  {
    id: 2,
    icon: '🛠️',
    title: 'The tech stack behind PulsarParadox',
    description: 'React, Vite, Framer Motion, and why each choice was intentional.',
  },
  {
    id: 3,
    icon: '⚠️',
    title: 'What founders get wrong about their first website',
    description: 'The 3 mistakes I see every founder make when launching their first digital presence.',
  },
  {
    id: 4,
    icon: '⚡',
    title: 'How I ship projects at 2x agency speed',
    description: 'The workflow, tools, and mindset that keep me shipping while others plan meetings.',
  },
];

// Real posts (empty for now — add here when writing)
export const posts = [];

// Category tags for future posts
export const blogCategories = [
  'DEV DIARY',
  'DESIGN',
  'FREELANCE',
  'CODE',
  'OPINION',
  'TUTORIAL',
];