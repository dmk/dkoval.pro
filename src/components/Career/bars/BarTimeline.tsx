import React from 'react';
import { YearData, Technology } from '../types';
import { TechBarsGroup } from './TechBarsGroup';
import { categoryOrder } from '../constants';
interface BarTimelineProps {
  data: YearData[];
}

export const BarTimeline: React.FC<BarTimelineProps> = ({ data }) => {
  const getWidthClass = (level: number) => {
    const widths: Record<number, string> = {
      1: 'w-[10%]',
      2: 'w-[20%]',
      3: 'w-[30%]',
      4: 'w-[40%]',
      5: 'w-[50%]',
      6: 'w-[60%]',
      7: 'w-[70%]',
      8: 'w-[80%]',
      9: 'w-[90%]',
      10: 'w-full'
    };
    return widths[level] || 'w-0';
  };

  return (
    <div className="px-4 max-w-6xl w-full mx-auto">
      {data.map((yearData) => {
        const techByCategory = yearData.technologies.reduce((acc, tech) => {
          if (!acc[tech.category]) {
            acc[tech.category] = [];
          }
          acc[tech.category].push(tech);
          return acc;
        }, {} as Record<string, Technology[]>);

        // Sort categories by order first, then by number of technologies
        const sortedCategories = Object.keys(techByCategory).sort((a, b) => {
          const indexA = categoryOrder.indexOf(a.toLowerCase() as typeof categoryOrder[number]);
          const indexB = categoryOrder.indexOf(b.toLowerCase() as typeof categoryOrder[number]);
          if (indexA !== indexB) return indexA - indexB;
          
          // If same order priority, sort by number of technologies (descending)
          return techByCategory[b].length - techByCategory[a].length;
        });

        // Balance columns by actual number of technologies
        const leftColumnCategories: string[] = [];
        const rightColumnCategories: string[] = [];
        let leftColumnBars = 0;
        let rightColumnBars = 0;

        sortedCategories.forEach((category) => {
          const categoryBars = techByCategory[category].length;
          
          if (leftColumnBars <= rightColumnBars) {
            leftColumnCategories.push(category);
            leftColumnBars += categoryBars;
          } else {
            rightColumnCategories.push(category);
            rightColumnBars += categoryBars;
          }
        });

        return (
          <div key={yearData.year} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div>
                {leftColumnCategories.map((category) => (
                  <TechBarsGroup
                    key={category}
                    category={category}
                    technologies={techByCategory[category]}
                    getWidthClass={getWidthClass}
                  />
                ))}
              </div>
              <div>
                {rightColumnCategories.map((category) => (
                  <TechBarsGroup
                    key={category}
                    category={category}
                    technologies={techByCategory[category]}
                    getWidthClass={getWidthClass}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 