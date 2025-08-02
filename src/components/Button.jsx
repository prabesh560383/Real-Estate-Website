import React from 'react'

const Button = ({label,variant = 'blue'}) => {
  return (
    <button className={`w-[130px] py-2 text-white rounded-md font-normal text-[16px]  cursor-pointer ${variant == 'blue' ? 'bg-blue-500 ' : 'bg-transparent border-1 border-white'}`}>
        {label}


    </button>
  )
}

export default Button
