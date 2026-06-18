import { GraduationCap, BookOpen } from 'lucide-react';

const courses = [
  'Microbiology',
  'Molecular Biology',
  'Biochemistry',
  'Immunology',
  'Research Methods',
  'Laboratory Techniques',
  'Scientific Data Analysis',
  'Parasitology',
  'Environmental Science',
  'Genetics',
  'Cell Biology',
  'Biostatistics',
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Education
          </h2>
          <div className="section-title-line" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-navy-800 to-teal-700 p-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-white" />
              </div>
              <div>
                <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-1">Bachelor of Science</p>
                <h3 className="text-2xl font-bold text-white font-serif mb-1">Microbiology</h3>
                <p className="text-white/80 font-medium">Rongo University</p>
                <p className="text-white/60 text-sm mt-0.5">2019 – 2023 · Kenya</p>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                A four-year undergraduate program providing rigorous training in microbial science, laboratory methodology, biological research, and the application of molecular and analytical techniques to understand microorganisms and their interactions with the environment and human health.
              </p>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={15} className="text-teal-600" />
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Core Academic Areas</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span key={course} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-700">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  { label: 'Duration', value: '4 Years' },
                  { label: 'Graduated', value: '2023' },
                  { label: 'Institution', value: 'Rongo University' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="font-semibold text-navy-900 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
