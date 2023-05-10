import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Layout from '../components/Layout';
import TextAnimation from '../components/TextAnimation';
import Picture from '../../public/images/profile/Rahul.png'
import Skills from '../components/Skills';
import TransitionEffect from '@/components/Transition';




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
        <TextAnimation text="Creativity and Imagination!" className='mb-16 relative top-7'/>
       
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='relative top-20 mb-4 text-lg font-bold uppercase text-light/75'>About Me</h2>
                <p className='font-medium relative top-20 '>
                  Hi, I'm Rahul, a Junior Software Developer and Game Developer whose passionately curious in programming.
                  While currently studying computer science in college, I'am always experimenting different ideas and ways
                  to make my own projects enjoyable for other users.
                </p>

                <p className='my-4 font-medium relative top-20'>
                  I believe that I have a strong future in this industry as I'm always up for a challenge regardless of the difficulty 
                  because it can be transfered into knowledge that I can save. I'm currently planning on going to university to study computer science
                  further after I finish my 2 years in college and that will boost my experience much more.
                </p>

                <p className='font-medium relative top-20 '>
                  Whether I'm working on a game or programming in the front-end or back-end, I bring my all to develop a functional, well-made project and to complete a task
                  given. I look forward to use my skills in the industry but also learning to new skills to become a better developer each day.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-light bg-dark p-8 top-5 left-10'>
              <Image src={Picture} alt="me" className="w-auto h-auto rounded-2xl mr-auto ml-auto"/>
            </div>
        </div>
        <div className='w-full border-t-2 border-solid border-light relative top-20'>
          <h1 className='text-5xl flex justify-center relative top-3 right-1'>
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
