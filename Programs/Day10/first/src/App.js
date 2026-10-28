import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
function Home({ name, course }) {
  return (
    <main className="home" id="home">
      <h2>Welcome, {name}!</h2>
      <p>You are learning {course}.</p>
      <section id="about">
        <h3>About This Project</h3>
        <p>This website is built using React components and props.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <p>Learn React one concept at a time.</p>
      </section>
    </main>
  );
}
function App() {
  return (
    <>
      <Header />
      <Home name="Vaibhav" course="React.js" />
      <Footer year={2026} company="My React Website" />
    </>
  );
}
export default App;