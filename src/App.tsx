import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import SkillsDashboard from './components/SkillsDashboard';
import ResearchInterests from './components/ResearchInterests';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Profile />
      <About />
      <Competencies />
      <Experience />
      <SkillsDashboard />
      <ResearchInterests />
      <Projects />
      <Education />
      <Certifications />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}
