
import { configureStore } from "@reduxjs/toolkit";
import blogpostSlice from "../FEATURES/blogpostSlice";

const store = configureStore({
    reducer : {
        showblog : blogpostSlice
    }
})

export default store