import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
 
export default App;
 