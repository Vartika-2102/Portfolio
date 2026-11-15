import { useState } from "react";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Internship", link: "#internship" },
    { name: "Contact", link: "#contact" },
  ];

  const themeButton = (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      className="icon-btn"
      type="button"
    >
      {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
    </button>
  );

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="logo">
          &lt;VS/&gt;
        </a>

        {/* Desktop menu */}
        <ul className="nav-links">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {themeButton}

          <a href="/resume.pdf" download className="btn btn-primary nav-desktop">
            <FaDownload size={13} />
            Resume
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="icon-btn nav-mobile"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu nav-mobile">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="m-link"
            >
              {item.name}
            </a>
          ))}
          <div style={{ padding: "12px 20px 16px" }}>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              <FaDownload size={13} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;