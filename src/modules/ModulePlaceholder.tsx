import React from 'react';
import type { MathModuleMeta } from '../types/game';

interface ModuleStubProps {
  moduleMeta: MathModuleMeta;
  onBackToHQ: () => void;
}

export const ModulePlaceholder: React.FC<ModuleStubProps> = ({ moduleMeta, onBackToHQ }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 glass-panel rounded-3xl border border-cyan-500/30 text-center my-12">
      <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-widest mb-4">
        {moduleMeta.curriculumCode} • Phase 2 Ready
      </span>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-cyan-300 to-rose-400 mb-2">
        {moduleMeta.title}
      </h2>
      <p className="text-xl text-cyan-200/80 mb-6 font-medium">{moduleMeta.subtitle}</p>

      <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-700/50 text-left mb-8 space-y-4">
        <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Module Overview</h4>
        <p className="text-slate-200">{moduleMeta.description}</p>

        <div className="pt-4 border-t border-slate-800">
          <h4 className="text-sm uppercase tracking-wider text-amber-400 font-semibold mb-2">Sample Year 6 Challenge Preview</h4>
          <p className="font-semibold text-white mb-3">{moduleMeta.sampleQuestion.question}</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {moduleMeta.sampleQuestion.options.map((opt: string, i: number) => (
              <div
                key={i}
                className={`p-3 rounded-xl text-sm font-medium border ${
                  i === moduleMeta.sampleQuestion.correctIndex
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400'
                }`}
              >
                {opt} {i === moduleMeta.sampleQuestion.correctIndex && '✓'}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 italic">
            Explanation: {moduleMeta.sampleQuestion.explanation}
          </p>
        </div>
      </div>

      <button
        onClick={onBackToHQ}
        className="px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all cursor-pointer"
      >
        Return to Emotion HQ
      </button>
    </div>
  );
};
