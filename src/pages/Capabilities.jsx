import './Capabilities.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Capabilities = () => {

  const categories = [
    {
      id: 1,
      title: 'Visual Development',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'

    },
    {
      id: 2,
      title: 'StageCraft',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 3,
      title: 'Visual Effects',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 4,
      title: 'Feature Animation',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80'
    },
    {
      id: 5,
      title: 'Immersive Entertainment',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80'
    }
  ];

  return (
    <div id="capabilities" className="capabilities-page">
           <div className="capabilities-header">
        <h2 className="capabilities-title">Capabilities</h2>
      </div>

      {/* Categories grid (moved from components/Capabilities) */}
      <section className="capabilities-categories">
        <div className="capabilities-container">
          <div className="capabilities-categories-grid">
            {categories.map((cat, idx) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div
                  key={cat.id}
                  ref={ref}
                  className={`capabilities-cat-card ${isVisible ? 'animate-reveal' : ''} ${idx % 2 === 0 ? 'stagger-1' : 'stagger-2'}`}
                >
                  <div className="capabilities-cat-image">
                    {typeof cat.image === 'string' && cat.image.endsWith('.mp4') ? (
                      <video src={cat.image} muted loop playsInline autoPlay />
                    ) : (
                      <img src={cat.image} alt={cat.title} />
                    )}
                    <div className="capabilities-cat-overlay" />
                  </div>
                  <div className="capabilities-cat-title">{cat.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>  
    </div>
  );
};

export default Capabilities;
