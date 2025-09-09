"use client";
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out
                 bg-gradient-to-r from-blue-500 to-indigo-600 
                 hover:from-blue-600 hover:to-indigo-700 
                 shadow-lg hover:shadow-xl
                 dark:from-purple-500 dark:to-pink-600
                 dark:hover:from-purple-600 dark:hover:to-pink-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon for Light Mode - Shows when NOT dark */}
        <SunIcon 
          className={`absolute w-6 h-6 text-white transition-all duration-300 ease-in-out
                     ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
        />
        
        {/* Moon Icon for Dark Mode - Shows when IS dark */}
        <MoonIcon 
          className={`absolute w-6 h-6 text-white transition-all duration-300 ease-in-out
                     ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
        />
      </div>
      
      {/* Debug info - remove in production */}
      <span className="sr-only">Current mode: {isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;