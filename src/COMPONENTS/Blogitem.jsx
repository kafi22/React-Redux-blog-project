import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import {HiOutlineArrowLeftCircle} from 'react-icons/hi2'

const Blogitem = () => {

    const location = useLocation()
   const {img,post,title,date} = location.state.item
   
  return (
    <div className='max-w-[1140px] mx-auto h-full px-2 py-6 mt-6'>
         <Link to={'/'}>
       <HiOutlineArrowLeftCircle size={35} className=' text-sky-600' />
      </Link>
       <div className='flex justify-center items-center h-full mt-7 '>
        <article className='flex flex-col justify-between items-start gap-6 text-left '>
            <img src={img} alt="images" className='w-[40rem]' />
            <p>{date}</p>
            <div className='mt-2'>
                <h1 className='mb-4 text-2xl font-bold uppercase'>{title}</h1>
                <p className=' leading-8 capitalize'>{post},Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores accusamus aspernatur, quos earum quae vero odio quidem porro eaque pariatur corporis iure, autem dignissimos at, quis repudiandae molestiae cumque reprehenderit explicabo. Quas nemo voluptates optio ab numquam eveniet velit, tempora incidunt ipsa autem soluta! Maxime culpa aut fuga mollitia.</p>
            </div> 
        </article>
       </div>

    </div>
  )
}

export default Blogitem