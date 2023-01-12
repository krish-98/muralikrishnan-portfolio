import React from "react"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

const Main = () => {
  return (
    <main className="px-5 text-lightBlack">
      <div className="max-w-[1158px] mx-auto">
        <Hero />

        <About />

        <Skills />

        <Portfolio />

        <Contact />
      </div>
    </main>
  )
}

export default Main
