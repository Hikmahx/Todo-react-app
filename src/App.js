import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'

function App() { 
  const [todos, setTodos] = useState ([])
  const [checked, setChecked] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [errMessage, setErrMessage] = useState('') 
  const [id, setId] = useState('')

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  
  const getData = ()=>{
    try {
      axios.get('http://localhost:3000/todos')
      .then(
        reponse=> setTodos(reponse.data)
      )
      
    } catch (error) {
      setError(true)
      setErrMessage(error.message)
    }
  }
  
  const inputTodo = (e) =>{
    
    setInput(e.target.value)
  }

  const submitTodo= (e)=>{
      if(input !== ''){

        if(id===''){
          axios.post('http://localhost:3000/todos', {
            todo: input, 
            completed: false
          })
          .then(
            reponse=> setTodos([...todos, reponse.data])
          )
        }else{

          axios.put(`http://localhost:3000/todos/${id}`, {
            todo:input, 
            completed:false
          })
          .then(
            reponse=> {
              // eslint-disable-next-line
              setTodos(todos.map(todo=>(todo.id==id? {id, todo:input} : todo)))
              setId('')
              if(document.querySelector('form').lastElementChild === document.querySelector('.form-cancel')){
              document.querySelector('form').lastElementChild.remove()
            }
           }
          )
        }
      }
      setInput('')
    e.preventDefault()
  }

  const updateTodo = async (e)=>{
    let id = e.target.parentElement.parentElement.dataset.id
    let p = e.target.parentElement.previousElementSibling.textContent
    let cross = e.target.nextElementSibling
    setInput(p)
    setId(id)

    let form = document.querySelector('form')
    if(form.childElementCount > 2){
      form.lastElementChild.remove()
    }
    let formCross = cross.cloneNode(true)
    formCross.classList.add('form-cancel')
    form.appendChild(formCross)
    formCross.addEventListener('click', ()=>{
      // console.log('working')
      setId('')
      setInput('')
      form.lastElementChild.remove()
    })
  }

  const deleteTodo=  (e)=>{
    let id = e.target.parentElement.parentElement.dataset.id
    // console.log(e.target.parentElement.parentElement.dataset.id)
    // setTodos(todos.filter((todo)=>todo!==item)) 

    axios.delete(`http://localhost:3000/todos/${id}`)
    .then(
      response=>{
        // setTodos(todos.filter((item)=> item !== todos[id-1]))
        getData()
        setId('')
        setInput('')
        if(document.querySelector('form').lastElementChild === document.querySelector('.form-cancel')){
          document.querySelector('form').lastElementChild.remove()
        }
      }
    )
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
      e.target.classList.add('bg-transparent', 'dark:bg-transparent')
      e.target.parentElement.classList.add('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.add('line-through', 'text-light-grayish-blue')
    }
    if(!checked){
      e.target.classList.remove('bg-transparent', 'dark:bg-transparent')
      e.target.parentElement.classList.remove('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
      p.classList.remove('line-through', 'text-light-grayish-blue')
    }
    
    let text = e.target.parentElement.parentElement.nextElementSibling.textContent
    let id = e.target.parentElement.parentElement.parentElement.dataset.id
    axios.put(`http://localhost:3000/todos/${id}`, {
      todo:text,
      completed: checked
    })
    .then(response=>{
      getData()
    })
  }


  return( 
  <div className='App bg-gray dark:bg-very-dark-blue font-josefinSans min-h-screen'>
    <Header modeToggle={modeToggle} darkMode={darkMode} />
    <Form submitTodo={submitTodo} inputTodo={inputTodo} input={input}/>
    <Todos todos={todos} checkBox={checkBox} error={error} errMessage={errMessage} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
  </div>
  )
}

export default App;
