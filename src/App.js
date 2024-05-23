import React, { useEffect } from 'react';
import LottieAnimation from './components/LottieAnimation';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        const mainContainer = document.querySelector('.app-container');
        mainContainer.classList.add('fade-in');
    }, []);
    return (
        <div className="app-container">
            <LottieAnimation />
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;