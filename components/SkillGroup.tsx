import React from 'react';

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => {
  return (
    <div className="mb-5 last:mb-0">
      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
        {title}
      </h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 shadow-sm print:shadow-none print:border-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};