import { NavLink } from 'react-router-dom';

const links = [
  { to: '/',         label: 'Home' },
  { to: '/bio',      label: 'Bio' },
  { to: '/research', label: 'Research' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar({ theme, onToggle }) {
  return (
    <nav className="nav">
      {/* Logo */}
      <NavLink to="/" className="nav-logo">Jiya Albert</NavLink>

      {/* Links + toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Day / Night toggle */}
        <button className="theme-btn" onClick={onToggle} aria-label="Toggle theme" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
          {theme === 'dark' ? (
            /* Sun icon */
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
