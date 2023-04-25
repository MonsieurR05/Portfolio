import React from "react";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="w-full border-t-2 border-solid border-light
        font-medium text-lg
        ">
            <div className="py-8 flex items-center justify-between text-light"> 
            <span className="relative left-40">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="relative right-10 bottom-1">
                Made by <span className="text-primary text-2xl px-1">&#9825; </span>
                MonsieurR
                </div>
                <Link className="relative right-60 bottom-1" href="/">Home</Link>
            </div>
        </footer>
    )
}

export default Footer;