import { useEffect, useRef } from 'react';
import skills from '../data/skills';
import './Skills.css';

const SkillBar = ({ name, level, color }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-row">
      <div className="skill-row-head">
        <span>{name}</span>
        <em>{level}%</em>
      </div>
      <div className="bar-bg">
        <div
          ref={barRef}
          className="bar-fill"
          style={{ width: 0, background: `linear-gradient(90deg, ${color}, var(--accent2))` }}
        />
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="section-wrap skills-section">
    <div className="section-label">// 04. skills</div>
    <h2 className="section-title">Tech <em>Stack</em></h2>
    <div className="divider" />

    <div className="skills-grid">
      {skills.map((cat, ci) => (
        <div
          key={cat.category}
          className="skills-cat reveal"
          style={{ transitionDelay: `${ci * 0.14}s` }}
        >
          <h3 className="cat-title" style={{ color: cat.colorVar }}>
            {cat.category}
          </h3>

          {cat.items.map((sk) => (
            <SkillBar
              key={sk.name}
              name={sk.name}
              level={sk.level}
              color={cat.colorVar}
            />
          ))}
        </div>
      ))}
    </div>

    {/* Icon badges row */}
    <div className="tech-icons reveal" style={{ transitionDelay: '0.35s' }}>
      {['⚛️ React', '🟨 JavaScript', '🎨 CSS3', '🌿 Node.js', '🍃 MongoDB', '🔷 TypeScript', '🐙 Git', '🎭 Figma'].map((t) => (
        <div className="tech-badge" key={t}>{t}</div>
      ))}
    </div>
  </section>
);

export default Skills;
