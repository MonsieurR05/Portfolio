import React from "react";
import Link from "next/link";
import Image from 'next/image'
import myLogo from '../../public/images/Logo/RahulLogo2.png'

const Logo = () => {
    return (
        <Link href="/" className='w-full' >
            <div style={{ position: "relative", height: "80px", width: "80px" }}>
                <Image src={myLogo} alt="Rahul" className="w-20 h-20 absolute top-0 left-0 rounded-full square border-2 border-light  backdrop-blur-sm"  />
            </div>
        </Link>
    )
}

export default Logo;
