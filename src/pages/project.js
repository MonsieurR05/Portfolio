
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Game from "../../public/images/projects/GameImg.png"
import Pokemon from "../../public/images/projects/PokemonImg.png"
import Esports from "../../public/images/projects/esports.png"
import Transition from "@/components/Transition";
import TextReveal from "@/components/TextReveal";



const BigProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border-4 border-solid border-dark  p-12 border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark text-primaryDark xs:text-base">
          {type}
        </span>
      
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
       
        <p className="my-2 font-medium text-dark dark:text-light text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
           
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-dark p-2 px-6 text-lg font-semibold
            bg-light dark:text-dark text-dark
            sm:px-4 sm:text-base
            "
          >
            Download
          </Link>
        </div>
      </div>
    </article>
  );
};


const Project = ({ title, type, img, link, github, summary }) => {
  const isEsports = title === "Esports Website"; // Check if the project is the Esports Website

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl 
      border-4 border-solid border-dark bg-dark p-6 relative dark:bg-dark bg-dark dark:border-light border-light xs:p-4">
      <Image src={img} alt={title} className="w-full h-auto" />

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 relativew-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
        <p className="my-2 font-medium relative bottom-2 dark:text-light text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className={`ml-4 rounded-lg bg-light text-dark p-2 px-6 text-lg font-semibold 
              ${isEsports ? ' bg-light text-dark' : ' bg-dark text-dark'}
              sm:px-4 sm:text-base`}
          >
            {isEsports ? 'Download' : 'Visit'}
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Rahul | Projects </title>
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-16">
       
        <TextReveal 
        revealText="Have Fun While Developing!"
        className="2xl:text-6xl lg:text-7xl sm:mb-8 sm:top-14 sm:text-6xl xs:text-4xl sm:relative text-white font-Poppins font-bold tracking-wider text-8xl relative left-1/2 top-3 transform -translate-x-1/2 -translate-y-1/2 text-center"
        />
      

      
         
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 relative top-12">
              <BigProject
                type="Unity Game"
                title="Retro Asteroids Shooter"
                summary="A Unity Game made for a college assignment which was inspired by the original game Asteroids.
                To access the game, you need to extract the downloaded zip file then click on the My Project.exe file to play."
                img={Game}
                link="/Build.zip"
                github="https://github.com/MonsieurR05/Unity-Game"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 relative bottom-12 sm:top-2">
              <Project
                type="HTML, JavaScript and CSS Project"
                title="Bouncing Images"
                summary="A combination of HTML, JS and CSS to create bouncing images with one image that will take you to a different page.
                Project was done as an assignment for College."
                img={Pokemon}
                link="/Bouncing/Project.html"
                github="https://github.com/MonsieurR05/Bouncing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 relative bottom-[7.6%]">
              <Project
                type="NodeJS & MySQL Project"
                title="Esports Website"
                summary="A combination of NodeJs & MySQL to create an esports website which allows you to add a game of your choice and even a player of your choice."
                img={Esports}
                link="/Esports.zip"
                github="https://github.com/MonsieurR05/Esports-Web"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};


export default projects;
