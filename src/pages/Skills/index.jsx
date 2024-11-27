import React from 'react';

import './skills.css';

import Navbar from '../../components/Navbar';
const Skills = () => {
  return (
    <div>
      <Navbar/>
      <h3>Skills</h3>

      <div className="skills-container">
        <div className="skill-items-left">
          <div className="skill-item">
            <p>PHP</p>
            <div className='skill-item-container'>
              <div className="skill-item-text php">90%</div>
            </div>
          </div>
          <div className="skill-item">
            <p>Codeigniter</p>
            <div className='skill-item-container'>
              <div className="skill-item-text ci">90%</div>
            </div>
          </div>
          <div className="skill-item">
            <p>Javascript</p>
            <div className='skill-item-container'>
              <div className="skill-item-text js">80%</div>
            </div>
          </div>
        </div>

        <div className="skill-items-right">
          <div className="skill-item">
            <p>Node JS</p>
            <div className='skill-item-container'>
              <div className="skill-item-text node">70%</div>
            </div>
          </div>
          <div className="skill-item">
            <p>React JS</p>
            <div className='skill-item-container'>
              <div className="skill-item-text react">70%</div>
            </div>
          </div>
          <div className="skill-item">
            <p>MongoDB</p>
            <div className='skill-item-container'>
              <div className="skill-item-text mongo">70%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
