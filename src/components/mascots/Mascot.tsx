import React from 'react';
import type { EmotionType } from '../../types/game';
import { JoypieMascot } from './JoypieMascot';
import { BlueyMascot } from './BlueyMascot';
import { SparkMascot } from './SparkMascot';
import { FlutterMascot } from './FlutterMascot';
import { MintyMascot } from './MintyMascot';

interface MascotProps {
  emotion: EmotionType;
  size?: number;
  isAnimating?: boolean;
}

export const Mascot: React.FC<MascotProps> = ({ emotion, size = 160, isAnimating = false }) => {
  switch (emotion) {
    case 'joy':
      return <JoypieMascot size={size} isAnimating={isAnimating} />;
    case 'sadness':
      return <BlueyMascot size={size} />;
    case 'anger':
      return <SparkMascot size={size} />;
    case 'fear':
      return <FlutterMascot size={size} />;
    case 'disgust':
      return <MintyMascot size={size} />;
    default:
      return <JoypieMascot size={size} isAnimating={isAnimating} />;
  }
};
