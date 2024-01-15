import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  const transitionNavbar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => {
      window.removeEventListener('scroll', transitionNavbar)
    }
  }, [])

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden sticky top-0 z-50 flex items-center justify-between p-4 text-primary text-white transition-all duration-300 ${
          show ? 'hidden' : 'bg-primary'
        }`}
      >
        <a className="text-2xl" href="#top">
          MK
        </a>

        {!toggle ? (
          <HiMenu onClick={toggleHandler} className="w-8 h-8 cursor-pointer" />
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-primary text-secondary flex flex-col justify-center">
            <HiX
              onClick={toggleHandler}
              className="absolute top-4 right-4 w-8 h-8 cursor-pointer text-white"
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
                  href="https://drive.google.com/file/d/1M-WemcWwsdlyny8oqrBCG34g8SNVk37E/view?usp=sharing"
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
        className={`hidden lg:block sticky top-0 z-50 text-primary py-5 px-6 transition-all duration-300 ${
          show ? 'bg-[#9153f4] text-white' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#top"
            className="text-2xl font-medium cursor-pointer hover:animate-pulse"
          >
            Murali
          </a>

          <ul className="flex items-center gap-8 uppercase tracking-wider text-[.9rem] font-medium">
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a
                href="https://drive.google.com/file/d/1M-WemcWwsdlyny8oqrBCG34g8SNVk37E/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="cursor-pointer transition-all ease-in-out duration-300 hover:text-[#3f3d56]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
