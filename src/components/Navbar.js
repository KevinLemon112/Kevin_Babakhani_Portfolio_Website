import React, { useEffect } from 'react';
import './Navbar.css'; // Import your navbar CSS file

function Navbar() {
    useEffect(() => {
      const navbarBrand = document.querySelector('.navbar-brand');
      const navbarLinks = document.querySelectorAll('nav ul li a');
  
      if (navbarBrand) {
        setTimeout(() => {
          navbarBrand.classList.add('completed');
        }, 500); // Adjust the delay for the brand name
      }
  
      navbarLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add('completed');
        }, (index) * 500); // Adjust the delay for each link
      });
    }, []);
    
    return (
        <nav>
            <div className="navbar-left">
                <span className="navbar-brand">Kevin Babakhani</span>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
