const Footer = () => {
  return (
    <footer
      className="
        bg-[#1E293B]
        border-t border-white/10
        text-white
        px-6 md:px-16
        py-10
      "
    >

      {/* Main Footer */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >

        {/* Left Side */}
        <div>

          <h1 className="text-2xl font-bold mb-2">
            Preet Thakore
          </h1>

          <p className="text-[#94A3B8]">
            Full Stack Developer
          </p>

        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-[#94A3B8]">

          <a
            href="/"
            className="
              hover:text-[#38BDF8]
              transition-all duration-300
            "
          >
            Home
          </a>

          <a
            href="/about"
            className="
              hover:text-[#38BDF8]
              transition-all duration-300
            "
          >
            About
          </a>

          <a
            href="/projects"
            className="
              hover:text-[#38BDF8]
              transition-all duration-300
            "
          >
            Projects
          </a>

          <a
            href="/contact"
            className="
              hover:text-[#38BDF8]
              transition-all duration-300
            "
          >
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="flex gap-4">

          <button
            className="
              bg-[#0F172A]
              px-5 py-2
              rounded-xl
              border border-white/10
              hover:border-[#38BDF8]
              transition-all duration-300
            "
          >
            GitHub
          </button>

          <button
            className="
              bg-[#0F172A]
              px-5 py-2
              rounded-xl
              border border-white/10
              hover:border-[#8B5CF6]
              transition-all duration-300
            "
          >
            LinkedIn
          </button>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
          border-t border-white/10
          mt-8
          pt-6
          text-center
          text-[#94A3B8]
        "
      >

        <p>
          &copy; {new Date().getFullYear()} Preet Thakore.
          All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer