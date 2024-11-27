import React from 'react'
import Navbar from '../../components/Navbar'
import './education.css';

const Education = () =>{
  return (
    <>
        <Navbar/>
        <h3>Education</h3>
        <div className="education-section">

          <table className='education-table'>
            <tr>
              <th>Course</th>
              <th>Stream</th>
              <th>Date</th>
              <th></th>
            </tr>
            <tr>
              <td>B.Tech</td>
              <td>Computer Science</td>
              <td>May 2015</td>
              <td></td>
            </tr>
            <tr>
              <td>Diploma</td>
              <td>Computer Science</td>
              <td>May 2011</td>
              <td></td>
            </tr>
            <tr>
              <td>High School</td>
              <td>Electronics</td>
              <td>May 2008</td>
              <td></td>
            </tr>
          </table>
        </div>
    </>
  )
}

export default Education
