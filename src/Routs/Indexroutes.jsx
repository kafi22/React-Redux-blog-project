import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import Newpost from '../Pages/Newpost'
import Navbar from '../COMPONENTS/Navbar'
import Footer from '../COMPONENTS/Footer'
import Error from '../Pages/Error'
import About from '../Pages/About'
import Blogitem from '../COMPONENTS/Blogitem'
import Editpost from '../Pages/Editpost'
import Products from '../Pages/Products'
import Singleblog from '../COMPONENTS/Singleblog'

const Indexroutes = () => {
  return (
   
    <BrowserRouter>
       <Navbar />
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blogitem' element={ <Blogitem /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/singleblog' element={ <Singleblog /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/product' element={ <Products /> } />
        <Route path='/newpost' element={ <Newpost /> } />
        <Route path='/editpost' element={ <Editpost /> } />
        <Route path='*' element={ <Error /> } />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Indexroutes