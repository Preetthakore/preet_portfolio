import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "92506ae2-37b1-4475-b820-a8b72892aa4c"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.log("Error:", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setResult("Network error. Try again later.");
    }
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-[#94A3B8] leading-7 text-base sm:text-lg mb-10">
            I'm always interested in new opportunities, internships, and
            exciting projects. Feel free to contact me!
          </p>

          <div className="space-y-6">
            <div className="bg-[#1E293B] p-5 sm:p-6 rounded-3xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">
                Email
              </h3>
              <p className="text-[#94A3B8]">preetthakore@example.com</p>
            </div>

            <div className="bg-[#1E293B] p-5 sm:p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                Phone
              </h3>
              <p className="text-[#94A3B8]">+91 98765 43210</p>
            </div>

            <div className="bg-[#1E293B] p-5 sm:p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold text-pink-500 mb-2">
                Location
              </h3>
              <p className="text-[#94A3B8]">Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block mb-2 text-[#94A3B8]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#38BDF8] text-white"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-[#94A3B8]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#8B5CF6] text-white"
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-[#94A3B8]">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 outline-none resize-none focus:border-pink-500 text-white"
                required
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#E7E700A8] text-[#0F172A] py-4 rounded-xl font-bold hover:scale-[1.02] transition-all duration-300"
            >
              Send Message
            </button>

            {/* STATUS */}
            {result && (
              <p className="text-center text-sm text-[#94A3B8]">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;