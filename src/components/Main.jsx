import React from "react"
import Dev from "../assets/dev.svg"
import Profile from "../assets/programming.svg"
import { BiLinkExternal } from "react-icons/bi"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Main = () => {
  return (
    <div className="px-5 text-lightBlack">
      <div className="max-w-[1158px] mx-auto">
        {/* Hero Section */}
        <section
          id="home"
          className="h-[calc(100vh-64px)] flex items-center justify-center w-full py-12 md:py-24 lg:px-6 xl:px-0"
        >
          <div className="flex flex-col items-center gap-6 w-full text-center lg:items-start lg:text-left">
            <h1 className="font-bold text-5xl leading-tight tracking-wider md:text-[3.5rem]">
              Bonjour, I'm{" "}
              <span className="font-bold text-primary">Murali Krishnan</span>
            </h1>

            <p className="font-medium underline underline-offset-2 text-textGray md:text-lg md:underline-offset-4">
              Frontend Developer
            </p>

            <p className="text-sm leading-6 font-semibold tracking-wide md:w-[70%] lg:text-base">
              I Design and Develop website & web apps. From blank HTML DOM page
              to fully functional web app using modern-day JavaScript 🖤
              technologies.
            </p>

            <a
              href="https://drive.google.com/file/d/1lAsPZGTKbJp-dTAYh7EMJltY4Owym1sn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white px-8 py-4 tracking-wide rounded-xl lg:mt-6 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
            >
              Download Resume
              <BiLinkExternal className="inline-block ml-1 h-5 w-6" />
            </a>

            {/* Social Links */}
            <div className="flex gap-6 my-1 lg:ml-4 ">
              <a
                className="hover:text-primary transition-all ease-in-out duration-300 "
                href="https://www.linkedin.com/in/muralikrishnan98/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="w-6 h-5 lg:h-7 lg:w-8" />
              </a>
              <a
                className="hover:text-primary transition-all ease-in-out duration-300 "
                href="https://twitter.com/muralikrishn_an"
                target="_blank"
                rel="noreferrer"
              >
                <FiTwitter className="w-6 h-5 lg:h-7 lg:w-8" />
              </a>
              <a
                className="hover:text-primary transition-all ease-in-out duration-300 "
                href="https://github.com/krish-98"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="w-6 h-5 lg:h-7 lg:w-8" />
              </a>
              <a
                className="hover:text-primary transition-all ease-in-out duration-300 "
                href="mailto:muralikrishnanm98@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className="w-6 h-5 lg:h-7 lg:w-8" />
              </a>
            </div>
          </div>

          {/* Hero banner image */}
          <div className="hidden lg:block">
            <img src={Dev} alt="Dev" />
          </div>
        </section>

        {/* About Me Section */}
        <section
          id="about"
          className="flex flex-col justify-center items-center gap-6"
        >
          <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
            About <span className="text-primary">Me </span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            <div className="w-full">
              <img
                className="md:w-[70%] md:mx-auto lg:w-full"
                src={Profile}
                alt="my profile"
              />
            </div>

            <div className="flex flex-col items-center self-center lg:items-start">
              <p className="text-sm text-center tracking-wide leading-6 font-semibold mb-6 lg:text-base lg:leading-7 lg:text-left">
                Hello World!{" "}
                <span className="text-primary">I'm Murali Krishnan</span>. I
                belong to <span className="text-primary">Madurai, India</span>.
                I have a Bachelor's Degree in Computer Science & Engg, yet I
                learned everything on the Internet and still learning.
              </p>

              <a
                href="#contact"
                className=" bg-primary text-white px-8 py-4 rounded-xl tracking-wide  lg:px-8 lg:mt-4 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <Skills />

        <Portfolio />

        <Contact />
      </div>
    </div>
  )
}

export default Main
