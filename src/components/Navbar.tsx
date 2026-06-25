import { useState, useEffect } from 'react';
import { Menu, X, FlaskConical } from 'lucide-react';

const navLinks = [
  { label: 'Profile', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy-800 to-teal-600 flex items-center justify-center">
              <FlaskConical size={16} className="text-white" />
            </div>
            <span className={`font-semibold text-sm tracking-wide transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              BAK
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                  scrolled ? 'text-slate-700 hover:text-teal-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 bg-teal-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-teal-700 transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-navy-900' : 'text-white'}`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-slate-100 shadow-lg max-w-md ml-auto rounded-bl-xl">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-teal-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 text-center px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
