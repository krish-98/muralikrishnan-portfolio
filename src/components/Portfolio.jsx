import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { SiGithub } from "react-icons/si"
import { portfolios } from "../helper/constants"

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="lg:mb-80" />
      <section>
        <h2 className="text-center text-3xl font-semibold tracking-wide uppercase my-6 lg:my-16 lg:text-4xl">
          Portfolio
        </h2>

        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 my-12 p-4 shadow-lg rounded-md md:py-6 lg:flex-row hover:scale-105 transition-all duration-500 ease-in-out"
          >
            {/* Project sceernshot */}
            <img
              className="rounded-lg lg:w-[50%]"
              src={portfolio.img}
              alt="project cover"
            />

            {/* Project desc */}
            <div className="flex flex-col gap-3 md:gap-5 md:items-center lg:self-center">
              <h3 className="text-xl font-semibold uppercase md:text-2xl">
                {portfolio.name}
              </h3>
              <p className="text-[.9rem] md:text-base font-medium md:w-[90%] md:mx-auto md:text-center">
                {portfolio.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                {portfolio.stack.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>

              <div className="my-6 text-center">
                <a
                  className="text-sm bg-white px-4 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-5 hover:shadow-md hover:shadow-primary transition ease-in-out duration-500"
                  href={portfolio.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                  <SiGithub className="inline ml-2 w-4 h-4" />
                </a>
                <a
                  className="text-sm bg-primary px-4 py-3 text-white rounded-lg md:px-8 md:py-5 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
                  href={portfolio.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Project
                  <BiLinkExternal className="inline ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Portfolio
