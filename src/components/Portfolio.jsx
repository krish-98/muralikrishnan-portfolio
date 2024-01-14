import UrbanProperty from '../assets/urbanproperty.png'
import SoulHeat from '../assets/soulheat.png'
import Musik from '../assets/my-musik.png'
import Audiophile from '../assets/audiophile.png'
import {
  SiFirebase,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiNodedotjs,
  SiGithub,
  SiExpress,
} from 'react-icons/si'
import { GrStripe } from 'react-icons/gr'
import { BiLinkExternal } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'

const portfolios = [
  {
    img: SoulHeat,
    name: 'Soul Heat',
    description:
      "A fully-functional food ordering app built with SWIGGY's real-world API along with Stripe payment gateway.",
    sourceLink: 'https://github.com/krish-98/soul-heat',
    liveLink: 'https://soul-heat.onrender.com',
    stack: [
      <FaReact
        key="react"
        className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiFirebase
        key="firebase"
        className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiNodedotjs
        key="nodedotjs"
        className="w-12 h-8 text-[#43853d] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiExpress
        key="expressjs"
        className="w-12 h-8 text-[#1b1f23] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <DiMongodb
        key="mongodb"
        className="w-12 h-8 text-[#00ed64] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <GrStripe
        key="stripe"
        className="w-12 h-8 text-[#635bff] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: UrbanProperty,
    name: 'Urban Property',
    description:
      'A MERN stack Real-estate platform showcasing properties for rent, including apartments, houses, and villas',
    sourceLink: 'https://github.com/krish-98/urban-property',
    liveLink: 'https://urban-property.onrender.com',
    stack: [
      <FaReact
        key="react"
        className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiFirebase
        key="firebase"
        className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiNodedotjs
        key="nodedotjs"
        className="w-12 h-8 text-[#43853d] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiExpress
        key="expressjs"
        className="w-12 h-8 text-black hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <DiMongodb
        key="mongodb"
        className="w-12 h-8 text-[#00ed64] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: Musik,
    name: 'Musik',
    description:
      'A modern-day music streaming web app built using Shazamcore API.',
    sourceLink: 'https://github.com/krish-98/Musik',
    liveLink: 'https://my-musik.netlify.app/',
    stack: [
      <FaReact
        key="react"
        className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiReactrouter
        key="reactrouter"
        className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: Audiophile,
    name: 'Audiophile',
    description:
      'An e-commerce app for musical instruments with a clean user-friendly UI.',
    sourceLink: 'https://github.com/krish-98/audiophile',
    liveLink: 'https://audiophile-web.vercel.app/',
    stack: [
      <FaReact
        key="react"
        className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiReactrouter
        key="reactrouter"
        className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiFirebase
        key="firebase"
        className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },
]

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="lg:mb-80" />
      <section className="px-2">
        <h2 className="text-center text-3xl font-semibold tracking-wide uppercase my-6 lg:my-12 lg:text-4xl">
          Portfolio
        </h2>

        {/* Projects */}
        <div className="flex flex-wrap items-center gap-14 xl:gap-[4.5rem]  ">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 shadow-xl rounded-xl hover:scale-105 transition-all duration-500 ease-in-out md:max-w-[500px] mx-auto lg:pb-3"
            >
              {/* Project sceernshot */}
              <img
                className="rounded-t-lg md:h-64 md:object-cover w-full"
                src={portfolio.img}
                alt="project cover"
              />

              <div className="flex flex-col items-center justify-center text-center gap-3 p-4">
                {/* Project desc */}
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                  {portfolio.name}
                </h3>

                <p className="text-[.9rem] md:text-base md:w-[90%] md:mx-auto">
                  {portfolio.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center justify-center gap-2 my-2">
                  {portfolio?.stack?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="my-6 text-center">
                  <a
                    className="text-sm bg-white px-3 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-4 hover:shadow-md hover:shadow-primary transition ease-in-out duration-500"
                    href={portfolio.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                    <SiGithub className="inline ml-2 w-4 h-4" />
                  </a>

                  <a
                    className="text-sm bg-primary px-3 py-3 text-white rounded-lg md:px-8 md:py-4 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
                    href={portfolio.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                    <BiLinkExternal className="inline ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
