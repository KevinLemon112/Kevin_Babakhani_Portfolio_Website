import React from 'react';
import './Projects.css'; // Import your Projects CSS file
import { FaFilePdf } from 'react-icons/fa';

function Projects() {
    return (
        <section id="projects">
            <div className="projects-header">
                <h2>Projects</h2>
                <a href={process.env.PUBLIC_URL + '/Assets/Kevin Babakhani - Online Resume.pdf'} className="resume-button" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf /> Resume
                </a>
            </div>
            <div className="project">
                <h3><u>LuminosityLEDs — React/NodeJS/ExpressJS/
                TypeScript/MongoDB/NextJS </u></h3>
                <p>Software developer for the backend team of LuminosityLEDs. Implemented notification service via code deployment to production cloud service.</p>
                <p><strong>Github Repo:</strong> <a href="https://github.com/luminosityleds/browser" target="_blank" rel="noopener noreferrer">LuminosityLEDs (Browser) Repo</a></p>
            </div>
            <div className="project">
                    <h3><u>Murmur — TypeScript/ReactJS/Python/FastAPI/
                    Firebase/Vite/Tailwind CSS/Axios </u></h3>
                    <p>Creation of a real-time support tool for caregivers of neurodivergent children. It guides users through emotionally intense moments by helping them identify observable behavior and receive trauma-informed, empathetic responses generated via AI.</p>
                    <p><strong>GitHub Repo:</strong> <a href="https://github.com/ByteClub-CPP/murmur" target="_blank" rel="noopener noreferrer">Murmur Repo</a></p>
                </div>
            <div className="project">
                <h3><u>SerenityNest — Flutter/Dart/Firebase </u></h3>
                <p>Creation of a mental health android app called SerenityNest using Dart and Flutter on Android Studio to improve the mental health of all users. Includes user authorization functionality using Firebase.</p>
                <p><strong>GitHub Repo:</strong> <a href="https://github.com/KevinLemon112/serenity_nest" target="_blank" rel="noopener noreferrer">SerenityNest Repo</a></p>
                <p><strong>Google Playstore:</strong> <a href="https://play.google.com/store/apps/details?id=com.KevinB.serenity_nest" target="_blank" rel="noopener noreferrer">SerenityNest App</a></p>
            </div>
        </section>
    );
}

export default Projects;
