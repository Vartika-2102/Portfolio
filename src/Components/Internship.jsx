import { FaBriefcase, FaCheckCircle, FaTools } from "react-icons/fa";

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
    <section id="internship" className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Internship Experience
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-14 max-w-3xl mx-auto">
            Gaining hands-on experience in Full Stack Web Development by
            building real-world applications and deploying scalable solutions.
          </p>
        </div>

        {/* Internship Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group relative max-w-5xl mx-auto bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 transition-all duration-300 overflow-hidden"
        >
          {/* Accent bar on hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

            <div className="flex gap-4 items-start">
              {/* Icon */}
              <div className="w-14 h-14 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">
                <FaBriefcase />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  Full Stack Developer Intern
                </h3>

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Trusting Brains IT Services Pvt. Ltd.
                  </p>

                  <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                    Current
                  </span>
                </div>
              </div>
            </div>

            <div className="md:mt-1">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                January 2026 – Present
              </span>
            </div>

          </div>

          {/* Responsibilities */}
          <div className="mt-10">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              <FaCheckCircle className="text-blue-600 dark:text-blue-400" />
              Key Responsibilities
            </h4>

            <ul className="space-y-3">
              {responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400 leading-7"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              <FaTools className="text-blue-600 dark:text-blue-400" />
              Technologies Used
            </h4>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Internship;