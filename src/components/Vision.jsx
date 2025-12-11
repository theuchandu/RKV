import './Vision.css';

const Vision = () => {
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
    <section className="vision">
      <div className="vision-container">
        <h2 className="vision-title">WE MAKE ANY VISION A REALITY</h2>
        <p className="vision-description">
          We're the team behind the VFX for <em>The Last Duel</em>, <em>Emilia Pérez</em>, <em>Under Paris</em>, 
          <em> The Walking Dead: Daryl Dixon</em>, and <em>The Nun 2</em>.<br />
          We create immersive worlds, bring characters to life, and craft moments that captivate audiences worldwide.
        </p>
        <div className="vision-highlights">
          <div className="highlight-card">
            <div className="highlight-badge">NEWS</div>
            <h3>BASTILLE</h3>
            <p>We've moved to 10 Boulevard de la Bastille in Paris</p>
            <a 
              href="#news" 
              className="highlight-link"
              onClick={(e) => handleNavClick(e, 'news')}
            >
              Learn More →
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-badge">VFX Breakdown</div>
            <h3>Dracula</h3>
            <p>Dive behind the scenes of Dracula</p>
            <a 
              href="#showreels" 
              className="highlight-link"
              onClick={(e) => handleNavClick(e, 'showreels')}
            >
              Watch here →
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-badge">VFX Breakdown</div>
            <h3>Emilia Pérez</h3>
            <p>350+ shots for Jacques Audiard's multi-award-winning film</p>
            <a 
              href="#showreels" 
              className="highlight-link"
              onClick={(e) => handleNavClick(e, 'showreels')}
            >
              Watch here →
            </a>
          </div>
        </div>
        <a 
          href="#capabilities" 
          className="view-all-work"
          onClick={(e) => handleNavClick(e, 'capabilities')}
        >
          View all work →
        </a>
      </div>
    </section>
  );
};

export default Vision;
