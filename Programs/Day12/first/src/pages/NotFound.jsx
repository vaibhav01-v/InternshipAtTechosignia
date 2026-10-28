import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="not-found-card">
        <span className="page-tag">HTTP 404</span>
        <div className="error-code">404</div>
        <h2>Page Not Found</h2>
        <p>The academic resource or route you requested could not be located in this directory.</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">
            <span>Return to Home</span>
            <ArrowRightIcon size={16} />
          </Link>
          <Link to="/students" className="btn-secondary">
            View Students Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
