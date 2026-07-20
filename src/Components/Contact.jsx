import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "vartika381@gmail.com",
      href: "mailto:vartika381@gmail.com",
      bg: "bg-blue-100 dark:bg-blue-900/40",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8187937026",
      href: "tel:+918187937026",
      bg: "bg-green-100 dark:bg-green-900/40",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Open to Work",
      value: "Noida • Gurugram • Remote",
      bg: "bg-orange-100 dark:bg-orange-900/40",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/vartika-singh-02b515257",
      href: "https://www.linkedin.com/in/vartika-singh-02b515257",
      external: true,
      bg: "bg-purple-100 dark:bg-purple-900/40",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Vartika-2102",
      href: "https://github.com/Vartika-2102",
      external: true,
      bg: "bg-gray-200 dark:bg-gray-700",
      color: "text-gray-700 dark:text-gray-300",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_xz2hveg",
        "template_xarnjm7",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "-M0GL3eonMM85key-"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-14 max-w-3xl mx-auto">
            Have a project, internship, or job opportunity? Feel free to connect with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
          >
            {/* Name + Designation */}
            <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Vartika Singh
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                Full Stack Developer
              </p>
            </div>

            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-8">
              Get In Touch
            </h4>

            <div className="space-y-6">
              {contactDetails.map((item, i) => {
                const content = (
                  <>
                    <div
                      className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        {item.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                    <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-4 group">
                    {content}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center font-medium">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center font-medium">
                  ❌ Something went wrong. Please try again or email me directly.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;