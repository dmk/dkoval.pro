import React from 'react';
import { Technology } from '../types';
import { getCategoryColor } from '@/utils/colors';

interface BarProps {
  tech: Technology;
  getWidthClass: (level: number) => string;
}

export const Bar: React.FC<BarProps> = ({ tech, getWidthClass }) => {
  return (
    <div className="relative h-8">
      {/* Background bar with text */}
      <div className="absolute inset-0 flex items-center">
        <span className="font-medium text-sm text-white truncate px-3">{tech.name}</span>
      </div>

      {/* Colored bar (no animation) */}
      <div
        className={`h-full rounded-full ${getCategoryColor(tech.category)} ${getWidthClass(tech.experience_level)}`}
      >
        <div className="absolute right-3 top-0 h-full flex items-center">
          <span className="text-sm text-white opacity-90">{tech.experience_level}/10</span>
        </div>
      </div>
    </div>
  );
};
