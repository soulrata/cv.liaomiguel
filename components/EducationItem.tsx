import React from 'react';
import { Education } from '../data';

interface EducationItemProps {
  data: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ data }) => {
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="text-sm font-bold text-slate-800">
        {data.degree}
      </h4>
      <div className="text-xs text-slate-600 mt-1">
        {data.institution}
      </div>
      <div className="text-xs text-slate-400 mt-0.5">
        {data.period}
      </div>
    </div>
  );
};