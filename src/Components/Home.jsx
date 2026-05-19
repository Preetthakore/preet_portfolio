
import Bg from "../assets/Bg.png";

const Home = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen p-8">

      {/* Main Container */}
      <div
        className="
          bg-[#1E293B]
          min-h-[85vh]
          rounded-[40px]
          overflow-hidden
          flex items-center justify-between
          px-6 md:px-16
          shadow-2xl
          border border-white/10
        "
      >

        {/* Left Content */}
        <div className="max-w-2xl">

          <h1 className="text-2xl text-[#94A3B8] mb-2">
            Hi, I am
          </h1>

          <h1 className="text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight">
            Preet Thakore
          </h1>

          <h3 className="text-3xl font-semibold text-white mb-5">
            Fresher Full Stack Developer
          </h3>

          <p className="text-[#94A3B8] text-lg leading-8 mb-8">
            Passionate Computer Science Engineering student focused on building
            modern web applications using React, Node.js, Express.js,
            and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex gap-5">

            {/* Primary Button */}
            < a 
              className=" 
                bg-purple-500
                text-white
                px-6 py-3
                rounded-xl
                font-semibold
                hover:scale-105
                duration-300
                shadow-lg
              "  
              href="#projects"
            >
              View Projects
            </a>

            {/* Secondary Button */}
            <a
              className="
                border-2 border-[#8B5CF6]
                text-[#F8FAFC]
                px-6 py-3
                rounded-xl
                font-semibold
                hover:bg-[#8B5CF6]
                duration-300
              " href="#contact"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-end justify-center h-full relative">

          {/* Glow Effect */}
          <div
            className="
              absolute
              w-[350px]
              h-[350px]
              bg-[#38BDF8]
              opacity-20
              blur-3xl
              rounded-full
            "
          ></div>

          <img
            src={Bg}
            alt="profile"
            className="
              w-[450px]
              object-contain
              relative
              z-10
            "
          />

        </div>
      </div>
    </div>
  );
};

export default Home;