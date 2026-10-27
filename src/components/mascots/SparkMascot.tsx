import React from 'react';

export const SparkMascot: React.FC<{ size?: number }> = ({ size = 160 }) => {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Fiery Crimson Aura */}
      <div
        className="absolute inset-0 rounded-full bg-rose-500/25 blur-xl animate-pulse"
        style={{ transform: 'scale(1.25)', animationDuration: '2s' }}
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sparkCrust" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="40%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>

          <linearGradient id="sparkFlames" x1="100" y1="10" x2="100" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          <filter id="sparkShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#881337" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="100" cy="182" rx="52" ry="10" fill="#9f1239" opacity="0.4" />

        <g filter="url(#sparkShadow)">
          {/* Main Fierce Triangle Pie Slice Body */}
          <path
            d="M 100,30 L 170,150 Q 100,185 30,150 Z"
            fill="url(#sparkCrust)"
            stroke="#be123c"
            strokeWidth="3.5"
          />

          {/* Sizzling Flame Crust Top Crest */}
          <path
            d="M 100,10 C 112,28 125,18 135,35 C 115,38 120,55 100,45 C 80,55 85,38 65,35 C 75,18 88,28 100,10 Z"
            fill="url(#sparkFlames)"
          />

          {/* Crust Ridges Backing */}
          <path
            d="M 32,148 Q 100,182 168,148 Q 160,165 100,178 Q 40,165 32,148 Z"
            fill="#881337"
          />

          {/* Highlights */}
          <path
            d="M 100,45 L 145,135 Q 120,132 100,90 Z"
            fill="#ffffff"
            opacity="0.25"
          />

          {/* Dynamic Determination Eyebrows */}
          <path d="M 52,86 L 86,100" stroke="#4c0519" strokeWidth="6" strokeLinecap="round" />
          <path d="M 148,86 L 114,100" stroke="#4c0519" strokeWidth="6" strokeLinecap="round" />

          {/* Fierce Fiery Eyes */}
          <ellipse cx="70" cy="106" rx="10" ry="12" fill="#fff1f2" />
          <ellipse cx="130" cy="106" rx="10" ry="12" fill="#fff1f2" />
          <circle cx="72" cy="106" r="6" fill="#881337" />
          <circle cx="128" cy="106" r="6" fill="#881337" />
          <circle cx="74" cy="104" r="2" fill="#ffffff" />
          <circle cx="130" cy="104" r="2" fill="#ffffff" />

          {/* Energetic Grin with Teeth */}
          <path d="M 70,132 Q 100,148 130,132 Z" fill="#4c0519" />
          <path d="M 76,133 L 124,133 L 118,138 L 82,138 Z" fill="#ffffff" />

          {/* Confident Clenched Fist Poses */}
          <circle cx="30" cy="135" r="10" fill="#f43f5e" stroke="#9f1239" strokeWidth="2" />
          <circle cx="170" cy="135" r="10" fill="#f43f5e" stroke="#9f1239" strokeWidth="2" />
        </g>

        {/* Floating Ember Sparks */}
        <g fill="#fef08a">
          <circle cx="35" cy="45" r="3" />
          <circle cx="165" cy="50" r="3.5" />
          <circle cx="180" cy="100" r="2.5" />
          <circle cx="20" cy="95" r="2.5" />
        </g>
      </svg>
    </div>
  );
};
