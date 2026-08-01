/**
 * src/pages/Home.jsx
 * Route: /
 * 
 * Temporary state: Testing RotatingBadge before building full Hero.
 */

import RotatingBadge from '../components/RotatingBadge';
import './Home.css';

const Home = () => {
  return (
    <main className="page home-page">
      <div className="page-placeholder">
        <span className="placeholder-label">// HOME</span>
        <h1>Home Page</h1>
        <p>Phase 3 — coming soon.</p>
        
        {/* TEMP: Testing RotatingBadge */}
        <div style={{ marginTop: '2rem' }}>
          <RotatingBadge />
        </div>
      </div>
    </main>
  );
};

export default Home;