import { Shield, Target, CheckCircle, Star, BookOpen, Users, BarChart2 } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Scientific Integrity',
    body: 'Adherence to honest, transparent, and reproducible scientific practice in all laboratory and research activities.',
    color: 'teal',
  },
  {
    icon: Target,
    title: 'Accuracy',
    body: 'Commitment to precise measurement, careful observation, and meticulous record-keeping as foundations of reliable science.',
    color: 'navy',
  },
  {
    icon: CheckCircle,
    title: 'Accountability',
    body: 'Taking responsibility for the quality and impact of scientific work, and maintaining transparency in data collection and reporting.',
    color: 'teal',
  },
  {
    icon: Star,
    title: 'Quality',
    body: 'Operating within established quality systems — GLP, SOPs, and QA/QC — as a non-negotiable standard in laboratory work.',
    color: 'navy',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    body: 'Actively pursuing growth in technical skills, scientific knowledge, and emerging research areas to remain a capable and current practitioner.',
    color: 'teal',
  },
  {
    icon: Users,
    title: 'Collaboration',
    body: 'Recognizing that meaningful scientific outcomes emerge from effective teamwork, clear communication, and shared institutional goals.',
    color: 'navy',
  },
  {
    icon: BarChart2,
    title: 'Evidence-Based Decisions',
    body: 'Grounding actions, conclusions, and recommendations in empirical data, documented methodology, and sound scientific reasoning.',
    color: 'teal',
  },
];

const colorMap = {
  teal: { iconBg: 'bg-teal-50', iconColor: 'text-teal-600', border: 'border-teal-100', dot: 'bg-teal-500' },
  navy: { iconBg: 'bg-navy-50', iconColor: 'text-navy-700', border: 'border-navy-100', dot: 'bg-navy-600' },
};

export default function Values() {
  return (
    <section id="values" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Guiding Principles</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Professional Values
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {values.map(({ icon: Icon, title, body, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div key={title} className={`bg-white rounded-xl border ${c.border} p-5 card-hover text-center`}>
                <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={20} className={c.iconColor} />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #102a43 0%, #1a4a6e 50%, #0d9488 100%)' }}
          />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative px-8 py-10 text-center max-w-4xl mx-auto">
            <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4">Scientific Impact Statement</p>
            <blockquote className="text-white text-lg lg:text-xl font-light leading-relaxed font-serif italic">
              "My goal is to contribute to evidence-based environmental management, marine ecosystem conservation, public health protection, and scientific innovation through rigorous laboratory science, environmental monitoring, and data-driven research."
            </blockquote>
            <div className="mt-6 w-16 h-0.5 bg-teal-400 mx-auto rounded-full" />
            <p className="mt-4 text-white/60 text-sm font-medium">Brian Aleka Kabula</p>
          </div>
        </div>
      </div>
    </section>
  );
}
