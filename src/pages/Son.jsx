import React from 'react';
import { NavLink } from 'react-router-dom';

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube,BiLogoLinkedin  } from "react-icons/bi";

function Son() {
  return (
    <div>
      <div className=" bg-indigo-200">
           <h1 className="text-blue-950 text-3xl text-center font-semibold hover:text-blue-800 hover:cursor-pointer ">Landing</h1>
           <h2 className=" ml-20 text-gray-500">©2023 Yourcompany</h2>
           <button className=" bold-semibold cursor-pointer bg-blue-950 translate-y-[-2rem]  text-white h-8 w-36  rounded-sm hover:bg-blue-900 translate-x-[70rem]  " >Purchase Now</button>
           <div className=" pt-4 border-b-2	border-bottom-width: 4px border-gray-400"></div>
          
           <div className="flex translate-x-[-25rem] justify-center gap-16 ">
            <NavLink to="/" className="text-gray-500  text-xl pt-8 hover:font-bold  cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=" text-gray-500  text-xl pt-8 hover:font-bold  cursor-pointer"
            >
              About 
            </NavLink>
           
            <NavLink
              to="/contact"
              className="text-gray-500 text-xl pt-8 hover:font-bold  cursor-pointer"
            >
              Contact
            </NavLink>
           <div className="flex text-gray-500 gap-8 translate-y-[2rem] translate-x-[45rem] ">

           <BiLogoFacebook />
           <BiLogoLinkedin />
           <BiLogoTwitter/>
           <BiLogoYoutube/>
           <BiLogoInstagram/>
           </div>
           </div>
           </div>
    </div>
  )
}

export default Son