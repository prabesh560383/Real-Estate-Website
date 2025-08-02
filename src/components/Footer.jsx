import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'
const Footer = () => {
  return (
    <div className='w-full bg-[rgb(17,24,39)] flex  justify-center items-center p-6'>

        <footer className='flex flex-col items-left gap-5 text-[rgb(156, 163, 175)] font-normal p-2 lg:flex-row lg:container lg:justify-between text-gray-400 xl:pt-10 xl:pb-10'>
            <div className="left">
                <img src={assets.logo_dark} alt="" srcset="" className='mb-2' />
                <p className='max-w-[700px] lg:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae vel modi eos consequuntur quae aspernatur expedita tempora libero magnam?</p>

            </div>

            <div className="center">
                <h2 className='text-xl font-semibold text-white mb-2 '>Company</h2>
                <ul className='flex gap-1 flex-col'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="right">
                <h2 className='text-white mb-2 text-xl'>Subscribe to our newsletter</h2>
                <p className='max-w-[450px] mb-2'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className="subscribe">
                    <input type="email" name="sub" id="sub"  placeholder='Enter your email' className='border-1 mr-4 h-10 rounded-md pl-2 bg-gray-800 border-none mb-4 xl:w-[300px]'/>
                    <Button label='Subscribe' />
                </div>

            </div>
           
        </footer>


      
    </div>
  )
}

export default Footer
