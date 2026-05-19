import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0.1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="bg-[#0F172A] min-h-screen text-white px-4 sm:px-6 md:px-16 py-10 sm:py-14 md:py-20"
    >

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Contact Me
        </h1>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Let's Work Together
          </h2>

          <p className="text-[#94A3B8] leading-7 sm:leading-8 text-base sm:text-lg mb-8 sm:mb-10">
            I'm always interested in new opportunities,
            internships, and exciting projects.

            Feel free to contact me if you want to
            collaborate or just say hello.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">

            <div
              className="
                glow-hover
                bg-[#1E293B]
                p-4 sm:p-5 md:p-8
                rounded-3xl
                border border-white/10
                shadow-xl
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#38BDF8]">
                Email
              </h3>
              <p className="text-[#94A3B8] text-sm sm:text-base break-all">
                preetthakore@example.com
              </p>
            </div>

            <div
              className="
                bg-[#1E293B]
                p-4 sm:p-5
                rounded-2xl
                border border-white/10
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#8B5CF6]">
                Phone
              </h3>
              <p className="text-[#94A3B8] text-sm sm:text-base">
                +91 98765 43210
              </p>
            </div>

            <div
              className="
                bg-[#1E293B]
                p-4 sm:p-5
                rounded-2xl
                border border-white/10
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-pink-500">
                Location
              </h3>
              <p className="text-[#94A3B8] text-sm sm:text-base">
                Ahmedabad, Gujarat, India
              </p>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div
          className="
            bg-[#1E293B]
            p-5 sm:p-6 lg:p-8
            rounded-3xl
            border border-white/10
            shadow-xl
          "
        >
          <form className="space-y-5 sm:space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-[#94A3B8] text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  bg-[#0F172A]
                  border border-white/10
                  rounded-xl
                  px-4 sm:px-5 py-3 sm:py-4
                  outline-none
                  focus:border-[#38BDF8]
                  text-white
                  text-sm sm:text-base
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-[#94A3B8] text-sm sm:text-base">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-[#0F172A]
                  border border-white/10
                  rounded-xl
                  px-4 sm:px-5 py-3 sm:py-4
                  outline-none
                  focus:border-[#8B5CF6]
                  text-white
                  text-sm sm:text-base
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-[#94A3B8] text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="
                  w-full
                  bg-[#0F172A]
                  border border-white/10
                  rounded-xl
                  px-4 sm:px-5 py-3 sm:py-4
                  outline-none
                  resize-none
                  focus:border-pink-500
                  text-white
                  text-sm sm:text-base
                "
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="
                w-full
                bg-[#E7E700A8]
                text-[#0F172A]
                py-3 sm:py-4
                rounded-xl
                font-bold
                hover:scale-[1.02]
                transition-all duration-300
                text-sm sm:text-base
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
