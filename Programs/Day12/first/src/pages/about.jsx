export default function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>Learn more about our application and its purpose.</p>
      <div className="card">
        <p>
          This project demonstrates Single Page Application (SPA) navigation using React Router.
          Instead of making HTTP requests to the server for every page transition, React Router updates the browser URL and swaps components on the client side instantly.
        </p>
      </div>
    </div>
  );
}
