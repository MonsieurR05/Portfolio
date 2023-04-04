import React from "react";
import {BiHomeAlt, BiUser } from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
     <nav className="fixed top-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
        <div className="w-full bg-white/20 h-[60px] rounded-full max-w-[550px] max-auto px-5 flex justify-between tex 2x1
         text-white/90 mr-auto ml-auto" >
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> 
            <BiHomeAlt className="h-10 w-10" /> 
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> 
            <BiUser className="h-10 w-10"  /> 
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData className="h-10 w-10"/> 
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase className="h-10 w-10" /> 
          </Link>
        </div>
      </div>
    </nav>  
    );
};

export default Navbar