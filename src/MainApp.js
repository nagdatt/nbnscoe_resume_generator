// src/App.js
import React, { useState } from 'react';
import './App.css';
import SplashScreen from './SplashScreen';
import App from './App';

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <App/>
      )}
    </div>
  );
};

export default MainApp;
