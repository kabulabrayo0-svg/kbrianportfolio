import { useState } from 'react';
import { Award, Plus, Upload, Clock } from 'lucide-react';

const certCategories = [
  {
    label: 'Professional Certificates',
    placeholder: true,
    items: [],
  },
  {
    label: 'AI & Data Science Training',
    placeholder: true,
    items: [],
  },
  {
    label: 'Laboratory Training',
    placeholder: true,
    items: [],
  },
  {
    label: 'Marine Science Courses',
    placeholder: true,
    items: [],
  },
  {
    label: 'Research Workshops & Seminars',
    placeholder: true,
    items: [],
  },
  {
    label: 'Technical Training',
    placeholder: true,
    items: [],
  },
];

export default function Certifications() {
  const [active, setActive] = useState(0);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Certifications & Training
          </h2>
          <div className="section-title-line" />
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            This section is structured to grow with your career. Certifications and training records can be added as they are completed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {certCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  active === i
                    ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-teal-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${active === i ? 'bg-white/20' : 'bg-teal-50'}`}>
                  <Award size={15} className={active === i ? 'text-white' : 'text-teal-600'} />
                </div>
                <p className="text-sm font-semibold leading-snug">{cat.label}</p>
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-slate-400" />
            </div>
            <h3 className="font-semibold text-navy-900 mb-2">{certCategories[active].label}</h3>
            <p className="text-sm text-slate-500 mb-6">
              No entries yet for this category. This section is ready to be updated as certifications and training are completed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                <Plus size={14} />
                Add Entry
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                <Upload size={14} />
                Upload Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
