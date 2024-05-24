// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import Footer CSS file

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Kevin Babakhani. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
