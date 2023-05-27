import Dev from "../assets/dev.svg"
import { BiLinkExternal } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { BsLinkedin, BsGithub } from "react-icons/bs"
// import Lottie from "react-lottie"
// import heroAnimation from "../assets/heroAnimation.json"

const Hero = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: heroAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // }

  return (
    <section
      id="home"
      className="h-[calc(100vh-64px)] flex items-center justify-center w-full py-4 md:py-24 lg:px-6 lg:h-[calc(100vh-74px)] xl:px-0"
    >
      <div className="flex flex-col items-center gap-7 w-full text-center lg:items-start lg:text-left">
        <h1 className="font-bold text-5xl leading-tight tracking-wider md:text-[3.5rem]">
          Bonjour, I'm{" "}
          <span className="font-bold text-primary">Murali Krishnan</span>
        </h1>

        <p className="font-medium underline underline-offset-2 text-textGray md:text-lg md:underline-offset-4">
          Front-End Developer
        </p>

        <p className="text-sm leading-6 font-semibold tracking-wide md:w-[70%] lg:text-base lg:indent-1 lg:w-[93%]">
          I Build and{" "}
          <span className="relative">
            <span className="line-through decoration-2 decoration-primary">
              Break
            </span>
            <span className="absolute bottom-[.8rem] left-[-2px] lg:left-[-6px] lg:bottom-4 ">
              Debug
            </span>
          </span>{" "}
          websites and web apps from boring HTML DOM pages to fully functional
          apps using modern-day JavaScript 🖤 technologies and a pinch of my
          brain.
        </p>

        <a
          href="https://drive.google.com/file/d/1j4PL2hYX3tYH5Km2lqMO0LjGpmpwOr03/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white px-8 py-4 tracking-wide rounded-xl lg:mt-6 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500 hover:shadow-lg hover:shadow-primary"
        >
          Download Resume
          <BiLinkExternal className="inline-block ml-1 h-5 w-6" />
        </a>

        {/* Social Links */}
        <div className="flex gap-6 my-1 lg:ml-4 ">
          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://www.linkedin.com/in/muralikrishnanm98/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-6 h-5 lg:h-7 lg:w-8" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://twitter.com/muralikrishn_an"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter className="w-6 h-5 lg:h-7 lg:w-8" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="https://github.com/krish-98"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-6 h-5 lg:h-7 lg:w-8" />
          </a>

          <a
            className="hover:text-primary transition-all ease-in-out duration-300 "
            href="mailto:muralikrishnanm98@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="w-6 h-5 lg:h-7 lg:w-8" />
          </a>
        </div>
      </div>

      {/* Hero banner image */}
      <div className="hidden lg:block">
        <img src={Dev} alt="Dev" />
        {/* <Lottie options={defaultOptions} height={400} width={600} /> */}
      </div>
    </section>
  )
}
export default Hero
