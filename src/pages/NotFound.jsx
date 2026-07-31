/**
 * src/pages/NotFound.jsx
 * Route: * (catch-all)
 */

import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="page not-found-page">
      <div className="not-found-content container">
        <span className="section-label">// ERROR 404</span>

        <h1 className="not-found-heading">You've drifted into the void.</h1>

        <p className="not-found-subheading">
          This page doesn't exist. Yet.
          <br />
          <em>Maybe it's a paradox — it exists because it doesn't.</em>
        </p>

        <p className="not-found-body">
          Either the link is broken, the page moved,
          <br />
          or you typed something creative in the URL bar.
          <br />
          No judgment.
          <br />
          Let's get you back to familiar space.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            Take Me Home →
          </Link>
          <Link to="/projects" className="btn btn-ghost btn-lg">
            View Work →
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-lg">
            Contact →
          </Link>
        </div>

        <div className="not-found-easter-egg" aria-hidden="true">
          <p>Error Code: PARADOX_NOT_FOUND</p>
          <p>Status: The page is simultaneously here and not here.</p>
          <p>Resolution: Schrödinger would understand.</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
