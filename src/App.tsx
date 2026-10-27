import { useState } from 'react';
import confetti from 'canvas-confetti';
import type { EmotionType, MathModuleKey, MemoryOrb, MascotInfo } from './types/game';
import { MASCOTS, INITIAL_MEMORY_ORBS, MATH_MODULES } from './data/gameData';
import { soundFX } from './utils/audio';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { MemoryOrbConsole } from './components/MemoryOrbConsole';
import { MascotControlRoom } from './components/MascotControlRoom';
import { ModuleDrawer } from './components/ModuleDrawer';
import { ModulePlaceholder } from './modules/ModulePlaceholder';
import { Play, Sparkles, HelpCircle } from 'lucide-react';

export function App() {
  const [activeEmotion, setActiveEmotion] = useState<EmotionType>('joy');
  const [orbs] = useState<MemoryOrb[]>(INITIAL_MEMORY_ORBS);
  const [selectedOrb, setSelectedOrb] = useState<MemoryOrb | null>(INITIAL_MEMORY_ORBS[0]);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isModuleDrawerOpen, setIsModuleDrawerOpen] = useState(false);
  const [activeModuleKey, setActiveModuleKey] = useState<MathModuleKey | null>(null);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const handleToggleAudio = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    soundFX.setMuted(nextMuted);
  };

  const handleStartAdventure = () => {
    soundFX.playAdventureLaunch();

    // Grand celebration confetti burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsModuleDrawerOpen(true);
  };

  const handleSelectMascot = (mascot: MascotInfo) => {
    setActiveEmotion(mascot.id);
    const relatedOrb = orbs.find((o) => o.emotion === mascot.id) || null;
    setSelectedOrb(relatedOrb);
  };

  const activeModule = MATH_MODULES.find((m) => m.key === activeModuleKey);

  return (
    <div className={`min-h-screen relative text-slate-100 selection:bg-amber-400 selection:text-slate-950 ${isHighContrast ? 'contrast-125 brightness-110' : ''}`}>
      {/* Dynamic Cosmic Background with Particle Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-[#0a0f24] to-[#0d1536] -z-10" />
      <ParticleCanvas />

      {/* Header Bar */}
      <Header
        orbsCollectedCount={5}
        totalOrbs={5}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        onOpenModuleDrawer={() => setIsModuleDrawerOpen(true)}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
      />

      {/* Main Content View */}
      <main className="relative z-10 container mx-auto px-4 py-6 space-y-8 max-w-6xl">
        {activeModuleKey && activeModule ? (
          <ModulePlaceholder
            moduleMeta={activeModule}
            onBackToHQ={() => setActiveModuleKey(null)}
          />
        ) : (
          <>
            {/* Grand Hero Banner */}
            <section className="text-center space-y-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-extrabold text-xs uppercase tracking-widest animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Pixar-Inspired Emotion Console • Year 6 Maths</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-emerald-300 tracking-tight leading-tight">
                Master Maths Inside the Pie!
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                Join Joypie, Bluey, Spark, Flutter, and Minty inside Emotion Headquarters! Harness glowing memory orb energy to conquer Year 6 fractions, percentages, ratios, and circle angles!
              </p>

              {/* Grand Glowing "Start Adventure" Hero CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartAdventure}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-amber-400 via-rose-500 to-cyan-400 text-slate-950 font-black text-xl lg:text-2xl tracking-wide shadow-2xl shadow-amber-500/30 hover:scale-108 hover:shadow-cyan-400/50 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border-2 border-white/40"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Play className="w-7 h-7 fill-slate-950 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">START ADVENTURE</span>
                </button>

                <button
                  onClick={() => setIsModuleDrawerOpen(true)}
                  className="px-6 py-4 rounded-2xl glass-panel-interactive border border-slate-700 text-slate-300 hover:text-white font-bold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  <span>Explore 6 Math Modules</span>
                </button>
              </div>
            </section>

            {/* Interactive Memory Orb Console */}
            <MemoryOrbConsole
              orbs={orbs}
              selectedOrb={selectedOrb}
              onSelectOrb={(orb) => {
                setSelectedOrb(orb);
                setActiveEmotion(orb.emotion);
              }}
              activeEmotion={activeEmotion}
            />

            {/* Mascot Control Room Station */}
            <MascotControlRoom
              mascots={MASCOTS}
              activeEmotion={activeEmotion}
              onSelectMascot={handleSelectMascot}
            />
          </>
        )}
      </main>

      {/* Module Selector Modal Drawer */}
      <ModuleDrawer
        isOpen={isModuleDrawerOpen}
        onClose={() => setIsModuleDrawerOpen(false)}
        modules={MATH_MODULES}
        onSelectModule={(key) => {
          setIsModuleDrawerOpen(false);
          setActiveModuleKey(key);
        }}
      />
    </div>
  );
}

export default App;
