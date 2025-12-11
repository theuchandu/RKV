import { useState, useEffect } from 'react';
import rkvLogo from '../assets/main_Logo/RKV LOGO FINAL.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
      const handleScroll = () => {
        const sections = ['hero', 'about', 'capabilities', 'showreels', 'team', 'news', 'join'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              <img src={rkvLogo} alt="RKV Logo" />
            </a>
          </div>
        
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          
          <a 
            href="#capabilities" 
            className={isActive('capabilities') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'capabilities')}
          >
            Capabilities
          </a>
          <a 
            href="#showreels" 
            className={isActive('showreels') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'showreels')}
          >
            Showreels
          </a>
          <a 
            href="#team" 
            className={isActive('team') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'team')}
          >
            Team
          </a>
          <a 
            href="#about" 
            className={isActive('about') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          {/* <a 
            href="#Conatctus" 
            className={isActive('Conatctus') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'Conatctus')}
          >
            Conatct us
          </a> */}
          {/* <a 
            href="#news" 
            className={isActive('news') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'news')}
          >
            News
          </a> */}
        </nav>
        <div className="header-actions">
          <button
            className="join-us"
            onClick={(e) => handleNavClick(e, 'join')}
            aria-label="Join Us"
          >
            Join Us
          </button>
          <button 
            className="search-icon"
            aria-label="Search"
          >
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
