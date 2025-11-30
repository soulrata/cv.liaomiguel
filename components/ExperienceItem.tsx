import React from 'react';
import { Experience } from '../data';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  return (
    <div className="relative pl-0 md:pl-0 border-l-0 md:border-l-0 border-slate-200 last:mb-0 mb-6 break-inside-avoid">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <h4 className="text-lg font-bold text-slate-800">
          {data.role}
        </h4>
        <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded print:text-black print:bg-transparent print:p-0 whitespace-nowrap">
          {data.period}
        </span>
      </div>
      
      <div className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
        {data.company}
      </div>
      
      <p className="text-slate-600 mb-3 italic">
        {data.description}
      </p>

      <ul className="space-y-1.5">
        {data.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-700">
            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};