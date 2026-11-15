import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const marqueeItems = [
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Gemini API",
  "OpenCV",
  "Python",
];

function Hero() {
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <>
      <section id="home">
        <div className="wrap hero">
          <span className="float f1" aria-hidden="true">&lt;/&gt;</span>
          <span className="float f2" aria-hidden="true">{"{ }"}</span>
          <span className="float f3" aria-hidden="true">=&gt;</span>
          <span className="float f4" aria-hidden="true">( )</span>

          <span className="status">
            <i />
            Available for internships and freelance projects
          </span>

          <p className="hello">// hi, I'm</p>
          <h1>Vartika Singh</h1>
          <p className="role">
            <b>Full Stack Developer</b> | AI Enthusiast
          </p>

          <p className="lede">
            I build responsive, scalable web apps with React.js, Node.js,
            Express.js and MySQL. I also explore AI and machine learning to
            solve real problems, from farming advice to traffic monitoring.
          </p>

          <div className="cta">
            <a href="#projects" className="btn btn-primary">
              View projects →
            </a>
            <a href="#contact" className="btn">
              Contact me
            </a>
            <a href="/resume.pdf" download className="btn">
              Download resume
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/Vartika-2102"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/vartika-singh-02b515257"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <FaLinkedin size={17} />
            </a>
            <a href="mailto:vartika381@gmail.com" aria-label="Email" className="icon-btn">
              <FaEnvelope size={17} />
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {loop.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;