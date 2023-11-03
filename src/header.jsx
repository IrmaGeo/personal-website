import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const Header = () => (
  <header className="header">
   
    
    <div className='test'>
     
        {/* Navigation Links */}
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Projects</NavLink>
        <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
    
    </div>
  </header>
);

export default Header;
