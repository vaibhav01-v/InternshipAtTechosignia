import { NavLink } from 'react-router-dom';
import { AcademicIcon } from './Icons';

export default function Navbar() {
  return (
    <header className="navbar-container" role="banner">
      <div className="nav-brand">
        <NavLink to="/" aria-label="StudentPortal Home">
          <span className="brand-badge">
            <AcademicIcon size={18} />
          </span>
          <span>StudentPortal</span>
        </NavLink>
      </div>
      <nav className="nav-links" aria-label="Main Navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          About
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Students
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
