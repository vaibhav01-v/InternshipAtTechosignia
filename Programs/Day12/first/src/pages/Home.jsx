import { Link } from 'react-router-dom';
import { UsersIcon, ZapIcon, ShieldCheckIcon, ArrowRightIcon } from '../components/Icons';

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-card" aria-labelledby="hero-title">
        <span className="page-tag">Academic Information System</span>
        <h1 id="hero-title">Empowering Academic Excellence with Modern Web Speed</h1>
        <p className="hero-subtitle">
          Welcome to the StudentPortal. Browse verified student rosters, explore academic departments, and experience seamless client-side single page transitions.
        </p>
        <div className="hero-actions">
          <Link to="/students" className="btn-primary">
            <span>Explore Students</span>
            <ArrowRightIcon size={16} />
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn About System
          </Link>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="stats-grid" aria-label="System Metrics">
        <div className="stat-card">
          <div className="stat-value">5</div>
          <div className="stat-label">Active Programs</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">Client-Side Routing</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0ms</div>
          <div className="stat-label">Server Reload Lag</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">AA+</div>
          <div className="stat-label">WCAG Contrast Rating</div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-grid" aria-label="Key Capabilities">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <UsersIcon size={20} />
          </div>
          <h3>Student Directory</h3>
          <p>
            Instant directory lookup featuring real-time course filtering, search, and student academic performance indicators.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ZapIcon size={20} />
          </div>
          <h3>Single Page Architecture</h3>
          <p>
            Powered by modern React Router 7. View swaps happen in-memory on the client without refreshing the page or dropping application state.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ShieldCheckIcon size={20} />
          </div>
          <h3>Swiss &amp; Minimalist Design</h3>
          <p>
            Engineered using UI/UX Pro Max design intelligence, featuring clean grid alignments, Outfit typography, and high contrast.
          </p>
        </div>
      </section>
    </div>
  );
}
