import React from 'react'

const ProjectCard = ({projectImg, projectName, projectPrice}) => {
  return (
    <div className="relative w-fit flex flex-col items-center px-2 md:px-6 mb-15">
                <img src={projectImg} className='object-contain z-1 rounded-xl' alt="" srcset="" />
    
                <div className='  bg-white flex flex-col items-start w-[60%] px-3 py-2 absolute z-5 bottom-[-6%] shadow-md rounded-xl'>
                    <h1 className='font-semibold text-xl lg:text-2xl'>{projectName}</h1>
                    <p className='text-[15px]  text-gray-600 tracking-tight '>{projectPrice}</p>
                </div>
    </div>
  )
}

export default ProjectCard
