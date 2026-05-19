import Image from "../assets/Image.jpeg";

const Header = () => {
  return (
    <header
      className="
        flex items-center justify-between
        px-6 py-4
        position: sticky
        top-0
        z-50
        bg-[#0F172A]/90
        backdrop-blur-lg
        border-b border-white/10
        sticky top-0 z-50
      "
    >

      {/* Logo */}
      <div className="flex items-center gap-4">

        <img
          src={Image}
          alt="Profile"
          className="
            rounded-full
            w-14 h-14
            object-cover
            border-2 border-[#38BDF8]
            shadow-lg
          "
        />

        <h1 className="text-2xl font-bold text-white">
          Preet
          <span className="text-[#38BDF8]">.</span>
        </h1>

      </div>

      {/* Navbar */}
      <nav className="flex items-center gap-5">

        <a
          href="#home"
          className="
            text-white
            font-semibold
            text-lg
            border border-white/10
            px-5 py-2.5
            rounded-xl
            transition-all
            duration-300
            hover:bg-[#1E293B]
            hover:border-[#38BDF8]
            hover:text-white
            hover:scale-105
          "
        >
          Home
        </a>

        <a
          href="#about"
          className="
            text-white
            font-semibold
            text-lg
            border border-white/10
            px-5 py-2.5
            rounded-xl
            transition-all
            duration-300
            hover:bg-[#1E293B]
            hover:border-[#38BDF8]
            hover:text-white
            hover:scale-105
          "
        >
          About
        </a>

        <a
          href="#projects"
          className="
            text-white
            font-semibold
            text-lg
            border border-white/10
            px-5 py-2.5
            rounded-xl
            transition-all
            duration-300
            hover:bg-[#1E293B]
            hover:border-[#38BDF8]
            hover:text-white
            hover:scale-105
          "
        >
          Projects
        </a>

        <a
          href="#contact"
          className="
            text-white
            font-semibold
            text-lg
            border border-white/10
            px-5 py-2.5
            rounded-xl
            transition-all
            duration-300
            hover:bg-[#1E293B]
            hover:border-[#38BDF8]
            hover:text-white
            hover:scale-105
          "
        >
          Contact
        </a>

      </nav>

    </header>
  );
};

export default Header;