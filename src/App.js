// import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  // const [status, setStatus] = useState("")
  // const [message, setMessage] = useState("")

  // useEffect(() => {
  //   !navigator.onLine && console.error("You're Offline")

  //   window.addEventListener("online", (e) => {
  //     console.log(e)
  //     console.log("Online")
  //   })
  //   window.addEventListener("offline", (e) => {
  //     console.log(e)
  //     console.log("Offline")
  //   })

  //   return () => {
  //     window.removeEventListener("online", (e) => console.log("Online"))
  //     window.removeEventListener("offline", (e) => console.log("Offline"))
  //   }
  // }, [])

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
