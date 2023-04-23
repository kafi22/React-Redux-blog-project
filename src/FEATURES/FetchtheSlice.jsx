
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const FetchtheSlice = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://fakestoreapi.com/'}),
    endpoints : (builder) => ({
        getAllProduct : builder.query ({
            query : () => 'users'
        }),
    })
})

export const {useGetAllProductQuery} = FetchtheSlice;