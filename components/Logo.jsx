import React from "react";
import Link from "next/link";
import Image from 'next/image'
import myLogo from '../src/Images/Logo/RahulLogo2.png'





const Logo = () => {
    return (
        <Link href="/"
        className='w-full'
       
        ><Image src={myLogo} alt="Rahul" className="w-20 h-20 fixed top-4 left-20 rounded-full square border-2 border-light"  />
        
        </Link>
       
    )
}

export default Logo