import React, { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="lg:hidden sticky top-0 z-10 flex items-center justify-between p-4 bg-white text-primary">
        <h1 className="text-2xl">MK</h1>

        {!toggle ? (
          <HiMenu onClick={toggleHandler} className="w-8 h-8 cursor-pointer" />
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white text-secondary flex flex-col justify-center">
            <HiX
              onClick={toggleHandler}
              className="absolute top-4 right-4 w-8 h-8 cursor-pointer text-[#7050ef]"
            />

            <ul className="flex flex-col items-center justify-center gap-16 font-semibold uppercase">
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#home" className="text-lg tracking-wide">
                  Home
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#about" className="text-lg tracking-wide">
                  About
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#portfolio" className="text-lg tracking-wide">
                  Portfolio
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#contact" className="text-lg tracking-wide">
                  Contact
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#blogs" className="text-lg tracking-wide">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* laptop, Desktop Navbar */}
      <nav className="hidden lg:block sticky top-0 bg-white text-primary px-6">
        <div className="max-w-[1158px] mx-auto flex items-center justify-between py-9">
          <h1 className="text-2xl uppercase font-semibold cursor-pointer hover:animate-pulse">
            Murali Krishnan
          </h1>

          <ul className="flex items-center gap-8 uppercase tracking-wider text-[.9rem] font-medium">
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#home">Home</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#about">About</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#resume">Resume</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#blogs">Blogs</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] cursor-pointer ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
