export type EmotionType = 'joy' | 'sadness' | 'anger' | 'fear' | 'disgust';

export interface MascotInfo {
  id: EmotionType;
  name: string;
  role: string;
  color: string;
  glowColor: string;
  badgeBg: string;
  borderColor: string;
  tagline: string;
  mathSuperpower: string;
  mathTip: string;
  quote: string;
  voicePitch: number;
}

export interface MemoryOrb {
  id: string;
  title: string;
  emotion: EmotionType;
  moduleKey: MathModuleKey;
  mathTip: string;
  example: string;
  xPct: number; // percentage layout X
  yPct: number; // percentage layout Y
  energyVal: number;
}

export type MathModuleKey =
  | 'fractions'
  | 'percentages'
  | 'ratios'
  | 'angles-pie'
  | 'probability'
  | 'algebra';

export interface MathModuleMeta {
  key: MathModuleKey;
  title: string;
  subtitle: string;
  description: string;
  curriculumCode: string; // e.g. "Year 6: 6F2 & 6R1"
  difficulty: 1 | 2 | 3;
  iconName: string;
  primaryEmotion: EmotionType;
  isUnlocked: boolean;
  sampleQuestion: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface GameAudioSettings {
  muted: boolean;
  volume: number;
  sfxEnabled: boolean;
}

export interface PupilProgress {
  orbsCollected: number;
  unlockedModules: MathModuleKey[];
  activeEmotion: EmotionType;
  currentScore: number;
}
