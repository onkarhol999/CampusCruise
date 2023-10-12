import React, { useState } from 'react';
import Navbar from './TeacherLoginPage/Navbar';
import TeacherDetails from './TeacherLoginPage/TeacherDetails';
import DataInput from './TeacherLoginPage/DataInput';
import StudentRollCall from './TeacherLoginPage/StudentRollCall';

function App() {
  // Define the 'teacher' object with sample data
  const teacher = {
    name: 'John Doe',
    photo: 'teacher.jpg',
    id: 'T12345',
    subjects: ['Math', 'Science'],
  };

  // Define the 'students' array with sample student data
  const [students, setStudents] = useState([
    { name: 'Student 1', id: 'S123', present: false },
    { name: 'Student 2', id: 'S124', present: true },
    // Add more students as needed
  ]);

  // Define the functions to update student data
  const markPresent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, present: true } : student
      )
    );
  };

  const markAbsent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, present: false } : student
      )
    );
  };

  const nextStudent = () => {
    // Implement logic to display the next student
  };

  const previousStudent = () => {
    // Implement logic to display the previous student
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <TeacherDetails teacher={teacher} />
        <DataInput />
        <StudentRollCall
          students={students}
          markPresent={markPresent}
          markAbsent={markAbsent}
          nextStudent={nextStudent}
          previousStudent={previousStudent}
        />
      </div>
    </div>
  );
}

export default App;
