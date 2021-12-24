import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const modeToggle =()=>{
    setDarkMode(!darkMode)
    if(darkMode === false){
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
      }
    }else{
      document.documentElement.classList.add('dark')
    }
  }

  const [darkMode, setDarkMode] = useState(true)

  return( 
  <div className='App bg-gray dark:bg-very-dark-blue font-josefinSans'>
    <Navbar modeToggle={modeToggle}/>
  </div>
  )
}

export default App;
