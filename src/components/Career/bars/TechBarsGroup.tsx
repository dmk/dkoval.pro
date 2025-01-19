import React from 'react';
import { Technology } from '../types';
import { Bar } from './Bar';
import { getCategoryColor } from '@/utils/colors';

interface TechBarsGroupProps {
  category: string;
  technologies: Technology[];
  getWidthClass: (level: number) => string;
}

export const TechBarsGroup: React.FC<TechBarsGroupProps> = ({ 
  category, 
  technologies,
  getWidthClass 
}) => {
  const sortedTechnologies = [...technologies].sort((a, b) => b.experience_level - a.experience_level);
  const categoryColorClass = technologies[0] ? getCategoryColor(technologies[0].category) : '';

  return (
    <div className="mb-8 last:mb-0">
      <h4 className={`text-xs uppercase tracking-wider font-medium mb-4 ${categoryColorClass.replace('bg-', 'text-')}`}>
        {category}
      </h4>
      <div className="space-y-2">
        {sortedTechnologies.map((tech) => (
          <Bar key={tech.name} tech={tech} getWidthClass={getWidthClass} />
        ))}
      </div>
    </div>
  );
};
