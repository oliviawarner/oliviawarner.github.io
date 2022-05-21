import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />     
      </Routes>
    </>
  );
}

export default App;
