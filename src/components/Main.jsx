import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

const Main = () => {
  return (
    <main className="px-5 text-lightBlack">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

export default Main
