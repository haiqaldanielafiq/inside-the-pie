import type { MathModuleMeta, MascotInfo, MemoryOrb } from '../types/game';

export const MASCOTS: MascotInfo[] = [
  {
    id: 'joy',
    name: 'Joypie',
    role: 'Happiness & Fractions Captain',
    color: '#facc15',
    glowColor: 'rgba(250, 204, 21, 0.6)',
    badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    borderColor: 'border-yellow-400',
    tagline: 'Supercharges math with boundless optimism and golden slice energy!',
    mathSuperpower: 'Slice Equalizer: Instantly simplifies fractions into matching equal parts!',
    mathTip: 'Remember: To add fractions with identical denominators, keep the bottom number and add the top!',
    quote: "Every pie slice is a reason to celebrate! Let's slice through these fractions together!",
    voicePitch: 1.3
  },
  {
    id: 'sadness',
    name: 'Bluey',
    role: 'Deep Thinker & Percentage Sage',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.6)',
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    borderColor: 'border-sky-400',
    tagline: 'Quietly breaks down big percentages step-by-step with patient care.',
    mathSuperpower: 'Raindrop 10% Wave: Divide any amount by 10 to quickly unlock 10% and 5%!',
    mathTip: 'Need 15% of an amount? Find 10% first by dividing by 10, then add half of that (5%)!',
    quote: "It's okay if math feels big... we can slice it into tiny gentle percentages together.",
    voicePitch: 0.85
  },
  {
    id: 'anger',
    name: 'Spark',
    role: 'Ratio Powerhouse & Energy Slice',
    color: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.6)',
    badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    borderColor: 'border-rose-400',
    tagline: 'Fired up about equal sharing and fierce ratio balances!',
    mathSuperpower: 'Ratio Blast: Multiplies both sides of a ratio simultaneously without missing a beat!',
    mathTip: 'A ratio 2:3 means for every 2 parts of pie crust, you need 3 parts of fruit filling!',
    quote: "Unfair sharing? NO WAY! Ratios must be perfectly balanced or my crust sparks!",
    voicePitch: 0.7
  },
  {
    id: 'fear',
    name: 'Flutter',
    role: 'Angle Surveyor & Pie Chart Guard',
    color: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.6)',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    borderColor: 'border-purple-400',
    tagline: 'Carefully checks every angle in a 360° circle to prevent any pie accidents!',
    mathSuperpower: '360° Shield: Verifies that every sector angle adds up to a complete circle!',
    mathTip: 'A full circle pie is always 360°. Half a pie slice forms a 180° straight angle line!',
    quote: "Oh dear! Did we count all 360 degrees? Let me double-check with my protractor visor!",
    voicePitch: 1.45
  },
  {
    id: 'disgust',
    name: 'Minty',
    role: 'Probability Stylist & Logic Trendsetter',
    color: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.6)',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    borderColor: 'border-emerald-400',
    tagline: 'Rejects sloppy guesses and demands stylish, precise probability chance calculations.',
    mathSuperpower: 'Odds Filter: Filters out impossible outcomes to leave crisp simplified probabilities!',
    mathTip: 'Probability is always between 0 (Impossible) and 1 (Certain!). Represent it as a sleek fraction!',
    quote: "Guesswork? Eww, gross! Give me clean simplified probability fractions any day.",
    voicePitch: 1.15
  }
];

export const INITIAL_MEMORY_ORBS: MemoryOrb[] = [
  {
    id: 'orb-1',
    title: 'Fraction Fusion',
    emotion: 'joy',
    moduleKey: 'fractions',
    mathTip: '3/4 is equal to 6/8 and 75%!',
    example: 'Multiply top and bottom by 2 to find equivalent fractions.',
    xPct: 20,
    yPct: 32,
    energyVal: 100
  },
  {
    id: 'orb-2',
    title: '10% Raindrop Secret',
    emotion: 'sadness',
    moduleKey: 'percentages',
    mathTip: '10% of 240 is 24.',
    example: 'Move the decimal point one place to the left.',
    xPct: 35,
    yPct: 68,
    energyVal: 150
  },
  {
    id: 'orb-3',
    title: 'Fiery Ratio Balance',
    emotion: 'anger',
    moduleKey: 'ratios',
    mathTip: '3 : 5 is equivalent to 6 : 10.',
    example: 'Multiply both ratio parts by the exact same number!',
    xPct: 52,
    yPct: 28,
    energyVal: 200
  },
  {
    id: 'orb-4',
    title: '360° Circle Shield',
    emotion: 'fear',
    moduleKey: 'angles-pie',
    mathTip: 'Angles in a pie chart sum to 360°.',
    example: '1/4 of a pie chart represents a 90° right angle.',
    xPct: 68,
    yPct: 62,
    energyVal: 180
  },
  {
    id: 'orb-5',
    title: 'Probability Sparkle',
    emotion: 'disgust',
    moduleKey: 'probability',
    mathTip: 'Certain events have a probability of 1.',
    example: '5 blue orbs out of 10 gives a 5/10 = 1/2 chance.',
    xPct: 82,
    yPct: 35,
    energyVal: 220
  }
];

