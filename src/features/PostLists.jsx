import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { toast } from 'react-hot-toast'

const PostLists = () => {
  const [posts,setPosts] = useState([])
  const navigate = useNavigate()

  useEffect (()=>{
      const fetchPosts = async () =>{
        try {
           const res = await axios.get('https://mern-crud-auth-2023-api.onrender.com/api/post')
           setPosts(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchPosts()
  },[])

  const handleDeletePost = async (id) =>{
      
       try {
        await axios.delete(`http://localhost:5000/api/post/${id}`)
        toast.success('Post has been deleted')
        navigate('/')
       } catch (error) {
        console.log(error)
       }
       
  }

  const renderUserCard = () => posts.map(post=>(
      <div className='w-[400px] bg-gray-200 flex justify-between items-center p-5 pl-5 rounded-sm shadow-md'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-lg text-gray-700'>{post.title}</h3>
              <span className='font-normal  text-gray-600'>{post.description}</span>
            </div>
            <div className='flex gap-4'>

             <Link to={`edit/${post._id}`}>
             <button className='text-blue-700'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
              </button>
             </Link>

              <button className='text-red-600' onClick={()=>handleDeletePost(post._id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
               </svg>
              </button>
            </div>
      </div>
  ))  

  return (
    <div className='p-20 mx-auto'>
        <Link to="/addpost">
        <button class="bg-blue-500 mb-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add Post
</button>        </Link>
        <div className='grid gap-5 md:grid-cols-2'>
             {
              posts.length ? renderUserCard() : <p className='font-semibold text-center col-span-2 text-gray-700'>No Users</p>
             }
        </div>
    </div>
  )
}

export default PostLists