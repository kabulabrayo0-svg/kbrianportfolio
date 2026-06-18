import { useEffect, useRef, useState } from 'react';

const skills = [
  { label: 'Microbiology', level: 82, note: 'Core discipline — BSc training + multi-year practical experience' },
  { label: 'Laboratory Science', level: 78, note: 'KMFRI & KEMRI placements + ongoing analyst trainee role' },
  { label: 'Molecular Biology', level: 60, note: 'DNA extraction, gel electrophoresis, spectrophotometry — intern level' },
  { label: 'Marine Research Support', level: 65, note: 'Field & lab work at KMFRI — developing specialization' },
  { label: 'Environmental Monitoring', level: 60, note: 'Water quality, pathogen surveillance — active exposure' },
  { label: 'Water Quality Analysis', level: 58, note: 'Practical monitoring experience at KMFRI' },
  { label: 'QA/QC Systems', level: 70, note: 'GLP, SOP compliance, biosafety — operational proficiency' },
  { label: 'Scientific Documentation', level: 75, note: 'Record-keeping, reporting — consistent across all roles' },
  { label: 'Data Analysis', level: 55, note: 'Excel-based analysis — building digital skills' },
  { label: 'Research Support', level: 68, note: 'Field, molecular & lab research contributions at KMFRI' },
];

function getLevelLabel(level: number) {
  if (level >= 80) return { label: 'Proficient', color: 'text-teal-700', bg: 'bg-teal-100' };
  if (level >= 65) return { label: 'Competent', color: 'text-navy-700', bg: 'bg-navy-100' };
  if (level >= 50) return { label: 'Developing', color: 'text-amber-700', bg: 'bg-amber-100' };
  return { label: 'Foundational', color: 'text-slate-600', bg: 'bg-slate-100' };
}

function SkillBar({ skill, animate }: { skill: typeof skills[0]; animate: boolean }) {
  const level = getLevelLabel(skill.level);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-navy-900">{skill.label}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${level.bg} ${level.color}`}>
            {level.label}
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-teal-500 to-teal-600"
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {skill.note}
      </p>
    </div>
  );
}

export default function SkillsDashboard() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Expertise Dashboard</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Technical Expertise Overview
          </h2>
          <div className="section-title-line" />
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Proficiency levels reflect practical experience, academic training, and current active engagement. Hover over each bar for context.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.label} skill={skill} animate={animated} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs">
          {[
            { label: 'Proficient (80%+)', bg: 'bg-teal-100', text: 'text-teal-700' },
            { label: 'Competent (65–79%)', bg: 'bg-navy-100', text: 'text-navy-700' },
            { label: 'Developing (50–64%)', bg: 'bg-amber-100', text: 'text-amber-700' },
          ].map((item) => (
            <span key={item.label} className={`px-3 py-1 rounded-full font-medium ${item.bg} ${item.text}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
