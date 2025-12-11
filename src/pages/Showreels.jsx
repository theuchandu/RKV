import './Showreels.css';

const Showreels = () => {
  const projects = [
    {
      id: 1,
      title: 'Predator: Badlands',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'

    },
    {
      id: 2,
      title: 'The Lost Bus',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 4,
      title: 'The Running Man',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',

    },
    {
      id: 5,
      title: 'The Running Man',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',

    },
    {
      id: 6,
      title: 'The Running Man',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    
  ];

  return (
    <section id="showreels" className="showreels-section">
      <div className="showreels-container">
        <h2 className="showreels-heading">Recent Projects</h2>
        <div className="showreels-grid">
          {projects.map((project) => (
            <div key={project.id} className="showreel-card">
              <div className="showreel-image">
                {typeof project.image === 'string' && project.image.endsWith('.mp4') ? (
                  <video src={project.image} muted loop playsInline autoPlay />
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
              </div>
              <div className="showreel-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreels;

