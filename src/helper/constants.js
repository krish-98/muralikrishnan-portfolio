import SoulHeat from "../assets/soulheat.png"
import Musik from "../assets/my-musik.png"
import Audiophile from "../assets/audiophile.png"
import { FaReact } from "react-icons/fa"
import {
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si"
import { GrStripe } from "react-icons/gr"

export const links = [
  { navigation: "#home", linkName: "Home" },
  { navigation: "#about", linkName: "About" },
  { navigation: "#skills", linkName: "Skills" },
  { navigation: "#portfolio", linkName: "Portfolio" },
  {
    navigation:
      "https://drive.google.com/file/d/1e5B0CPamP0gZlX0z4ybcZ0WPV1jo2z8h/view?usp=sharing",
    linkName: "Resume",
  },
  { navigation: "#contact", linkName: "Contact" },
]

export const portfolios = [
  {
    img: SoulHeat,
    name: "Soul Heat",
    description:
      "A fully responsive food ordering app built with SWIGGY's real-world API along with Stripe for payment gateway.",
    sourceLink: "https://github.com/krish-98/soul-heat",
    liveLink: "https://soul-heat.vercel.app",
    stack: [
      <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiFirebase className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiRedux className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiNodedotjs className="w-12 h-8 text-[#43853d] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <GrStripe className="w-12 h-8 text-[#635bff] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
    ],
  },
  {
    img: Musik,
    name: "Musik",
    description:
      "A modern-day music streaming web app built using Shazamcore API.",
    sourceLink: "https://github.com/krish-98/Musik",
    liveLink: "https://my-musik.netlify.app/",
    stack: [
      <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiReactrouter className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiRedux className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
    ],
  },
  {
    img: Audiophile,
    name: "Audiophile",
    description:
      "An e-commerce app for musical instrument lovers with a clean user-friendly UI.",
    sourceLink: "https://github.com/krish-98/audiophile",
    liveLink: "https://audiophile-web.vercel.app/",
    stack: [
      <SiJavascript className="w-12 h-8 text-[#f7e018] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <FaReact className="w-12 h-8 text-[#61dbfb] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiTailwindcss className="w-12 h-8 text-[#38bdf8] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiReactrouter className="w-12 h-8 text-[#f44250] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiFirebase className="w-12 h-8 text-[#ffcb2e] hover:scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
      <SiRedux className="w-12 h-8 text-[#764abc] flex scale-110 hover:shadow-primary transition-all ease-in-out duration-300" />,
    ],
  },
  //   {
  //     img: City,
  //     name: "City",
  //     description:
  //       "A food ordering application built using Tailwind CSS, React.js for UI logic, Redux-Toolkit for state management, and Firebase for user authentication, storage and database.",
  //     sourceLink: "https://github.com/krish-98/city",
  //     liveLink: "https://city-pi.vercel.app/",
  //   },
]
