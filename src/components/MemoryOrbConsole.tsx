import React from 'react';
import type { EmotionType, MemoryOrb } from '../types/game';
import { soundFX } from '../utils/audio';

interface MemoryOrbConsoleProps {
  orbs: MemoryOrb[];
  selectedOrb: MemoryOrb | null;
  onSelectOrb: (orb: MemoryOrb) => void;
  activeEmotion: EmotionType;
}

const emotionColorStyles: Record<EmotionType, { main: string; glow: string; border: string }> = {
  joy: { main: 'from-yellow-300 to-amber-500', glow: 'rgba(250, 204, 21, 0.6)', border: 'border-yellow-400' },
  sadness: { main: 'from-sky-300 to-blue-600', glow: 'rgba(56, 189, 248, 0.6)', border: 'border-sky-400' },
  anger: { main: 'from-rose-400 to-red-700', glow: 'rgba(244, 63, 94, 0.6)', border: 'border-rose-400' },
  fear: { main: 'from-purple-300 to-indigo-600', glow: 'rgba(192, 132, 252, 0.6)', border: 'border-purple-400' },
  disgust: { main: 'from-emerald-300 to-teal-600', glow: 'rgba(52, 211, 153, 0.6)', border: 'border-emerald-400' }
};

export const MemoryOrbConsole: React.FC<MemoryOrbConsoleProps> = ({
  orbs,
  selectedOrb,
  onSelectOrb,
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-72 lg:h-80 glass-panel rounded-3xl p-6 border border-cyan-500/25 overflow-hidden flex flex-col justify-between">
      {/* Light Rail Track Background */}
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-16 bg-gradient-to-r from-cyan-500/10 via-amber-500/20 to-cyan-500/10 rounded-full border border-cyan-500/20 blur-sm pointer-events-none" />

      {/* Console Top Label */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-widest font-extrabold uppercase text-cyan-300">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          HQ Memory Orb Vault
        </span>
        <span className="text-slate-400 font-normal">Click any orb to extract Year 6 Math Power</span>
      </div>

      {/* Floating Orbs Bay */}
      <div className="relative z-20 w-full h-36 flex items-center justify-around px-4">
        {orbs.map((orb, index) => {
          const style = emotionColorStyles[orb.emotion];
          const isSelected = selectedOrb?.id === orb.id;

          return (
            <button
              key={orb.id}
              onClick={() => {
                soundFX.playOrbChime(orb.emotion);
                onSelectOrb(orb);
              }}
              style={{
                animationDelay: `${index * 0.4}s`
              }}
              className={`group relative flex flex-col items-center focus:outline-none cursor-pointer transition-transform duration-300 ${
                isSelected ? 'scale-125 z-30' : 'hover:scale-115'
              } animate-orb-float`}
            >
              {/* Outer Radiant Glow */}
              <div
                className="absolute inset-0 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${style.glow} 0%, transparent 70%)`
                }}
              />

              {/* 3D Glass Memory Orb Sphere */}
              <div
                className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${style.main} p-1 shadow-lg border-2 ${style.border} flex items-center justify-center overflow-hidden`}
              >
                {/* Specular Core Highlight */}
                <div className="absolute top-1 left-2 w-5 h-2.5 bg-white rounded-full opacity-70 blur-[1px]" />
                <div className="text-white text-xs font-black tracking-tighter opacity-90 drop-shadow">
                  {orb.emotion.toUpperCase().slice(0, 3)}
                </div>
              </div>

              {/* Title Badge */}
              <span className="mt-2 text-[10px] lg:text-xs font-bold text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-700/60 group-hover:border-amber-400/50 transition-colors whitespace-nowrap">
                {orb.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Orb Quick Detail Tray */}
      {selectedOrb && (
        <div className="relative z-20 bg-slate-900/90 rounded-2xl p-3 border border-amber-400/40 text-xs flex flex-wrap items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md font-bold uppercase text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {selectedOrb.emotion} Orb Unlocked
            </span>
            <span className="font-bold text-white text-sm">{selectedOrb.mathTip}</span>
          </div>
          <p className="text-slate-300 italic">{selectedOrb.example}</p>
        </div>
      )}
    </div>
  );
};
