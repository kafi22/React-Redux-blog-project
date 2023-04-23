import React from 'react'
import Datablogitem from '../COMPONENTS/Datablogitem'
import Searchitem from '../COMPONENTS/Searchitem'

const Blog = () => {
  return (
    <div className='max-w-[1140px] mx-auto h-full'>
      <Searchitem />
      <Datablogitem />
    </div>
  )
}

export default Blog