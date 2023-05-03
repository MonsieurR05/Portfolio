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
      <main className='flex items-center text-light w-full min-h-screen'>
        <Layout className='pt=0' >
          <div className="flex items-center justify-between w-full">
            <div className="relative rounded-full w-80 h-80 flex ml-auto mr-auto mt-50 overflow-hidden ">
              <Image src={profilePic} alt="profile" layout ="fill" objectFit='cover'  />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1 className='my-1 text-5xl text-gray-500 mr-11 font-semibold font-mono'>	Rahul &#8226; &#9794;</h1>
              <h1 className='my-3 text-6xl text-left mr-11 font-bold'>
              <TypeWriter
                options={{
                  strings: ['Front-End Developer' , 'Back-End Developer', 'Game Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
            <p className='my-4 font-medium'>
            As a Software Developer, I'm learning and experimenting to develop new ideas.
            </p>
            <p className='font-medium text-1xl'>Explore my latest projects and projects under development.
            </p>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}
