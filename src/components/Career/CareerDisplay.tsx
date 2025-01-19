import React, { useState } from 'react';
import careerJson from '@/assets/career.json';
import { CareerData } from './types';
import { BarTimeline } from './bars/BarTimeline';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const careerData: CareerData = careerJson as CareerData;
const years = careerData.years.map(year => year.year).sort();

const CareerDisplay: React.FC = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(years.length - 1);
  const currentYear = years[currentYearIndex];

  const goToPreviousYear = () => {
    setCurrentYearIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNextYear = () => {
    setCurrentYearIndex((prev) => Math.min(years.length - 1, prev + 1));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-center gap-4 py-4">
        <button 
          onClick={goToPreviousYear}
          disabled={currentYearIndex === 0}
          className="p-2 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold">{currentYear}</h2>
        <button 
          onClick={goToNextYear}
          disabled={currentYearIndex === years.length - 1}
          className="p-2 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <BarTimeline data={[careerData.years[currentYearIndex]]} />
      </div>
    </div>
  );
};

export default CareerDisplay;
