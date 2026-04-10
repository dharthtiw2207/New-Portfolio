import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

const Navbar = () => {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">ST.</div>

      {/* Desktop links */}
      <ul className="nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={(e) => scrollTo(e, href)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
