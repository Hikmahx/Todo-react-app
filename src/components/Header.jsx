import React from 'react'
import bgMobileLight from '../assets/bg-mobile-light.jpg'
import bgMobileDark from '../assets/bg-mobile-dark.jpg'
import bgDesktopLight from '../assets/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/bg-desktop-dark.jpg'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'


const Header = ({modeToggle, darkMode}) => {

  return (
    <header className="w-full relative flex justify-center">
      <div className="header-background">
        <img src={darkMode? bgMobileLight : bgMobileDark} alt="header-img" className="absolute inset-0 object-cover w-full lg:hidden" />
        <img src={darkMode? bgDesktopLight: bgDesktopDark} alt="header-img" className="absolute inset-0 object-cover w-full hidden lg:block" />
        {/* <div className={ "screen" + darkMode? "bg-gradient-to-r from-gradient-blue to-gradient-purple" : "bg-gradient-to-r from-gradient-purple to-gradient-blue" + " absolute inset-0 opacity-50"}></div> */}
      </div>
      <div className="w-full max-w-xl mx-auto absolute flex items-center justify-between py-11 lg:py-16 lg:mt-4 px-6 lg:px-4">
        <div className="logo uppercase text-white text-3xl lg:text-4xl font-bold tracking-wider lg:tracking-widest">todo</div>
        <img onClick={modeToggle} src={darkMode? moon: sun} alt="moon-icon" className="p-1 w-7 lg:w-8" />
      </div>
    </header>
  )
}

export default Header
