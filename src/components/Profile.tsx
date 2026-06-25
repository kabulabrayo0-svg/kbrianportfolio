import { Microscope, Leaf, Database, Award } from 'lucide-react';

const highlights = [
  {
    icon: Microscope,
    label: 'BSc Microbiology',
    sub: 'Rongo University, 2023',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Leaf,
    label: 'Marine & Env. Research',
    sub: 'KMFRI — Active',
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
  },
  {
    icon: Database,
    label: 'Molecular Biology',
    sub: 'DNA Extraction, PCR, Gel Electrophoresis',
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Award,
    label: 'QA/QC Systems',
    sub: 'GLP, SOP, Biosafety Compliance',
    color: 'text-navy-700',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
  },
];

export default function Profile() {
  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Professional Profile</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Scientist. Researcher. Problem Solver.
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-slate-700 text-base leading-relaxed">
              Brian Aleka Kabula is an early-career laboratory scientist holding a Bachelor of Science in Microbiology from Rongo University. He brings practical experience in microbiological analysis, environmental sample processing, marine and fisheries laboratory support, and molecular biology techniques gained through formal institutional placements at Kenya's leading research institutes.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              His professional background spans microbiological testing, sample preparation and culture techniques, water quality monitoring, pathogen surveillance in aquatic environments, DNA extraction, gel electrophoresis, spectrophotometric analysis, and quality assurance under Good Laboratory Practice (GLP) frameworks.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              Brian is actively developing competencies in scientific data management, laboratory information systems, and is cultivating an informed interest in artificial intelligence applications within environmental and scientific research contexts. He is positioned for growth in research institutions, marine and fisheries organizations, environmental agencies, public health laboratories, and postgraduate research programs.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Microbiological Analysis',
                'Environmental Monitoring',
                'Marine Research Support',
                'Molecular Biology',
                'Laboratory QA/QC',
                'Scientific Documentation',
                'Water Quality Monitoring',
                'Data Analysis',
              ].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub, color, bg, border }) => (
              <div key={label} className={`p-5 rounded-xl border ${border} ${bg} card-hover`}>
                <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm`}>
                  <Icon size={20} className={color} />
                </div>
                <p className="font-semibold text-navy-900 text-sm leading-snug mb-1">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
