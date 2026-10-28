import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container not-found">
      <div className="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn-link">
        &larr; Return to Home
      </Link>
    </div>
  );
}
