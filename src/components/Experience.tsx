import { useState } from 'react';
import { Building2, ChevronDown, ChevronUp, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    org: 'Kenya Marine and Fisheries Research Institute',
    orgShort: 'KMFRI',
    orgColor: 'bg-teal-600',
    roles: [
      {
        title: 'Laboratory Analyst',
        period: '2026 – Present',
        type: 'Current Role',
        typeColor: 'bg-teal-100 text-teal-700',
        responsibilities: [
          'Conduct microbiological testing in compliance with established protocols',
          'Perform sample verification and ensure chain of custody integrity',
          'Implement standard operating procedures (SOPs) across laboratory workflows',
          'Carry out quality control procedures for all test batches',
          'Maintain biosafety compliance within laboratory operations',
          'Prepare and submit structured laboratory reports',
          'Maintain accurate scientific data records and logbooks',
        ],
        impact: 'Supporting laboratory operations through accurate testing, quality assurance procedures, and reliable scientific documentation — contributing to research integrity at Kenya\'s principal marine and fisheries research institution.',
      },
      {
        title: 'Junior Clerk – Laboratory Services',
        period: '2025',
        type: 'Laboratory Support',
        typeColor: 'bg-slate-100 text-slate-600',
        responsibilities: [
          'Managed laboratory inventory, supplies, and consumables',
          'Provided experimental support to senior laboratory staff',
          'Prepared equipment for laboratory operations and analytical procedures',
          'Maintained laboratory records and administrative documentation',
          'Supported analytical workflows and laboratory data entry',
          'Assisted with scientific documentation and report filing',
        ],
        impact: 'Contributed to efficient laboratory operations, streamlined inventory management, and supported record-keeping systems that underpin reliable scientific workflows.',
      },
      {
        title: 'Research Intern',
        period: '2025',
        type: 'Research & Field Work',
        typeColor: 'bg-blue-100 text-blue-700',
        responsibilities: [
          'Collected marine water and biological samples from field stations',
          'Performed fish blood sampling for health assessment investigations',
          'Isolated bacterial colonies and conducted microbial culture procedures',
          'Monitored water quality parameters for pathogen indicators',
          'Performed DNA extraction from environmental and biological samples',
          'Conducted gel electrophoresis for molecular analysis',
          'Carried out spectrophotometric measurements for nucleic acid quantification',
          'Collected and recorded scientific field and laboratory data',
        ],
        impact: 'Supported active marine and fisheries research activities through a combination of field sampling, molecular analysis, and microbiological laboratory investigations — gaining practical insight into aquatic ecosystem health research.',
      },
    ],
  },
  {
    org: 'Kenya Medical Research Institute',
    orgShort: 'KEMRI',
    orgColor: 'bg-navy-700',
    roles: [
      {
        title: 'Laboratory Attachment',
        period: '2022',
        type: 'Attachment',
        typeColor: 'bg-purple-100 text-purple-700',
        responsibilities: [
          'Rotated through microbiology, hematology, and immunology departments',
          'Observed and assisted with molecular diagnostics and PCR applications',
          'Gained exposure to parasitology and serology laboratory procedures',
          'Assisted in biochemistry and clinical laboratory operations',
          'Maintained safe laboratory practices under clinical supervision',
        ],
        impact: 'Developed foundational practical skills across multiple biomedical disciplines — establishing a broad scientific base that spans diagnostic microbiology, molecular biology, and clinical laboratory science.',
      },
    ],
  },
];

type Role = typeof experiences[0]['roles'][0];

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div
        className="p-5 cursor-pointer flex items-start justify-between gap-3"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${role.typeColor}`}>
              {role.type}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar size={11} />
              {role.period}
            </span>
          </div>
          <h4 className="font-semibold text-navy-900 text-base">{role.title}</h4>
        </div>
        <button className="flex-shrink-0 mt-0.5 text-slate-400 hover:text-teal-600 transition-colors">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {expanded && (
        <div className="px-5 pb-5 border-t border-slate-50 pt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Responsibilities</p>
          <ul className="space-y-2 mb-4">
            {role.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle size={14} className="text-teal-500 mt-0.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
          <div className="bg-teal-50 rounded-lg p-3 border-l-3 border-teal-400 border-l-4">
            <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">Key Impact</p>
            <p className="text-xs text-slate-700 leading-relaxed">{role.impact}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Professional Experience</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Career Timeline
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.org} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${exp.orgColor} flex items-center justify-center flex-shrink-0`}>
                  <Building2 size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg leading-tight">{exp.org}</h3>
                  <p className="text-xs text-slate-500 font-medium">{exp.orgShort}</p>
                </div>
              </div>

              <div className="ml-0 sm:ml-13 space-y-3 pl-0 sm:pl-4">
                {exp.roles.map((role) => (
                  <RoleCard key={role.title + role.period} role={role} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
