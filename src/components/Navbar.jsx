import React, { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  const transitionNavbar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => {
      window.removeEventListener("scroll", transitionNavbar)
    }
  }, [])

  console.log(show)

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden sticky top-0 z-10 flex items-center justify-between p-4 bg-white text-primary ${
          show && "backdrop-blur-sm bg-transparent"
        } transition-all duration-300`}
      >
        <a className="text-2xl" href="#home">
          MK
        </a>

        {!toggle ? (
          <HiMenu onClick={toggleHandler} className="w-8 h-8 cursor-pointer" />
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white text-secondary flex flex-col justify-center">
            <HiX
              onClick={toggleHandler}
              className="absolute top-4 right-4 w-8 h-8 cursor-pointer text-[#7050ef]"
            />

            <ul className="flex flex-col items-center justify-center gap-9 font-semibold uppercase">
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#home" className="md:text-lg tracking-wide">
                  Home
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#about" className="md:text-lg tracking-wide">
                  About
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#skills" className="md:text-lg tracking-wide">
                  Skills
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#portfolio" className="md:text-lg tracking-wide">
                  Portfolio
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a
                  href="https://drive.google.com/file/d/1jK97HUeqMKgFKoPguAD5AikwN0SBHRzC/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                  className="md:text-lg tracking-wide"
                >
                  Resume
                </a>
              </li>
              <li
                onClick={toggleHandler}
                className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
              >
                <a href="#contact" className="md:text-lg tracking-wide">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* laptop, Desktop Navbar */}
      <nav
        className={`hidden lg:block sticky top-0 z-10 bg-white text-primary py-7 px-6 ${
          show && "backdrop-blur-lg bg-inherit py-3"
        } transition-all duration-300`}
      >
        <div className="max-w-[1158px] mx-auto flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl uppercase font-semibold cursor-pointer hover:animate-pulse"
          >
            Murali Krishnan
          </a>

          <ul className="flex items-center gap-8 uppercase tracking-wider text-[.9rem] font-medium">
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a
                href="https://drive.google.com/file/d/1jK97HUeqMKgFKoPguAD5AikwN0SBHRzC/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:border-b-[2px] hover:border-lightBlack  ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
