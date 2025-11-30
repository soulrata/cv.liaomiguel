import React, { useState } from 'react';
import { ResumeHeader } from './components/ResumeHeader';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectItem } from './components/ProjectItem';
import { SkillGroup } from './components/SkillGroup';
import { EducationItem } from './components/EducationItem';
import { PrintButton } from './components/PrintButton';
import { RESUME_DATA } from './data';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Award, 
  Languages 
} from './components/Icons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cv' | 'projects'>('cv');

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center print:block print:p-0 print:m-0">
      
      {/* Floating Action Button for Print - Hidden in Print Mode */}
      <div className="fixed bottom-8 right-8 z-50 print-hidden flex flex-col gap-3">
        <PrintButton />
      </div>

      <main className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none print:w-full print:max-w-full">
        
        {/* Header Section */}
        <ResumeHeader profile={RESUME_DATA.profile} social={RESUME_DATA.social} />

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row print:flex-row">
          
          {/* Main Column (Left) */}
          <div className="w-full md:w-2/3 p-8 md:p-12 border-r border-slate-100 print:w-2/3 print:p-8 print:border-r">
            
            {/* Professional Profile */}
            <Section title="Perfil Profesional" icon={<Code2 className="w-5 h-5 text-amber-600" />}>
              <p className="text-slate-600 leading-relaxed text-base text-justify">
                {RESUME_DATA.summary}
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experiencia Laboral" icon={<Briefcase className="w-5 h-5 text-amber-600" />}>
              <div className="space-y-8">
                {RESUME_DATA.experience.map((job, index) => (
                  <ExperienceItem key={index} data={job} />
                ))}
              </div>
            </Section>

            {/* Projects (Highlighted) */}
            <div className="page-break-inside-avoid">
              <Section title="Proyectos Destacados" icon={<FolderGit2 className="w-5 h-5 text-amber-600" />}>
                <div className="grid grid-cols-1 gap-4">
                  {RESUME_DATA.projects.map((project, index) => (
                    <ProjectItem key={index} data={project} />
                  ))}
                </div>
              </Section>
            </div>
          </div>

          {/* Sidebar Column (Right) */}
          <div className="w-full md:w-1/3 bg-slate-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-slate-100 print:w-1/3 print:bg-slate-50 print:p-6 print:border-l">
            
            {/* Skills */}
            <Section title="Stack Tecnológico" icon={<Code2 className="w-5 h-5 text-amber-600" />} compact>
              <div className="space-y-6">
                <SkillGroup title="Backend & Core" skills={RESUME_DATA.skills.backend} />
                <SkillGroup title="Frontend & UI" skills={RESUME_DATA.skills.frontend} />
                <SkillGroup title="DevOps & Herramientas" skills={RESUME_DATA.skills.tools} />
                <SkillGroup title="Integraciones" skills={RESUME_DATA.skills.integrations} />
              </div>
            </Section>

            <div className="my-8 border-t border-slate-200 w-1/2 mx-auto"></div>

            {/* Education */}
            <Section title="Formación" icon={<GraduationCap className="w-5 h-5 text-amber-600" />} compact>
              <div className="space-y-4">
                {RESUME_DATA.education.map((edu, index) => (
                  <EducationItem key={index} data={edu} />
                ))}
              </div>
            </Section>

            <div className="my-8 border-t border-slate-200 w-1/2 mx-auto"></div>

            {/* Certifications */}
            <Section title="Certificaciones" icon={<Award className="w-5 h-5 text-amber-600" />} compact>
              <ul className="space-y-3">
                {RESUME_DATA.certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-slate-600 relative pl-4 border-l-2 border-amber-400">
                    <span className="font-semibold block text-slate-800">{cert.year}</span>
                    <span>{cert.name}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <div className="my-8 border-t border-slate-200 w-1/2 mx-auto"></div>

            {/* Languages */}
            <Section title="Idiomas" icon={<Languages className="w-5 h-5 text-amber-600" />} compact>
              <div className="space-y-2">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700">{lang.name}</span>
                    <span className="text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-slate-400 text-sm print-hidden pb-4">
        <p>&copy; {new Date().getFullYear()} Miguel Liao. Diseñado con React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;