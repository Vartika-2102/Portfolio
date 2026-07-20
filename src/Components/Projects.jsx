import { useState, useEffect } from "react";
import {
  FaGithub,
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
    <section id="projects" className="bg-gray-50 dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Featured Projects</h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-10 max-w-3xl mx-auto">
            Here are some of the projects I have built using modern web
            technologies, AI, and Machine Learning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
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

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-7 pt-2 mt-auto">
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-black dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live && (
                      <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImages && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-blue-400 transition-colors duration-300"
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
          background-color: #2563eb;
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