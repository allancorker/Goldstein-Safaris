import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaXTwitter } from 'react-icons/fa6'

const Topnav = () => {
    return (
        <div className='md:flex justify-between items-center text-sm hidden   bg-primary_yellow text-white px-8'>

            <div className='flex justify-center items-center gap-4'>
                <p className='bl-2'>JTours,Kenya's leading Tour and Travel Company</p>
                <p className='flex border-l-2 cursor-pointer hover:opacity-90 border-white pl-1 justify-center items-center'><FaPhone />+254796871876</p>
                <p className='flex border-l-2 cursor-pointer hover:opacity-90 border-white pl-1 justify-center gap-1 items-center'><FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                </p>
            </div>
            <div>
                <button className='bg-white  text-primary_gray px-4 animate-pulse py-2'>Contact</button>
            </div>
        </div>
    )
}

export default Topnav