import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      value: "B.Tech (CSE)",
      subvalue: "AKTU University",
      bg: "bg-blue-100 dark:bg-blue-900/40",
      color: "text-blue-600 dark:text-blue-400",
      delay: 100,
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      value: "Full Stack Developer Intern",
      subvalue: "Trusting Brains Pvt. Ltd.",
      bg: "bg-purple-100 dark:bg-purple-900/40",
      color: "text-purple-600 dark:text-purple-400",
      delay: 250,
    },
    {
      icon: <FaRocket />,
      title: "Projects",
      value: "4+ Production Ready Projects",
      bg: "bg-orange-100 dark:bg-orange-900/40",
      color: "text-orange-600 dark:text-orange-400",
      delay: 400,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Open to Work",
      value: "Noida • Gurugram • Remote",
      subvalue: "Open to Relocate Across India",
      subtext: "Available for Full-Time Opportunities",
      bg: "bg-green-100 dark:bg-green-900/40",
      color: "text-green-600 dark:text-green-400",
      delay: 550,
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 pt-28 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">About Me</h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-12">
            Get to know more about my journey, skills, and experience.
          </p>
        </div>

        {/* About Text */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-9">
            I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Vartika Singh
            </span>
            , a passionate Full Stack Developer pursuing B.Tech in Computer
            Science and Engineering. I enjoy building modern, responsive,
            and scalable web applications using React.js, Node.js,
            Express.js, and MySQL.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-9 mt-6">
            I have completed real-world projects like Job Portal,
            AgroSmart, and I'm currently building LegalConnect.
            I enjoy solving real-world problems through technology and
            continuously improving my development skills.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {infoCards.map((card, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={card.delay}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 ${card.bg} ${card.color}`}
              >
                {card.icon}
              </div>

              <h4 className="font-bold text-xl mt-4 text-gray-900 dark:text-white">{card.title}</h4>

              <p className="text-gray-600 dark:text-gray-400 mt-2">{card.value}</p>

              {card.subvalue && (
                <p className="text-gray-500 dark:text-gray-500 mt-1 text-sm">{card.subvalue}</p>
              )}

              {card.subtext && (
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-2 text-sm">
                  {card.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;