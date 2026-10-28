
let students = [
    { id: 1, name: "Rahul", marks: 75 },
    { id: 2, name: "Priya", marks: 85 },
    { id: 3, name: "Amit", marks: 32 },
    { id: 4, name: "Sneha", marks: 90 }
];

const studentList = document.getElementById("studentList");
const studentForm = document.getElementById("studentForm");
const searchInput = document.getElementById("search");
const message = document.getElementById("message");

// Display students using DOM manipulation
const displayStudents = (data) => {
    studentList.replaceChildren();

    if (data.length === 0) {
        studentList.textContent = "No students found.";
        return;
    }

    data.forEach(({ name, marks }) => {
        const card = document.createElement("div");
        card.className = "student-card";

        const title = document.createElement("h3");
        title.textContent = name;

        const score = document.createElement("p");
        score.textContent = `Marks: ${marks}`;

        const status = document.createElement("p");
        status.textContent = marks >= 40 ? "Status: Pass" : "Status: Fail";

        card.append(title, score, status);
        studentList.appendChild(card);
    });
};

// Show all students
document.getElementById("showAll").addEventListener("click", () => {
    displayStudents(students);
    message.textContent = "Showing all students.";
});

// Filter passed students
document.getElementById("showPassed").addEventListener("click", () => {
    const passed = students.filter(student => student.marks >= 40);

    displayStudents(passed);
    message.textContent = `Passed students: ${passed.length}`;
});

// Search students by name
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );

    displayStudents(filteredStudents);
});

// Add student using form submission
studentForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const marks = Number(document.getElementById("marks").value);

    if (!name || !Number.isFinite(marks) || marks < 0 || marks > 100) {
        message.textContent = "Enter a valid name and marks between 0 and 100.";
        return;
    }

    const newStudent = {
        id: Date.now(),
        name,
        marks
    };

    students = [...students, newStudent];

    displayStudents(students);
    studentForm.reset();

    message.textContent = `${name} added successfully!`;
});

// Fetch API users
document.getElementById("loadUsers").addEventListener("click", async () => {
    message.textContent = "Loading users...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        const apiStudents = users.map(({ id, name }) => ({
            id,
            name,
            marks: 0
        }));

        students = [...students, ...apiStudents];

        displayStudents(students);
        message.textContent = `${users.length} API users loaded.`;
    } catch (error) {
        message.textContent = `Failed to load users: ${error.message}`;
    }
});

// Initial display
displayStudents(students);
