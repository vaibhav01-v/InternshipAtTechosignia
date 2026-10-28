import { useState, useMemo } from 'react';
import { SearchIcon, UsersIcon } from '../components/Icons';

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');

  const students = useMemo(
    () => [
      { id: 101, name: 'Alice Johnson', course: 'Computer Science', grade: 'A' },
      { id: 102, name: 'Bob Smith', course: 'Information Technology', grade: 'B+' },
      { id: 103, name: 'Charlie Brown', course: 'Software Engineering', grade: 'A-' },
      { id: 104, name: 'Diana Prince', course: 'Data Science', grade: 'A+' },
      { id: 105, name: 'Evan Wright', course: 'Cyber Security', grade: 'B' },
    ],
    []
  );

  const courses = ['All', ...new Set(students.map((s) => s.course))];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toString().includes(searchTerm);
      const matchesCourse = selectedCourse === 'All' || student.course === selectedCourse;
      return matchesSearch && matchesCourse;
    });
  }, [students, searchTerm, selectedCourse]);

  const getGradeBadgeClass = (grade) => {
    if (grade.startsWith('A')) return 'badge badge-success';
    if (grade.startsWith('B')) return 'badge badge-info';
    return 'badge badge-warning';
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-tag">Academic Records</span>
        <h1>Students Directory</h1>
        <p>
          View and filter active student enrollments, academic departments, and verified letter grades.
        </p>
      </div>

      {/* Table Toolbar */}
      <div className="table-toolbar">
        <div className="search-box">
          <span className="search-icon">
            <SearchIcon size={16} />
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by student name, ID, or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search students"
          />
        </div>

        <select
          className="filter-select"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          aria-label="Filter by course department"
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course === 'All' ? 'All Departments' : course}
            </option>
          ))}
        </select>
      </div>

      {/* Table Wrapper */}
      <div className="table-wrapper">
        {filteredStudents.length > 0 ? (
          <table className="students-table">
            <thead>
              <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Academic Program</th>
                <th scope="col">Current Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <span className="student-id-tag">#{student.id}</span>
                  </td>
                  <td>
                    <div className="student-identity">
                      <span className="student-avatar" aria-hidden="true">
                        {getInitials(student.name)}
                      </span>
                      <strong>{student.name}</strong>
                    </div>
                  </td>
                  <td>{student.course}</td>
                  <td>
                    <span className={getGradeBadgeClass(student.grade)}>
                      {student.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <UsersIcon size={32} />
            <p>No students match your search criteria.</p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCourse('All');
              }}
              style={{ marginTop: '12px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
