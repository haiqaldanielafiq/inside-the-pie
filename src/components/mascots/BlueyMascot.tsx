import React from 'react';

export const BlueyMascot: React.FC<{ size?: number }> = ({ size = 160 }) => {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Soft Cyan Aura */}
      <div
        className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl animate-pulse"
        style={{ transform: 'scale(1.2)', animationDuration: '4s' }}
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueyCrust" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="blueyBody" x1="50" y1="30" x2="150" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="40%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <filter id="blueyShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0c4a6e" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="100" cy="182" rx="50" ry="10" fill="#0284c7" opacity="0.3" />

        <g filter="url(#blueyShadow)">
          {/* Raindrop-Pie Body (Soft teardrop rounded form) */}
          <path
            d="M 100,22 C 140,55 175,95 168,132 C 160,168 132,180 100,180 C 68,180 40,168 32,132 C 25,95 60,55 100,22 Z"
            fill="url(#blueyBody)"
            stroke="#0284c7"
            strokeWidth="3"
          />

          {/* Scalloped Pie Crust Collar */}
          <path
            d="M 40,120 Q 55,135 70,120 Q 85,135 100,120 Q 115,135 130,120 Q 145,135 160,120 C 158,150 135,172 100,172 C 65,172 42,150 40,120 Z"
            fill="url(#blueyCrust)"
            opacity="0.85"
          />

          {/* Glossy Top Teardrop Highlight */}
          <path
            d="M 95,35 Q 120,65 135,100 Q 120,95 90,50 Z"
            fill="#ffffff"
            opacity="0.45"
          />

          {/* Big Oversized Round Glasses Frame */}
          <circle cx="74" cy="98" r="24" fill="none" stroke="#e0f2fe" strokeWidth="5" />
          <circle cx="126" cy="98" r="24" fill="none" stroke="#e0f2fe" strokeWidth="5" />
          <line x1="98" y1="98" x2="102" y2="98" stroke="#e0f2fe" strokeWidth="5" strokeLinecap="round" />

          {/* Lens Tint */}
          <circle cx="74" cy="98" r="21" fill="#0f172a" opacity="0.25" />
          <circle cx="126" cy="98" r="21" fill="#0f172a" opacity="0.25" />

          {/* Thoughtful Gentle Eyes Looking slightly up/thoughtful */}
          <circle cx="76" cy="95" r="7" fill="#0c4a6e" />
          <circle cx="128" cy="95" r="7" fill="#0c4a6e" />
          <circle cx="78" cy="93" r="2.5" fill="#ffffff" />
          <circle cx="130" cy="93" r="2.5" fill="#ffffff" />

          {/* Tender Soft Smile */}
          <path d="M 88,136 Q 100,144 112,136" stroke="#0369a1" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Rosy Soft Blue Cheeks */}
          <circle cx="56" cy="115" r="7" fill="#38bdf8" opacity="0.5" />
          <circle cx="144" cy="115" r="7" fill="#38bdf8" opacity="0.5" />

          {/* Cozy Hugging Little Hands */}
          <path d="M 52,142 C 65,152 80,152 88,144" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 148,142 C 135,152 120,152 112,144" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>

        {/* Floating Percentage Rain Drops */}
        <g opacity="0.75">
          <circle cx="30" cy="50" r="4" fill="#7dd3fc" />
          <circle cx="170" cy="65" r="5" fill="#38bdf8" />
          <text x="22" y="100" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">%</text>
          <text x="165" y="125" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">%</text>
        </g>
      </svg>
    </div>
  );
};
