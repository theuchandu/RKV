import { useState, useEffect } from 'react';
import './Hero.css';
import heroimg1 from '../assets/hero_1img.jpg';
import heroimg2 from '../assets/hero_2img.jpg';
import heroimg3 from '../assets/hero_3img.jpg';

const Hero = () => {
  const projects = [
    {
      id: 1,
      title: 'Visual Development',
      // subtitle: 'A new troll has awakened!',
      // cta: 'Watch the trailer',
      // image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&q=80&auto=format&fit=crop',
      image: heroimg1,
    },
    {
      id: 2,
      title: 'Stage Craft',
      // subtitle: 'France, 1504.',
      // cta: 'Learn More',
        // image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2000&q=80&auto=format&fit=crop'
        image: heroimg2,

    },
    {
      id: 3,
      title: 'Visual Effect',
      // subtitle: "If it spreads, you're dead.",
      // image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2000&q=80&auto=format&fit=crop'
      image: heroimg3,
    },
    {
      id: 4,
      title: 'Feature Animation',
      // subtitle: 'On AMC & AMC+',
      // image: 'https://www.freepik.com/free-photo/doomsday-scene-catastrophe-digital-illustration_14541101.htm#fromView=search&page=1&position=12&uuid=bf58e4f5-533a-4248-a220-62f97acefae9&query=vfx+breakdown',
      image:heroimg2,
    },
    {
      id: 5,
      title: 'Immersive Experiences',
      // subtitle: 'In cinemas on July 30',
      // cta: 'Watch the trailer',
      // image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=2000&q=80&auto=format&fit=crop'
      image: heroimg1,
    },
    {
      id: 6,
      title: 'Emilia Pérez',
      // subtitle: 'Mexico, today. Lawyer Rita receives an unexpected offer.',
      // cta: 'Learn more',
      // image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=2000&q=80&auto=format&fit=crop'
      image: heroimg3,
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

