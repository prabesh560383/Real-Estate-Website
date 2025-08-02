import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { assets } from '../assets/assets'
import { useState, useEffect } from 'react'
const Hero = () => {

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='w-full h-screen bg-cover bg-center flex items-center justify-center px-4' style={{backgroundImage: `url(${assets.header_img})`}}>
       <Navbar />

       <div className= {`text-white container transition-all duration-900  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}`}>
        <h1 className=' text-center text-[50px] leading-14 md:text-[65px] md:w-3/4 md:mx-auto md:leading-16  lg:text-[80px] font-[600] lg:w-2/3 lg:leading-20 xl:text-[90px]  xl:leading-22'>
          Explore homes that fit your dreams
        </h1>
      <div className="buttons mt-15 flex gap-5 justify-center">
        <Button label='Projects' variant='blue'/>
        <Button label='Contact Us' variant='none'/>

      </div>
        

       </div>
      
    </div>
  )
}

export default Hero
