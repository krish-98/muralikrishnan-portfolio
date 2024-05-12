import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineMenu } from 'react-icons/md'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleToggle = () => {
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
        className={`lg:hidden sticky top-0 z-50 flex items-center justify-between p-5 text-white transition-all duration-300 bg-primary`}
      >
        <button onClick={handleDarkMode}>
          {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
        </button>

        <div>
          <ul className="flex items-center gap-3 text-sm">
            <li className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in">
              <a href="#home" className="md:text-lg tracking-wide">
                Home
              </a>
            </li>

            <li className="hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in">
              <a href="#projects" className="md:text-lg tracking-wide">
                Projects
              </a>
            </li>

            <div>
              <MdOutlineMenu
                onClick={handleToggle}
                size={25}
                className="cursor-pointer"
              />
            </div>
          </ul>

          {toggle && (
            <>
              <div
                onClick={() => setToggle(false)}
                className="fixed inset-0 z-50"
              />

              <ul className="absolute top-[4.2rem] left-0 right-0 z-40 bg-white text-primary text-sm flex flex-col gap-2 p-4 mx-4 rounded-md shadow-lg">
                <li
                  onClick={handleToggle}
                  className="border-b pb-2 hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
                >
                  <a href="#about" className="md:text-lg tracking-wide">
                    About
                  </a>
                </li>

                <li
                  onClick={handleToggle}
                  className="border-b pb-2 hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
                >
                  <a href="#skills" className="md:text-lg tracking-wide">
                    Skills
                  </a>
                </li>

                <li
                  onClick={handleToggle}
                  className="border-b pb-2 hover:border-b-[2px] hover:border-b-gray-400 transition-all ease-in"
                >
                  <a href="#contact" className="md:text-lg tracking-wide">
                    Contact
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
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
