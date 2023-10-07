// src/SplashScreen.js
import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0); // Progress value between 0 and 100

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Increase progress by 1% each interval
        } else {
          clearInterval(interval);
          onComplete(); // Call onComplete when progress reaches 100%
          return prevProgress;
        }
      });
    }, 30); // Interval to update progress (in milliseconds)

    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
    };
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <h1 className="splash-title">Your App Name</h1>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
