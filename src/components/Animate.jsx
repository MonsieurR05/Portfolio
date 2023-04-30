import React from 'react'

const Animate = ({text, className=""}) => {
    return(
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <h1 className={`inline-block w-full text-light font-bold capitalize text-8xl className={${className}`} >
            {
                text.split(" ").map((word, index) =>
                <span key={word+'-'+index} className='inline-block'>
                    {word}&nbsp;
                </span>
                )
            }
            </h1>
        </div>
    )
}

export default Animate