import React from 'react';

export const FlutterMascot: React.FC<{ size?: number }> = ({ size = 160 }) => {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Lavender Violet Soft Aura */}
      <div
        className="absolute inset-0 rounded-full bg-purple-500/25 blur-xl animate-pulse"
        style={{ transform: 'scale(1.2)', animationDuration: '3s' }}
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flutterCrust" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>

          <linearGradient id="flutterBody" x1="50" y1="20" x2="150" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#faf5ff" />
            <stop offset="45%" stopColor="#d8b4fe" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          <filter id="flutterShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#581c87" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="100" cy="182" rx="42" ry="8" fill="#6b21a8" opacity="0.3" />

        <g filter="url(#flutterShadow)">
          {/* Tall Lavender Pie Slice Body */}
          <path
            d="M 100,25 C 135,25 158,60 152,110 C 146,155 125,178 100,178 C 75,178 54,155 48,110 C 42,60 65,25 100,25 Z"
            fill="url(#flutterBody)"
            stroke="#9333ea"
            strokeWidth="3"
          />

          {/* Curved Pie Crust Collar Header */}
          <path
            d="M 52,70 Q 100,85 148,70 Q 142,50 100,45 Q 58,50 52,70 Z"
            fill="url(#flutterCrust)"
          />

          {/* Protractor / Angle Visor on forehead */}
          <path
            d="M 68,52 A 32 32 0 0 1 132 52 Z"
            fill="#38bdf8"
            opacity="0.75"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          {/* Angle tick marks */}
          <line x1="100" y1="52" x2="100" y2="28" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="100" y1="52" x2="116" y2="34" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="100" y1="52" x2="84" y2="34" stroke="#ffffff" strokeWidth="1.5" />

          {/* Highlight */}
          <path
            d="M 72,85 C 80,130 95,160 98,168 C 82,150 68,125 64,95 Z"
            fill="#ffffff"
            opacity="0.4"
          />

          {/* Wide Expressive Cute Wondering Eyes */}
          <circle cx="72" cy="110" r="16" fill="#ffffff" stroke="#581c87" strokeWidth="2" />
          <circle cx="128" cy="110" r="16" fill="#ffffff" stroke="#581c87" strokeWidth="2" />

          <circle cx="74" cy="110" r="9" fill="#3b0764" />
          <circle cx="126" cy="110" r="9" fill="#3b0764" />

          <circle cx="77" cy="107" r="3.5" fill="#ffffff" />
          <circle cx="129" cy="107" r="3.5" fill="#ffffff" />

          {/* Shy Cute O-mouth */}
          <ellipse cx="100" cy="142" rx="6" ry="8" fill="#581c87" />

          {/* Fluttering Nervous Cute Hands */}
          <ellipse cx="40" cy="118" rx="8" ry="12" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="2" transform="rotate(-20 40 118)" />
          <ellipse cx="160" cy="118" rx="8" ry="12" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="2" transform="rotate(20 160 118)" />
        </g>

        {/* Floating Arc / Angle Indicators */}
        <path d="M 30,80 A 20 20 0 0 1 45,60" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" fill="none" />
        <path d="M 170,80 A 20 20 0 0 0 155,60" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      </svg>
    </div>
  );
};
