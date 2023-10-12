import React from 'react';
import PropTypes from 'prop-types';
import './TeacherDetails.css'
const TeacherDetails = (props) => {
  const { name, photo, id, subjects } = props.teacher;

  return (
    <div className='teacher-details'>
      <h2>{name}</h2>
      <img src={'https://tse2.mm.bing.net/th?id=OIP.CjSsQ629Qhn8ys3EfiUAiwHaHa&pid=Api&P=0&h=180'} alt={name} />
      <p>Teacher ID: {id}</p>
      <p>Teaching Subjects: {subjects.join(', ')}</p>
    </div>
  );
};

TeacherDetails.propTypes = {
  teacher: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    id: PropTypes.number,
    subjects: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default TeacherDetails;
