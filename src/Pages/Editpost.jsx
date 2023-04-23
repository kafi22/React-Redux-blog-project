import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { editBlogitem } from '../FEATURES/blogpostSlice'

const Editpost = () => {

  const location = useLocation()
  const item = location.state.item
  

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [Title, setNewtitle] = useState(item.title)
  const [Post, setNewPost] = useState(item.post)
  const [Email, setNewEmail] = useState(item.email)
 const [Id, setId] = useState(item.id)

  const FormSubmit = (e) => {
    e.preventDefault();
 
    dispatch(editBlogitem({Title, Post, Email, Id}))
    navigate('/blog', {replace : true})
    
  }

  return (
    <div className=' mx-auto container'>
      <div className='flex justify-center items-center h-full'>

      <div className=' w-1/3 p-5 flex'>
          <form action="" className=' flex flex-col justify-center items-start w-[100%]' onSubmit={FormSubmit}>
            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="heading">Heading :</label>
            <input type="text"  required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg' value={Title} onChange={(e) => setNewtitle(e.target.value)}/>
            </div>

            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="post">Post :</label>
            <input type="text" required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg'  value={Post} onChange={(e) => setNewPost(e.target.value)} />
            </div>

            <div className="form-controls flex flex-col gap-2 items-start w-full mb-4">
            <label htmlFor="heading">Email :</label>
            <input type="email" required className='w-[70%] h-10 p-2 border-sky-300 border-2 outline-sky-300 rounded-lg'  value={Email} onChange={e => setNewEmail(e.target.value)} />
            </div>

            <button className=' bg-black py-2 px-7 text-white mt-7' type='submit'>Submit</button>

          </form>
          </div>

      </div>
    </div>
  )
}

export default Editpost