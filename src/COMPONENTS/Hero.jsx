import React from 'react'
import blog from  '../Images/anete-lusina-zwsHjakE_iI-unsplash.jpg'


const Hero = () => {
  return (
    <div className='max-w-[1140px] mx-auto h-[90vh] py-6'>
        <div className='md:flex md:justify-between md:items-center p-4 md:gap-12'>
      <img src={blog} alt="blog-image" className='w-[100%] md:w-1/2 rounded-lg' />
      <div className='mt-6 flex flex-col justify-between gap-6 md:w-1/2 text-left'>
        <h1 className='text-lg md:text-3xl uppercase'>The blog content portal</h1>
        <p className='text-lg leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dicta.</p>
        <button className=' bg-black text-white py-3 px-08 inline-block my-5 w-36'>
            Learn more
        </button>
      </div>
        </div>
    </div>
  )
}

export default Hero