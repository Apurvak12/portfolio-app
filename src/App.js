import './App.css';
import Header from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Projects';


function App() {
  return (
    
      <div className="App">
        <Header />
        <Hero/>
        <About />
        <Skills/>
        <Project/>
        <Footer/>
      </div>
      
    
  );
}

export default App;
