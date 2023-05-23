
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Game from "../../public/images/projects/GameImg.png"
import Pokemon from "../../public/images/projects/Pokemon.png"
import Transition from "@/components/Transition";
import TextAnimation from "@/components/TextAnimation";



const BigProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border-4 border-solid border-dark  p-12 dark:bg-dark dark:border-light
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
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
      
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
       
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
           
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
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
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl 
    border-4 border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <Image
        src={img}
        alt={title}
        className="w-full h-auto"
      />
     
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}

        </span>
          <h2 className="my-2  relativew-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>

          <p className="my-2 font-medium relative bottom-2 text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
      
        <div className="w-full flex items-center justify-between">
        <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
           Visit
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
          <TextAnimation
            text="Have Fun While Developing!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl sm: relative top-3"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
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

            <div className="col-span-6 sm:col-span-12 relative bottom-11">
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
          </div>
        </Layout>
      </main>
    </>
  );
};


export default projects;
