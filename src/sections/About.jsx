// import './About.css';

// const SKILLS_CHIPS = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'Git', 'Figma', 'Express.js'];

// const About = () => (
//   <section id="about" className="section-wrap about-section">
//     <div className="section-label">// 01. about me</div>
//     <h2 className="section-title">Who <em>I Am</em></h2>
//     <div className="divider" />

//     <div className="about-grid">
//       {/* Avatar */}
//       <div className="about-img-wrap reveal">
//         <div className="about-avatar">
//           <span className="avatar-initials">ST</span>
//           <div className="avatar-ring ring1" />
//           <div className="avatar-ring ring2" />
//         </div>
//         <div className="about-glow" />

//         {/* Info badges */}
//         <div className="badge badge-location">📍 India</div>
//         <div className="badge badge-status">🟢 Open to work</div>
//       </div>

//       {/* Text */}
//       <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
//         <p>
//           Hi! I'm <strong className="highlight">Siddhartha Tiwari</strong>, a passionate
//           Frontend Developer specializing in building exceptional digital experiences.
//           I turn complex problems into elegant, user-friendly solutions.
//         </p>
//         <p>
//           With a strong foundation in <strong className="highlight">React.js</strong> and
//           modern JavaScript, I focus on writing clean, scalable code while keeping
//           performance and accessibility at the forefront. I love exploring new
//           technologies and pushing the boundaries of what's possible on the web.
//         </p>
//         <p>
//           When I'm not coding, you'll find me exploring design trends, contributing
//           to open source, or levelling up my backend skills with Node.js &amp; MongoDB.
//         </p>

//         <div className="about-chips">
//           {SKILLS_CHIPS.map((s) => (
//             <span className="chip" key={s}>{s}</span>
//           ))}
//         </div>

//         <div className="edu-card">
//           <div className="edu-icon">🎓</div>
//           <div>
//             <h4>Master of Computer Applications (MCA)</h4>
//             <p>Computer Science &amp; Engineering · 2022 – 2024</p>
//           </div>
//         </div>
//              <div className="edu-card">
//           <div className="edu-icon">🎓</div>
//           <div>
//             <h4>Bachelor of Science in Information Technology(I.T)</h4>
//             <p>Information Technology(I.T) &amp; Engineering · 2019 – 2022</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default About;





import './About.css';

import profileImg from '../assets/images/P1.jpg';

const SKILLS_CHIPS = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'Git', 'Figma', 'Express.js'];

const About = () => (
  <section id="about" className="section-wrap about-section">
    <div className="section-label">// 01. about me</div>
    <h2 className="section-title">Who <em>I Am</em></h2>
    <div className="divider" />

    <div className="about-grid">
      {/* Avatar */}
      <div className="about-img-wrap reveal">
        <div className="about-avatar">
          {/* <span className="avatar-initials">ST</span> */}




          <img src={profileImg} alt="Siddhartha Tiwari" className="avatar-img" />






          <div className="avatar-ring ring1" />
          <div className="avatar-ring ring2" />
        </div>
        <div className="about-glow" />

        {/* Info badges */}
        <div className="badge badge-location">📍 India</div>
        <div className="badge badge-status">🟢 Open to work</div>
      </div>

      {/* Text */}
      <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
        <p>
          Hi! I'm <strong className="highlight">Siddhartha Tiwari</strong>, a passionate
          Frontend Developer specializing in building exceptional digital experiences.
          I turn complex problems into elegant, user-friendly solutions.
        </p>
        <p>
          With a strong foundation in <strong className="highlight">React.js</strong> and
          modern JavaScript, I focus on writing clean, scalable code while keeping
          performance and accessibility at the forefront. I love exploring new
          technologies and pushing the boundaries of what's possible on the web.
        </p>
        <p>
          When I'm not coding, you'll find me exploring design trends, contributing
          to open source, or levelling up my backend skills with Node.js &amp; MongoDB.
        </p>

        <div className="about-chips">
          {SKILLS_CHIPS.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>

        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div>
            <h4>Master of Computer Applications (MCA)</h4>
            <p>Computer Science &amp; Engineering · 2022 – 2024</p>
          </div>
        </div>
               <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div>
            <h4>Bachelor of Science in </h4>
            <p>Information Technology(I.T) &amp; Engineering · 2019 – 2022</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
