import React from 'react'
import check from "../assets/icon-check.svg"
import pencil from "../assets/icon-pencil.svg"
import cross from "../assets/icon-cross.svg"


const TodoItem = () => {
    return (
        <li className="todo-item relative flex items-center h-12 lg:h-16 px-5 lg:px-6 w-full border-b border-light-grayish-blue dark:border-dark-grayish-blue-dark">
        <span  className="checkbox-wrapper relative cursor-pointer">
          <div className=" relative bg-very-light-grayish-blue dark:bg-very-dark-grayish-blue-dark hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple transition-colors rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
            <img src={check} alt="check-icon" className="w-2 h-2 lg:w-3 lg:h-3" />
            <div className=" checkbox absolute inset-0 bg-white dark:bg-very-dark-desaturated-blue transition-colors w-4 h-4 lg:w-5 lg:h-5 rounded-full m-auto"></div>
          </div>
        </span>         
        <p className="todo-task relative px-3 lg:px-6 ">Wash my car</p>
        <div className="action absolute inset-0 lg:opacity-0 lg:hover:opacity-100 mr-4 lg:mr-3 flex justify-end items-center">
          <img src={pencil} alt="check-icon" className="w-5 h-5 lg:w-6 lg:h-6 m-2 lg:m-3 cursor-pointer" />
          <img src={cross} alt="check-icon" className="w-5 h-5 lg:w-6 lg:h-6 m-2 lg:m-3 cursor-pointer" />            
        </div>
        </li>
    )
}

export default TodoItem
