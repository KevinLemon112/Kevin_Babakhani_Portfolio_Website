import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Import your Contact CSS file

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me through the following methods:</p>
            <br />

            <div className="contact-method">
                <h3> Email <FontAwesomeIcon icon={faEnvelope} /></h3>
                <p><a href="mailto:kevinbabakhani@yahoo.com">kevinbabakhani@yahoo.com</a></p>
            </div>
            <div className="contact-method">
                <h3> Linked <FontAwesomeIcon icon={faLinkedin} /></h3>
                <p><a href="http://www.linkedin.com/in/kevin-babakhani-640199214" target="_blank" rel="noopener noreferrer">Kevin Babakhani</a></p>
            </div>
            <div className="contact-method">
                <h3> GitHub <FontAwesomeIcon icon={faGithub} /></h3>
                <p><a href="https://github.com/KevinLemon112" target="_blank" rel="noopener noreferrer">KevinLemon112</a></p>
            </div>
        </section>
    );
}

export default Contact;
