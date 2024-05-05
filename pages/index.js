import Head from "next/head";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";

import Image from "next/image";
import image from "../images/image.jpg";
import css from "../images/css.png";
import js from "../images/js.png";
import re from "../images/re.png";
import weath from "../images/weath.jpg";
import yt from "../images/yt.jpg";
import todoL from "../images/todoL.png";
import exten from "../images/exten.png";
import tailwind from "../images/tailwind.png";
import web3 from "../images/web3.png";
import resta from "../images/resta.png";
import next from "../images/next.png";
import codingfunda from "../images/codingfunda.png";

import af from "../images/af.png";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samrat Neupane - FrontEnd Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900">
        <section>
          <nav className=" py-8 mb-12 flex justify-between">
            <h1 className=" font-infor lg:text-4xl md:text-2xl sm:text-xl dark:text-white">
              Samrat Neupane
            </h1>
            <ul className=" flex items-center lg:text-6xl md:text-5xl sm:text-5xl">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setdarkMode(!darkMode)}
                  className=" cursor-pointer text-xl dark:text-white lg:text-2xl md:text-xl sm:text-sm "
                />
              </li>
              <li className=" pb-2 flex items-center">
                <a
                  href="https://drive.google.com/file/d/1VvtuhwnGZrWtX72ZRytyiJ8daHCd5lCE/view?usp=sharing"
                  target="_blank"
                  className="bg-cyan-500 text-white px-4 py-2 font-source border-none rounded-md ml-10 lg:text-2xl md:text-xl sm:text-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-35 overflow-hidden sm:rounded-full w-60 h-60 ">
            <Image src={image} />
          </div>

          <div className=" text-center pt-10">
            <h2 className="text-cyan-600 font-source text-5xl md:text-4xl sm:text-xl">
              Samrat Neupane
            </h2>
            <h3 className=" pt-12 text-blue-500 font-infor">
              <span className=" font-source text-3xl">
                I am a{" "}
                <div className="App text-4xl">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Developer")

                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Content Writer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              </span>
            </h3>
            <p className=" text-xl pt-16 font-source  font-wepb leading-8  text-amber-800 lg:text-xl md:text-sm sm:text-sm dark:text-white">
              Hi there , I am{" "}
              <span className="text-green-500 font-soruce">
                Samrat Neupane.{" "}
              </span>{" "}
              I am a{" "}
              <span className=" text-green-500 cursor-none font-name">
                Computer Engineering !!
              </span>{" "}
              student who loves to write codes and I love travelling.
            </p>
          </div>
        </section>

        {/* <section className=" pt-24">
          <div>
            <h3 className="  text-center text-cyan-600 font-name text-6xl md:text-5xl sm:text-4xl">
              Services I Offer
            </h3>
            <p className=" text-center font-source py-20  text-xl lg:text-5xl md:text-4xl sm:text-3xl  dark:text-white ">
              Nothing till now but i can develope a{" "}
              <span className="pt-8 text-cyan-600 text-3x  dark:text-green-400 font-name">
                wordpress website{" "}
              </span>
            </p>
          </div>
        </section> */}
        <section>
          <div className="text-center pt-16">
            <h1 className=" text-cyan-600  font-name text-5xl md:text-4xl sm:text-3xl">
              Expertise In
            </h1>
          </div>
          <div className=" items-center py-0">
            <div className=" grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
              <div className=" text-center shadow-lg p-10 m-10 ">
                <div className=" flex justify-center pt-16 ">
                  <Image src={css} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white  pt-8">css</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={js} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white pt-8">Javascript</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={re} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white  pt-11">React</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={tailwind} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white pt-8">Tailwind</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center align-center pt-16 dark:bg-slate-400 ">
                  <Image src={next} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white pt-16">NextJS</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={re} width={150} height={150} />
                </div>
                <h1 className=" text-xl dark:text-white  pt-8">React Native</h1>
              </div>
            </div>
          </div>
        </section>

        <section className=" pt-16">
          <div>
            <h1 className=" text-center text-5xl text-cyan-600 font-name">
              Projects
            </h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={codingfunda}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://codingfunda.samratneupane.com.np/">
                    Course Selling Website
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10 ">
                <div className=" flex justify-center pt-16 ">
                  <Image
                    src={weath}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://weather.samratneupane.com.np/">
                    Weather App
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={yt}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://mp3downloader.samratneupane.com.np/">
                    yt to mp3 Converter
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={todoL}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://todolist.samratneupane.com.np/">
                    To-Do List
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={web3}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://web3.samratneupane.com.np/">
                    Web 3 Landing Website
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={exten}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  IP Address Finding Chrome Extension
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={resta}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-16 p-18 dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://restaurantwaitlist.samratneupane.com.np/">
                    Restaurant Waitlist App
                  </a>
                  {/* <p className=" text-sm pt-12 ">This is an Waitlist App, which i created as an Project for DSA used the queue Data Structure</p> */}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div width={600} height={600} className=" border-red-600">
            <h1 className="text-center text-5xl text-cyan-600 pt-16 font-name">
              For Collaboration
            </h1>

            <p
              className=" text-center pt-12 font-source 
            lg:text-xl md:text-md sm:text-md dark:text-green-500"
            >
              Email me :-samrat.neupane17013@gmail.com
            </p>
          </div>
        </section>

        <section className=" pt-12 ">
          <div className="text-center text-white">
            <div className=" text-4xl text-cyan-600 font-source">
              <h1>Connect with Me</h1>
            </div>
            <div className=" text-center text-black text-4xl flex justify-center gap-10 py-10 dark:text-green-300 ">
              <a href="https://twitter.com/samratneupane6">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/samrat-neupane-36394b213/">
                <AiOutlineLinkedin />
              </a>
              <a href="https://github.com/SamratNeupane787">
                <AiOutlineGithub />
              </a>
              <a href="https://www.instagram.com/samratneupane_/">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center font-source text-smg py-11 dark:text-white">
            <h2>Developed by Samrat Neupane</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
