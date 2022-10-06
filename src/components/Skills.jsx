import React from "react"
import { ImHtmlFive } from "react-icons/im"
import { FaReact } from "react-icons/fa"
import {
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si"

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <ImHtmlFive className="w-10 h-14 text-[#e54c21]" />,
    color: "#e54c21",
  },
  {
    id: 2,
    name: "CSS",
    icon: <SiCss3 className="w-10 h-14 text-[#1870b9]" />,
    color: "#1870b9",
  },

  {
    id: 3,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-14 text-[#38bdf8]" />,
    color: "#38bdf8",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-14 text-[#f7e018]" />,
    color: "#f7e018",
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact className="w-10 h-14 text-[#61dbfb]" />,
    color: "#61dbfb",
  },
  {
    id: 6,
    name: "Firebase",
    icon: <SiFirebase className="w-10 h-14 text-[#ffcb2e]" />,
    color: "#ffcb2e",
  },
  {
    id: 7,
    name: "Github",
    icon: <SiGithub className="w-10 h-14 text-[#1b1f23]" />,
    color: "#1b1f23",
  },
]

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center gap-12 my-28 md:my-44"
    >
      <h2 className="text-3xl font-semibold tracking-wide uppercase my-4 lg:text-4xl">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`w-36 h-36 rounded-xl shadow-lg flex flex-col items-center justify-center gap-1 hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300`}
          >
            {skill.icon}
            <h3 className="tracking-wide">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
