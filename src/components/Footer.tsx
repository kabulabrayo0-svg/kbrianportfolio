import { FlaskConical, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <FlaskConical size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Brian Aleka Kabula</span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: 'Profile', href: '#profile' },
              { label: 'Experience', href: '#experience' },
              { label: 'Research', href: '#research' },
              { label: 'Education', href: '#education' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-slate-400 hover:text-teal-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+254713030630" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Phone size={14} />
            </a>
            <a href="mailto:kabulabrayo0@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/kabula-brianmicrobiologylabanalyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} Brian Aleka Kabula
          </p>
          <p className="text-slate-600 text-xs">
            Laboratory Scientist · BSc Microbiology
          </p>
        </div>
      </div>
    </footer>
  );
}
