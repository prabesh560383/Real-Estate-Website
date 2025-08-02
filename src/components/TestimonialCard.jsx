import React from 'react'
import { assets } from '../assets/assets';

const TestimonialCard = ({profileName, profileTitle, profileImg}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center mx-auto  gap-5 px-2 py-10 max-w-[350px] shadow-xl rounded-xl border-gray-100 mb-10'>
        <div className="profile_image">
            <img src={profileImg} alt="" srcset="" />
        </div>

        <div className="profile_details">
            <h2 className='font-semibold text-xl'>{profileName}</h2>
            <p className='text-[16px] text-gray-600'>{profileTitle}</p> 
            <div className="ratings flex gap-1 mx-auto justify-center">
          <img src={assets.star_icon} alt="" srcset="" />
          <img src={assets.star_icon} alt="" srcset="" />
          <img src={assets.star_icon} alt="" srcset="" />
          <img src={assets.star_icon} alt="" srcset="" />
          <img src={assets.star_icon} alt="" srcset="" />
        </div>
        </div>

        

        <div className="testimony ">
           <p className='font-normal text-[rgb(75,85,99)] text-[16px] w-[90%] mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia rerum nam eligendi molestiae culpa vitae quisquam provident facere. Hic quis architecto optio officia reiciendis cupiditate vel labore laudantium beatae quae.</p> 
        </div>
      
    </div>
  )
}

export default TestimonialCard;
