import React from "react";
import Image from "../assets/p.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
  initial={{ opacity: 0.1, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.3,
    ease: "easeOut",
  }}
  viewport={{ amount: 0.2}}
  className="bg-[#0F172A] min-h-screen text-white px-6 md:px-16 py-20"
>

      {/* Heading */}
      <div className="text-center mb-20">

        <h1 className="text-5xl md:text-6xl font-bold">
          About Me
        </h1>

      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="relative flex justify-center">

          {/* Glow Effect */}
          <div
            className="
              absolute
              w-[300px]
              h-[300px]
              bg-[#38BDF8]
              opacity-20
              blur-3xl
              rounded-full
            "
          ></div>

          {/* Image Card */}
          <div
            className="
              relative
              bg-[#1E293B]
              border border-white/10
              rounded-3xl
              p-8
              shadow-2xl
            "
          >

            <img
              src={Image}
              alt="profile"
              className="
                w-[320px]
                h-[500px]
                object-cover
                rounded-2xl
              "
            />

          </div>
        </div>

        {/* Right Side */}
        <div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* Experience */}
            <div
              className="
                bg-[#1E293B]
                border border-white/10
                rounded-2xl
                p-6
                hover:border-[#38BDF8]
                transition-all duration-300
              "
            >

              <h2 className="text-2xl font-semibold mb-4 text-[#38BDF8]">
                Experience
              </h2>

              <p className="text-[#94A3B8] leading-7">
                React.js Internship
                <br />
                Full Stack Projects
              </p>

            </div>

            {/* Education */}
            <div
              className="
                bg-[#1E293B]
                border border-white/10
                rounded-2xl
                p-6
                hover:border-[#8B5CF6]
                transition-all duration-300
              "
            >

              <h2 className="text-2xl font-semibold mb-4 text-[#8B5CF6]">
                Education
              </h2>

              <p className="text-[#94A3B8] leading-7">
                Diploma in Computer Engineering (2019-2022)
                <br />
                LJ Institute of Technology — CGPA 8.5
                <br /><br />

                B.Tech in Computer Science Engineering
                (2022-Present)
                <br />
                Indus University, Ahmedabad — CGPA 7.9
              </p>

            </div>

          </div>

          {/* About Text */}
          <p className="text-[#94A3B8] text-lg leading-9 mb-8">

            I’m Preet Thakore, a passionate Full Stack Developer
            focused on building modern and responsive web applications.

            I enjoy creating clean user interfaces using React.js
            and developing scalable backend systems using Node.js,
            Express.js, and MongoDB.

            I’m constantly learning new technologies and improving
            my problem-solving skills to become a better software engineer.

          </p>

          {/* Skills */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Frontend */}
            <div
              className="
                bg-[#1E293B]
                p-5
                rounded-2xl
                border border-white/10
              "
            >

              <h3 className="font-semibold text-xl text-[#38BDF8] mb-3">
                Frontend
              </h3>

              <p className="text-[#94A3B8] leading-7">
                HTML, CSS, Bootstrap,
                JavaScript, React.js,
                Tailwind CSS
              </p>

            </div>

            {/* Backend */}
            <div
              className="
                bg-[#1E293B]
                p-5
                rounded-2xl
                border border-white/10
              "
            >

              <h3 className="font-semibold text-xl text-[#8B5CF6] mb-3">
                Backend
              </h3>

              <p className="text-[#94A3B8] leading-7">
                Node.js, Express.js,
                MongoDB
              </p>

            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;