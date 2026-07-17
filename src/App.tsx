import { useCursorGlow } from './hooks';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { ref, visible } = useCursorGlow();

  return (
    <div className="relative min-h-screen bg-noir-bg font-body text-noir-text">
      {/* cursor glow */}
      <div
        ref={ref}
        className="cursor-glow"
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />

      {/* ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-crimson-700/8 blur-[140px]" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-crimson-500/6 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-crimson-900/10 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
