import { GraduationCap, Anchor, Heart, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Academic Foundation',
    body: 'Graduated with a Bachelor of Science in Microbiology from Rongo University (2019–2023), building rigorous grounding in microbial science, biochemistry, immunology, molecular biology, and research methodology.',
  },
  {
    icon: Anchor,
    title: 'Marine & Environmental Research',
    body: 'Through KMFRI, gained direct exposure to marine sample collection, fish health assessments, aquatic pathogen surveillance, and water quality monitoring — translating academic knowledge into real research settings.',
  },
  {
    icon: Heart,
    title: 'Biomedical Laboratory Experience',
    body: 'A laboratory attachment at KEMRI provided cross-disciplinary exposure across microbiology, hematology, immunology, parasitology, molecular diagnostics, and clinical biochemistry.',
  },
  {
    icon: TrendingUp,
    title: 'Trajectory & Growth',
    body: 'Progressing from a research intern to a laboratory analyst trainee at KMFRI, Brian has consistently expanded his technical repertoire, quality assurance responsibilities, and scientific documentation practices.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Grounded in Science. Driven by Purpose.
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Laboratory environment"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex items-end p-5">
                <div>
                  <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-1">Based In</p>
                  <p className="text-white font-semibold">Kenya — East Africa</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3">Future Focus</p>
              <ul className="space-y-2">
                {[
                  'Marine Ecosystem Health',
                  'Environmental Monitoring',
                  'Water Quality Assessment',
                  'Aquatic Animal Health',
                  'Scientific Data Systems',
                  'AI-Assisted Analysis',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <p className="text-slate-700 text-base leading-relaxed">
              Brian Aleka Kabula's journey into laboratory and environmental science began during his undergraduate studies at Rongo University, where he developed a strong academic foundation in microbial systems, laboratory methodology, and biological science. His academic training laid the groundwork for a practical career trajectory that has been shaped by two of Kenya's premier research institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm card-hover">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-50 to-navy-50 flex items-center justify-center mb-3 border border-teal-100">
                    <Icon size={18} className="text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 text-sm mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-navy-800 to-teal-700 rounded-xl p-6 text-white">
              <p className="text-sm leading-relaxed opacity-90">
                Looking ahead, Brian is committed to deepening his expertise at the intersection of environmental microbiology, marine ecosystem science, and emerging digital tools — including data analytics and artificial intelligence — to contribute to evidence-based conservation, public health, and environmental management outcomes across East Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
