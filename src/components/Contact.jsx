import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black text-white pt-0 pb-24 px-6 md:px-20">

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="mt-0 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8 ml-4 md:ml-40">
          Contact
        </h2>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row gap-10 text-gray-300">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <p className="text-lg">
              I'm always open to collaboration, freelancing, or just a friendly tech chat! Feel free to connect with me through any platform.
            </p>

            <div className="space-y-4 text-base">
              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-500 text-xl" />
                <span>+91 7028708249</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>mahimadhore0929@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a href="#" className="hover:text-purple-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Section - Message Form */}
          <div className="flex-1">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 my-10" />
      </div>
    </section>
  );
};

export default Contact;
