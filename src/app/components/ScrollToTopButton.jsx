"use client";
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tampilkan tombol ketika pengguna scroll ke bawah sejauh 200px
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Tambahkan event listener ketika komponen dimuat
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Bersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 p-3 bg-indigo-600 dark:bg-purple-600 text-white rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
