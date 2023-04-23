import React from 'react'
import {HiOutlineBellAlert} from 'react-icons/hi2'

const Newslatters = () => {
  return (
    <div className='mt-6 py-4'>
        <div className='flex gap-5 md:flex-row md:justify-center md:items-center '>
            <HiOutlineBellAlert size={40} className=' bg-sky-600 rounded-2xl p-2 text-white' />
            <div className='flex  items-center gap-5'>
            <p className=' text-sky-600'>Enter your email address</p>
            <form action="" className='flex justify-between items-center gap-3  relative'>
                <input type="text"  className='md:text-xl h-12 w-[320px] border-2  border-sky-500 outline-sky-500 rounded-lg'/>
                <button className=' absolute right-0 top-0 bg-sky-600 py-3 px-3 w-[100px] rounded-lg text-white hover:bg-black hover:text-white transition-colors'>Subscribe</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Newslatters