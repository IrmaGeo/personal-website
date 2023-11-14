import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/styles.css";


const Header = () => (
  <header className="header">
    <div className='test'>
        {/* Navigation Links */}
        <NavLink to="/" className="nav-link" activeclassName="active">Home</NavLink>
        <NavLink to="projects" className="nav-link" activeclassName="active">Projects</NavLink>
        <NavLink to="resume" className="nav-link" activeclassName="active">Resume</NavLink>
    </div>
  </header>
);

export default Header;