export const MATH_MODULES: MathModuleMeta[] = [
  {
    key: 'fractions',
    title: 'Fraction Factory',
    subtitle: 'Simplifying & Comparing Slices',
    description: 'Help Joypie divide delicious emotional pies into equal fractional slices and find equivalent values!',
    curriculumCode: 'Year 6 Maths: 6F2',
    difficulty: 1,
    iconName: 'PieChart',
    primaryEmotion: 'joy',
    isUnlocked: true,
    sampleQuestion: {
      question: 'Which fraction is equivalent to 3/4?',
      options: ['6/8', '5/10', '4/6', '9/16'],
      correctIndex: 0,
      explanation: 'Multiplying both numerator (3) and denominator (4) by 2 gives 6/8!'
    }
  },
  {
    key: 'percentages',
    title: 'Percentage Rain',
    subtitle: 'Unlocking 10%, 25% & 50%',
    description: 'Join Bluey as gentle raindrop percentage tricks show you how to find discounts and parts of quantities.',
    curriculumCode: 'Year 6 Maths: 6R2',
    difficulty: 2,
    iconName: 'Percent',
    primaryEmotion: 'sadness',
    isUnlocked: true,
    sampleQuestion: {
      question: 'What is 15% of £80?',
      options: ['£10', '£12', '£15', '£8'],
      correctIndex: 1,
      explanation: '10% of £80 = £8. 5% is half of 10% = £4. £8 + £4 = £12!'
    }
  },
  {
    key: 'ratios',
    title: 'Ratio Blaster',
    subtitle: 'Sharing & Scale Factors',
    description: 'Channel Spark’s passion to share pie ingredients in precise ratios and scale recipes up or down!',
    curriculumCode: 'Year 6 Maths: 6R1',
    difficulty: 2,
    iconName: 'Scale',
    primaryEmotion: 'anger',
    isUnlocked: true,
    sampleQuestion: {
      question: 'Share 20 slices of pie between Joy and Spark in the ratio 2:3.',
      options: ['8 and 12', '10 and 10', '6 and 14', '5 and 15'],
      correctIndex: 0,
      explanation: 'Total parts = 2 + 3 = 5. One part = 20 ÷ 5 = 4. Joy gets 2×4=8, Spark gets 3×4=12.'
    }
  },
  {
    key: 'angles-pie',
    title: 'Pie Chart Protector',
    subtitle: 'Degrees & Circle Angles',
    description: 'Work with Flutter to convert data categories into exact pie chart sector degrees summing to 360°!',
    curriculumCode: 'Year 6 Maths: 6G3b',
    difficulty: 3,
    iconName: 'Compass',
    primaryEmotion: 'fear',
    isUnlocked: true,
    sampleQuestion: {
      question: 'If 1/3 of pupils chose Apple Pie, how many degrees on the pie chart is that?',
      options: ['90°', '120°', '180°', '60°'],
      correctIndex: 1,
      explanation: 'A full pie chart is 360°. 360° ÷ 3 = 120°!'
    }
  },
  {
    key: 'probability',
    title: 'Probability Parlour',
    subtitle: 'Chance, Fractions & Scales',
    description: 'Curate elegant outcome predictions with Minty and rank events from Impossible to Certain.',
    curriculumCode: 'Year 6 Maths: 6S1',
    difficulty: 2,
    iconName: 'Sparkles',
    primaryEmotion: 'disgust',
    isUnlocked: true,
    sampleQuestion: {
      question: 'A jar has 3 red memory orbs and 7 blue orbs. What is the probability of pulling a red orb?',
      options: ['3/10', '7/10', '3/7', '1/2'],
      correctIndex: 0,
      explanation: 'There are 3 red orbs out of 10 total orbs, making the probability 3/10!'
    }
  },
  {
    key: 'algebra',
    title: 'Algebra HQ Console',
    subtitle: 'Mystery Pie Equations & Variables',
    description: 'Crack missing value puzzle codes at the HQ main console by balancing pie equations with x and y variables!',
    curriculumCode: 'Year 6 Maths: 6A1',
    difficulty: 3,
    iconName: 'Terminal',
    primaryEmotion: 'joy',
    isUnlocked: true,
    sampleQuestion: {
      question: 'If 2x + 4 = 14, what is the value of x?',
      options: ['5', '7', '10', '4'],
      correctIndex: 0,
      explanation: 'Subtract 4 from 14 to get 2x = 10. Divide by 2 to get x = 5!'
    }
  }
];
