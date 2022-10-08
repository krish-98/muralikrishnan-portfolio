import React from "react"
import Chat from "../assets/chat.jpg"
import { BiLinkExternal } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
import {
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si"
import { SiReactrouter, SiRedux } from "react-icons/si"

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="text-center text-3xl font-semibold tracking-wide uppercase my-6 lg:my-16 lg:text-4xl">
        Portfolio
      </h2>

      {/* Project - 1 */}
      <div className="flex flex-col gap-4 my-8 lg:flex-row">
        {/* Project sceernshot */}
        <img className="rounded-lg lg:w-[50%]" src={Chat} alt="project cover" />

        {/* Project desc */}
        <div className="flex flex-col gap-3 md:gap-5 md:items-center lg:self-center">
          <h3 className="text-xl font-semibold uppercase md:text-2xl">City</h3>
          <p className="text-[.9rem] md:text-base font-medium md:w-[90%] md:mx-auto md:text-center">
            An online food ordering application built using Tailwind CSS,
            React.js for UI Rendering along with Redux-Toolkit for state
            management and Firebase for user authentication and cloud-storage.
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-2 mb-2">
            <span>
              <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiRedux className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiReactrouter className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiFirebase className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
          </div>

          <div className="my-4">
            <a
              className="text-sm bg-white px-4 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-5"
              href="#"
            >
              Source Code
              <SiGithub className="inline ml-2 w-4 h-4" />
            </a>
            <a
              className="text-sm bg-primary px-4 py-3 text-white rounded-lg md:px-8 md:py-5 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
              href="#"
            >
              Live Project
              <BiLinkExternal className="inline ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Project - 2 */}
      <div className="flex flex-col gap-4 my-8 lg:flex-row">
        {/* Project sceernshot */}
        <img className="rounded-lg lg:w-[50%]" src={Chat} alt="project cover" />

        {/* Project desc */}
        <div className="flex flex-col gap-3 md:gap-5 md:items-center lg:self-center">
          <h3 className="text-xl font-semibold uppercase md:text-2xl">
            Chat-Nest
          </h3>
          <p className="text-[.9rem] md:text-base font-medium md:w-[90%] md:mx-auto md:text-center">
            A Real-time chat application built using React.js for UI & logic,
            ContextAPI for sharing props and Firebase for auth, storage and
            server logic.
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-2 mb-2">
            <span>
              <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiFirebase className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
          </div>

          <div className="my-4">
            <a
              className="text-sm bg-white px-4 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-5"
              href="#"
            >
              Source Code
              <SiGithub className="inline ml-2 w-4 h-4" />
            </a>
            <a
              className="text-sm bg-primary px-4 py-3 text-white rounded-lg md:px-8 md:py-5 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
              href="#"
            >
              Live Project
              <BiLinkExternal className="inline ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Project - 3 */}
      <div className="flex flex-col gap-4 my-8 lg:flex-row">
        {/* Project sceernshot */}
        <img className="rounded-lg lg:w-[50%]" src={Chat} alt="project cover" />

        {/* Project desc */}
        <div className="flex flex-col gap-3 md:gap-5 md:items-center lg:self-center">
          <h3 className="text-xl font-semibold uppercase md:text-2xl">
            Audiophile
          </h3>
          <p className="text-[.9rem] md:text-base font-medium md:w-[90%] md:mx-auto md:text-center">
            E-commerce site for music lovers built with React.js for UI
            Rendering, React-Router to navigate around different pages and
            Redux-Toolkit for state management
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-2 mb-2">
            <span>
              <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiReactrouter className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
            <span>
              <SiRedux className="w-12 h-8 text-[#764abc] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />
            </span>
          </div>

          <div className="my-4">
            <a
              className="text-sm bg-white px-4 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-5"
              href="#"
            >
              Source Code
              <SiGithub className="inline ml-2 w-4 h-4" />
            </a>
            <a
              className="text-sm bg-primary px-4 py-3 text-white rounded-lg md:px-8 md:py-5 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
              href="#"
            >
              Live Project
              <BiLinkExternal className="inline ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
