import React from 'react'

import { data } from '../Db/data'
import Blogs from './Blogs'

const Blogpost = () => {
  return (
    <div>
   
            <div className="blog-item mb-10">
            <Blogs data={data} />
            </div>
     
    </div>
  )
}

export default Blogpost