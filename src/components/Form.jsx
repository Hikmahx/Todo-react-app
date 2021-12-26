import React, { useState } from 'react'
import check from "../assets/icon-check.svg"

const Form = () => {
  const checkBox = (e)=> {
    
    setChecked(!checked)
    if(checked){
      e.target.style.backgroundColor= 'transparent'
      e.target.parentElement.classList.add('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
    }
    if(!checked){
      e.target.style.backgroundColor= ''
      e.target.parentElement.classList.remove('bg-gradient-to-r', 'from-gradient-blue', 'to-gradient-purple')
    }
  }

  const [checked, setChecked] = useState(true)

  return (
    <div className="form-wrapper mx-6">
    <div style={{maxWidth:"34rem", top:"0.1rem"}} className="-mt-24 xl:-mt-36 relative mx-auto h-12 lg:h-16 bg-white dark:bg-very-dark-desaturated-blue transition-colors rounded flex items-center">
      <form className="w-full mx-5 lg:mx-6 flex items-center">
        <span  className="checkbox-wrapper relative cursor-pointer">
          <div className=" relative bg-very-light-grayish-blue dark:bg-very-dark-grayish-blue-dark hover:bg-gradient-to-r hover:from-gradient-blue hover:to-gradient-purple transition-colors rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
            <img src={check} alt="check-icon" className="w-2 h-2 lg:w-3 lg:h-3" />
            <div onClick={checkBox} className=" checkbox absolute inset-0 bg-white dark:bg-very-dark-desaturated-blue transition-colors w-4 h-4 lg:w-5 lg:h-5 rounded-full m-auto"></div>
          </div>
        </span>
        <input type="text" className="bg-transparent w-full focus:outline-none px-3 pt-1 lg:px-6 text-xs sm:text-base lg:text-lg text-darkest-grayish-blue dark:text-gray" placeholder="Create a new todo..." />
      </form>
    </div>      
    </div>

  )
}

export default Form
