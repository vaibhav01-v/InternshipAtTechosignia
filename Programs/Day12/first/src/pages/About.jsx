import { ZapIcon, ShieldCheckIcon, AcademicIcon } from '../components/Icons';

export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-tag">System Architecture</span>
        <h1>About StudentPortal</h1>
        <p>
          Discover how this single page web application leverages modern client-side routing and Swiss minimalist design principles.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ZapIcon size={20} />
          </div>
          <h3>Client-Side SPA Architecture</h3>
          <p>
            Unlike multi-page websites that request HTML documents from the server on every link click, this application renders views dynamically in JavaScript via React Router 7. Transitions are instantaneous, eliminating layout flashes and server bottlenecks.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <AcademicIcon size={20} />
          </div>
          <h3>UI/UX Pro Max Design System</h3>
          <p>
            Crafted according to the Swiss Style and Minimalism design archetype. Key tenets include high-contrast typography (Outfit &amp; Work Sans), consistent 8pt spatial rhythm, accessible tokenized colors, and responsive grid layouts.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ShieldCheckIcon size={20} />
          </div>
          <h3>Accessibility &amp; Standards</h3>
          <p>
            Compliant with WCAG AA guidelines. Features visible keyboard focus rings, semantic table markup with accessible scopes, scalable font tokens, and full support for operating system reduced-motion preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
