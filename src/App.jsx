import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggleMode() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)
  }

  return (
    <div className='card'>
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleMode}
      />
      <Main
        darkMode={isDarkMode}
      />
    </div>
  )
}

export default App
