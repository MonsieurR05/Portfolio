import Head from 'next/head';
import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import profilePic from "../../public/images/profile/Rahul2.png"
import TypeWriter from 'typewriter-effect';
import TransitionEffect from '@/components/Transition';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rahul Bagga Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-light w-full min-h-screen'>
        <Layout className='pt-0 ' >
          <div className="flex flex-col justify-center items-center w-full lg:flex-col relative bottom-3">
            <div className="relative rounded-full w-80 h-80 flex mx-auto mt-10 overflow-hidden ">
              <Image 
                src={profilePic} 
                alt="profile" 
                layout ="fill" 
                objectFit='cover'
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
              />
            </div>
            <div className='w-4/5 sm:w-1/2 mt-5 flex flex-col items-center'>
            <h1 className='my-1 text-5xl sm:text-2xl md:text-5xl text-gray-500 font-semibold font-mono relative'>Rahul &#8226; &#9794;</h1>

              <h1 className='my-3 text-5xl sm:text-2xl md:text-5xl text-left font-bold relative '>
                <TypeWriter
                  options={{
                    strings: ['Front-End Dev', 'Back-End Dev', 'Game Dev'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className='my-4 font-medium text-center text-lg sm: text-base'>
                As a Software Developer, I'm learning and experimenting to develop new ideas.
              </p>
              <p className='font-medium text-lg text-center sm: text-base'>Explore my abilities in the latest projects.</p>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}
