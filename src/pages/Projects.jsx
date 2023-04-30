import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import TextAnimation from "@/components/TextAnimation";
import Game from "../Images/project/GameImg.png"
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";



const Projct = ({type, title, summary, img, link, github}) => {
    return(
        <article className="w-full flex items-center justify-between rounded-3xl border-4 border-solid border-light bg-dark overflow-hidden relative top-10 "> 
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto"/>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-16 relative right-10">
                <span className="font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-light">{summary}</p>
                <div className="mt-2 flex items">
                <Link href={github} target="_blank" className="w-10"> <GithubIcon/> </Link>
                <Link href={link} target="_blank" className="ml-4  bg-light text-dark p-2 px-6 text-lg font-semibold rounded-lg">Download</Link>
         
                </div>
            </div>
        </article>
    )
}




const Projects = () => {
    return(
        <>
        <Head>
            <title>Rahul | Projects</title>
            <meta name="description" contents="any description"/>
        </Head>
       <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
            <TextAnimation text="Have Fun While Developing"/>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
                <Projct
            title="Unity Game"
            img={Game}
            summary="My game called Retro Asteroids Shooter, a game inspired by the original asteroids game which was made for project in college." 
            link="/"
            github="/"
            type="Game Project"
                
                
                />
            </div>

          </div>
        </Layout>
       </main>
        </>
    )
}

export default Projects;