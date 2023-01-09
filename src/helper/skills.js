import { ImHtmlFive } from "react-icons/im"
import { FaReact } from "react-icons/fa"
import {
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
  SiRedux,
} from "react-icons/si"

export const skills = [
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
    name: "Redux",
    icon: <SiRedux className="w-10 h-14 text-[#764abc]" />,
    color: "#61dbfb",
  },
  {
    id: 7,
    name: "Firebase",
    icon: <SiFirebase className="w-10 h-14 text-[#ffcb2e]" />,
    color: "#ffcb2e",
  },
  {
    id: 8,
    name: "Github",
    icon: <SiGithub className="w-10 h-14 text-[#1b1f23]" />,
    color: "#1b1f23",
  },
]
