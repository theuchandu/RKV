import './About.css';

const About = () => {
  return (
    <div id="about" className="about-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p className="page-hero-subtitle">We Make Any Vision A Reality</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              For 40 years, we have been contributing to visual storytelling – creating realistic fur, 
              dynamic crowds, and detailed environments and sets. We're the team behind the VFX for 
              <em> The Last Duel</em>, <em>Emilia Pérez</em>, <em>Under Paris</em>, 
              <em> The Walking Dead: Daryl Dixon</em>, and <em>The Nun 2</em>.
            </p>
            <p>
              We create immersive worlds, bring characters to life, and craft moments that captivate 
              audiences worldwide. Our passion for visual effects drives us to push the boundaries of 
              what's possible in film and television.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to bring the most ambitious creative visions to life through cutting-edge 
              visual effects technology and unparalleled artistic talent. We collaborate with the world's 
              most visionary directors and showrunners to create spectacular scenes that leave lasting 
              impressions.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

