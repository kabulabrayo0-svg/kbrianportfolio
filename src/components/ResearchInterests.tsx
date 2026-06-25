import { Waves, Microscope, Droplets, Fish, Globe, Leaf, CloudSun, BarChart3, Database, Brain, MonitorSmartphone, FlaskConical } from 'lucide-react';

const interests = [
  {
    icon: Waves,
    title: 'Marine Microbial Ecology',
    body: 'Understanding microbial community dynamics in coastal and open marine environments and their roles in nutrient cycling and ecosystem function.',
    color: 'teal',
  },
  {
    icon: Microscope,
    title: 'Environmental Microbiology',
    body: 'Investigating microbial populations in natural environments including soils, water, and sediments, and their interactions with ecological systems.',
    color: 'navy',
  },
  {
    icon: Droplets,
    title: 'Water Quality Monitoring',
    body: 'Developing and applying microbiological indicators for monitoring freshwater and marine water quality in the context of public health and ecology.',
    color: 'teal',
  },
  {
    icon: Fish,
    title: 'Aquatic Animal Health',
    body: 'Studying pathogen dynamics, disease surveillance, and health assessment methods for fish and other aquatic species in wild and farmed settings.',
    color: 'navy',
  },
  {
    icon: Globe,
    title: 'Fisheries & Ecosystem Health',
    body: 'Investigating the microbiological dimensions of fisheries sustainability, stock health, and ecosystem-level indicators of aquatic biodiversity.',
    color: 'teal',
  },
  {
    icon: Leaf,
    title: 'Coastal & Marine Conservation',
    body: 'Contributing scientific evidence to coastal ecosystem management, marine protected area monitoring, and conservation decision-making frameworks.',
    color: 'navy',
  },
  {
    icon: CloudSun,
    title: 'Climate Change & Marine Ecosystems',
    body: 'Exploring how climate variability and ocean warming affect marine microbial communities, water quality, and aquatic biodiversity along the East African coast.',
    color: 'teal',
  },
  {
    icon: BarChart3,
    title: 'Environmental Data Analytics',
    body: 'Applying statistical and computational methods to analyze environmental datasets, identify trends, and support evidence-based management decisions.',
    color: 'navy',
  },
  {
    icon: Database,
    title: 'Scientific Data Management',
    body: 'Designing and implementing structured systems for laboratory and field data collection, validation, storage, and reporting in research contexts.',
    color: 'teal',
  },
  {
    icon: Brain,
    title: 'AI for Scientific Research',
    body: 'Exploring how artificial intelligence and machine learning can accelerate pattern recognition, data interpretation, and hypothesis generation in scientific research.',
    color: 'navy',
  },
  {
    icon: MonitorSmartphone,
    title: 'AI in Environmental Monitoring',
    body: 'Investigating AI-assisted remote sensing, predictive modelling, and automated data pipelines for environmental and marine monitoring applications.',
    color: 'teal',
  },
  {
    icon: FlaskConical,
    title: 'AI-Assisted Laboratory Analysis',
    body: 'Interested in how AI can augment laboratory workflows, support diagnostic accuracy, and process large-scale microbiological datasets more efficiently.',
    color: 'navy',
  },
];

const colorMap = {
  teal: {
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    border: 'border-teal-100',
    tag: 'bg-teal-50 text-teal-600',
  },
  navy: {
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-700',
    border: 'border-navy-100',
    tag: 'bg-navy-50 text-navy-700',
  },
};

export default function ResearchInterests() {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Research Interests</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Current Research Interests
          </h2>
          <div className="section-title-line" />
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Spanning marine ecosystems, environmental microbiology, scientific data systems, and emerging applications of artificial intelligence in environmental science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {interests.map(({ icon: Icon, title, body, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div key={title} className={`bg-white rounded-xl border ${c.border} p-5 card-hover`}>
                <div className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center mb-3`}>
                  <Icon size={18} className={c.iconColor} />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
