import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaCogs,
  FaRobot,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      bg: "bg-blue-100 dark:bg-blue-900/40",
      color: "text-blue-600 dark:text-blue-400",
      skills: ["Python", "C++", "Java", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      bg: "bg-purple-100 dark:bg-purple-900/40",
      color: "text-purple-600 dark:text-purple-400",
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      bg: "bg-green-100 dark:bg-green-900/40",
      color: "text-green-600 dark:text-green-400",
      skills: ["MySQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      bg: "bg-orange-100 dark:bg-orange-900/40",
      color: "text-orange-600 dark:text-orange-400",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "npm",
        "PyCharm",
        "Render",
        "Vercel",
        "MySQL Workbench",
      ],
    },
    {
      title: "Core Concepts",
      icon: <FaCogs />,
      bg: "bg-pink-100 dark:bg-pink-900/40",
      color: "text-pink-600 dark:text-pink-400",
      skills: [
        "REST APIs",
        "JWT Authentication",
        "CRUD Operations",
        "OOP",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaRobot />,
      bg: "bg-teal-100 dark:bg-teal-900/40",
      color: "text-teal-600 dark:text-teal-400",
      skills: [
        "Gemini API",
        "Groq API",
        "Machine Learning Basics",
        "OpenCV",
        "Prompt Engineering",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            My Skills
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-14 max-w-3xl mx-auto">
            I build modern, scalable web applications and AI-powered solutions
            using the latest technologies and development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${category.bg} ${category.color}`}
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-5 text-gray-800 dark:text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-center text-gray-500 dark:text-gray-400 mt-14 text-lg"
        >
          Passionate about Full Stack Development, AI, and building impactful
          software solutions.
        </p>

      </div>
    </section>
  );
}

export default Skills;