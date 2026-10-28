
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [student, setStudent] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    // Validate student name
    if (!name.trim()) {
      newErrors.name = "Student name is required.";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Validate course
    if (!course) {
      newErrors.course = "Please select a course.";
    }

    setErrors(newErrors);

    // Submit only if there are no validation errors
    if (Object.keys(newErrors).length === 0) {
      setStudent({
        name: name.trim(),
        email: email.trim(),
        course: course,
      });
    } else {
      setStudent(null);
    }
  }

  function handleClear() {
    setName("");
    setEmail("");
    setCourse("");
    setErrors({});
    setStudent(null);
  }

  return (
    <div className="container">
      <div className="form-card">
        <h1>Student Registration</h1>
        <p className="subtitle">Enter your details to register.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>

            <select
              id="course"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            >
              <option value="">-- Select a course --</option>
              <option value="React.js">React.js</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
            </select>

            {errors.course && (
              <p className="error">{errors.course}</p>
            )}
          </div>

          <button type="submit">Register Student</button>

          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
          >
            Clear Form
          </button>
        </form>

        {student && (
          <div className="success-card">
            <h2>Registration Successful!</h2>

            <p>
              <strong>Name:</strong> {student.name}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
