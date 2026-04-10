import experiences from '../data/experience';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="section-wrap experience-section">
    <div className="section-label">// 03. experience</div>
    <h2 className="section-title">Work <em>Experience</em></h2>
    <div className="divider" />

    <div className="exp-timeline">
      {experiences.map((exp, i) => (
        <div key={exp.id} className="exp-item reveal" style={{ transitionDelay: `${i * 0.12}s` }}>

          {/* Timeline dot & line */}
          <div className="timeline-track">
            <div className="timeline-dot">
              <div className="dot-inner" />
            </div>
            <div className="timeline-line" />
          </div>

          {/* Card */}
          <div className="exp-card">
            {/* Card header */}
            <div className="exp-header">
              <div className="exp-header-left">
                <span className="exp-badge">💼 {exp.type}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <div className="exp-header-right">
                <div className="exp-duration">
                  <span className="duration-dot" />
                  {exp.duration}
                </div>
                <div className="exp-location">📍 {exp.location}</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="exp-stats">
              {exp.stats.map((s) => (
                <div className="exp-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="exp-points">
              {exp.points.map((point, idx) => (
                <li key={idx}>
                  <span className="bullet-arrow">▹</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="exp-tags">
              {exp.tags.map((t) => (
                <span className="exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
