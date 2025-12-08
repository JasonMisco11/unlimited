import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "w-40", showText = true }: LogoProps) => {
  // Generate a unique ID for the mask to prevent conflicts (Next.js/React standard)
  const maskId = useId();

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      
      {/* ViewBox set to 100x60 to give the loop room.
        We draw ONE continuous infinity loop, then "mask" (erase) the diagonal slice.
      */}
      <svg 
        viewBox="0 0 100 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full text-[#2AD4E8] mb-1" // Brand Color
      >
        <defs>
          <mask id={maskId}>
            {/* 1. White = Visible Area */}
            <rect x="0" y="0" width="100" height="60" fill="white" />
            
            {/* 2. Black = Erased Area (The Diagonal Cut) */}
            {/* We rotate a rectangle to create the clean slash effect */}
            <rect 
              x="40" y="-10" 
              width="12" height="80" 
              fill="black" 
              transform="rotate(30 50 30)" 
            />
          </mask>
        </defs>

        {/* The Continuous Infinity Path */}
        <path 
          d="M30 45 
             C15 45, 10 35, 10 30 
             C10 25, 15 15, 30 15 
             L70 15 
             C85 15, 90 25, 90 30 
             C90 35, 85 45, 70 45 
             Z" // This creates a pill shape, let's twist it with the stroke logic below
          stroke="currentColor" 
          strokeWidth="0" // We don't stroke this, we redraw the path below to be an infinity loop
        />
        
        {/* CORRECTED Infinity Path Logic */}
        <path
          d="M25,30 
             C25,45 40,45 50,30 
             C60,15 75,15 75,30 
             C75,45 60,45 50,30 
             C40,15 25,15 25,30 Z"
          stroke="currentColor"
          strokeWidth="10" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          mask={`url(#${maskId})`} 
        />
      </svg>

      {/* Text Block matches your image perfectly */}
      {showText && (
        <div className="text-center leading-none select-none">
          <h1 className="font-sans font-black tracking-tighter text-[#2AD4E8] uppercase text-[clamp(1rem,2vw,1.5rem)]">
            Unlimited<br/>Solutions
          </h1>
          <p className="font-bold tracking-[0.2em] text-black text-[0.5rem] uppercase mt-1">
            Services (Trade)
          </p>
        </div>
      )}
    </div>
  );
};