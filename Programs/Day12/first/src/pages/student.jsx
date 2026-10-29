export default function Students() {
  const students = [
    { id: 101, name: 'Rahul', course: 'Computer Science', grade: 'A' },
    { id: 102, name: 'Sumit', course: 'Information Technology', grade: 'B+' },
    { id: 103, name: 'Vaibhav', course: 'Software Engineering', grade: 'A-' },
    { id: 104, name: 'Kunal', course: 'Data Science', grade: 'A+' },
    // { id: 105, name: 'Evan Wright', course: 'Cyber Security', grade: 'B' },
  ];

  return (
    <div className="page-container">
      <h1>Students </h1>
      <p>This is Student Records</p>
      <div className="table-card">
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <span className="badge">{student.grade}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
