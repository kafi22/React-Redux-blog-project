import React from 'react'

import {HiOutlineTrash, HiOutlineClipboardDocumentCheck, HiArrowLongRight} from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlogitem } from '../FEATURES/blogpostSlice'
import { Link } from 'react-router-dom'

const Datablogitem = () => {

    // const data = useSelector((state) => state.showblog.books)
    const searchItems = useSelector((state) => state.showblog.searchDatablog)
  
 


   

  return (
    <div className='grid md:grid-cols-3 gap-4 md:justify-between md:items-stretch'>

        {searchItems && searchItems.map(item => (

        

            <article className=' bg-sky-300 text-white p-5  rounded-md flex flex-col justify-between items-start gap-4' key={item.id}>
            <h1>Heading : {item.title}</h1>
            <div className='text-left'>
            <p className='mb-4'>Post : {item.post}</p>
            <p>Email : {item.email}</p>

            <Link to={'/singleblog'} state={{item}}>
            <HiArrowLongRight  size={30}/>
            </Link>
            </div>
            
    </article>

        ))} 
        
     
    </div>
  )
}

export default Datablogitem