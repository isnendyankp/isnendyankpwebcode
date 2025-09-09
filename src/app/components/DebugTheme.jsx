"use client";
import { useTheme } from '../contexts/ThemeContext';

const DebugTheme = () => {
  try {
    const { isDark, toggleTheme, theme } = useTheme();

    const clearStorage = () => {
      localStorage.removeItem('portfolio-theme');
      window.location.reload();
    };

    return (
      <div className="fixed bottom-20 right-5 z-50 p-2 bg-red-500 text-white rounded text-xs">
        <div>Theme: {theme}</div>
        <div>isDark: {isDark.toString()}</div>
        <div>HTML class: {typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'}</div>
        <button onClick={toggleTheme} className="bg-blue-500 px-2 py-1 rounded mt-1">
          Toggle
        </button>
        <button onClick={clearStorage} className="bg-gray-500 px-2 py-1 rounded mt-1 ml-1">
          Clear
        </button>
      </div>
    );
  } catch (error) {
    return (
      <div className="fixed bottom-20 right-5 z-50 p-2 bg-red-500 text-white rounded text-xs">
        Error: ThemeProvider not found
      </div>
    );
  }
};

export default DebugTheme;