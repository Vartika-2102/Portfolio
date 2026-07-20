import { useState } from "react";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Internship", link: "#internship" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
          <a
          href="#home"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
        >
          Vartika Singh
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((item) => (
            <li key={item.name}>
                <a
                href={item.link}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          {/* Resume Button */}
            <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile: Dark toggle + Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 transition-all duration-300"
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-blue-600 dark:text-blue-400"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t dark:border-gray-700 transition-colors duration-300">
          <ul className="flex flex-col py-4">

            {navLinks.map((item) => (
              <li key={item.name}>
                  <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="px-6 mt-3">
                <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <FaDownload />
                Download Resume
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;