import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <Routes>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
