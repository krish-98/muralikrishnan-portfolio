import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    if (isDarkMode === 'dark') {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    if (isDarkMode === 'dark') {
      document.body.classList.remove('dark')
      setIsDarkMode('light')
    } else {
      document.body.classList.add('dark')
      setIsDarkMode('dark')
    }
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
