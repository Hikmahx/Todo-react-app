import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'

function App() {

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  
  const getData = async ()=>{
    try {
      const res = await fetch('http://localhost:3000/todos')
      const data = await res.json()
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }

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
      e.target.classList.add('bg-transparent')
      e.target.parentElement.classList.add('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.add('line-through', 'text-light-grayish-blue')
    }
    if(!checked){
      e.target.classList.remove('bg-transparent')
      e.target.parentElement.classList.remove('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.remove('line-through', 'text-light-grayish-blue')
    }
  }

  const inputTodo = (e) =>{
    
    setInput(e.target.value)
  }

  const submitTodo= async (e)=>{
      if(input !== ''){
        const res = await fetch('http://localhost:3000/todos', {
          method: 'POST', 
          headers:{
            "Content-type" : 'application/json', 
          }, 
          body: JSON.stringify({
            todo: input, 
          })
        })

        const data = await res.json()

        // setTodos([...todos, input])
      }
      setInput('')
    e.preventDefault()
  }


  const [checked, setChecked] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState ([])


  return( 
  <div className='App bg-gray dark:bg-very-dark-blue font-josefinSans min-h-screen'>
    <Header modeToggle={modeToggle} darkMode={darkMode} />
    <Form submitTodo={submitTodo} inputTodo={inputTodo} input={input}/>
    <Todos todos={todos} checkBox={checkBox}/>
  </div>
  )
}

export default App;
