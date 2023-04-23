import React from 'react'
import {HiOutlineArrowLeftCircle, HiOutlineTrash, HiOutlineClipboardDocumentCheck,} from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { deleteBlogitem } from '../FEATURES/blogpostSlice'

const Singleblog = () => {


    const location = useLocation()
    console.log(location)
    
    // const {title,id,post,email} = location.state
    const item = location.state.item
    const dispatch = useDispatch()
    const navigator = useNavigate()

    
    const deleteButtonAction = (id) => {
        dispatch(deleteBlogitem(id))
        navigator('/blog', {replace : true})
      
    }

  return (
    <div className='container mx-auto px-2 py-4'>

    <div className='mt-8 py-4'>
    <Link to={'/blog'}>
       <HiOutlineArrowLeftCircle size={35} className=' text-sky-600' />
      </Link>
    </div>

      <div className='mt-10 py-6'>
      <article className='bg-sky-300 text-white p-5  rounded-md flex flex-col justify-between items-start gap-4' key={item.id}>
                    <h1>Heading : {item.title}</h1>
                    <div className='text-left'>
                    <p className='mb-4'>Post : {item.post}</p>
                    <p>Email : {item.email}</p>
                    </div>
                
                    <div>
                    <Link to={'/editpost'}  state={{item}}>
                    <button>
                                <HiOutlineClipboardDocumentCheck  size={30} />
                    </button>
                    </Link>

                    <button onClick={() => deleteButtonAction(item.id)}>
                     <HiOutlineTrash size={30} />
                    </button>

                    </div>
                </article>
      </div>
    </div>
  )
}

export default Singleblog