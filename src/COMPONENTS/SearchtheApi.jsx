import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userData } from '../FEATURES/blogpostSlice'

const SearchtheApi = () => {

    const [search, setSearchItem] = useState('')
    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()
        dispatch(userData(search))
       
    }

    // useEffect(() => {
    // }, [search])


  return (
    <div className='mt-5 py-4 flex justify-end items-center'>
        <form action="" onSubmit={formSubmit}>
            <input type="text" placeholder='Search here' 
           className='w-[280px] h-12 p-4 text-lg border-2 border-slate-500 outline-slate-500  rounded'
           value={search}
           onChange={e => setSearchItem(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchtheApi