import React, { useState } from "react";
import { BiEnvelope, BiPhoneCall, BiPhoneIncoming } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import logo from "../../assets/logobg.png"
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:raphaelsarota@gmail.com?subject=Inquiry&body=${message}`;
  };

  return (
    <footer className="bg-primary_yellow text-white pt-8 pb-4 mt-auto">
      <div className="mx-auto px-4">
      
        <div className="flex flex-col md:flex-row justify-center md:justify-between mx-[2em] md:mx-[4em]">
        
          <div className="md:grid md:grid-cols-3 gap-4 md:w-2/3">

            <div className="mb-4">
              <img src={logo} alt="logo" className="max-h-16" />
              <h1 className="text-xl font-bold">JJtours Company</h1>
              <p className="text-sm text-primary_gray">
                Discover. Explore. Experience.
              </p>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Contact Us</h1>
              <p className="flex items-center text-primary_gray hover:text-gray-100 cursor-pointer transition duration-300">
                <HiLocationMarker size={20} className="mr-2 text-gray-500" />
                Nairobi, Kenya
              </p>
              <a href="tel:+254743739212" className="flex items-center text-primary_gray hover:text-gray-100 cursor-pointer transition duration-300">
                <FaPhone size={16} className="mr-2 text-white" />
                +254796871876
              </a>
              <a href="mailto:info@wanderlustjourneys.com" className="flex items-center text-primary_gray hover:text-gray-100 cursor-pointer transition duration-300">
                <BiEnvelope size={20} className="mr-2 text-blue-600" />
                
              </a>
            </div>

            <div className="mt-6 sm:mt-0">
              <h1 className="text-xl font-semibold">Quick as</h1>
              <div className="flex flex-col text-primary_gray">
                <a to="/" className="hover:text-gray-100 transition duration-300 cursor-pointer">Home</a>
                <a to="/destinations" className="hover:text-gray-100 transition duration-300 cursor-pointer">Destinations</a>
                <a to="/safari-packages" className="hover:text-gray-100 transition duration-300 cursor-pointer">Safari Packages</a>
                <a to="/themed-holidays" className="hover:text-gray-100 transition duration-300 cursor-pointer">Themed Holidays</a>
                <a to="/local-packages" className="hover:text-gray-100 transition duration-30 cursor-pointer0">Local Packages</a>
              </div>
            </div>

          </div>

          <div className="md:w-1/3">
            <div className="mt-6 sm:mt-0">
              <h1 className="text-xl font-semibold">Plan Your Next Adventure</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                <textarea
                  placeholder="Tell us where you want to go..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="px-3 py-4 rounded-md text-black w-full border border-gray-300 focus:outline-none"
                />
                <button type="submit" className="bg-white text-primary_yellow font-bold py-2 px-4 rounded-md hover:opacity-90 transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="my-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JTours Company. All rights reserved.</p>
          <p>Designed and Powered by <span className="text-blue-500 hover:cursor-pointer hover:text-blue-400 transition duration-300">YOUVILAB</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
