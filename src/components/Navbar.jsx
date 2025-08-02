import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Navbar = () => {

  let [mobileMenu, setMobileMenu] = useState(false)

  function toggleMobileMenu(){
    setMobileMenu(prev=>!prev)
  }
  return (
    <nav className = 'fixed z-10 w-full py-4 top-0'>
      <div className=' container mx-auto px-6 flex justify-between items-center'> 

        <div className="logo w-33">
          <img src={assets.logo} alt="" srcset="" />
        </div>

       
          <ul className='desktop-menu items-center gap-9 text-white px-2 text-lg hidden md:flex'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        

        <div className="sign-up hidden md:inline-block">
          <button className='px-8 py-2 bg-white rounded-3xl text-black font-normal text-lg'>
            Sign up
          </button>
        </div>

        <div className="hamburger-icon md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <img src={assets.menu_icon} alt="" srcset="" />
        </div>

                         {/* Mobile Menu */}
        <div className= {` ${mobileMenu ? 'w-full' : 'w-0'} fixed h-screen z-50 text-black bg-white top-0 left-0 transition-all overflow-hidden`}>

          <div className="cross-icon flex  justify-end pt-6 pr-8" onClick={toggleMobileMenu}>
            <img src={assets.cross_icon} alt="" srcset="" className='w-7 cursor-pointer' />
          </div>



          <ul className=  'flex flex-col items-center gap-5 text-lg font-medium mt-[75px]'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Testimonials</a></li>
          </ul>

        </div>
          
            
    
      </div>
    </nav>
  )
}

export default Navbar
