import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Timeline from './components/Timeline';
import Recruitment from './components/Recruitment';

function App() {
  return (
    <div className="App">
      <Loader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About/>
      <Timeline />
      <Skills />
      <Projects />
      <Recruitment />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

 