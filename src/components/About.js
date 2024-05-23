import React from 'react';
import './About.css'; // Import About CSS file

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src="/Assets/KevinAndPuppy.jpg" alt="Kevin and his puppy" className="about-image" />
            <p>Welcome to my portfolio website! My name is Kevin Babakhani, a Computer Science student with passion for this field. This is where I showcase my projects, skills, and experience.</p>
        </section>
    );
}

export default About;
