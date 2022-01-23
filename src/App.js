import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from './Pages/Portfolio.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Experience from './Pages/Experience.js'
import Education from './Pages/Education.js'
import Skills from './Pages/Skills.js'

function App() {
  return (
    <div >
      <div id="parent">
        <header>
          <Link id="name" to="/"> 
            <button type="button" className="title">
              Richard Cho 
            </button>
          </Link>
          <img src="/code-image.svg" id="header-image"/>
        </header>       

        {/* Navigation links */}
        <nav className="nav-links">
          <Link className="individual-link" to="/about" >
            <button type="button" className="nav-button">
              About
            </button>
          </Link>
          <Link className="individual-link" to="/experience" >
            <button type="button" className="nav-button">
              Experience
            </button>
          </Link>
          <Link className="individual-link" to="/education" >
            <button type="button" className="nav-button">
              Education
            </button>
          </Link>
          <Link className="individual-link" to="/skills" >
            <button type="button" className="nav-button">
              Skills
            </button>
          </Link>
          <Link className="individual-link" to="/portfolio" >
            <button type="button" className="nav-button">
              Portfolio
            </button>
          </Link>
        </nav>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

    </div>
  );
}

export default App;
