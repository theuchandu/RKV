import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
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

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LET'S GET SOCIAL</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Discover our VFX demos and our creative worlds</h3>
            <p>Discover our VFX demos to learn more about our studio and explore the projects crafted by our artists across film & series.</p>
            <a 
              href="#showreels" 
              className="footer-link"
              onClick={(e) => handleNavClick(e, 'showreels')}
            >
              Discover here →
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-column">
            <h4>Work</h4>
            <a href="#showreels" onClick={(e) => handleNavClick(e, 'showreels')}>Showreels</a>
            <a href="#capabilities" onClick={(e) => handleNavClick(e, 'capabilities')}>Our Work</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About TransPerfect</a>
          </div>
          <div className="footer-nav-column">
            <h4>Company</h4>
            <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
            <a href="#news" onClick={(e) => handleNavClick(e, 'news')}>News</a>
            <a href="#join" onClick={(e) => handleNavClick(e, 'join')}>Join us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-nav-column">
            <h4>Partners</h4>
            <a href="#">RKV </a>
            <a href="#">RKV</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 RKV Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
