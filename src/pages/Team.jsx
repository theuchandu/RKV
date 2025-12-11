import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Leading creative vision with 15+ years of experience in visual effects.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'VFX Supervisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Overseeing complex VFX projects from concept to final delivery.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Lead Animator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Bringing characters to life through masterful animation techniques.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Compositing Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Expert in seamless integration of VFX elements into live action.'
    },
    
  ];

  return (
    <div id="team" className="team-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Team</h1>
          <p className="page-hero-subtitle">The Creative Minds Behind the Magic</p>
        </div>
      </section>

      <section className="team-content">
        <div className="team-container">
          <div className="team-intro">
            <h2>Meet the Artists</h2>
            <p>
              Our team consists of world-class artists, technicians, and creative professionals 
              who bring passion and expertise to every project. From concept artists to compositors, 
              we work together to create visual effects that push the boundaries of storytelling.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

