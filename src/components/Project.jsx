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
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiGithub,
} from 'react-icons/si'
import { GrStripe } from 'react-icons/gr'
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { BiLinkExternal } from 'react-icons/bi'

const projects = [
  {
    img: SoulHeat,
    name: 'Soul Heat',
    description:
      'A feature-rich food ordering application built using the MERN stack with seamless payment integration via Stripe.',
    sourceLink: 'https://github.com/krish-98/soul-heat',
    liveLink: 'https://soulheat.vercel.app',
    stack: [
      <SiTypescript
        key="typescript"
        title="typescript"
        className="w-12 h-8 text-[#3178c6] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <FaReact
        key="react"
        title="react"
        className="w-12 h-8 text-[#61dbfb] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        title="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        title="redux"
        className="w-12 h-8 text-[#764abc] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiNodedotjs
        key="nodedotjs"
        title="nodejs"
        className="w-12 h-8 text-[#43853d] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiExpress
        key="expressjs"
        title="expressjs"
        className="w-12 h-8 text-[#1b1f23] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300 dark:text-white"
      />,
      <DiMongodb
        key="mongodb"
        title="mongodb"
        className="w-12 h-8 text-[#00ed64] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <GrStripe
        key="stripe"
        title="stripe"
        className="w-12 h-8 text-[#635bff] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiFirebase
        key="firebase"
        title="firebase"
        className="w-12 h-8 text-[#ffcb2e] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: UrbanProperty,
    name: 'Urban Property',
    description:
      'A MERN stack real estate platform enabling users to explore properties for rent and sale, including apartments, houses, and villas.',
    sourceLink: 'https://github.com/krish-98/urban-property',
    liveLink: 'https://urbanproperty.vercel.app',
    stack: [
      <SiTypescript
        key="typescript"
        title="typescript"
        className="w-12 h-8 text-[#3178c6] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <FaReact
        key="react"
        title="react"
        className="w-12 h-8 text-[#61dbfb] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        title="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        title="redux"
        className="w-12 h-8 text-[#764abc] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiNodedotjs
        key="nodejs"
        title="nodejs"
        className="w-12 h-8 text-[#43853d] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiExpress
        key="expressjs"
        title="expressjs"
        className="w-12 h-8 text-black flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300 dark:text-white"
      />,
      <DiMongodb
        key="mongodb"
        title="mongodb"
        className="w-12 h-8 text-[#00ed64] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiFirebase
        key="firebase"
        title="firebase"
        className="w-12 h-8 text-[#ffcb2e] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: Audiophile,
    name: 'Audiophile',
    description:
      'An e-commerce application for music enthusiasts with a clean and user-friendly interface.',
    sourceLink: 'https://github.com/krish-98/audiophile',
    liveLink: 'https://audiophile-web.vercel.app/',
    stack: [
      <SiJavascript
        key="javasript"
        title="javasript"
        className="w-12 h-8 text-[#f7e018] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <FaReact
        key="react"
        title="react"
        className="w-12 h-8 text-[#61dbfb] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        title="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiReactrouter
        key="reactrouter"
        title="reactrouter"
        className="w-12 h-8 text-[#f44250] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        title="redux"
        className="w-12 h-8 text-[#764abc] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },

  {
    img: Musik,
    name: 'Musik',
    description:
      'A modern music streaming web app powered by the Shazamcore API.',
    sourceLink: 'https://github.com/krish-98/Musik',
    liveLink: 'https://my-musik.netlify.app/',
    stack: [
      <SiJavascript
        key="javasript"
        title="javasript"
        className="w-12 h-8 text-[#f7e018] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <FaReact
        key="react"
        title="react"
        className="w-12 h-8 text-[#61dbfb] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiTailwindcss
        key="tailwindcss"
        title="tailwindcss"
        className="w-12 h-8 text-[#38bdf8] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiReactrouter
        key="reactrouter"
        title="reactrouter"
        className="w-12 h-8 text-[#f44250] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
      <SiRedux
        key="redux"
        title="redux"
        className="w-12 h-8 text-[#764abc] flex hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300"
      />,
    ],
  },
]

const Project = () => {
  return (
    <>
      <div id="projects" className="mt-48 lg:mb-80" />
      <section className="px-2">
        <h2 className="text-center text-3xl font-semibold tracking-wide uppercase my-16 lg:text-4xl dark:text-white">
          Projects
        </h2>

        {/* Projects */}
        <div className="flex flex-wrap items-center gap-14 xl:gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 md:max-w-[400px] mx-auto lg:pb-3 shadow-xl rounded-xl hover:scale-105 transition-all duration-500 ease-in-out  dark:border dark:border-zinc-700 dark:text-white"
            >
              {/* Project sceernshot */}
              <img
                className="rounded-t-xl md:h-64 md:w-full object-cover"
                src={project.img}
                alt="project cover"
              />

              <div className="flex flex-col items-center justify-center text-center gap-3 p-4">
                {/* Project desc */}
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                  {project.name}
                </h3>

                <p className="text-[.9rem] md:text-base md:w-[90%] md:mx-auto dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 my-2">
                  {project?.stack?.map((item, index) => (
                    <span key={index} title={item.title}>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="my-6 text-center">
                  <a
                    className="text-sm bg-white px-3 py-3 text-primary border border-primary rounded-lg mr-4 md:px-8 md:py-4 hover:shadow-md hover:shadow-primary transition ease-in-out duration-500"
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                    <SiGithub className="inline ml-2 w-4 h-4" />
                  </a>

                  <a
                    className="text-sm bg-primary px-3 py-3 text-white rounded-lg md:px-8 md:py-4 drop-shadow-2xl hover:text-lightBlack hover:bg-white hover:ring-2 hover:ring-primary transition ease-in-out duration-500"
                    href={project.liveLink}
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

export default Project
