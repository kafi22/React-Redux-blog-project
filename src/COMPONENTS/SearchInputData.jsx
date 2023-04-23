import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchdata } from "../FEATURES/blogpostSlice";

const SearchData = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
   

    const SubmitForm = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getSearchdata(search))
    }, [search])

    return (

        <div className=" flex py-5 justify-end items-center mt-2">
        <form action="" onSubmit={SubmitForm}>
            <input type="text" placeholder="search here"
            className="h-12 w-[260px] border-2 border-cyan-600 outline-cyan-600 p-2"
            onChange={e => setSearch(e.target.value)}
            />
        </form>
        </div>
    )
}

export default SearchData