import React from 'react'

const Title = ({bold_text, underline_text, caption}) => {
  return (
   
        <div className='text-center pt-18 '>
                <h2 className='text-2xl font-semibold md:text-5xl mb-2'> {bold_text} <span className='font-light underline'>{underline_text}</span></h2>
                <p className='text-[18px]  text-gray-600 w-[350px] mx-auto'>{caption}</p>
         </div>
      
   
  )
}

export default Title
