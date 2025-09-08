"use client";
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out
                 bg-gradient-to-r from-blue-500 to-purple-600 
                 hover:from-blue-600 hover:to-purple-700 
                 shadow-lg hover:shadow-xl
                 dark:from-yellow-400 dark:to-orange-500
                 dark:hover:from-yellow-500 dark:hover:to-orange-600"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <SunIcon 
          className={`absolute w-6 h-6 text-white transition-all duration-300 ease-in-out
                     ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
        />
        
        {/* Moon Icon for Dark Mode */}
        <MoonIcon 
          className={`absolute w-6 h-6 text-white transition-all duration-300 ease-in-out
                     ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
        />
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
    </button>
  );
};

export default ThemeToggle;