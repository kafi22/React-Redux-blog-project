import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'


const ProductsDatafetch = () => {

    const {data, isLoading, isError, isSuccess} = useQuery('products', () => axios ('https://fakestoreapi.com/users'))
    console.log(data)

    const [search, setSearchItem] = useState('')


    const formSubmit = (e) => {
        e.preventDefault()
        
    }
    

  return (
    <div className='w-[100%] mx-auto py-8 mt-7'>
        {isLoading && <h1 className=' text-2xl text-center  text-red-600'>Loading...</h1>}
        {isError && <h1>Something has wrong</h1>}
        {isSuccess &&

        <div>

<form action="" className='flex justify-end items-center' onSubmit={formSubmit}>
<input type="text" 
placeholder='search here'
className='h-12 w-[240px] border-2 border-sky-400 outline-current  md:col-span-1 p-2'
value={search}
onChange={e => setSearchItem(e.target.value)}
/>
</form>

<table className='w-full mx-auto overflow-hidden mt-10'>
    <thead className=' bg-slate-500 h-12'>
        <tr className=' bg-sky-200 '>
            <th className='py-3 px-5'>Id</th>
            <th className='py-3 px-5'>Name</th>
            <th className='py-3 px-5'>Phone</th>
            <th className='py-3 px-5'>Email</th>
            <th className='py-3 px-5'>UserName</th>
            <th className='py-3 px-5'>City</th>
            <th className='py-3 px-5'>Zipcode</th>
            <th className='py-3 px-5'>Street</th>
        </tr>
    </thead>
    <tbody className='py-10 max-w-[1140px] mx-auto'>
        {isSuccess && data.data.filter((val) => {

            if(search == '') {
                return val;
            } if (val.username.toLowerCase().includes(search.toLowerCase())) {
                return val;
            } if (val.email.toLowerCase().includes(search.toLowerCase())) {
                return val;
            } if(val.address.city.toLowerCase().includes(search.toLowerCase())) {
                return val;
            } if (val.address.zipcode.toString().includes(search.toLowerCase())) {
                return val;
            }
        }).map(item => {
            const {id,phone,email,username} = item
            const {city,zipcode,street} = item.address
            const {firstname,lastname} = item.name

            return (
                <tr className=' bg-fuchsia-300 hover:bg-fuchsia-100 hover:scale-105 duration-200' key={id}>
                    <td className='py-4 px-5'>{id}</td>
                    <td className='py-4 px-5'>{`${firstname} ${lastname}`}</td>
                    <td className='py-4 px-5'>{phone}</td>
                    <td className='py-4 px-5'>{email}</td>
                    <td className='py-4 px-5'>{username}</td>
                    <td className='py-4 px-5'>{city}</td>
                    <td className='py-4 px-5'>{zipcode}</td>
                    <td className='py-4 px-5'>{street}</td>
                </tr>
            )
        })}
    </tbody>
</table>

        </div>

        }
    </div>
  )
}

export default ProductsDatafetch