"use client";

import React from "react";


export function WhatsAppModal() {
  
  const handleClick = () => {
    window.open("https://wa.me/233244364050", "_blank");
  };

  return (
    <button 
      onClick={handleClick}
     
      className="w-full md:w-auto px-8 py-3.5 
                 bg-transparent border border-neutral-300 dark:border-neutral-700 
                 text-neutral-700 dark:text-neutral-300 
                 rounded-lg font-medium 
                 hover:bg-neutral-100 dark:hover:bg-neutral-900 
                 transition-colors flex items-center justify-center gap-2"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-green-600"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
      <span>Chat on WhatsApp</span>
    </button>
  );
}