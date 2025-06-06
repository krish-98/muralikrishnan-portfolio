import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineMenu } from 'react-icons/md'
import { useDarkMode } from '../contexts/ThemeContext'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)

  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const transitionNavbar = () => {
      window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    window.addEventListener('scroll', transitionNavbar)

    return () => {
      window.removeEventListener('scroll', transitionNavbar)
    }
  }, [])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden sticky top-0 z-50 flex items-center justify-between p-5 transition-colors duration-500 text-primary bg-white ${
          show &&
          'bg-gradient-to-br from-white via-purple-100 to-white dark:bg-gradient-r dark:from-zinc-900 dark:to-zinc-900'
        } dark:bg-zinc-900`}
      >
        <a href="#top" className="cursor-pointer animate-pulse">
          MK
        </a>

        <div>
          <ul className="flex items-center gap-3 text-sm md:text-base md:gap-6">
            <li className="transition-all hover:text-gray-400">
              <a href="#home" className="tracking-wide">
                Home
              </a>
            </li>

            <li className="transition-all hover:text-gray-400">
              <a href="#projects" className="tracking-wide">
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

            {/* Dark mode button */}
            <button onClick={toggleDarkMode}>
              {isDarkMode === 'dark' ? (
                <FiSun size={22} />
              ) : (
                <FiMoon size={22} />
              )}
            </button>
          </ul>

          {/* Toggle menu */}
          {toggle && (
            <>
              <div
                onClick={() => setToggle(false)}
                className="fixed inset-0 z-40"
              />

              <ul className="absolute top-[4.2rem] left-0 right-0 z-50 bg-white text-primary text-sm flex flex-col gap-2 p-4 mx-4 rounded-md shadow-lg dark:bg-zinc-800">
                <li
                  onClick={handleToggle}
                  className="border-b pb-3 transition-all hover:text-gray-400 dark:border-teal-200"
                >
                  <a href="#about" className="md:text-base tracking-wide">
                    About
                  </a>
                </li>

                <li
                  onClick={handleToggle}
                  className="border-b pb-3 transition-all hover:text-gray-400 dark:border-teal-200"
                >
                  <a href="#skills" className="md:text-base tracking-wide">
                    Skills
                  </a>
                </li>

                <li
                  onClick={handleToggle}
                  className="border-b pb-3 transition-all hover:text-gray-400 dark:border-teal-200"
                >
                  <a href="#contact" className="md:text-base tracking-wide">
                    Contact
                  </a>
                </li>

                <li
                  onClick={handleToggle}
                  className="transition-all hover:text-gray-400 dark:border-teal-200"
                >
                  <a
                    href="https://www.notion.so/murali-krishnan/Web-Dev-36d30ca17c3b4c3a8fd660ec7e020025?pvs=4"
                    target="_blank"
                    rel="noreferrer"
                    className="md:text-base tracking-wide"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>

      {/* Laptop, Desktop Navbar */}
      <nav
        className={`hidden lg:block sticky top-0 z-50 text-primary py-5 px-6 transition-colors duration-500 ${
          show &&
          'bg-gradient-to-br from-white via-purple-100 to-white dark:bg-gradient-r dark:from-zinc-900 dark:to-zinc-900'
        } dark:bg-zinc-900`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#top"
            className="text-xl font-medium cursor-pointer animate-pulse"
          >
            MK
          </a>

          <ul className="flex items-center gap-8">
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a href="#contact">Contact</a>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-teal-200">
              <a
                href="https://www.notion.so/murali-krishnan/Web-Dev-36d30ca17c3b4c3a8fd660ec7e020025?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                Resources
              </a>
            </li>

            {/* Dark mode button */}
            <button onClick={toggleDarkMode}>
              {isDarkMode === 'dark' ? (
                <FiSun size={22} />
              ) : (
                <FiMoon size={22} />
              )}
            </button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
