import React from 'react'
import Fetchthedata from '../COMPONENTS/Fetchthedata'
import SearchData from '../COMPONENTS/SearchInputData'

const About = () => {
  return (
    <div className='py-0 px-2 container mx-auto'>
      <SearchData />
      <Fetchthedata />
    </div>
  )
}

export default About