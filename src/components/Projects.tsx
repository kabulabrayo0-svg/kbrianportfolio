import { useState } from 'react';
import { Droplets, Fish, Microscope, Dna, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const LAB_IMG = '/images/image.png';

const projects = [
  {
    icon: Droplets,
    title: 'Marine Water Quality Monitoring',
    org: 'KMFRI — Research Internship',
    period: '2025',
    color: 'teal',
    imgStyle: { objectPosition: 'left center', filter: 'brightness(0.92) saturate(1.15) hue-rotate(-10deg)' },
    overlay: 'from-teal-900/75 via-teal-800/30 to-transparent',
    label: 'Membrane Filtration · Coastal Sampling',
    objective: 'Monitor microbial indicators and environmental health parameters of coastal aquatic systems to support early detection of contamination events and ecosystem health assessments.',
    methods: [
      'Systematic water sampling from multiple coastal stations',
      'Microbiological testing for indicator organisms (coliforms, E. coli)',
      'Membrane filtration for quantitative enumeration of indicator bacteria',
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
    imgStyle: { objectPosition: 'center top', filter: 'brightness(0.88) saturate(0.95) contrast(1.05)' },
    overlay: 'from-navy-900/80 via-navy-700/30 to-transparent',
    label: 'Blood Sampling · Tissue Analysis',
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
    imgStyle: { objectPosition: 'right center', filter: 'brightness(0.85) saturate(1.2) contrast(1.08)' },
    overlay: 'from-teal-950/80 via-slate-800/20 to-transparent',
    label: 'Selective Media · Coliform Enumeration',
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
    imgStyle: { objectPosition: 'center bottom', filter: 'brightness(0.80) saturate(0.85) contrast(1.12) hue-rotate(15deg)' },
    overlay: 'from-navy-950/85 via-blue-900/25 to-transparent',
    label: 'DNA Extraction · Gel Electrophoresis',
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
    org: 'KMFRI — Analyst & Junior Clerk',
    period: '2025 – Present',
    color: 'teal',
    imgStyle: { objectPosition: 'center center', filter: 'brightness(0.82) saturate(0.75) contrast(1.1) grayscale(0.15)' },
    overlay: 'from-slate-900/85 via-teal-900/20 to-transparent',
    label: 'GLP · SOP Compliance · QC Documentation',
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
  teal: { border: 'border-teal-200', iconBg: 'bg-teal-50', iconColor: 'text-teal-600', badge: 'bg-teal-600 text-white' },
  navy: { border: 'border-navy-200', iconBg: 'bg-navy-50', iconColor: 'text-navy-700', badge: 'bg-navy-700 text-white' },
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
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={LAB_IMG}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={p.imgStyle}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.overlay}`} />
                  {/* Period badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${c.badge} shadow-sm`}>
                      {p.period}
                    </span>
                  </div>
                  {/* Activity label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                    <p className="text-white text-xs font-medium opacity-90 leading-snug">{p.label}</p>
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
