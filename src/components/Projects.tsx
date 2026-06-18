import { useState } from 'react';
import { Droplets, Fish, Microscope, Dna, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    icon: Droplets,
    title: 'Marine Water Quality Monitoring',
    org: 'KMFRI — Research Internship',
    period: '2025',
    color: 'teal',
    image: 'https://images.pexels.com/photos/1048387/pexels-photo-1048387.jpeg?auto=compress&cs=tinysrgb&w=600',
    objective: 'Monitor microbial indicators and environmental health parameters of coastal aquatic systems to support early detection of contamination events and ecosystem health assessments.',
    methods: [
      'Systematic water sampling from multiple coastal stations',
      'Microbiological testing for indicator organisms (coliforms, E. coli)',
      'Pathogen monitoring including Vibrio spp. in marine samples',
      'Physicochemical parameter recording alongside microbial analysis',
      'Data collection, tabulation, and reporting to research supervisors',
    ],
    outcomes: 'Generated structured microbiological datasets supporting ongoing KMFRI water quality monitoring programs and contributing to institutional records on coastal aquatic health.',
  },
  {
    icon: Fish,
    title: 'Fish Health Laboratory Investigations',
    org: 'KMFRI — Research Internship',
    period: '2025',
    color: 'navy',
    image: 'https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=600',
    objective: 'Support aquatic animal health assessments by conducting laboratory analyses of fish biological samples to investigate pathogen presence and health indicators.',
    methods: [
      'Structured collection of biological samples from fish specimens',
      'Blood sampling procedures for haematological and pathogen analysis',
      'Microbiological analysis of tissue and blood samples',
      'Culture and isolation of fish-associated bacterial pathogens',
      'Accurate data recording aligned with laboratory protocols',
    ],
    outcomes: 'Contributed laboratory data to support fish health surveillance activities at KMFRI, relevant to monitoring aquatic animal welfare and disease management in fisheries contexts.',
  },
  {
    icon: Microscope,
    title: 'Environmental Pathogen Surveillance',
    org: 'KMFRI — Research Internship',
    period: '2025',
    color: 'teal',
    image: 'https://images.pexels.com/photos/8851494/pexels-photo-8851494.jpeg?auto=compress&cs=tinysrgb&w=600',
    objective: 'Monitor microbial contamination in marine and coastal environments, with a focus on indicator organisms and pathogens relevant to public health and ecosystem monitoring.',
    methods: [
      'Enumeration of total coliforms and E. coli using standard culture methods',
      'Detection and isolation of Vibrio spp. from water and sediment samples',
      'Microbial culture techniques including selective and differential media',
      'Environmental sample collection under field protocols',
      'Laboratory data entry and report preparation',
    ],
    outcomes: 'Supported institutional pathogen surveillance efforts, generating environmental microbiological data relevant to coastal public health protection and fisheries biosecurity.',
  },
  {
    icon: Dna,
    title: 'Molecular Characterization Support',
    org: 'KMFRI — Research Internship',
    period: '2025',
    color: 'navy',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
    objective: 'Support laboratory identification and molecular characterization of microorganisms isolated from marine environmental samples.',
    methods: [
      'DNA extraction from bacterial isolates and environmental samples',
      'Agarose gel electrophoresis for nucleic acid visualization',
      'Spectrophotometric measurement of DNA quantity and purity (A260/A280)',
      'Sample preparation and labelling for molecular analysis workflows',
      'Documentation of molecular laboratory procedures and results',
    ],
    outcomes: 'Contributed to molecular analysis pipelines at KMFRI, gaining hands-on experience with core molecular biology techniques applied to environmental and fisheries research.',
  },
  {
    icon: ShieldCheck,
    title: 'Laboratory Quality Assurance Support',
    org: 'KMFRI — Analyst Trainee & Junior Clerk',
    period: '2025 – Present',
    color: 'teal',
    image: 'https://images.pexels.com/photos/8851519/pexels-photo-8851519.jpeg?auto=compress&cs=tinysrgb&w=600',
    objective: 'Maintain the reliability, traceability, and integrity of laboratory results through systematic application of quality assurance and quality control practices.',
    methods: [
      'Implementation of Good Laboratory Practice (GLP) standards across all procedures',
      'Quality control sample preparation and result verification',
      'SOP review and compliance documentation',
      'Maintenance of equipment logs and calibration records',
      'Laboratory record management and data traceability systems',
    ],
    outcomes: 'Supported a culture of quality and scientific integrity within KMFRI laboratory operations, contributing to reliable and documented analytical outputs across microbiological testing activities.',
  },
];

const colorMap = {
  teal: { border: 'border-teal-200', iconBg: 'bg-teal-50', iconColor: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
  navy: { border: 'border-navy-200', iconBg: 'bg-navy-50', iconColor: 'text-navy-700', badge: 'bg-navy-100 text-navy-700' },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Practical Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Projects & Field Experience
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const c = colorMap[p.color as keyof typeof colorMap];
            const isOpen = expanded === p.title;
            const Icon = p.icon;

            return (
              <div key={p.title} className={`rounded-xl border ${c.border} overflow-hidden card-hover bg-white`}>
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>{p.period}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className={c.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-sm leading-snug">{p.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{p.org}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">{p.objective}</p>

                  <button
                    onClick={() => setExpanded(isOpen ? null : p.title)}
                    className={`flex items-center gap-1 text-xs font-semibold transition-colors ${c.iconColor} hover:opacity-80`}
                  >
                    {isOpen ? 'Show less' : 'View details'}
                    {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Methods</p>
                        <ul className="space-y-1.5">
                          {p.methods.map((m) => (
                            <li key={m} className="flex items-start gap-1.5 text-xs text-slate-600">
                              <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Outcomes</p>
                        <p className="text-xs text-slate-700 leading-relaxed">{p.outcomes}</p>
                      </div>
                    </div>
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
