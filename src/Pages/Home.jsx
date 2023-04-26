import React from 'react'
import Hero from '../COMPONENTS/Hero'

import Blogpost from '../COMPONENTS/Blogpost'
import Newslatters from '../COMPONENTS/Newslatters'








const Home = () => {
  return (
    <div className='max-w-[1140px] mx-auto h-full py-0 px-2'>
        <Hero />
        <Blogpost />
       <Newslatters />
    </div>
  )
}

export default Home