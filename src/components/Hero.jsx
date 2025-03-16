import Dev from '../assets/dev.svg'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Hero = () => {
  const role = 'Full Stack Developer'
  // const [role, setRole] = useState('Front-End Developer')

  // const handleMouseEnter = () => {
  //   setRole('Full Stack Developer')
  // }

  // const handleMouseLeave = () => {
  //   setRole('Front-End Developer')
  // }

  return (
    <section
      id="home"
      className="h-[calc(100vh-64px)] flex items-center justify-center w-full md:py-24 lg:px-6 lg:h-[calc(100vh-74px)] xl:px-0"
    >
      <div className="flex flex-col items-center gap-7 w-full text-center lg:items-start lg:text-left">
        <h1 className="font-bold text-5xl leading-tight tracking-wider md:text-[3.5rem] dark:text-white">
          Bonjour, I&apos;m
          <span className="font-bold text-primary"> Murali Krishnan</span>
        </h1>

        <p
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className="font-medium text-textGray underline underline-offset-4 decoration-primary md:text-lg dark:decoration-teal-200 transition duration-500"
        >
          {role}
        </p>

        <p className="text-sm leading-6 font-semibold tracking-wide md:w-[70%] lg:text-base lg:indent-1 lg:w-[93%] dark:text-zinc-400">
          I build and{' '}
          <span className="relative">
            <span className="line-through decoration-2 decoration-primary dark:decoration-teal-200">
              break
            </span>
            <span className="absolute bottom-[.8rem] left-[-2px] lg:left-[-6px] lg:bottom-4 ">
              debug
            </span>
          </span>{' '}
          websites and web apps, transforming static HTML pages into fully
          functional applications using modern JavaScript 🖤 technologies—plus a
          pinch of my brain.
        </p>

        <a
          href="https://drive.google.com/file/d/1OIqmI1ARcOaLI1MaYEe2WQ2qWScBvvM5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white px-6 py-4 tracking-wide rounded-xl lg:mt-6 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500 hover:shadow-lg hover:shadow-primary"
        >
          View Resume
          <BiLinkExternal className="inline-block ml-1 h-5 w-6" />
        </a>

        {/* Social Links */}
        <div className="flex gap-6 my-1">
          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://www.linkedin.com/in/muralikrishnanm98/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-6 h-5 lg:h-7 lg:w-8 dark:fill-white dark:hover:fill-primary" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://x.com/muralikrishn_an"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="w-6 h-5 lg:h-7 lg:w-8 dark:fill-white dark:hover:fill-primary" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://github.com/krish-98"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-6 h-5 lg:h-7 lg:w-8 dark:fill-white dark:hover:fill-primary" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="mailto:muralikrishnanm98@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="w-6 h-5 lg:h-7 lg:w-8 dark:fill-white dark:hover:fill-primary" />
          </a>
        </div>
      </div>

      {/* Hero banner image */}
      <div className="hidden lg:block">
        <img src={Dev} alt="Dev" />
      </div>
    </section>
  )
}
export default Hero
