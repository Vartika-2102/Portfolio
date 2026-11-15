import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span>
          © {new Date().getFullYear()} <strong>Vartika Singh</strong>
        </span>

        <span>Built with React and Tailwind CSS</span>

        <div className="foot-links">
          <a
            href="https://github.com/Vartika-2102"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/vartika-singh-02b515257"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <FaLinkedin size={16} />
          </a>
          <a href="mailto:vartika381@gmail.com" aria-label="Email" className="icon-btn">
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;