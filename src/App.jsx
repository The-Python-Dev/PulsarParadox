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
 */

import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';
import './pages/page-placeholder.css';

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
  return (
    <div className="app">
      {/*
        PHASE 2: Uncomment as components are built
        <CustomCursor />
        <LoadingScreen />
        <Navbar />
      */}

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

      {/*
        PHASE 2: Uncomment when Footer is built
        <Footer />
      */}
    </div>
  );
};

export default App;
