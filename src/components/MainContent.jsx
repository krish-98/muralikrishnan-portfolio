import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

const MainContent = () => {
  return (
    <main className={`px-5 text-lightBlack dark:bg-zinc-900`}>
      <div className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </main>
  )
}

export default MainContent
