import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import ProjectCard from "./ProjectCard"
import { assets } from "../assets/assets"


const ProjectCarousel = () => {
  return (
<Carousel className = 'w-[250px] sm:w-[340px]  md:w-[85%] xl:w-[95%] mx-auto mt-10' opts={{ loop: true,  align: 'start'  }}>
  <CarouselContent>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_1} projectName='Skyline Haven' projectPrice='$2,50,000 | California' /> </CarouselItem>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_2} projectName='Vista Verde' projectPrice='$2,50,000 | San Francisco' /> </CarouselItem>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_3} projectName='Serenity Suites' projectPrice='$2,50,000 | Chicago' /> </CarouselItem>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_5} projectName='Vista Verde' projectPrice='$2,50,000 | San Francisco' /> </CarouselItem>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_4} projectName='Central Square' projectPrice='$2,50,000 | Los Angeles' /> </CarouselItem>
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4"> <ProjectCard projectImg={assets.project_img_6} projectName='Serenity Suites' projectPrice='$2,50,000 | Chicago' /> </CarouselItem>
    
  </CarouselContent>
  <CarouselPrevious className= 'cursor-pointer' />
  <CarouselNext className= 'cursor-pointer'/>
</Carousel>
  )
}

export default ProjectCarousel
