import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1716441995323.json';
import './LottieAnimation.css';

function LottieAnimation() {
    const [isFadeOut, setIsFadeOut] = useState(false);

    useEffect(() => {
        // Trigger fade-out animation after 2 seconds
        const timeout = setTimeout(() => {
            setIsFadeOut(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={`lottie-container ${isFadeOut ? 'fade-out' : 'fade-in'}`}>
            <Lottie options={defaultOptions} />
        </div>
    );
}

export default LottieAnimation;
