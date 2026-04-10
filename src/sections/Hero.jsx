import { useEffect, useState } from 'react';
import './Hero.css';

const TYPED_WORDS = ['Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'Problem Solver'];

const Hero = () => {
  const [wordIndex, setWordIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [deleting,  setDeleting]    = useState(false);
  const [charIdx,   setCharIdx]     = useState(0);

  /* Typewriter effect */
  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }

    setDisplayed(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-tag">✦ Available for opportunities</div>

        <h1 className="hero-name">
          Siddhartha<br />
          <span className="hero-name-accent">Tiwari</span>
        </h1>

        <p className="hero-tagline">
          <span className="typewriter">{displayed}</span>
          <span className="caret">|</span>
        </p>

        <p className="hero-desc">
          Crafting immersive web experiences with clean code, modern design,
          and a passion for turning ideas into pixel-perfect reality.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects →
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Let's Talk
          </button>
        </div>

        <div className="hero-stats">
          {[
            { num: '10+', label: 'Projects Built' },
            { num: '2+',  label: 'Years Experience' },
            { num: '5+',  label: 'Tech Stack' },
          ].map(({ num, label }) => (
            <div className="stat" key={label}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        SCROLL DOWN
      </div>
    </section>
  );
};

export default Hero;
