import React from "react"
import { skills } from "../helper/skills"

const Skills = () => {
  return (
    <>
      <div id="skills" className="lg:mb-36" />
      <section className="flex flex-col items-center gap-12 my-28 md:my-44">
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
      </section>
    </>
  )
}

export default Skills
