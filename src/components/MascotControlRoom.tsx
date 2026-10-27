import React from 'react';
import type { EmotionType, MascotInfo } from '../types/game';
import { Mascot } from './mascots/Mascot';
import { soundFX } from '../utils/audio';

interface MascotControlRoomProps {
  mascots: MascotInfo[];
  activeEmotion: EmotionType;
  onSelectMascot: (mascot: MascotInfo) => void;
}

export const MascotControlRoom: React.FC<MascotControlRoomProps> = ({
  mascots,
  activeEmotion,
  onSelectMascot,
}) => {
  const activeMascot = mascots.find((m) => m.id === activeEmotion) || mascots[0];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 space-y-6">
      {/* Active Mascot Stage Showcase */}
      <div className="relative glass-panel rounded-3xl p-6 lg:p-8 border border-cyan-500/30 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Glow Backing */}
        <div
          className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: activeMascot.color }}
        />

        {/* Mascot Mascot Visual */}
        <div className="relative z-10 flex flex-col items-center justify-center min-w-[200px]">
          <div className="animate-orb-float">
            <Mascot emotion={activeMascot.id} size={180} isAnimating={true} />
          </div>
          <span className={`mt-3 px-3 py-1 rounded-full text-xs font-bold border ${activeMascot.badgeBg}`}>
            {activeMascot.role}
          </span>
        </div>

        {/* Mascot Speech Bubble & Math Superpower Card */}
        <div className="relative z-10 flex-1 space-y-4">
          <div className="bg-slate-900/80 p-4 lg:p-5 rounded-2xl border border-slate-700/80 relative shadow-xl">
            {/* Speech pointer triangle */}
            <div className="hidden md:block absolute -left-3 top-8 w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-slate-900 border-b-8 border-b-transparent" />
            <p className="text-amber-300 font-extrabold text-base lg:text-lg italic">
              "{activeMascot.quote}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-cyan-500/20">
              <span className="text-[11px] font-extrabold uppercase text-cyan-400 block mb-1">
                ⚡ Math Superpower
              </span>
              <p className="text-xs text-slate-200 font-medium">
                {activeMascot.mathSuperpower}
              </p>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-amber-400/20">
              <span className="text-[11px] font-extrabold uppercase text-amber-400 block mb-1">
                💡 Pupil Math Secret
              </span>
              <p className="text-xs text-slate-200 font-medium">
                {activeMascot.mathTip}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot Selection Console Lineup */}
      <div className="grid grid-cols-5 gap-2 lg:gap-4">
        {mascots.map((mascot) => {
          const isActive = mascot.id === activeEmotion;

          return (
            <button
              key={mascot.id}
              onClick={() => {
                soundFX.playMascotVoice(mascot.voicePitch);
                onSelectMascot(mascot);
              }}
              className={`relative glass-panel-interactive p-2 lg:p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 cursor-pointer border transition-all ${
                isActive
                  ? `${mascot.borderColor} bg-slate-800/90 scale-105 shadow-lg`
                  : 'border-slate-700/50 hover:border-slate-500 hover:scale-102'
              }`}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                <Mascot emotion={mascot.id} size={60} />
              </div>
              <span className="text-xs font-extrabold text-white">
                {mascot.name}
              </span>
              <span className="text-[10px] text-slate-400 capitalize hidden sm:inline">
                {mascot.id}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
