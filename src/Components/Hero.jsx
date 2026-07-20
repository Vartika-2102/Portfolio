import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div data-aos="fade-right">

          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="inline-block bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-5"
          >
            🟢 Available for Internships & Freelance Projects
          </span>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
          >
            👋 Hello, I'm
          </p>

          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-5xl lg:text-6xl font-bold mt-3 leading-tight text-gray-900 dark:text-white"
          >
            Vartika Singh
          </h1>

          <h2
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-2xl text-gray-600 dark:text-gray-300 mt-4"
          >
            Full Stack Developer | AI Enthusiast
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-gray-600 dark:text-gray-400 mt-6 leading-8 max-w-xl"
          >
            Passionate about building responsive, scalable, and user-friendly
            web applications using React.js, Node.js, Express.js, MySQL, and
            modern development tools. I also enjoy exploring Artificial
            Intelligence and Machine Learning to solve real-world problems.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-wrap gap-4 mt-8"
          >

              <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>

              <a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

              <a
              href="/resume.pdf"
              download
              className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-black dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex items-center gap-5 mt-8"
          >
              <a
              href="https://github.com/Vartika-2102"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

              <a
              href="https://www.linkedin.com/in/vartika-singh-02b515257"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

              <a
              href="mailto:vartika381@gmail.com"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-red-500 hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

        </div>

        {/* Right */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex justify-center"
        >

          <div className="relative">

            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-2xl">

              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">

                {/* Photo baad me yaha add hogi */}
                <span className="text-8xl">
                  👩‍💻
                </span>

              </div>

            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 dark:text-white shadow-lg px-5 py-2 rounded-full"
            >
              🚀 Open to Work
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;