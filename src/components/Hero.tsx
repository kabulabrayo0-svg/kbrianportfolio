import { Download, Mail, Linkedin, Phone, ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #102a43 0%, #1a4a6e 40%, #0f5f7a 70%, #0d9488 100%)',
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-navy-700 to-teal-800 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Laboratory scientist"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">BSc</span>
              </div>
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                <span className="text-white text-lg">🔬</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/20 border border-teal-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-xs font-medium uppercase tracking-widest">Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight font-serif">
              Brian Aleka
              <span className="block text-teal-300">Kabula</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {[
                'Laboratory Scientist',
                'Microbiologist',
                'Environmental Monitoring Professional',
                'Emerging Marine Researcher',
              ].map((title) => (
                <span
                  key={title}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/90 text-xs font-medium"
                >
                  {title}
                </span>
              ))}
            </div>

            <p className="text-white/70 text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
              Applying microbiology, laboratory science, environmental monitoring, and data-driven approaches to support public health, marine ecosystem sustainability, and scientific research.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5">
                <Download size={16} />
                Download CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/kabula-brianmicrobiologylabanalyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5]/80 border border-[#0077b5] text-white font-semibold rounded-lg hover:bg-[#0077b5] transition-all duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/60 text-sm">
              <a href="tel:+254713030630" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
                <Phone size={14} />
                +254 713 030 630
              </a>
              <a href="mailto:kabulabrayo0@gmail.com" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
                <Mail size={14} />
                kabulabrayo0@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Kenya
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
