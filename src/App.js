import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

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
    <Header modeToggle={modeToggle} darkMode={darkMode} />
    <Form />
  </div>
  )
}

export default App;
