import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-bold text-white">Vartika Singh</h3>
        <p className="text-gray-400 mt-1">Full Stack Developer</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
            <a
            href="https://github.com/Vartika-2102"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

            <a
            href="https://www.linkedin.com/in/vartika-singh-02b515257"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

            <a
            href="mailto:vartika381@gmail.com"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vartika Singh. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
            Built with React <FaHeart className="text-red-500" size={12} /> Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;