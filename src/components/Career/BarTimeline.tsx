import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getCategoryColor } from '@/utils/colors';
import { YearData } from './types';

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
    <div className="flex flex-col gap-4 px-4 max-w-2xl w-full mx-auto">
      {data.map((yearData) => (
        <div key={yearData.year} className="relative">
          <div className="space-y-3">
            {yearData.technologies.map((tech) => (
              <AnimatePresence key={tech.name}>
                <div className="relative h-8">
                  <motion.div
                    layoutId={`bar-${tech.name}`}
                    layout
                    className={`h-full rounded-full ${getCategoryColor(tech.category)} relative ${getWidthClass(tech.experience_level)}`}
                    transition={{
                      layout: { duration: 0.5 },
                      default: { ease: "easeOut" }
                    }}
                  >
                    <div className="absolute right-3 top-0 h-full flex items-center">
                      <span className="text-sm text-white opacity-90">{tech.experience_level}/10</span>
                    </div>
                  </motion.div>
                  <div className={`${getWidthClass(tech.experience_level)}`}>
                    <motion.div
                      layoutId={`text-${tech.name}`}
                      layout="position"
                      className="absolute left-0 top-0 h-full px-3 flex items-center"
                      transition={{
                        layout: { duration: 0.5 },
                        default: { ease: "easeOut" }
                      }}
                    >
                      <span className="font-medium text-sm text-white truncate">{tech.name}</span>
                    </motion.div>
                  </div>
                </div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 