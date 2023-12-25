import UrbanProperty from '../assets/urbanproperty.png'
import SoulHeat from '../assets/soulheat.png'
import Musik from '../assets/my-musik.png'
import Audiophile from '../assets/audiophile.png'

import {
  SiJavascript,
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

const portfolios = [
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
    ],
  },
  {
    img: SoulHeat,
    name: 'Soul Heat',
    description:
      "A fully responsive food ordering app built with SWIGGY's real-world API along with Stripe for payment gateway.",
    sourceLink: 'https://github.com/krish-98/soul-heat',
    liveLink: 'https://soul-heat.vercel.app',
    stack: [
      <SiJavascript
        key="javascript"
        className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
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
      <GrStripe
        key="stripe"
        className="w-12 h-8 text-[#635bff] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },
  {
    img: Audiophile,
    name: 'Audiophile',
    description:
      'An e-commerce app for musical instrument lovers with a clean user-friendly UI.',
    sourceLink: 'https://github.com/krish-98/audiophile',
    liveLink: 'https://audiophile-web.vercel.app/',
    stack: [
      <SiJavascript
        key="javascript"
        className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
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
      <SiFirebase
        key="firebase"
        className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
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
      <SiJavascript
        key="javascript"
        className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
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
]

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="lg:mb-80" />
      <section className="w-[600px] mx-auto">
        <h2 className="text-center text-3xl font-semibold tracking-wide uppercase my-6 lg:my-12 lg:text-4xl ">
          Portfolio
        </h2>
        <div className="space-y-16">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 my-12 p-4 shadow-lg rounded-md md:py-6 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              {/* Project sceernshot */}
              <img
                className="rounded-lg lg:w-[70%]  self-center"
                src={portfolio.img}
                alt="project cover"
              />

              {/* Project desc */}
              <div className="flex flex-col gap-3 md:gap-5 md:items-center lg:self-center">
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                  {portfolio.name}
                </h3>
                <p className="text-[.9rem] md:text-base font-medium md:w-[90%] md:mx-auto md:text-center">
                  {portfolio.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                  {portfolio?.stack?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className="my-6 text-center">
                  <a
                    className="text-sm bg-white px-4 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-5 hover:shadow-md hover:shadow-primary transition ease-in-out duration-500"
                    href={portfolio.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                    <SiGithub className="inline ml-2 w-4 h-4" />
                  </a>
                  <a
                    className="text-sm bg-primary px-4 py-3 text-white rounded-lg md:px-8 md:py-5 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
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
