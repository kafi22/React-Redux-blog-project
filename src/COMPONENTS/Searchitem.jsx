import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../FEATURES/blogpostSlice';

const Searchitem = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchData(search))
    },[search])
    


    return (
        <>
        <div className='grid md:grid-cols-3 md:justify-between md:items-center my-10 p-4'>
            <div className=' md:col-span-2'></div>
            <form action="" className='' onSubmit={e => e.preventDefault()}>
                <input type="text" value={search}  placeholder='Search here' className='h-12 w-[240px] border-2 border-sky-400 outline-current  md:col-span-1 p-2' onChange={e => setSearch(e.target.value)}  />
            </form>
        </div>
        </>
    )
}

export default Searchitem;