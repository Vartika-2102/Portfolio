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
      skills: ["Python", "C++", "Java", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
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
      skills: ["MySQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
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
      skills: ["REST APIs", "JWT Authentication", "CRUD Operations", "OOP"],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaRobot />,
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
    <section id="skills" className="sec">
      <div className="wrap">
        <p className="eyebrow">Skills</p>
        <h2 className="sec-title">One stack, front to back.</h2>
        <p className="sec-sub">
          I build scalable web applications and AI powered features with
          the tools below.
        </p>

        <div className="skill-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="panel skill-card">
              <h3>
                {category.title}
                {category.icon}
              </h3>
              <div className="chips">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;