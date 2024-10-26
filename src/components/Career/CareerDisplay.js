import { useState } from 'react';
import careerData from '@/assets/career.json';
import RadialBars from './RadialBars';
import { ParentSize } from '@visx/responsive';

const CareerDisplay = () => {
  const [selectedYear, setSelectedYear] = useState(careerData.years[0].year);
  const data = careerData.years.find((year) => year.year === selectedYear).technologies;

  return (
    <>
      <div className="flex md:hidden items-top justify-top">
        <p className="text-lg text-gray-700 font-semibold">
          Please switch to a larger screen to view this content.
        </p>
      </div>

      <div className="hidden md:flex h-full w-full max-w-3xl -ml-8">
        {/* Bubble Chart Component */}
        <div className="flex-grow ml-6 h-full w-full">
          <ParentSize>
            {({ height, width, ref }) => (
              <RadialBars {...{ height, width, ref, data }} />
            )}
          </ParentSize>
        </div>

        {/* Vertical Year Tabs */}
        <div className="flex flex-col hidden md:flex">
          {careerData.years.map((year) => (
            <button
              key={year.year}
              className={`
              py-2 px-6 my-1 font-semibold transition-colors rounded-full
              ${selectedYear === year.year ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
            `}
              onClick={() => setSelectedYear(year.year)}
            >
              {year.year}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerDisplay;
