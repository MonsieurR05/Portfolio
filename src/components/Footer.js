import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg text-light border-light sm:text-base sm: relative top-20
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built By<span className="text-primary text-primaryDark text-2xl px-1"> &#9825; </span>
          MonsieurR
        </div>
        <Link
          href="/"
          className="underline
            underline-offset-2
            "
        >
          Home
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
