import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Accomplishments from './components/Accomplishments';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Accomplishments />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
