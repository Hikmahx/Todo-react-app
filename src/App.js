import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'

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

  const checkBox = (e)=> {
    
    setChecked(!checked)
    let li = e.target.parentElement.parentElement.parentElement
    let p = e.target.parentElement.parentElement.nextElementSibling
    
    li.dataset.completed = checked
    if(checked){
      e.target.style.backgroundColor= 'transparent'
      e.target.parentElement.classList.add('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.add('line-through', 'text-light-grayish-blue')
    }
    if(!checked){
      e.target.style.backgroundColor= ''
      e.target.parentElement.classList.remove('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.remove('line-through', 'text-light-grayish-blue')
    }
  }

  const [checked, setChecked] = useState(true)

  const [darkMode, setDarkMode] = useState(true)

  return( 
  <div className='App bg-gray dark:bg-very-dark-blue font-josefinSans min-h-screen'>
    <Header modeToggle={modeToggle} darkMode={darkMode} />
    <Form />
    <Todos checkBox={checkBox}/>
  </div>
  )
}

export default App;
