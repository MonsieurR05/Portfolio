import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Layout from '../components/Layout';
import TextAnimation from '../components/TextAnimation';
import Picture from '../../public/images/profile/Rahul.png'
import Skills from '../components/Skills';
import TransitionEffect from '@/components/Transition';
import TextReveal from '@/components/TextReveal';




const about = () => {
    return(
    <>
      <Head>
        <title>Rahul | About</title>
        <meta name="description" contents="any description"/>
      </Head>
       <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        {/* <TextAnimation text="Creativity and Imagination!" className='mb-16 relative top-7 sm:!text-6xl xs:!text-4xl sm:mb-8'/> */}
        <TextReveal 
        revealText="Creativity and Imagination!"
        className="lg:text-7xl sm:mb-8 sm:top-16 sm:text-6xl xs:text-4xl sm:relative text-white font-Poppins font-bold tracking-wider text-7xl relative left-1/2 top-3 transform -translate-x-1/2 -translate-y-1/2 text-center"
        />
       
        <div className='grid w-full grid-cols-8 gap-16 sm:grid-cols-2'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='relative top-20 mb-4 text-3xl font-bold uppercase text-light/75'>About Me</h2>
                <p className='font-medium relative top-20'>
  Hi, I'm Rahul, a Junior Software Developer and Game Developer who is passionately curious about programming.
  While currently studying computer science in college, I am always experimenting with different ideas and ways
  to make my own projects enjoyable for users.
</p>

<p className='my-4 font-medium relative top-20'>
  I believe that I have a strong future in this industry as I'm always up for a challenge, regardless of the difficulty, 
  because it can be transformed into knowledge that I can leverage. I am currently planning on going to university to study computer science
  further after completing my 2 years in college, which will further enhance my experience.
</p>

<p className='font-medium relative top-20 '>
  Whether I'm working on a game or programming in the front-end or back-end, I give my all to develop a functional, well-made project and to complete any given task.
  I look forward to utilizing my skills in the industry while also constantly learning new skills to become a better developer each day.
</p>

            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-light bg-dark p-8 top-5 left-10 sm: col-span-2 sm: mr-auto sm: mt-8'>
              <Image src={Picture}  className="w-auto h-auto rounded-2xl mr-auto ml-auto"
              priority
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              />
            </div>
        </div>
        <div className='w-full border-t-2 border-solid border-light relative top-20'>
          <h1 className='text-5xl flex justify-center relative top-1 right-1'>
            My Skills
          </h1>
        <div className='collums grid'>
       <Skills/>
        </div>
        </div>
        </Layout>
      </main>
    </>
    )
}

export default about
