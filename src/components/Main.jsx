import React from "react"
import Profile from "../assets/programming.svg"

const Main = () => {
  return (
    <div className="px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <section className="flex flex-col items-center gap-6 text-center py-12 md:py-24">
          <h1 className="font-bold text-5xl leading-tight tracking-wider md:text-[3.5rem]">
            Bonjour, I'm{" "}
            <span className="font-bold text-[#7050ef]">Murali Krishnan</span>
          </h1>

          <p className="font-medium underline underline-offset-2 text-[#87879e] md:text-lg md:underline-offset-4">
            A Frontend Developer
          </p>

          <p className="text-sm leading-6 font-semibold tracking-wide md:w-[70%] lg:text-base">
            I Design and Develop Web apps from blank HTML DOM page to fully
            functional app using modern-day JavaScript 😍 technologies.
          </p>
        </section>

        {/* About Me Section */}
        <section id="#about" className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
            About <span className="text-transparent text-[#7050ef]">Me </span>
          </h2>

          <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:gap-14 lg:text-left">
            <img className="md:w-[50%]" src={Profile} alt="my profile" />

            <p className="text-sm tracking-wide leading-6 font-semibold w-[80%] lg:text-base lg:leading-7">
              Hello World, I am Murali Krishnan. I belong to Madurai, India. I
              have a Bachelor's Degree in Computer Science & Engg. Yet, learned
              everything on the Internet and still learning.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
