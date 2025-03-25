import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logobg.png";

import { FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false);

    return (
        <div className="md:px-8 ">
                <div className="f ">
                    {/* Small screen */}
                    <div className="bg-primary_yellow md:hidden flex py-1 justify-between">
                    <img src={logo2} alt="logo" className="w-12"/>
                        <button onClick={() => setSideMenu(true)}>
                        <HiBars3BottomRight  size={35} className=" p-1 text-white hover:cursor-pointer" />
                        </button>
                       
                    </div>

                    {sideMenu && (
                        <div className="fixed top-0 left-0 w-full h-screen bg-primary_yellow z-50 flex flex-col  text-white justify-center items-center">
                            <button
                                onClick={() => setSideMenu(false)}
                                className="absolute top-6 right-6 "
                            >
                                <FaX size={20} />
                            </button>
                            <img
                                src={logo2}
                                alt="logo"
                                className="flex justify-center items-center w-fit h-16 p-2"
                            />

                            <ul className="text-xl space-y-4 text-center">
                            <li className="cursor-pointer p-1   hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Home</li>
                            <li className="cursor-pointer p-1  hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Destinations</li>
                            <li className="cursor-pointer p-1  hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Safari Packages</li>
                            <li className="cursor-pointer p-1 hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Themed Holidays</li>
                            <li className="cursor-pointer p-1  hover:border-b-2 border-primary_yellow hover:text-primary_yellow  transition-all opacity-95 ">Local Packages</li>
                       </ul>

                            <div className="flex gap-4 mt-6 text-sm">
                                <a href="tel:+254797871876">
                                    <FaPhone size={20} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer rotate-90" />
                                </a>
                                <a href="">
                                    <FaInstagram size={20} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                                <a href="https://wa.me/254796871876?text=Hello JTours," target="_blank">
                                    <FaWhatsapp size={20} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                                <a href="">
                                    <FaTiktok size={20} className="hover:opacity-90 hover:scale-105 transition-all cursor-pointer text-white" />
                                </a>
                            </div>
                        </div>
                    )}

                  
                    
            </div>
              {/* Large Screen Navigation */}
              <div className="hidden md:flex justify-between items-center">
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
