/**
 * src/App.jsx
 *
 * Root application component.
 * Handles: routing, global layout, Lenis smooth scroll (Phase 5),
 *          loading screen, custom cursor, scroll-to-top.
 *
 * Architecture:
 * - BrowserRouter wraps everything (in main.jsx)
 * - App renders Navbar + Routes + Footer
 * - Each Route is lazily loaded for code splitting
 * - useScrollToTop() resets scroll position on route change
 */

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks';
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';
import './pages/page-placeholder.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ── Lazy-loaded pages (code splitting per route) ──────────────
const Home       = lazy(() => import('./pages/Home'));
const About      = lazy(() => import('./pages/About'));
const Work       = lazy(() => import('./pages/Work'));
const Services   = lazy(() => import('./pages/Services'));
const Blog       = lazy(() => import('./pages/Blog'));
const Paradoxes  = lazy(() => import('./pages/Paradoxes'));
const Contact    = lazy(() => import('./pages/Contact'));
const NotFound   = lazy(() => import('./pages/NotFound'));

// ── Page loading fallback ─────────────────────────────────────
const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      color: 'var(--primary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
    }}
    role="status"
    aria-label="Loading page"
  >
    Forging paradox...
  </div>
);

const App = () => {
  // Reset scroll position to top on every route change
  useScrollToTop();

  return (
    <div className="app">
      <Navbar />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/projects"   element={<Work />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/blog"       element={<Blog />} />
            <Route path="/paradoxes"  element={<Paradoxes />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;