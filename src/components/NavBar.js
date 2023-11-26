import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsClipboardData } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import Logo from "./Logo";



const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-dark my-2`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
    text-light  dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
   
     
      <button
        className=" flex-col sm:flex sm:relative sm:right-10px hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>
      <div className="w-full flex justify-center items-center lg:hidden">
  <nav className="flex items-center justify-center square relative top-3 border-2 border-light h-[100px] w-[1150px] rounded-xl">
    <Link href="/" className="cursor-pointer flex flex-col items-center justify-center mx-16">
      <BiHomeAlt className="h-10 w-10 text-light" />
      <div className="text-center">Home</div>
    </Link>
    <Link href="/about" className="cursor-pointer flex flex-col items-center justify-center mx-16">
      <BiUser className="h-10 w-10 text-light" />
      <div className="text-center">About</div>
    </Link>
    <Link href="/project" className="cursor-pointer flex flex-col items-center justify-center mx-16">
      <FaCode  className="h-10 w-10  text-light" />
      <div className="text-center">Projects</div>
    </Link>
    <Link href="/contact" className="cursor-pointer flex flex-col items-center justify-center mx-16">
      <HiOutlineMail className="h-10 w-10 text-light" />
      <div className="text-center">Contacts</div>
    </Link>
  </nav>
</div>









      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      "
        >

<nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/project"
              title="Projects"
              className=""
              toggle={handleClick}
            />
              <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
           
          </nav>
        </motion.div>
      ) : null}
        <div className="absolute left-[24%] top-[31%]  translate-x-[-50%] sm:absolute sm:left-[50%]">
        <Logo/>
      </div>
    </header>
  );
};

export default NavBar;
