import React, { useState } from 'react'

import axios from 'axios'
import {useQuery} from 'react-query'
import { useSelector } from 'react-redux'

const Fetchthedata = () => {


    const {isLoading, isError, data } = useQuery('dogs', () => axios('https://fakestoreapi.com/products'))

    const ok = useSelector((state) => state.showblog.gettheSearchData)



  
    
  return (
    <div className='mt-6 '>
        {isLoading && <h1 className=' text-2xl text-red-700 text-center'>Loading...</h1>}
        {isError && <h1>Something has wrong</h1>}
        {data && (
            <table class=" mx-auto w-full  overflow-hidden">
            <thead className=' bg-slate-400'>
          <tr className=''>
            <th className='py-3 px-6'>id</th>
            <th className='p-3'>title</th>
            <th className='p-3'>category</th>
            <th className='p-3'>price</th>
            <th className='p-3'>rate</th>
            <th className='py-3 px-6'>Image</th>
          </tr>
            </thead>
            <tbody className=' bg-slate-700 text-white'>
            {data && data.data.filter((val) => {
      if(ok === '') {
        return val
      } if (val.category.toLowerCase().includes(ok.toLowerCase())) {
        return val
      } if (val.title.toLowerCase().includes(ok.toLowerCase())) {
        return val
      } if (val.price.toString().includes(ok.toString())) {
        return val
      } if (val.id.toString().includes(ok.toString())) {
        return val
      } if (val.rating.rate.toString().includes(ok.toString())) {
        return val
      }
    }).map((item) => {
      const {id,title,image,price,category,description} = item
      const {rate,count} = item.rating
                
      return (
            <tr className=' cursor-pointer hover:bg-emerald-400  hover:scale-105 duration-300 text-xs' key={id}>
                <td className='py-3 px-6'>{id}</td>
                <td className='py-3 px-6'>{title}</td>
                <td className='py-3 px-6'>{category}</td>
                <td className='py-3 px-6'>{price}</td>
            
                <td className='py-3 px-6'>{rate}</td>
                <td className='w-[3rem] py-3 px-6'>
                    <img src={image} alt="" className='w-[100%]'/>
                </td>
            </tr>
        )
            })}

            </tbody>
        </table>
        )}
        

    </div>
  )
}

export default Fetchthedata