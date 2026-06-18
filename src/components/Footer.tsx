import { FlaskConical, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <FlaskConical size={16} className="text-white" />
              </div>
              <span className="font-semibold text-white">Brian Aleka Kabula</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Laboratory Scientist · Microbiologist · Environmental Monitoring Professional · Emerging Marine Researcher
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                { label: 'Professional Profile', href: '#profile' },
                { label: 'Experience', href: '#experience' },
                { label: 'Research Interests', href: '#research' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254713030630" className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                  <Phone size={13} />
                  +254 713 030 630
                </a>
              </li>
              <li>
                <a href="mailto:kabulabrayo0@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                  <Mail size={13} />
                  kabulabrayo0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kabula-brianmicrobiologylabanalyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Linkedin size={13} />
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={13} />
                Kenya, East Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} Brian Aleka Kabula. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Laboratory Scientist · Rongo University, BSc Microbiology
          </p>
        </div>
      </div>
    </footer>
  );
}
