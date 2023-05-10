import Head from 'next/head';
import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import profilePic from "../../public/images/profile/Rahul2.png"
import TypeWriter from 'typewriter-effect';





export default function Home() {
  return (
    <div>
      <Head>
        <title>Rahul Bagga Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-light w-full min-h-screen sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16' >
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="relative rounded-full w-80 h-80 flex ml-auto mr-auto mt-50 overflow-hidden md:w-full sm:w-full ">
              <Image src={profilePic} alt="profile" layout ="fill" objectFit='cover' className="lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1 className='my-1 text-5xl text-gray-500 mr-11 font-semibold font-mono md:text-sm sm:text-xs'>	Rahul &#8226; &#9794;</h1>
              <h1 className='my-3 text-6xl text-left mr-11 font-bold md:text-sm sm:text-xs'>
              <TypeWriter
                options={{
                  strings: ['Front-End Developer' , 'Back-End Developer', 'Game Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
            <p className='my-4 font-medium md:text-sm sm:text-xs'>
            As a Software Developer, I'm learning and experimenting to develop new ideas.
            </p>
            <p className='font-medium text-1xl md:text-sm sm:text-xs'>Explore my abilites in the latest projects.
            </p>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}
