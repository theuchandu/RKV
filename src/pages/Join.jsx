import './Join.css';

const Join = () => {
  const positions = [
    {
      id: 1,
      title: 'Senior VFX Artist',
      department: 'Compositing',
      location: 'Paris, France',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Character Animator',
      department: 'Animation',
      location: 'Paris, France',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Environment Artist',
      department: '3D',
      location: 'Paris, France',
      type: 'Full-time'
    },
  ];

  return (
    <div id="join" className="join-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Join Us</h1>
          <p className="page-hero-subtitle">Be Part of a Creative Studio That Thrives on Collaboration</p>
        </div>
      </section>

      <section className="join-content">
        <div className="join-container">
          <div className="join-intro">
            <h2>Why Join Our Team?</h2>
            <p>
              Be part of a creative studio that thrives on collaboration and co-creation, working with 
              the world's most visionary directors and showrunners. We offer a dynamic work environment 
              where your creativity and expertise can flourish.
            </p>
          </div>

          <div className="benefits-section">
            <h2>What We Offer</h2>
            <div className="benefits-grid">
              <div className="benefit-item animate-reveal stagger-1">
                <h3>Creative Freedom</h3>
                <p>Work on exciting projects with creative autonomy and artistic expression.</p>
              </div>
              <div className="benefit-item animate-reveal stagger-2">
                <h3>World-Class Projects</h3>
                <p>Collaborate on award-winning films and television series.</p>
              </div>
              <div className="benefit-item animate-reveal stagger-3">
                <h3>Professional Growth</h3>
                <p>Continuous learning opportunities and career development programs.</p>
              </div>
              <div className="benefit-item animate-reveal stagger-4">
                <h3>Collaborative Environment</h3>
                <p>Work alongside talented artists and industry professionals.</p>
              </div>
            </div>
          </div>

          <div className="positions-section">
            <h2>Open Positions</h2>
            <div className="positions-list">
              {positions.map((position, idx) => (
                <div key={position.id} className={`position-card animate-reveal stagger-${idx + 1}`}>
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <span className="position-type">{position.type}</span>
                  </div>
                  <div className="position-details">
                    <span className="position-department">{position.department}</span>
                    <span className="position-location">{position.location}</span>
                  </div>
                  <a href="#" className="apply-button">Apply Now →</a>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2>Don't See a Position That Fits?</h2>
            <p>We're always looking for talented individuals. Send us your resume and portfolio.</p>
            <a href="mailto:careers@vfxstudio.com" className="contact-button">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;

