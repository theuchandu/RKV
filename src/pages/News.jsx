import './NewsPage.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Breakdowns',
      title: 'Colours of Time VFX Breakdown',
      description: 'The VFX breakdown of our work on Colours of Time showcases our expertise in creating stunning visual effects that enhance the narrative.',
      date: 'November 17, 2025',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      category: 'Trailers',
      title: 'Cold Storage | Official Trailer',
      description: 'One bad day can be contagious. Watch the official trailer for our latest project.',
      date: 'November 14, 2025',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      featured: false
    },
    {
      id: 3,
      category: 'Trailers',
      title: 'Resurrection | Official Trailer',
      description: 'In a future where humanity has surrendered its ability to dream, one woman fights to restore hope.',
      date: 'November 12, 2025',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
      featured: false
    },
    {
      id: 4,
      category: 'Events',
      title: 'MPC Paris is taking part in the eighth edition of the Atlas Workshops in Marrakech',
      description: 'MPC Paris will take part in the eighth edition of the Atlas Workshops, showcasing our latest innovations in visual effects.',
      date: 'November 10, 2025',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      category: 'News',
      title: 'The Paris teams of MPC & The Mill have moved to Bastille',
      description: 'Since early October, the MPC and The Mill teams have relocated to our new state-of-the-art facility at 10 Boulevard de la Bastille in Paris.',
      date: 'November 6, 2025',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      category: 'Press',
      title: 'MPC Paris brings the Grande Arche construction site back to life',
      description: 'The MPC Paris teams handled the supervision, digital visual effects, and post-production for this ambitious project.',
      date: 'November 4, 2025',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
      featured: false
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div id="news" className="news-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>News</h1>
          <p className="page-hero-subtitle">Latest Updates & Announcements</p>
        </div>
      </section>

      <section className="news-content">
        <div className="news-container">
          {featuredNews && (
            <article className="featured-news">
              <div className="featured-news-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <div className="featured-news-category">{featuredNews.category}</div>
              </div>
              <div className="featured-news-content">
                <time className="featured-news-date">{featuredNews.date}</time>
                <h2>{featuredNews.title}</h2>
                <p>{featuredNews.description}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          )}

          <div className="news-grid">
            {regularNews.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-category">{item.category}</div>
                </div>
                <div className="news-card-content">
                  <time className="news-card-date">{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

