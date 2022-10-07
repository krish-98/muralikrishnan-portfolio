import React from "react"
import Chat from "../assets/chat.jpg"
import { FaFileCode, FaExternalLinkAlt } from "react-icons/fa"

const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col items-center gap-12">
      <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
        Portfolio
      </h2>

      {/* Project - 1 */}
      <div className="flex flex-col gap-3 mb-10">
        <h3 className="text-xl font-semibold uppercase">Chat-Nest</h3>
        <p>
          A Real-time chat application built using React.js for UI & logic,
          ContextAPI for sharing props and Firebase for auth, storage and server
          logic.
        </p>
        <img className="rounded-lg" src={Chat} alt="project cover" />
        <div className="flex gap-6 my-3 md:justify-center">
          <a
            className="bg-white px-4 py-3 text-primary border border-primary rounded-lg text-sm"
            href=""
          >
            Source Code
            <FaFileCode className="inline ml-2 w-5 h-4" />
          </a>
          <a
            className="bg-primary px-4 py-3 text-white rounded-lg text-sm"
            href=""
          >
            Live Project
            <FaExternalLinkAlt className="inline ml-2 w-5 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
