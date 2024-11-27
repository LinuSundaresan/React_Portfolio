import './navbar.css';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav>
                <div className='LogoArea'>
                    <h4>My Portfolio</h4>
                </div>

             
                    <ul className='menu'>
                        <Link to="/">

                            <li className='menu-items'> <i className='fa fa-home'/>Home</li>
                        </Link>
                        <Link to="/skills">
                            <li><i className='fa fa-copy'/> Skills</li>
                        </Link>
                        <Link to="/education">
                            <li ><i className='fa fa-graduation-cap'/> Education</li>
                        </Link>
                        <Link to="/experience">
                            <li> <i className='fa fa-id-badge'/> Experience</li>
                        </Link>
                        <Link to="/portfolio">
                            <li><i className='fa fa-address-card'/> Portfolio</li>
                        </Link>
                    </ul>
                
            </nav>
        </>
    );

};

export default Navbar;