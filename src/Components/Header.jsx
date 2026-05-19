import { useState } from "react";
import Image from "../assets/Image.jpeg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        flex items-center justify-between
        px-4 sm:px-6 py-4
        sticky top-0 z-50
        bg-[#0F172A]/90
        backdrop-blur-lg
        border-b border-white/10
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={Image}
          alt="Profile"
          className="
            rounded-full
            w-10 h-10 sm:w-14 sm:h-14
            object-cover
            border-2 border-[#38BDF8]
            shadow-lg
          "
        />

        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Preet<span className="text-[#38BDF8]">.</span>
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-5">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              text-white
              font-semibold
              text-base lg:text-lg
              border border-white/10
              px-4 lg:px-5 py-2
              rounded-xl
              transition-all duration-300
              hover:bg-[#1E293B]
              hover:border-[#38BDF8]
              hover:scale-105
            "
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="
            absolute top-16 left-0 w-full
            bg-[#0F172A]/95
            border-b border-white/10
            flex flex-col items-center gap-4
            py-6 md:hidden
          "
        >
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="
                text-white
                font-semibold
                text-lg
                px-6 py-2
                rounded-xl
                hover:bg-[#1E293B]
                hover:text-[#38BDF8]
              "
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;