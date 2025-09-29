import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="w-48 h-32 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 bg-transparent flex items-center justify-center mb-8 animate-pulse">
          <img
            src={theme === 'dark' ? "/assets/logo-2.png" : "/assets/logo.png"}
            alt="Futuro Skills Academy Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">
            Futuro Skills Academy
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 animate-fade-in animation-delay-200">
            Professional Skills Training
          </p>
          
          {/* Loading Animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
