import { useState } from 'react';
import { Microscope, Dna, ShieldCheck, Waves, FileText, Users } from 'lucide-react';

const categories = [
  {
    id: 'lab',
    icon: Microscope,
    title: 'Laboratory Science',
    color: 'teal',
    skills: [
      'Microbiological testing',
      'Sample preparation',
      'Culture techniques',
      'Isolation of microorganisms',
      'Biochemical testing',
      'Laboratory instrumentation',
      'Analytical laboratory procedures',
    ],
  },
  {
    id: 'mol',
    icon: Dna,
    title: 'Molecular Biology',
    color: 'navy',
    skills: [
      'DNA extraction',
      'Gel electrophoresis',
      'Spectrophotometry',
      'Nucleic acid quantification',
      'Molecular diagnostics support',
      'PCR laboratory exposure',
    ],
  },
  {
    id: 'qms',
    icon: ShieldCheck,
    title: 'Quality Management',
    color: 'teal',
    skills: [
      'Good Laboratory Practice (GLP)',
      'SOP implementation',
      'QA/QC procedures',
      'Biosafety practices',
      'Laboratory documentation',
      'Traceability systems',
    ],
  },
  {
    id: 'env',
    icon: Waves,
    title: 'Environmental & Marine Science',
    color: 'navy',
    skills: [
      'Marine sample collection',
      'Water quality monitoring',
      'Environmental microbiology',
      'Aquatic pathogen surveillance',
      'Fisheries laboratory support',
      'Environmental sample processing',
    ],
  },
  {
    id: 'data',
    icon: FileText,
    title: 'Data & Documentation',
    color: 'teal',
    skills: [
      'Laboratory record management',
      'Excel-based data analysis',
      'Scientific reporting',
      'Data validation',
      'Documentation systems',
      'Research data management',
    ],
  },
  {
    id: 'pro',
    icon: Users,
    title: 'Professional Skills',
    color: 'navy',
    skills: [
      'Communication',
      'Teamwork',
      'Problem solving',
      'Critical thinking',
      'Organization',
      'Adaptability',
      'Continuous learning',
    ],
  },
];

const colorMap = {
  teal: {
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    activeBg: 'bg-teal-600',
    inactiveBg: 'bg-white',
    activeText: 'text-white',
    inactiveText: 'text-navy-900',
    border: 'border-teal-200',
    dot: 'bg-teal-500',
  },
  navy: {
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-700',
    activeBg: 'bg-navy-800',
    inactiveBg: 'bg-white',
    activeText: 'text-white',
    inactiveText: 'text-navy-900',
    border: 'border-navy-200',
    dot: 'bg-navy-600',
  },
};

export default function Competencies() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Technical Competencies</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Scientific Skill Set
          </h2>
          <div className="section-title-line" />
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            A practical competency profile built through institutional training, academic study, and active laboratory engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            const isActive = active === cat.id;
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className={`rounded-xl border cursor-pointer transition-all duration-200 overflow-hidden card-hover ${
                  isActive ? `${c.activeBg} border-transparent shadow-lg` : `bg-white ${c.border} shadow-sm`
                }`}
                onClick={() => setActive(isActive ? null : cat.id)}
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${isActive ? 'bg-white/20' : c.iconBg} flex items-center justify-center`}>
                      <Icon size={18} className={isActive ? 'text-white' : c.iconColor} />
                    </div>
                    <h3 className={`font-semibold text-sm ${isActive ? c.activeText : c.inactiveText}`}>
                      {cat.title}
                    </h3>
                  </div>

                  <ul className={`space-y-2 transition-all duration-200 ${isActive ? 'max-h-96' : 'max-h-24 overflow-hidden'}`}>
                    {cat.skills.map((skill, i) => (
                      <li
                        key={skill}
                        className={`flex items-center gap-2 text-xs ${isActive ? 'text-white/90' : 'text-slate-600'} ${
                          !isActive && i >= 3 ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-white/70' : c.dot}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {!isActive && cat.skills.length > 3 && (
                    <p className={`text-xs mt-2 font-medium ${c.iconColor}`}>
                      +{cat.skills.length - 3} more — click to expand
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
