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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
