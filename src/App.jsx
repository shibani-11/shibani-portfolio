import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
