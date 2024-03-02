import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Contact';
import Skills from './components/Skills';
import Project from './components/Projects';

function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <br/>
      <Hero/>
      <br/>
      <br/>
      <About/>
      <br/>
      <Skills/>
      <br/>
      <Project/>
     
      <Footer/>
    </div>
    </>
  );
}

export default App;
