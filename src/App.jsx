import useReveal from './hooks/useReveal';

// Components
import Cursor         from './components/Cursor';
import Navbar         from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Footer         from './components/Footer';

// Sections
import Hero       from './sections/Hero';
import About      from './sections/About';
import Experience from './sections/Experience';
import Projects   from './sections/Projects';
import Skills     from './sections/Skills';
import Contact    from './sections/Contact';

const App = () => {
  useReveal();

  return (
    <>
      {/* 3D Animated Background */}
      <ThreeBackground />

      {/* Custom Cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
