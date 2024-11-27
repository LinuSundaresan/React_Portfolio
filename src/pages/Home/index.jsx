import './home.css';
import Navbar from '../../components/Navbar';
import About from '../About';
const  Home = () => {
return (
<>
  <Navbar/>
  <div className='sectons-container'>
    <About/>
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
    <h3>Skills</h3>
    <div className="skill-block">
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

  </div>
</>
)
}
export default Home;