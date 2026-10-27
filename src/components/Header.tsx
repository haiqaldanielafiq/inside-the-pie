import React from 'react';
import { Volume2, VolumeX, Sparkles, Trophy, Eye } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface HeaderProps {
  orbsCollectedCount: number;
  totalOrbs: number;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  onOpenModuleDrawer: () => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  orbsCollectedCount,
  totalOrbs,
  isAudioMuted,
  onToggleAudio,
  onOpenModuleDrawer,
  isHighContrast,
  onToggleHighContrast
}) => {
  return (
    <header className="relative z-30 w-full px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4 glass-panel border-b border-cyan-500/20 bg-slate-950/70">
      {/* Brand Title */}
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-cyan-400 p-[2px] shadow-lg shadow-amber-500/20 flex items-center justify-center">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-amber-300 text-xl tracking-tighter">
            π
          </div>
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-emerald-300 tracking-wide uppercase">
            Inside the Pie
          </h1>
          <p className="text-xs font-semibold text-slate-400 tracking-wider">
            EMOTION HEADQUARTERS • YEAR 6 MATHS
          </p>
        </div>
      </div>

      {/* Pupil Progress & Energy Stats */}
      <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-2xl border border-cyan-500/30 shadow-inner">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Memory Energy:</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-950 px-3 py-1 rounded-xl border border-amber-400/30 text-amber-300 font-black text-sm">
          {orbsCollectedCount} / {totalOrbs} Orbs
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            soundFX.playClick(700);
            onOpenModuleDrawer();
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/30 hover:scale-105 transition-all text-xs lg:text-sm font-semibold cursor-pointer"
        >
          <Trophy className="w-4 h-4 text-cyan-300" />
          <span>Year 6 Modules</span>
        </button>

        <button
          onClick={() => {
            soundFX.playClick(500);
            onToggleHighContrast();
          }}
          title="Toggle Visual Clarity Mode"
          className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
            isHighContrast
              ? 'bg-yellow-400/30 border-yellow-400 text-yellow-200'
              : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/60'
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            soundFX.playClick(400);
            onToggleAudio();
          }}
          title={isAudioMuted ? 'Unmute HQ Sounds' : 'Mute HQ Sounds'}
          className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-700/60 hover:text-white transition-all cursor-pointer"
        >
          {isAudioMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>
      </div>
    </header>
  );
};
