import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
import ProjectCarousel from './ProjectCarousel'

const Projects = () => {
  return (
    <div className=' mt-[100px] mb-[50px]  md:container mx-auto'>
        <Title
            bold_text='Projects'
            underline_text='Completed'
            caption='Crafting Spaces, Building Legacies—Explore Our Portfolio'
        />

    <ProjectCarousel />

        
            

        
       
    </div>
  )
}

export default Projects
