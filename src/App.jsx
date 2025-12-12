import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import DocumentationLab from './components/DocumentationLab.jsx';
import ProjectManager from './components/ProjectManager.jsx';
import RequirementsSim from './components/RequirementsSim.jsx';
import SupportTriage from './components/SupportTriage.jsx';

import SAicon from './SAicon.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="app">
      <header className="app-header">
        <img src={SAicon} alt="Systems Analyst Icon" className="app-icon" />
        <h1>Systems Analyst Simulator</h1>

        <button 
          className="menu-button" 
          onClick={toggleMenu} 
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/requirements" onClick={() => setMenuOpen(false)}>Requirements</Link>
          <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/docs" onClick={() => setMenuOpen(false)}>Docs</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/requirements" element={<RequirementsSim />} />
          <Route path="/support" element={<SupportTriage />} />
          <Route path="/projects" element={<ProjectManager />} />
          <Route path="/docs" element={<DocumentationLab />} />
        </Routes>

        {/* Music playlist area */}
        <section className="music-player">
          <h2>Study Playlist</h2>
          <p>Add your favorite study tunes below:</p>
          <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
          </audio>
        </section>
      </main>

      <footer className="app-footer">
        Practice simulations for Systems Analyst tasks.
      </footer>
    </div>
  );
}
