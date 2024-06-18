import React from 'react';
import './class4.css';
import { useLocation } from 'react-router-dom';

const Class4 = () => {
  const location = useLocation();

  const Subjects = ["English", "Telugu", "Hindi"];
  return (
    <div className='class4'>
      <a href='/class' >Class</a>&nbsp;{location.pathname}
      <h1>Class 4</h1>
      <div className='subjectlist'>
        {
          Subjects.map((item, index) => {
            return (
              <div className='subjectlist-items'>
                <div className='subjectlist-items-subjects'>
                  <h3>{item}</h3>
                  <p>8 Units</p>
                </div>
                <a href='/class' className='btn btn-primary'>Open <i class="bi bi-chevron-right"></i></a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Class4
