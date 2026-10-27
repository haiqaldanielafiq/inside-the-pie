import React from 'react';

export const JoypieMascot: React.FC<{ size?: number; isAnimating?: boolean }> = ({ size = 160, isAnimating = false }) => {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Radiant Aura */}
      <div
        className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse"
        style={{ transform: 'scale(1.2)' }}
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 3D Pie Crust Gradient */}
          <linearGradient id="joyCrust" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Golden Body Fill */}
          <linearGradient id="joyBody" x1="50" y1="30" x2="150" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="35%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* Visor Tech Glow */}
          <linearGradient id="joyVisor" x1="60" y1="70" x2="140" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Drop Shadow for 3D depth */}
          <filter id="joyShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#854d0e" floodOpacity="0.4" />
          </filter>

          <filter id="joyGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow floor */}
        <ellipse cx="100" cy="180" rx="55" ry="12" fill="#0f172a" opacity="0.3" />

        <g filter="url(#joyShadow)">
          {/* Pie Crust Ring - Fluted edge 3D shape */}
          <path
            d="M 100,20 C 120,18 145,28 165,45 C 185,65 190,95 180,120 C 170,148 140,180 100,180 C 60,180 30,148 20,120 C 10,95 15,65 35,45 C 55,28 80,18 100,20 Z"
            fill="url(#joyCrust)"
            stroke="#a16207"
            strokeWidth="3"
          />

          {/* Inner Pie Filling (3D Golden Sphere) */}
          <circle cx="100" cy="100" r="68" fill="url(#joyBody)" />

          {/* Glossy Top Highlight */}
          <path
            d="M 60,50 Q 100,38 140,50 Q 120,68 80,68 Z"
            fill="#ffffff"
            opacity="0.5"
          />

          {/* Futuristic Glowing VR Visor / Eyes */}
          <rect x="52" y="76" width="96" height="36" rx="18" fill="url(#joyVisor)" stroke="#7dd3fc" strokeWidth="2.5" />

          {/* Visor Glint / Reflection */}
          <path d="M 58,82 L 85,82 L 70,104 Z" fill="#ffffff" opacity="0.6" />

          {/* Happy Glowing Visor Eyes */}
          <path d="M 72,94 Q 82,82 92,94" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M 108,94 Q 118,82 128,94" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Wide Joyful Smile */}
          <path d="M 75,126 Q 100,152 125,126" stroke="#713f12" strokeWidth="5" strokeLinecap="round" fill="none" />

          {/* Open Smile Tongue */}
          <path d="M 85,134 Q 100,150 115,134 Q 100,142 85,134 Z" fill="#f43f5e" />

          {/* Cute Rosy Cheeks */}
          <circle cx="62" cy="122" r="9" fill="#f43f5e" opacity="0.35" />
          <circle cx="138" cy="122" r="9" fill="#f43f5e" opacity="0.35" />

          {/* Hands holding golden pie slice */}
          <circle cx="42" cy="120" r="11" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="158" cy="120" r="11" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        </g>

        {/* Floating Sparkles around Joypie */}
        <g filter="url(#joyGlow)">
          <path d="M 30,35 L 34,45 L 44,49 L 34,53 L 30,63 L 26,53 L 16,49 L 26,45 Z" fill="#fef08a" className={isAnimating ? 'animate-spin' : ''} style={{ transformOrigin: '30px 49px' }} />
          <path d="M 170,40 L 173,48 L 181,51 L 173,54 L 170,62 L 167,54 L 159,51 L 167,48 Z" fill="#fde047" />
          <path d="M 160,140 L 162,145 L 167,147 L 162,149 L 160,154 L 158,149 L 153,147 L 158,145 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};
