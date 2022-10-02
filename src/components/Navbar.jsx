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
      <nav className="md:hidden sticky top-0 z-10 flex items-center justify-between p-4 bg-[#9d4edd] text-white">
        <h1 className="text-2xl">Murali Krishnan</h1>
        {!toggle ? (
          <HiMenu onClick={toggleHandler} className="w-8 h-8 cursor-pointer" />
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-[#9d4edd] text-secondary flex flex-col justify-center ">
            <HiX
              onClick={toggleHandler}
              className="absolute top-4 right-3 w-8 h-8 cursor-pointer text-white"
            />

            <ul className="flex flex-col items-center justify-center gap-16 font-semibold">
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-[#E0AAFF] transition-all ease-in"
              >
                <a href="#home" className="text-xl tracking-wide">
                  Home
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-[#E0AAFF] transition-all ease-in"
              >
                <a href="#about" className="text-xl tracking-wide">
                  About
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-[#E0AAFF] transition-all ease-in"
              >
                <a href="#portfolio" className="text-xl tracking-wide">
                  Portfolio
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-[#E0AAFF] transition-all ease-in"
              >
                <a href="#contact" className="text-xl tracking-wide">
                  Contact
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-[#E0AAFF] transition-all ease-in"
              >
                <a href="#blogs" className="text-xl tracking-wide">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* laptop, Desktop Navbar */}
      <nav className="hidden md:block sticky top-0 bg-[#9d4edd] text-white p-4">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <h1 className="text-lg lg:text-3xl font-semibold cursor-pointer hover:animate-pulse">
            Murali Krishnan
          </h1>

          <ul className="flex items-center justify-between gap-8 lg:text-lg tracking-wider">
            <li className="hover:transition-all hover:border-b-[2px] hover:border-b-[#E0AAFF] cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] hover:border-b-[#E0AAFF] cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] hover:border-b-[#E0AAFF] cursor-pointer">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] hover:border-b-[#E0AAFF] cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:transition-all hover:border-b-[2px] hover:border-b-[#E0AAFF] cursor-pointer">
              <a href="#blogs">Blogs</a>
            </li>
          </ul>

          <button className="lg:text-lg  bg-[#240046] px-5 py-4 lg:py-4 lg:px-12 rounded-xl hover:bg-white hover:text-[#9d4edd] hover:scale-110 transition-all duration-500 ease-in">
            Let's Connect
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
