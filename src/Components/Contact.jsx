import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div id="contact"
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
          Contact Me
        </h1>

      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-[#94A3B8] leading-8 text-lg mb-10">

            I’m always interested in new opportunities,
            internships, and exciting projects.

            Feel free to contact me if you want to
            collaborate or just say hello.

          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            <div
              className="
                bg-[#1E293B]
                p-5
                rounded-2xl
                border border-white/10
              "
            >

              <h3 className="text-xl font-semibold mb-2 text-[#38BDF8]">
                Email
              </h3>

              <p className="text-[#94A3B8]">
                preetthakore@example.com
              </p>

            </div>

            <div
              className="
                bg-[#1E293B]
                p-5
                rounded-2xl
                border border-white/10
              "
            >

              <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">
                Phone
              </h3>

              <p className="text-[#94A3B8]">
                +91 98765 43210
              </p>

            </div>

            <div
              className="
                bg-[#1E293B]
                p-5
                rounded-2xl
                border border-white/10
              "
            >

              <h3 className="text-xl font-semibold mb-2 text-pink-500">
                Location
              </h3>

              <p className="text-[#94A3B8]">
                Ahmedabad, Gujarat, India
              </p>

            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div
          className="
            bg-[#1E293B]
            p-8
            rounded-3xl
            border border-white/10
            shadow-xl
          "
        >

          <form className="space-y-6">

            {/* Name */}
            <div>

              <label className="block mb-2 text-[#94A3B8]">
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
                  px-5 py-4
                  outline-none
                  focus:border-[#38BDF8]
                "
              />

            </div>

            {/* Email */}
            <div>

              <label className="block mb-2 text-[#94A3B8]">
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
                  px-5 py-4
                  outline-none
                  focus:border-[#8B5CF6]
                "
              />

            </div>

            {/* Message */}
            <div>

              <label className="block mb-2 text-[#94A3B8]">
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
                  px-5 py-4
                  outline-none
                  resize-none
                  focus:border-pink-500
                "
              ></textarea>

            </div>

            {/* Button */}
            <button
              className="
                w-full
                bg-[#E7E700A8]
                text-[#0F172A]
                py-4
                rounded-xl
                font-bold
                hover:scale-[1.02]
                transition-all duration-300
              " 
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </motion.div>
  )
}

export default Contact