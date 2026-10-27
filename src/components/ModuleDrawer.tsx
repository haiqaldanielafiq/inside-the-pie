import React from 'react';
import type { MathModuleMeta, MathModuleKey } from '../types/game';
import { X, Play, Star, PieChart, Percent, Scale, Compass, Sparkles, Terminal } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ModuleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  modules: MathModuleMeta[];
  onSelectModule: (key: MathModuleKey) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  PieChart: <PieChart className="w-5 h-5 text-amber-300" />,
  Percent: <Percent className="w-5 h-5 text-sky-300" />,
  Scale: <Scale className="w-5 h-5 text-rose-300" />,
  Compass: <Compass className="w-5 h-5 text-purple-300" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-300" />,
  Terminal: <Terminal className="w-5 h-5 text-yellow-300" />
};

export const ModuleDrawer: React.FC<ModuleDrawerProps> = ({
  isOpen,
  onClose,
  modules,
  onSelectModule
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 lg:p-8 border border-cyan-500/40 shadow-2xl space-y-6">

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              National Curriculum Year 6 Maths Map
            </span>
            <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-sky-300 to-emerald-300">
              Emotion HQ Module Vault
            </h2>
          </div>

          <button
            onClick={() => {
              soundFX.playClick(400);
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-slate-700 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.key}
              className="glass-panel-interactive p-5 rounded-2xl border border-slate-700/80 hover:border-cyan-400/50 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {mod.curriculumCode}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < mod.difficulty ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {iconMap[mod.iconName]}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">{mod.title}</h3>
                    <p className="text-xs font-medium text-amber-300">{mod.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {mod.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  HQ Module Ready
                </span>

                <button
                  onClick={() => {
                    soundFX.playClick(800);
                    onSelectModule(mod.key);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-cyan-500 hover:from-amber-300 hover:to-cyan-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Preview Module</span>
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Note */}
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center text-xs text-slate-400">
          Targeted for Year 6 Primary Pupils (Key Stage 2) • Select any module to preview sample curriculum challenges.
        </div>
      </div>
    </div>
  );
};
