import React, { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
