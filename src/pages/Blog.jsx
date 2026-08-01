/**
 * src/pages/Blog.jsx
 * Route: /blog
 * Blog page — pre-content state (2 sections).
 * Real posts array will be populated in data/blog.js when writing begins.
 */

import BlogHero from '../components/BlogHero';
import BlogEmpty from '../components/BlogEmpty';
import './Blog.css';

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogEmpty />
    </>
  );
};

export default Blog;