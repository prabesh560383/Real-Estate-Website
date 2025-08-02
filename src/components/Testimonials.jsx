import React from 'react'
import TestimonialCard from './TestimonialCard'
import Title from './Title'
import { assets } from '../assets/assets'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonials = () => {
  return (
   
<div>   
<Title bold_text='Customer' underline_text='Testimonials' caption='Real Stories from Those Who Found Home with Us'  />
<Carousel  opts={{ loop: true,  align: 'start'  }} className = 'mt-10 mx-auto mb-20 w-[65%] sm:w-[50%] md:w-1/2 lg:w-4/5 lg:max-w-[1250px] xl:max-w-[1500px] '>
  <CarouselContent>
    <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3 "> <TestimonialCard profileImg={assets.profile_img_1} profileName='Donald Jackman' profileTitle='Marketing Manager'/> </CarouselItem>
    <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3 "> <TestimonialCard profileImg={assets.profile_img_2} profileName='Richar Nelson' profileTitle='UI/UX Designer'/> </CarouselItem>
    <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3  "> <TestimonialCard profileImg={assets.profile_img_3} profileName='James Washington' profileTitle='Co-Founder'/> </CarouselItem>

    
  </CarouselContent>
  <CarouselPrevious className= 'cursor-pointer xl:hidden' />
  <CarouselNext className= 'cursor-pointer xl:hidden'/>
</Carousel>
</div>  
   
  )
}

export default Testimonials
