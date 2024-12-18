"use client"
import React, { useEffect, useState } from 'react'

function BackToTop() {
    const isBrowser = () => typeof window !== 'undefined';

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            {isVisible &&
                <button
                    className="fixed bottom-0 right-0 pr-3 pb-6 z-50" onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#689F38" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            }
        </div>
    )
}

export default BackToTop
