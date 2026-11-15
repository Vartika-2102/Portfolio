function Internship() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Vercel",
    "Render",
  ];

  const responsibilities = [
    "Developed responsive and scalable full stack web applications using React.js, Node.js, Express.js, MySQL, and MongoDB.",
    "Built reusable UI components and integrated REST APIs for seamless frontend-backend communication.",
    "Implemented JWT Authentication, CRUD operations, and database integration for secure applications.",
    "Deployed frontend applications on Vercel and backend services on Render.",
    "Collaborated using Git & GitHub while following Agile development practices.",
  ];

  return (
    <section id="internship" className="sec">
      <div className="wrap">
        <p className="eyebrow">Internship</p>
        <h2 className="sec-title">Learning on real products.</h2>
        <p className="sec-sub">
          Hands-on experience in full stack web development, building
          real applications and deploying them.
        </p>

        <div className="panel job" style={{ marginTop: 32 }}>
          <div className="job-head">
            <div>
              <h3>Full Stack Developer Intern</h3>
              <p className="job-org">
                Trusting Brains IT Services Pvt. Ltd.
                <span className="now">Current</span>
              </p>
            </div>
            <span className="date">January 2026 – Present</span>
          </div>

          <h4>Key responsibilities</h4>
          <ul>
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h4>Technologies used</h4>
          <div className="chips">
            {technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;