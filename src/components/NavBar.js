import React from "react";
import {BiHomeAlt, BiUser } from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi'
import {BsClipboardData} from 'react-icons/bs'
import Link from "next/link";
import Logo from "./Logo";





const NavBar = () => {
  return(
    <nav className="fixed top-4 lg:bottom-8 w-full overflow-hidden z-50 ">
    <div className="container mx-auto">
    <div className="w-full square border-2 border-light h-[60px] rounded-xl max-w-[550px] max-auto px-5 flex justify-between
     text-light/90 mr-auto ml-auto backdrop-blur-sm" >
      <Link  href="/" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> 
        <BiHomeAlt className="h-10 w-10" /> 
      </Link>
      <Link href="/about" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> 
        <BiUser className="h-10 w-10"  /> 
      </Link>
      <Link  href="/project" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
        <BsClipboardData className="h-10 w-10"/> 
      </Link>
      <Link  href="/contact" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
        <HiOutlineMail className="h-10 w-10" /> 
      </Link>
    </div>
  </div>
  <Logo />
</nav>  

  )
}
 

export default NavBar;