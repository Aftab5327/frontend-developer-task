import React, { useState } from 'react';
import './style.css';
import LightsCard from './components/LightsCard';
import WaterCard from './components/WaterCard';
import CarbonCard from './components/CarbonCard';
import EnergyCard from './components/EnergyCard';
import FootfallCard from './components/FootfallCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'analyse' | 'control'>('home');

  return (
    <div className="app-root">
      <header className="top-bar">
        <div className="brand">
          <img
            src="/ui_design_resources/ds-logo.svg"
            alt="DigiSpace logo"
            className="brand-logo"
          />
        </div>
        <div className="top-right">
          <div className="user-avatar" />
        </div>
      </header>

      <aside className="sidebar">
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === 'home' ? 'nav-item-active' : ''}`}
            type="button"
            onClick={() => setActiveSection('home')}
          >
            <img
              src="/ui_design_resources/nav-icons/home.svg"
              alt="Home"
              className="nav-icon"
            />
            <span className="nav-label">Home</span>
          </button>
          <button
            className={`nav-item ${activeSection === 'analyse' ? 'nav-item-active' : ''}`}
            type="button"
            onClick={() => setActiveSection('analyse')}
          >
            <img
              src="/ui_design_resources/nav-icons/pie.svg"
              alt="Analyse"
              className="nav-icon"
            />
            <span className="nav-label">Analyse</span>
          </button>
          <button
            className={`nav-item ${activeSection === 'control' ? 'nav-item-active' : ''}`}
            type="button"
            onClick={() => setActiveSection('control')}
          >
            <img
              src="/ui_design_resources/nav-icons/tiles.svg"
              alt="Control"
              className="nav-icon"
            />
            <span className="nav-label">Control</span>
          </button>
        </nav>
        <div className="sidebar-fade" />
      </aside>

      <div className="main-shell">
        <main className="dashboard">
          {activeSection === 'home' && (
            <>
              <section className="grid grid-six">
                <LightsCard />
                <WaterCard />
                <CarbonCard />
                <EnergyCard />
                <FootfallCard />
                <div className="grid-empty" aria-hidden="true" />
              </section>
            </>
          )}

          {activeSection === 'analyse' && (
            <div className="placeholder-screen">
              <h2>Analyse</h2>
              <p>Detailed analytics view can be plugged in here.</p>
            </div>
          )}

          {activeSection === 'control' && (
            <div className="placeholder-screen">
              <h2>Control</h2>
              <p>Device control view can be implemented here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;


