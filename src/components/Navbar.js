import React from 'react';
import './Navbar.css'; // Import your navbar CSS file

function Navbar() {
    return (
        <nav>
            <div className="navbar-left">
                <span className="name">Kevin Babakhani</span>
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
