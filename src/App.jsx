import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="container">
            <NavLink to="/" className="nav-brand" onClick={closeMenu}>
              <div className="logo">DS</div>
              <span className="brand-name">Diwakar Singh</span>
            </NavLink>
            
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {menuActive ? '✕' : '☰'}
            </button>
            
            <div className={`nav-links ${menuActive ? 'active' : ''}`}>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Experience
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Skills
              </NavLink>
              <NavLink 
                to="/education" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Education
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer>
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <h4>About</h4>
                <p>Data Analyst, Data Scientist &amp; Software Engineer specializing in ML pipelines, Python, FastAPI, and scalable data-driven applications.</p>
                <div className="social-links">
                  <a href="https://github.com/diwakar-codes" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/diwakar-codes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://leetcode.com/u/diwakar-codes" target="_blank" rel="noopener noreferrer">LeetCode</a>
                </div>
              </div>
              
              <div className="footer-section">
                <h4>Quick Links</h4>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
                <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
                <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
              </div>
              
              <div className="footer-section">
                <h4>Contact</h4>
                <a href="mailto:rajputdiwakar2002@gmail.com">rajputdiwakar2002@gmail.com</a>
                <a href="tel:+919125316220">+91-9125316220</a>
                <NavLink to="/contact" onClick={closeMenu}>Contact Form</NavLink>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Diwakar Singh. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
