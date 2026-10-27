import React from 'react';

export const MintyMascot: React.FC<{ size?: number }> = ({ size = 160 }) => {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Mint Emerald Glow */}
      <div
        className="absolute inset-0 rounded-full bg-emerald-400/25 blur-xl animate-pulse"
        style={{ transform: 'scale(1.2)', animationDuration: '3.5s' }}
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mintyCrust" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <linearGradient id="mintyBody" x1="40" y1="30" x2="160" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="40%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <filter id="mintyShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#064e3b" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="100" cy="182" rx="48" ry="9" fill="#047857" opacity="0.3" />

        <g filter="url(#mintyShadow)">
          {/* Sleek Minty Pie Body */}
          <path
            d="M 100,20 C 145,20 172,60 165,115 C 158,162 135,180 100,180 C 65,180 42,162 35,115 C 28,60 55,20 100,20 Z"
            fill="url(#mintyBody)"
            stroke="#059669"
            strokeWidth="3"
          />

          {/* Stylish Diagonal Pie Crust Beret */}
          <path
            d="M 50,42 Q 110,12 165,38 C 158,62 100,68 50,42 Z"
            fill="url(#mintyCrust)"
            stroke="#047857"
            strokeWidth="2"
          />
          <circle cx="160" cy="38" r="6" fill="#a7f3d0" />

          {/* Glossy Curved Highlight */}
          <path
            d="M 55,60 C 80,45 120,45 130,55 C 100,75 70,80 55,60 Z"
            fill="#ffffff"
            opacity="0.45"
          />

          {/* Chic Winking / Sassy Eye Expression */}
          {/* Left Eye: Confident Wink Arc */}
          <path d="M 60,102 Q 74,88 88,102" stroke="#064e3b" strokeWidth="5" strokeLinecap="round" fill="none" />

          {/* Right Eye: Sharp Chic Eye */}
          <circle cx="126" cy="98" r="11" fill="#064e3b" />
          <circle cx="128" cy="96" r="4" fill="#ffffff" />

          {/* Sassy Smirk */}
          <path d="M 88,132 Q 110,126 122,136" stroke="#047857" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Cool Posed Arm / Hand on Hip */}
          <path d="M 38,125 C 22,135 25,150 42,148" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="160" cy="132" r="8" fill="#6ee7b7" stroke="#047857" strokeWidth="2" />
        </g>

        {/* Minty Sparkle Geometry Star */}
        <path d="M 165,80 L 168,88 L 176,91 L 168,94 L 165,102 L 162,94 L 154,91 L 162,88 Z" fill="#a7f3d0" />
      </svg>
    </div>
  );
};
