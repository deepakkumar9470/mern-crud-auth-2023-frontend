import React,{useState} from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddPost = () => {
    const [inputs,setInputs] = useState({
        title:  "",
        description : "",
    });
  
    const navigate = useNavigate()
    
    const handleAddPost = async (e) =>{
        e.preventDefault()
        setInputs({title: '', description : ''})
        
        try {
            const res = await axios.post('https://mern-crud-auth-2023-api.onrender.com/api/post/create',{
                title:inputs.title,
                description: inputs.description
            })
            toast.success('Post data saved success..')          
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

 
 
  return (
   <div className='mt-10 max-w-xl mx-auto'>
    <form  onSubmit={handleAddPost}>
    <div className='flex flex-col'>
        <label htmlFor="name" className='text-base mb-2 text-gray-800'>Title</label>
        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"  
          type="text" 
          placeholder="Enter title"
          value={inputs.title}
          onChange={(e)=>setInputs({...inputs, title:e.target.value})} />
    </div>
    <br />
    <div className='flex flex-col'>
        <label htmlFor="email" className='text-base mb-2 text-gray-800'>Description</label>
        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"  
          type="text" 
          placeholder="Enter description"
          value={inputs.description}
          onChange={(e)=>setInputs({...inputs, description:e.target.value})} />

    </div>
    <br />
     
    <button className='bg-blue-500 p-4 px-10 text-white' type="submit">Add Post</button>
    </form>
   </div>
  )
}

export default AddPost