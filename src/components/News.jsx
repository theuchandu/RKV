import './News.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Breakdowns',
      title: 'Colours of Time VFX Breakdown',
      description: 'The VFX breakdown of our work on Colours of Time…',
      date: 'November 17, 2025',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80'
    },
    {
      id: 2,
      category: 'Trailers',
      title: 'Cold Storage | Official Trailer',
      description: 'One bad day can be contagious.',
      date: 'November 14, 2025',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80'
    },
    {
      id: 3,
      category: 'Trailers',
      title: 'Resurrection | Official Trailer',
      description: 'In a future where humanity has surrendered its ability to…',
      date: 'November 12, 2025',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80'
    },
    {
      id: 4,
      category: 'Events',
      title: 'MPC Paris is taking part in the eighth edition of the Atlas Workshops in Marrakech',
      description: 'MPC Paris will take part in the eighth edition of…',
      date: 'November 10, 2025',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80'
    },
    {
      id: 5,
      category: 'News',
      title: 'The Paris teams of MPC & The Mill have moved to Bastille',
      description: 'Since early October, the MPC and The Mill teams have…',
      date: 'November 6, 2025',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80'
    },
    {
      id: 6,
      category: 'Press',
      title: 'MPC Paris brings the Grande Arche construction site back to life',
      description: 'The MPC Paris teams handled the supervision, digital visual effects…',
      date: 'November 4, 2025',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&q=80'
    }
  ];

  return (
    <section id="news" className="news">
      <div className="news-container">
        <h2 className="news-title">LATEST NEWS</h2>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
                <div className="news-card-category">{item.category}</div>
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-description">{item.description}</p>
                <time className="news-card-date">{item.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

