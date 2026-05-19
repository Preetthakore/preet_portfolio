import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div id="projects"
  initial={{ opacity: 0.1, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.3,
    ease: "easeOut",
  }}
  viewport={{ amount: 0.2}}
  className="bg-[#0F172A] min-h-screen text-white px-4 sm:px-6 md:px-16 py-14 sm:py-20"
>

      {/* Heading */}
      <div className="text-center mb-20">


        <h1 className="text-5xl md:text-6xl font-bold">
          Projects
        </h1>

      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Project Card 1 */}
        <div
          className="
            glow-hover
  bg-[#1E293B]
  rounded-3xl
  overflow-hidden
  border border-white/10
  shadow-xl
          "
        >

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="project"
            className="w-full h-56 object-cover"
          />

          {/* Content */}
          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Smart Notes App
            </h2>

            <p className="text-[#94A3B8] leading-7 mb-6">
              AI-powered notes and summary application
              built using React.js, Node.js, and MongoDB.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                Node.js
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                MongoDB
              </span>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="
                  bg-[#38BDF8]
                  text-[#0F172A]
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                "
              >
                GitHub
              </button>

              <button
                className="
                  border border-white/10
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:bg-white
                  hover:text-[#0F172A]
                  transition-all duration-300
                "
              >
                Live Demo
              </button>

            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="
            glow-hover
  bg-[#1E293B]
  rounded-3xl
  overflow-hidden
  border border-white/10
  shadow-xl
          "
        >

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"
            alt="project"
            className="w-full h-56 object-cover"
          />

          {/* Content */}
          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h2>

            <p className="text-[#94A3B8] leading-7 mb-6">
              Modern responsive portfolio website
              using React.js and Tailwind CSS.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                Tailwind
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                JavaScript
              </span>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="
                  bg-[#8B5CF6]
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                "
              >
                GitHub
              </button>

              <button
                className="
                  border border-white/10
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:bg-white
                  hover:text-[#0F172A]
                  transition-all duration-300
                "
              >
                Live Demo
              </button>

            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          className="
              bg-[#1E293B]
              rounded-3xl
              overflow-hidden
              border border-white/10
              hover:border-pink-500
              hover:-translate-y-2
            transition-all duration-300
            shadow-xl
          "
        >

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
            alt="project"
            className="w-full h-56 object-cover"
          />

          {/* Content */}
          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Weather App
            </h2>

            <p className="text-[#94A3B8] leading-7 mb-6">
              Real-time weather application using APIs
              and responsive frontend design.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                API
              </span>

              <span className="bg-[#0F172A] px-4 py-2 rounded-full text-sm">
                CSS
              </span>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="
                  bg-pink-500
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                "
              >
                GitHub
              </button>

              <button
                className="
                  border border-white/10
                  px-5 py-3
                  rounded-xl
                  font-semibold
                  hover:bg-white
                  hover:text-[#0F172A]
                  transition-all duration-300
                "
              >
                Live Demo
              </button>

            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;