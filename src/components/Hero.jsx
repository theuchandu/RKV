import { useState, useEffect } from 'react';
import './Hero.css';
// import hero1 from '../assets/hero_1.mp4';

const Hero = () => {
  const projects = [
    {
      id: 1,
      title: 'Troll 2',
      subtitle: 'A new troll has awakened!',
      // cta: 'Watch the trailer',
     image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=2000&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Néro The Assassin',
      subtitle: 'France, 1504.',
      // cta: 'Learn More',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=80&auto=format&fit=crop'

    },
    {
      id: 3,
      title: 'Cold Storage',
      subtitle: "If it spreads, you're dead.",
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2000&q=80&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'The Walking Dead: Daryl Dixon',
      subtitle: 'On AMC & AMC+',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=80&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Dracula: A Love Tale',
      subtitle: 'In cinemas on July 30',
      // cta: 'Watch the trailer',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=2000&q=80&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Emilia Pérez',
      subtitle: 'Mexico, today. Lawyer Rita receives an unexpected offer.',
      // cta: 'Learn more',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=2000&q=80&auto=format&fit=crop'
    }
  ];

  // Default to the very first slide on load (use 0). Preserve findIndex logic only
  // if you want to highlight a specific slide by default in the future.
  const idx = projects.findIndex(p => /n[eé]ro/i.test(p.title));
  const defaultIndex = idx === -1 ? 0 : 0; // always start at 0 to show first slide
  const [active, setActive] = useState(defaultIndex);
  const [paused, setPaused] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  const activeProject = projects[active] || projects[0];

  // autoplay: advance every 10 seconds; pauses while hovered
  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearTimeout(t);
  }, [active, paused, projects.length]);

  useEffect(() => {
    // log current media URL for debugging when hero mounts/changes
    console.debug('Hero active media:', activeProject.image);
    // reset media error when slide changes using a micro task to avoid
    // triggering a synchronous state update inside an effect
    const t = setTimeout(() => setMediaError(false), 0);
    return () => clearTimeout(t);
  }, [activeProject.image]);

  return (
    <section id="hero" className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-media">
        {activeProject.image && String(activeProject.image).endsWith('.mp4') && !mediaError ? (
          <video
            className="hero-bg"
            src={activeProject.image}
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              console.error('Hero video failed to load', e);
              setMediaError(true);
            }}
            onLoadedData={() => {
              console.debug('Hero video loaded');
            }}
          />
        ) : (
          <img className="hero-bg" src={mediaError ? (projects.find(p => !String(p.image).endsWith('.mp4')) || {}).image || '/fallback-hero.jpg' : activeProject.image} alt={activeProject.title} />
        )}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{activeProject.title}</h1>
      </div>

      <div className="hero-bottom-left">
        <p className="hero-subtitle">{activeProject.subtitle}</p>
        {activeProject.cta && (
          <button className="hero-cta">{activeProject.cta}</button>
        )}
      </div>

      <div className="hero-pagination" aria-hidden>
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`hero-dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            title={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

