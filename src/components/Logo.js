import React from "react";
import Link from "next/link";
import Image from 'next/image'
import myLogo from '../../public/images/Logo/RahulLogo2.png'

const Logo = () => {
    return (
        <Link href="/" className='w-full' >
            <div style={{ position: "relative", height: "95px", width: "95px" }}>
                <Image src={myLogo} className=" absolute bottom-1 left-0"  />
            </div>
        </Link>
    )
}

export default Logo;
