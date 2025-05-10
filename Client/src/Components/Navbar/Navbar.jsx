import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import logo from "../../assets/logo.png";       // Standard logo
import logo2 from "../../assets/logobg.png";    // Orange-background logo

const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false);

    return (
        <div className="md:px-8">
            <div className="f">
                {/* Mobile View */}
                <div className="bg-primary_yellow md:hidden flex py-2 px-4 justify-between items-center">
                    <img src={logo2} alt="Goldstein Safaris Logo" className="w-12" />
                    <button onClick={() => setSideMenu(true)}>
                        <HiBars3BottomRight size={30} className="text-white hover:cursor-pointer" />
                    </button>
                </div>

                {/* Side Menu for Mobile */}
                {sideMenu && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-primary_yellow z-50 flex flex-col text-white justify-center items-center px-4">
                        <button onClick={() => setSideMenu(false)} className="absolute top-6 right-6">
                            <FaX size={20} />
                        </button>
                        <img src={logo2} alt="Goldstein Safaris" className="h-16 p-2" />
                        <h2 className="text-2xl font-bold mt-2">Goldstein Safaris</h2>

                        <ul className="text-xl space-y-4 text-center mt-6">
                            <li className="cursor-pointer hover:text-white transition-all">Home</li>
                            <li className="cursor-pointer hover:text-white transition-all">Destinations</li>
                            <li className="cursor-pointer hover:text-white transition-all">Safari Packages</li>
                            <li className="cursor-pointer hover:text-white transition-all">Themed Holidays</li>
                            <li className="cursor-pointer hover:text-white transition-all">Local Packages</li>
                        </ul>

                        <div className="flex gap-6 mt-8 text-white">
                            <a href="tel:+254797871876" aria-label="Call">
                                <FaPhone size={20} className="hover:opacity-90 hover:scale-110 transition-all rotate-90" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram size={20} className="hover:opacity-90 hover:scale-110 transition-all" />
                            </a>
                            <a href="https://wa.me/254796871876?text=Hello Goldstein Safaris," target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp size={20} className="hover:opacity-90 hover:scale-110 transition-all" />
                            </a>
                            <a href="#" aria-label="TikTok">
                                <FaTiktok size={20} className="hover:opacity-90 hover:scale-110 transition-all" />
                            </a>
                        </div>
                    </div>
                )}

                {/* Desktop View */}
                <div className="hidden md:flex justify-between items-center ">
                    <div className="flex items-center gap-4">
                        <img src={logo2} alt="Goldstein Safaris Logo" className="w-16 h-16 hover:cursor-pointer" />
                        <h1 className="text-2xl font-bold text-gray-800 hover:cursor-pointer">Goldstein Safaris</h1>
                    </div>

                    <ul className="flex gap-6 text-md text-gray-800 font-medium">
                        <li className="cursor-pointer hover:text-primary_yellow transition-all">
                            <a href="/">Home</a>
                        </li>
                        <li className="cursor-pointer hover:text-primary_yellow transition-all">
                            <a href="/destinations">Destinations</a>
                        </li>
                        <li className="cursor-pointer hover:text-primary_yellow transition-all">
                            <a href="/safari_packages">Safari Packages</a>
                        </li>
                        <li className="cursor-pointer hover:text-primary_yellow transition-all">
                            <a href="/local_packages">Local Packages</a>
                        </li>
                        <li className="cursor-pointer hover:text-primary_yellow transition-all">
                            <a href="/themed_holidays">Themed Holidays</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
