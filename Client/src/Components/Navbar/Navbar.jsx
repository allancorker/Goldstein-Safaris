import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false);

    return (
        <div className="px-8 border-b border-primary_yellow">
                <div className="f ">
                    {/* Small screen */}
                    <div className="bg-green-500 md:hidden flex">
                        <button onClick={() => setSideMenu(true)}>
                            <FaBars size={35} className="border-2 p-1 hover:cursor-pointer" />
                        </button>
                    </div>

                    {sideMenu && (
                        <div className="fixed top-0 left-0 w-full h-screen bg-primary_gray z-50 flex flex-col justify-center items-center">
                            <button
                                onClick={() => setSideMenu(false)}
                                className="absolute top-6 right-6 "
                            >
                                <FaX size={30} />
                            </button>
                            <img
                                src={logo}
                                alt="logo"
                                className="flex justify-center items-center w-full h-16 p-2"
                            />

                            <ul className="text-2xl space-y-6 text-center">
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">Home</li>
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">About</li>
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">Services</li>
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">Portfolio</li>
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">Blog</li>
                                <li className="hover:text-gray-400 hover:cursor-pointer p-2 transition-all duration-300 cursor-pointer">Contact</li>
                            </ul>

                            <div className="flex gap-4 mt-6">
                                <a href="tel:+254743739212">
                                    <FaPhone size={22} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer rotate-90" />
                                </a>
                                <a href="https://www.instagram.com/_.serenecircle/profilecard/?igsh=MWIwZ3poMWM0dXltOQ==">
                                    <FaInstagram size={25} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                                <a href="https://wa.me/254743739212?text=Hello Serenity Circle," target="_blank">
                                    <FaWhatsapp size={25} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                                <a href="https://www.tiktok.com/@serenecircle?_t=ZM-8stvijt6iPe&_r=1">
                                    <FaTiktok size={20} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                            </div>
                        </div>
                    )}

                  
                    
            </div>
              {/* Large Screen Navigation */}
              <div className="flex justify-between items-center">
              <div>
                <img src={logo} alt="logo" className="w-16 h-16"/>
              </div>
              <div className="flex">
                        <ul className="flex gap-4 ">
                            <li className="hover:cursor-pointer hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Home</li>
                            <li className="hover:cursor-pointer hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Destinations</li>
                            <li className="hover:cursor-pointer hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Safari Packages</li>
                            <li className="hover:cursor-pointer hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Themed Holidays</li>
                            <li className="hover:cursor-pointer hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Local Packages</li>
                        </ul>
                    </div>
                    </div>

        </div>
    );
};

export default Navbar;
