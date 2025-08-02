import React from 'react'
import Title from './Title'
import Button from './Button'

const ContactUs = () => {
  return (
    <div className= 'mt-20'>
        <Title bold_text='Contact' underline_text='With Us' caption='Ready to Make a Move? Let’s Build Your Future Together' />

    <div className="  form container mx-auto flex justify-center items-center  max-w-[1250px] mt-10" >

   
        <form action="#" className='w-3/4 flex flex-col gap-8 '>

        <div className="name_email flex flex-col gap-5 lg:flex-row  ">
            <div className="name  flex-1/2">
                <label htmlFor='name' className='text-lg font-normal'>Your Name</label>
                <input type="text" name="name" id="name" className='block  border border-[rgb(75,85,99)] w-full  h-10 pl-2 mt-2 focus:outline-none required:' placeholder='Your Name'  required/>
            </div>

            <div className="email flex-1/2">
                <label htmlFor="email"  className='text-lg font-normal'>Your Email</label>
                <input type="email" name="email" id="email" placeholder = 'Your Email' className='block  border border-[rgb(75,85,99)]  w-full h-10 pl-2 mt-2 p-2 focus:outline-none required' required/>
            </div>

        </div>
            

            <div className="message">
                <label htmlFor="message"  className='text-lg font-normal'>Message</label>
                <textarea name="message" id="message" placeholder='Message' className='block border border-[rgb(75,85,99)] h-40 w-full p-2 focus:outline-none'></textarea>
            </div>

            <div className="btn mx-auto">
                <Button label='Send Message' />
            </div>



        </form>
     </div>


'
      
    </div>
  )
}

export default ContactUs
