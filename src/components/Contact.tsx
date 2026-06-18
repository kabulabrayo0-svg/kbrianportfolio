import { useState } from 'react';
import { Mail, Phone, Linkedin, Download, Send, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 font-serif mb-4">
            Contact
          </h2>
          <div className="section-title-line" />
          <p className="text-slate-600 max-w-lg mx-auto text-sm">
            Open to research opportunities, laboratory positions, marine and environmental roles, postgraduate programs, and professional collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-navy-900 font-serif mb-1">Brian Aleka Kabula</h3>
              <p className="text-slate-500 text-sm">Laboratory Scientist · Microbiologist · Kenya</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+254713030630"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                  <Phone size={16} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                  <p className="font-semibold text-navy-900 text-sm">+254 713 030 630</p>
                </div>
              </a>

              <a
                href="mailto:kabulabrayo0@gmail.com"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                  <Mail size={16} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="font-semibold text-navy-900 text-sm">kabulabrayo0@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kabula-brianmicrobiologylabanalyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#0077b5]/30 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-[#0077b5] transition-colors">
                  <Linkedin size={16} className="text-[#0077b5] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="font-semibold text-navy-900 text-sm">kabula-brianmicrobiologylabanalyst</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <MapPin size={16} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="font-semibold text-navy-900 text-sm">Kenya, East Africa</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 text-white font-semibold text-sm rounded-xl hover:bg-teal-700 transition-all shadow-sm hover:shadow-md">
                <Download size={15} />
                Download CV
              </button>
              <a
                href="https://www.linkedin.com/in/kabula-brianmicrobiologylabanalyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0077b5] text-white font-semibold text-sm rounded-xl hover:bg-[#006396] transition-all shadow-sm hover:shadow-md"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">Message Sent</h3>
                <p className="text-slate-600 text-sm max-w-xs">
                  Thank you for reaching out. Brian will respond to your inquiry as soon as possible.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 text-sm text-teal-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Subject *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option>Research Opportunity</option>
                    <option>Laboratory Position</option>
                    <option>Marine / Environmental Role</option>
                    <option>Postgraduate Program</option>
                    <option>Fellowship / Scholarship</option>
                    <option>Professional Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold text-sm rounded-xl hover:bg-teal-700 transition-all shadow-sm hover:shadow-md"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
