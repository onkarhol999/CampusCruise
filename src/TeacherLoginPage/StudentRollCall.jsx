import React from 'react';
import './StudentRollCall.css'

const StudentRollCall = (props) => {
  const { students, present, absent, next, previous } = props;
  const currentStudent = students.length > 0 ? students[0] : null;

  const handlePresent = () => {
    if (currentStudent) {
      present(currentStudent);
    }
  };

  const handleAbsent = () => {
    if (currentStudent) {
      absent(currentStudent);
    }
  };

  return (
    <div className='student-roll-call'>
      {/* Display student information if there is a current student */}
      {currentStudent && <div>{currentStudent.name}</div>}
      {/* Buttons for Present, Absent, Next, and Previous */}
      <button onClick={handlePresent}>Present</button>
      <button onClick={handleAbsent}>Absent</button>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default StudentRollCall;
