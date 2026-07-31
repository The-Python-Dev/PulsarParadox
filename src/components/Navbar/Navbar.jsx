/**
 * src/components/Navbar/Navbar.jsx
 *
 * Global navigation bar.
 * - Sticky at top
 * - Logo (Code Infinity {∞}) links to home
 * - 5 nav items: Work, Services, About, Blog
 * - CTA button: "Let's Talk"
 * - Mobile: hamburger → fullscreen overlay menu
 * - Active route highlighted
 */

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

// Nav links config (easy to add/edit later)
const navLinks = [
  { to: '/projects', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About' },
  { to: '/blog',     label: 'Blog' },
];

// Mobile-only extra links (Paradoxes + Contact live in mobile menu)
const mobileExtraLinks = [
  { to: '/paradoxes', label: 'Paradoxes' },
  { to: '/contact',   label: 'Contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar background blur/shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="navbar__container">
          {/* Logo — Code Infinity */}
          <Link to="/" className="navbar__logo" aria-label="PulsarParadox home">
            <span className="navbar__logo-icon">
              {'{'}<span className="navbar__logo-infinity">∞</span>{'}'}
            </span>
            <span className="navbar__logo-text">PulsarParadox</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar__cta">
            Let's Talk <span aria-hidden="true">→</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="navbar__mobile-links" role="list">
          {[...navLinks, ...mobileExtraLinks].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar__mobile-cta">
          Let's Talk <span aria-hidden="true">→</span>
        </Link>

        <p className="navbar__mobile-handle">@thepythondev</p>
      </div>
    </>
  );
};

export default Navbar;