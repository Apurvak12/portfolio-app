import './App.css';
import Header from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Contact';
import Skills from './components/Skills';
import Project from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
