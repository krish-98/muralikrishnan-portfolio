import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
    document.body.classList.toggle('dark')
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
