import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({data}) => {


  return (
    <div className='grid md:grid-cols-3 md:justify-between gap-10 md:items-stretch h-full'>
        {data && data.map((item, index) => (
            <article className='flex flex-col justify-between gap-3 mb-4 text-center md:text-left' key={index}>
            <img src={item.img} alt="image"  className='w-[100%] rounded-lg'/>
            <p className='text-xm'>{item.date}</p>
            <div className='flex flex-col justify-between gap-2'>
                <h1 className='md:text-2xl font-bold uppercase'>{item.title}</h1>
                <Link to={'/blogitem'} state={{item}}>
                <p className='text-lg'>{item.post}...</p>
                </Link>
            </div>
            </article>
        ))}
    </div>
  )
}

export default Blogs