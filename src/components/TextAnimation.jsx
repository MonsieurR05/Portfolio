import {motion} from 'framer-motion';
import React from 'react';

const quote = {
    initial:{
        opacity: 1,
    },
    animate:{
        opacity: 1,
        transition:{
            staggerChildren: 0.08,
        }
    }
}

const SingleWord = {
    initial:{
        opacity: 0,
        y:50,
    },
    animate:{
        opacity: 1,
        y:-7,
        transition:{
            duration:1,
        }
    }
}

const TextAnimation = ({ text, className = "" }) => {
    return (
      <div className="w-full mx-auto py-2 font-bold justify-center text-center overflow-hidden">
        <motion.h1
          className={`inline-block w-full text-light font-bold capitalize text-8xl ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span key={word + "-" + index} className="inline-block" variants={SingleWord}>
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    );
  };
  

export default TextAnimation;