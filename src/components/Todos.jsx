import React from 'react'
import TodoItem from '../components/TodoItem'


const Todos = ({checkBox, todos}) => {
  
  return (
    <div className="todo-container mx-6 pb-10">
      <div style={{maxWidth:"34rem"}} className='mx-auto mt-7 text-xs sm:text-base lg:text-lg text-darkest-grayish-blue dark:text-gray'>
        <ul className="w-full flex flex-col items-center relative bg-white dark:bg-very-dark-desaturated-blue transition-colors shadow-xl rounded">
        {todos.map(todo=>(
          <TodoItem checkBox={checkBox} todo={todo} />
        ))}
          {todos.length > 0 ? 
          <li className="flex items-center justify-between h-12 px-5 lg:px-6 w-full text-xs lg:text-sm text-dark-grayish-blue dark:text-dark-grayish-blue-dark">
            <div className="items-remainding">5 items left</div>
            <div className="complete-status hidden lg:flex font-bold">
              <p className="mx-3 cursor-pointer text-bright-blue">All</p>
              <p className="mx-3 cursor-pointer hover:text-darkest-grayish-blue dark:hover:text-gray">Active</p>
              <p className="mx-3 cursor-pointer hover:text-darkest-grayish-blue dark:hover:text-gray">Completed</p>
            </div>
            <div className="clear-complete text-light-grayish-blue hover:text-dark-grayish-blue dark:text-dark-grayish-blue-dark dark:hover:text-gray cursor-pointer">Clear Completed</div>
          </li>
          : null
          }   
        </ul>
        {todos.length > 0 ? 
        <>
        <div className="flex items-center justify-center mt-6 lg:mt-0 h-12 px-5 lg:px-6 w-full lg:hidden text-xs lg:text-sm shadow bg-white dark:bg-very-dark-desaturated-blue text-dark-grayish-blue rounded">
          <div className="complete-status flex font-bold">
            <p className="mx-3 text-bright-blue">All</p>
            <p className="mx-3 hover:text-darkest-grayish-blue dark:hover:text-gray">Active</p>
            <p className="mx-3 hover:text-darkest-grayish-blue dark:hover:text-gray">Completed</p>
          </div>
        </div>
        <p className="mt-8 lg:mt-14 text-center text-xs lg:text-sm text-dark-grayish-blue dark:text-light-grayish-blue-dark">Drag and drop to reorder list</p>
        </>  
        : null
        }   

      </div>      
    </div>

  )
}

export default Todos
