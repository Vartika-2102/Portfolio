function About() {
  const facts = [
    { title: "Education", value: "B.Tech (CSE)", sub: "AKTU University" },
    {
      title: "Experience",
      value: "Full Stack Developer Intern",
      sub: "Trusting Brains Pvt. Ltd.",
    },
    { title: "Projects", value: "4+ production ready projects" },
    {
      title: "Open to work",
      value: "Noida • Gurugram • Remote",
      sub: "Open to relocate across India",
    },
  ];

  const offer = [
    ["Full stack web apps", "build"],
    ["REST APIs with MySQL and MongoDB", "backend"],
    ["AI powered features", "ai"],
    ["Deployment on Vercel and Render", "ship"],
  ];

  return (
    <section id="about" className="sec">
      <div className="wrap">
        <p className="eyebrow">About</p>
        <h2 className="sec-title">Apps that work end to end.</h2>

        <div className="about-grid">
          <div>
            <p>
              I'm <strong>Vartika Singh</strong>, a Full Stack Developer
              pursuing B.Tech in Computer Science and Engineering. I enjoy
              building modern, responsive and scalable web applications with
              React.js, Node.js, Express.js and MySQL.
            </p>
            <p>
              I have completed real world projects like Job Portal and
              AgroSmart, and I'm currently building LegalConnect. I like
              solving real problems through technology and improving my
              skills with every project.
            </p>
          </div>

          <ul className="offer">
            {offer.map(([label, tag]) => (
              <li key={label}>
                {label} <small>{tag}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="facts">
          {facts.map((f) => (
            <div key={f.title} className="fact">
              <span className="mono">{f.title}</span>
              <p>{f.value}</p>
              {f.sub && <small>{f.sub}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;