import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="nav-brand">
        <NavLink to="/">StudentPortal</NavLink>
      </div>
      <nav className="nav-links">
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
