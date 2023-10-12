import React, { useState } from 'react';
import './DataInput.css'

const DataInput = (props) => {
  const [classId, setClassId] = useState('');
  const [date, setDate] = useState('');
  const [subjectCode, setSubjectCode] = useState('');

  const handleFetchData = () => {
    // Fetch data from the database using the input values (classId, date, subjectCode).
    // You need to implement the data fetching logic here, which may involve using an API or other means.
  };

  return (
    <div className='data-input'>
      <input type="text" placeholder="Class ID" value={classId} onChange={(e) => setClassId(e.target.value)} />
      <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Subject Code" value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)} />
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default DataInput;
