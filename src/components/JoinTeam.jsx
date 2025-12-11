import './JoinTeam.css';

const JoinTeam = () => {
  return (
    <section id="join" className="join-team">
      <div className="join-team-container">
        <div className="join-team-content">
          <h2 className="join-team-title">CREATING SPECTACULAR SCENES</h2>
          <p className="join-team-description">
            For 40 years, we have been contributing to visual storytelling – creating realistic fur, 
            dynamic crowds, and detailed environments and sets.
          </p>
        </div>
        <div className="join-team-cta">
          <h2 className="join-team-title">JOIN OUR TEAM</h2>
          <p className="join-team-description">
            Be part of a creative studio that thrives on collaboration and co-creation, working with 
            the world's most visionary directors and showrunners.
          </p>
          <a href="#careers" className="join-team-button">Careers →</a>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;

