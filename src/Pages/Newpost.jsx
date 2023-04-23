import React, { useState } from 'react'

import postImage from '../Images/aaron-burden-xG8IQMqMITM-unsplash.jpg'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlogitem } from '../FEATURES/blogpostSlice'

const Newpost = () => {

  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandel = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const newUser = {title,post,email,id}
    dispatch(addBlogitem(newUser))
    navigate('/blog', {replace : true})

  }
  return (
    <div className=' max-w-[1140px] mx-auto h-full  py-6 mt-10'>

      <div className=' flex md:flex-row md:justify-between md:items-stretch h-full '>

          <div className=' w-1/2 p-5 flex'>
          <form action="" className=' flex flex-col justify-center items-start w-[100%]' onSubmit={submitHandel}>
            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="heading">Heading :</label>
            <input type="text"  required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="post">Post :</label>
            <input type="text" required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg'  value={post} onChange={(e) => setPost(e.target.value)} />
            </div>

            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="heading">Email :</label>
            <input type="email" required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg'  value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <button className=' bg-black py-2 px-7 text-white mt-7' type='submit'>Submit</button>

          </form>
          </div>

          <div className='img-content w-1/2' >
            <img src={postImage} alt="" className=' w-[32rem]'/>
          </div>
    
      </div>
    </div>
  )
}

export default Newpost