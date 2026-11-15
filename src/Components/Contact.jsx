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
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8187937026",
      href: "tel:+918187937026",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Open to Work",
      value: "Noida • Gurugram • Remote",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/vartika-singh-02b515257",
      href: "https://www.linkedin.com/in/vartika-singh-02b515257",
      external: true,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Vartika-2102",
      href: "https://github.com/Vartika-2102",
      external: true,
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
    <section id="contact" className="sec">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h2 className="sec-title">Let's build something that works.</h2>
        <p className="sec-sub">
          Have a project, internship, or job opportunity? Send a short
          message and I'll get back to you.
        </p>

        <div className="contact-grid">
          {/* Left side */}
          <div className="panel">
            <h3 style={{ fontSize: "1.5rem" }}>Vartika Singh</h3>
            <p className="sec-sub" style={{ marginTop: 4, marginBottom: 14 }}>
              Full Stack Developer
            </p>

            {contactDetails.map((item) => {
              const content = (
                <>
                  <span className="ico">{item.icon}</span>
                  <span>
                    <span className="lab">{item.label}</span>
                    <br />
                    <span className="val">{item.value}</span>
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="crow"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="crow">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Right side */}
          <div className="panel">
            <h3 style={{ fontSize: "1.5rem", marginBottom: 18 }}>Send a message</h3>

            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Your name"
                required
                className="field"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                aria-label="Your email"
                required
                className="field"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                aria-label="Your message"
                required
                className="field"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="msg-ok">
                  Message sent. I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="msg-err">
                  Something went wrong. Please try again or email me directly.
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