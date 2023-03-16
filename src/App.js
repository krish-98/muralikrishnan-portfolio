import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect } from "react"

function App() {
  // navigator.onLine
  //   ? console.log("You're online")
  //   : console.log("You're offline")

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      console.log(e)
      console.log("You're offline")
    })

    window.addEventListener("online", (e) => {
      console.log(e)
      console.log("You're online")
    })

    return () => {}
  }, [])

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
