/**
 * src/components/Footer/Footer.jsx
 *
 * Global footer displayed on every page.
 * Structure:
 * - Logo + tagline
 * - 3 columns of links (Pages, Connect, Resources)
 * - Copyright + attribution
 */

import { Link } from 'react-router-dom';
import './Footer.css';

// ── Link data (easy to update) ────────────────────────────────
const footerData = {
  pages: [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About' },
    { to: '/projects',  label: 'Work' },
    { to: '/services',  label: 'Services' },
    { to: '/contact',   label: 'Contact' },
  ],
  connect: [
    { href: 'https://github.com/thepythondev',   label: 'GitHub',    external: true },
    { href: 'https://instagram.com/thepythondev', label: 'Instagram', external: true },
    { href: 'mailto:pulsarparadox@gmail.com',    label: 'Email',     external: true },
  ],
  resources: [
    { to: '/blog',       label: 'Blog' },
    { to: '/paradoxes',  label: 'Paradoxes' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__container">
        {/* Top section — Logo + Tagline */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="PulsarParadox home">
            <span className="footer__logo-icon">
              {'{'}<span className="footer__logo-infinity">∞</span>{'}'}
            </span>
            <span className="footer__logo-text">PulsarParadox</span>
          </Link>
          <p className="footer__tagline">Build. Break. Repair. Repeat.</p>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true"></div>

        {/* Middle section — 3 column grid */}
        <div className="footer__columns">
          {/* Column 1: Pages */}
          <div className="footer__column">
            <h3 className="footer__column-title">Pages</h3>
            <ul className="footer__list" role="list">
              {footerData.pages.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div className="footer__column">
            <h3 className="footer__column-title">Connect</h3>
            <ul className="footer__list" role="list">
              {footerData.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer__column">
            <h3 className="footer__column-title">Resources</h3>
            <ul className="footer__list" role="list">
              {footerData.resources.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true"></div>

        {/* Bottom section — Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} PulsarParadox. Forged in Pune, deployed globally.
          </p>
          <p className="footer__attribution">
            Designed & Developed by{' '}
            <a
              href="https://instagram.com/thepythondev"
              className="footer__attribution-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thepythondev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;