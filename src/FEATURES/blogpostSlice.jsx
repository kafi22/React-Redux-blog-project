
import {createSlice} from '@reduxjs/toolkit'


export const blogpostSlice = createSlice({
    name : 'post',
    initialState : {
        books : [
            {
                id : 1,
                title : 'This is post number one',
                post : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero vel dicta dolorum sed nostrum itaque velit! Assumenda, ducimus quibusdam tenetur magnam pariatur nobis corporis deleniti, temporibus quos officia aliquam!',
                email : 'kafyahmedfarabi@gmail.com',
                
            },
        
            {
                id : 2,
                title : 'This is post number two',
                post : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero vel dicta dolorum sed nostrum itaque velit! Assumenda, ducimus quibusdam tenetur magnam pariatur nobis corporis deleniti, temporibus quos officia aliquam!',
                email : 'ahmedfarabi@gmail.com',
                
            },
        
            {
                id : 3,
                title : 'This is post number three',
                post : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero vel dicta dolorum sed nostrum itaque velit! Assumenda, ducimus quibusdam tenetur magnam pariatur nobis corporis deleniti, temporibus quos officia aliquam!',
                email : 'sonketahmedfarabi@gmail.com',
                
            }
        
        
        ],

        searchDatablog : [],
        gettheSearchData : []
  
      
    },
    reducers : {
        showBlogitem : state => state,

        addBlogitem : (state,action) => {
           
            state.books.push(action.payload)

        },
        editBlogitem : (state,action) => {
            const {Title, Post, Email, Id} = action.payload
            console.log({Title, Post, Email, Id})
            const editblogpost = state.books.filter((book) => book.id === Id)
            
            if(editblogpost) {
                editblogpost[0].title = Title
                editblogpost[0].post = Post
                editblogpost[0].email = Email
            }
        },
        deleteBlogitem : (state,action) => {
            const id = action.payload
            const filterItem = state.books.filter(item => item.id !== id)
            state.books = filterItem
        },
        searchData : (state,action) => {

            const search = action.payload
            const searchFilteroptions = state.books.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase()) || ((item.post).toLowerCase()).includes(search.toLowerCase()) || ((item.email).toLowerCase()).includes(search.toLowerCase()))
            state.searchDatablog = searchFilteroptions
        },

        getSearchdata : (state,action) => {
            state.gettheSearchData = action.payload
        }

       
    }
})

export const {showblog, addBlogitem,editBlogitem,deleteBlogitem,searchData,getSearchdata} = blogpostSlice.actions

export default blogpostSlice.reducer;
