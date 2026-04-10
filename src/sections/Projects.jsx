import projects from '../data/projects';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
  <div
    className="project-card reveal"
    style={{ transitionDelay: `${index * 0.12}s` }}
  >
    {/* Thumbnail */}
    <div className="project-thumb" style={{ background: project.bg }}>
      <span className="project-emoji">{project.emoji}</span>
      <div className="thumb-overlay" />
    </div>

    {/* Body */}
    <div className="project-body">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((t) => (
          <span className="project-tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.demo} className="project-link pl-demo" target="_blank" rel="noreferrer">
          Live Demo ↗
        </a>
        <a href={project.code} className="project-link pl-code" target="_blank" rel="noreferrer">
          GitHub →
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="section-wrap projects-section">
    <div className="section-label">// 03. projects</div>
    <h2 className="section-title">Featured <em>Work</em></h2>
    <div className="divider" />

    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
