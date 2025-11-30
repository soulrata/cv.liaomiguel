import React from 'react';
import { Project } from '../data';

interface ProjectItemProps {
  data: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  return (
    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 print:bg-white print:border-slate-200 break-inside-avoid">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-slate-800 text-sm md:text-base">{data.name}</h4>
      </div>
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
        {data.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {data.tech.map((t, i) => (
          <span key={i} className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded print:text-slate-600 print:bg-slate-100">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};