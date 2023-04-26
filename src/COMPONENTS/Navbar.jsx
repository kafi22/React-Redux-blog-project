import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import {
    HiBars2,
    HiOutlineXMark
} from 'react-icons/hi2'

const Navbar = () => {


    const [nav, setNavbar ] = useState(true)


  return (
   
    <header className='bg-[#7DD3FC] p-2  text-[#2A2F4F]   font-medium'>
    <div className='container flex justify-between items-center mx-auto max-w-[1140px] h-14'>
        <h3 className='text-xl text-[#F1F6F9] md:text-2xl'>React.</h3>

        <nav className='hidden md:flex'>
         <NavLink className={'mr-4'} to={'/'}>Home</NavLink>
         <NavLink className={'mr-4'} to={'/blog'}>Blog</NavLink>
         <NavLink className={'mr-4'} to={'/newpost'}>NewPost</NavLink>
         <NavLink className={'mr-4'} to={'/product'}>Product</NavLink>
         <NavLink className={'mr-4'} to={'/about'}>About</NavLink>
        </nav>

        <button className='md:hidden' onClick={() => setNavbar(!nav)}>{nav ? <HiBars2 size={25} /> : <HiOutlineXMark size={25} /> }</button>
     
     <div className={!nav ? 'fixed top-0 left-0 w-1/2  h-full text-left  pl-8 bg-slate-300 ease-in-out duration-500' : 'fixed left-[-100%]'}>

     <h3 className='text-xl pt-9 text-rose-700'>React.</h3>

     <nav className='pt-9 flex flex-col gap-5'>
         <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'/blog'}>Blog</NavLink>
         <NavLink to={'/newpost'}>NewPost</NavLink>
         <NavLink to={'/product'}>Product</NavLink>
         <NavLink to={'/about'}>About</NavLink>
    </nav>
        

     </div>
        
          
    </div>
    </header>
  )
}

export default Navbar