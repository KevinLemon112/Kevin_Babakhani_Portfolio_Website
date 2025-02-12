import React from 'react';
import './About.css'; // Import About CSS file

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={`${process.env.PUBLIC_URL}/Assets/KevinAndPuppy.jpg`} alt="Kevin and his puppy" className="about-image" />
            <p>Welcome to my portfolio website! My name is Kevin Babakhani and I am a passionate software developer with a love for technology, problem-solving, and innovation. I enjoy building applications, exploring new frameworks, and pushing my limits. This is where I showcase my projects, skills, and experience. </p>
        </section>
    );
}

export default About;
