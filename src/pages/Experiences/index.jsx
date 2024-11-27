import React from 'react'

import './experience.css';

import Navbar from '../../components/Navbar'
const Experience = () => {
  return ( 
    <div>
      <Navbar/>
      <h3>Experience</h3>

      <div className="experience-block">
        <div className="exp-duration">
          <p className='duration'>May 2021 to Present</p>
        </div>
        <div className="exp-description-section">
          <div className="exp-items">
            <p className='exp-position'>Web Developer at Techmaven IT Solutions</p>
            <div className='exp-description'>
              Designed, developed, and maintained dynamic web applications using PHP, CodeIgniter, and MySQL, ensuring high performance and scalability.
              Collaborated with cross-functional teams to gather and analyze requirements, translating them into functional technical solutions.
            </div>
          </div>
          
        </div>
      </div>


      <div className="experience-block">
        <div className="exp-duration">
          <p className='duration'>Dec 2020 to Apr 2021</p>
        </div>
        <div className="exp-description-section">
          <div className="exp-items">
            <p className='exp-position'>Web Developer at DX Global Solutions</p>
            <div className='exp-description'>
              Designed, developed, and maintained dynamic web applications using PHP, Yii2, and MySQL, ensuring high performance and scalability.
              Collaborated with cross-functional teams to gather and analyze requirements, translating them into functional technical solutions.
            </div>
          </div>
          
        </div>
      </div>


      <div className="experience-block">
        <div className="exp-duration">
          <p className='duration'>Dec 2018 to Nov 2020</p>
        </div>
        <div className="exp-description-section">
          <div className="exp-items">
            <p className='exp-position'>Hubrum Innovations</p>
            <div className='exp-description'>
              Designed, developed, and maintained dynamic web applications using PHP, CodeIgniter, and MySQL, ensuring high performance and scalability.
              Collaborated with cross-functional teams to gather and analyze requirements, translating them into functional technical solutions.
            </div>
          </div>
          
        </div>
      </div>


      <div className="experience-block">
        <div className="exp-duration">
          <p className='duration'>May 2018 Jan to 2018 Dec</p>
        </div>
        <div className="exp-description-section">
          <div className="exp-items">
            <p className='exp-position'>Ravsan Media Solutions</p>
            <div className='exp-description'>
              Designed, developed, and maintained dynamic web applications using Core PHP, and MySQL, ensuring high performance and scalability.
              Collaborated with cross-functional teams to gather and analyze requirements, translating them into functional technical solutions.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Experience
