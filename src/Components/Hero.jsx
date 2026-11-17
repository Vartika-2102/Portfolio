import { useEffect, useState } from "react";
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

const phrases = [
  "builds React apps",
  "designs REST APIs",
  "ships AI powered features",
  "deploys to Vercel and Render",
];

const stats = [
  ["4+", "projects built"],
  ["1", "internship"],
  ["10+", "technologies"],
];

function Typed() {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phrase = 0;
    let letters = phrases[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const current = phrases[phrase];
      letters += deleting ? -1 : 1;
      setText(current.slice(0, letters));

      let delay = deleting ? 35 : 70;
      if (!deleting && letters === current.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && letters === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="typed" aria-label="builds React apps, designs REST APIs, ships AI powered features">
      <span aria-hidden="true">
        <span className="mono">&gt; </span>
        {text}
        <span className="caret" />
      </span>
    </p>
  );
}

function Avatar() {
  return (
    <div className="avatar" aria-hidden="true">
      <div className="avatar-ring" />
      <div className="avatar-orbit">
        <span className="o1">&lt;/&gt;</span>
        <span className="o2">{"{ }"}</span>
        <span className="o3">=&gt;</span>
      </div>
      <div className="avatar-core">
        <span className="avatar-tag">&lt;dev /&gt;</span>
        <span className="avatar-letters">
          V<b>S</b>
        </span>
        <span className="avatar-line">full stack</span>
      </div>
    </div>
  );
}

function Hero() {
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <>
      <section id="home">
        <div className="wrap hero">
          <Avatar />

          <span className="status">
            <i />
            Available for internships and freelance projects
          </span>

          <p className="hello">// hi, I'm</p>
          <h1>Vartika Singh</h1>
          <p className="role">
            <b>Full Stack Developer</b> | AI Enthusiast
          </p>

          <Typed />

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

          <div className="stats">
            {stats.map(([n, label]) => (
              <div key={label}>
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
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