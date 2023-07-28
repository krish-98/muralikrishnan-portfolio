import React from "react"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Portfolio2 from "./Portfolio2"

const Main = () => {
  return (
    <main className="px-5 text-lightBlack">
      <div className="max-w-[1158px] mx-auto">
        <Hero />

        <About />

        <Skills />

        {/* <Portfolio /> */}
        <Portfolio2 />

        <Contact />
      </div>
    </main>
  )
}

export default Main
