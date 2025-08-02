import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'
import Title from './Title'

const About = () => {
  return (
    <section className='w-full mt-10'>
        <div className="container  mx-auto">
           

            <Title 
                bold_text='About' 
                underline_text='Our Brand'
                caption='Passionate About Properties, Dedicated to Your Vision' />

            <div className="brand-details flex flex-col lg:flex-row items-center justify-center px-4 gap-15 mt-10 xl:items-start">
                <div className="brang-img basis-1/2 h-[520px] flex justify-end pr-5">
                    <img className='h-auto w-full max-w-[500px] object-contain object-right  lg:object-right'  src={assets.brand_img} alt="" />
                </div>

                <div className="brand-stats basis-1/2 xl:pt-5 flex flex-col gap-10 justify-center items-center text-center xl:items-start ">
                    <div className="stats flex flex-wrap  space-y-6  justify-between w-full">
                        <div className="stat basis-1/2 text-center xl:text-left">
                            <h1 className='text-4xl font-medium'>10+</h1>
                            <p>Years of Excellence</p>
                        </div>

                         <div className="stat basis-1/2 text-center xl:text-left">
                            <h1 className='text-4xl font-medium'>12+</h1>
                            <p>Projects Completed</p>
                        </div>

                         <div className="stat basis-1/2 text-center xl:text-left">
                            <h1 className='text-4xl font-medium'>20+</h1>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>

                         <div className="stat basis-1/2 text-center xl:text-left">
                            <h1 className='text-4xl font-medium'>25+</h1>
                            <p>Ongoing Projects</p>
                        </div>
                       

                    </div>

                    <div className="brand-paragraph text-center xl:w-[90%] xl:text-left">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi dolore recusandae molestias atque accusamus facere veniam nulla, repellendus reiciendis ullam eos ratione sint suscipit rem unde aliquid laudantium voluptas ipsum. Repudiandae assumenda numquam facilis dolorem? Corrupti at placeat consequatur eligendi blanditiis! Qui quas sequi tempore modi assumenda voluptatum accusantium! Modi aliquam magni cum quia nemo ad et sequi blanditiis!
                    </div>

                    <div>
                        <Button label = 'Learn More' />
                    </div>
                </div>
            </div>

        </div>



    </section>
  )
}

export default About
