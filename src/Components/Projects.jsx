import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLock,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import agroHome from "../assets/Projects/agrosmart-home.png";
import agroDashboard from "../assets/Projects/agrosmart-dashboard.png";
import agroChatbot from "../assets/Projects/agrosmart-chatbot.png";
import agroMandi from "../assets/Projects/agrosmart-mandi.png";

import jobHome from "../assets/Projects/jobportal-home.png";
import jobCandidate from "../assets/Projects/jobportal-candidate.png";
import jobRecruiter from "../assets/Projects/jobportal-recruiter.png";

import gpsMap from "../assets/Projects/gps-map.png";

import vehicleDetection from "../assets/Projects/vehicle-detection.png";

// Live link of the Law Setu project. Leave empty ("") to hide the button.
const LAW_SETU_LIVE_URL = "https://law-setu-sigma.vercel.app/";

function ProjectImage({ src, alt, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-60 overflow-hidden bg-gray-200 dark:bg-gray-700">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        className={`w-full h-60 object-cover cursor-pointer transition-all duration-500 hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Projects() {
  const [lightboxImages, setLightboxImages] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Law Setu",
      category: "Web Dev",
      images: [],
      imageAlts: [],
      description:
        "A legal services platform that connects clients with verified advocates. It has separate dashboards for admins, advocates and clients, smart lawyer matching from plain language search, advocate online status and State to District filters across India.",
      tech: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MySQL",
        "Vercel",
        "Render",
      ],
      github: "",
      live: LAW_SETU_LIVE_URL,
    },
    {
      title: "AgroSmart",
      category: "Web Dev",
      images: [agroHome, agroDashboard, agroChatbot, agroMandi],
      imageAlts: [
        "AgroSmart dashboard homepage with weather and crop overview",
        "AgroSmart 3D interactive dashboard with mandi price map",
        "AgroSmart AI chatbot assistant answering farming queries",
        "AgroSmart nearest mandi locator with live prices",
      ],
      description:
        "An AI-powered smart agriculture platform that provides weather forecasting, crop recommendations, AI chatbot assistance, voice support, and mandi price updates to help farmers make better decisions.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Tailwind CSS",
        "Gemini API",
      ],
      github: "https://github.com/Vartika-2102/agrosmart",
      live: "https://agrosmart-mocha.vercel.app/",
    },
    {
      title: "Job Portal",
      category: "Web Dev",
      images: [jobHome, jobCandidate, jobRecruiter],
      imageAlts: [
        "Job Portal homepage with job listings",
        "Job Portal candidate dashboard with applications tracker",
        "Job Portal recruiter dashboard for managing candidates",
      ],
      description:
        "A full stack job portal that allows candidates to search and apply for jobs while recruiters can post jobs, manage applications, and track candidates efficiently.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Vartika-2102/job-portal",
      live: "https://job-portal-beige-iota.vercel.app/",
    },
    {
      title: "GPS Tracking System",
      category: "Python",
      images: [gpsMap],
      imageAlts: ["GPS Tracking System map showing IP-based location"],
      description:
        "A Python-based application that tracks geographical location using IP address and displays useful location details for monitoring and analysis.",
      tech: ["Python", "IP Geolocation", "API Integration"],
      github: "https://github.com/Vartika-2102/GPS_Tracking",
      live: "",
    },
    {
      title: "Vehicle Detection & Counting",
      category: "Computer Vision",
      images: [vehicleDetection],
      imageAlts: ["Vehicle detection and counting output using OpenCV"],
      description:
        "A Computer Vision project that detects and counts vehicles from video streams using OpenCV techniques for intelligent traffic monitoring.",
      tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      github:
        "https://github.com/Vartika-2102/vehicle-detection-and-counting-using-python",
      live: "",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!lightboxImages) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? lightboxImages.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImages]);

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <p className="eyebrow">Projects</p>
        <h2 className="sec-title">Selected work.</h2>
        <p className="sec-sub">
          Projects built with modern web technologies, AI, and machine
          learning.
        </p>

        {/* Filter Tabs */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`filter ${activeFilter === cat ? "on" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="proj-grid">
          {filteredProjects.map((project) => (
            <div key={project.title} className="proj">
              {/* Image Section */}
              {project.images.length === 0 ? (
                <div className="cover" aria-hidden="true">
                  <span className="cover-tag">&lt;legal-tech /&gt;</span>
                  <span className="cover-title">{project.title}</span>
                  <span className="cover-sub">
                    Admin · Advocate · Client dashboards
                  </span>
                </div>
              ) : (
                <div className="h-60 overflow-hidden group">
                  {project.images.length > 1 ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{ clickable: true }}
                      loop={true}
                      className="h-full project-swiper"
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <ProjectImage
                            src={img}
                            alt={project.imageAlts[i]}
                            onClick={() => openLightbox(project.images, i)}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <ProjectImage
                      src={project.images[0]}
                      alt={project.imageAlts[0]}
                      onClick={() => openLightbox(project.images, 0)}
                    />
                  )}
                </div>
              )}

              <div className="proj-body">
                <div className="proj-head">
                  <h3>{project.title}</h3>
                  <span className="chip">{project.category}</span>
                </div>

                <p>{project.description}</p>

                <div className="chips">
                  {project.tech.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="proj-links">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  ) : (
                    <span className="btn btn-note">
                      <FaLock size={12} />
                      Private repo
                    </span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt size={13} />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="sec-sub">No projects found in this category.</p>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImages && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center px-4 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {lightboxImages.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 text-white text-3xl bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
          )}

          <img
            src={lightboxImages[lightboxIndex]}
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
          />

          {lightboxImages.length > 1 && (
            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 text-white text-3xl bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          )}

          {lightboxImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          )}
        </div>
      )}

      <style>{`
        .project-swiper .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.6;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background-color: var(--accent);
          opacity: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Projects;