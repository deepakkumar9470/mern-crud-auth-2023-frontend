import React from 'react';
import './App.scss'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import AddPost from './features/AddPost';

import { useSelector } from 'react-redux';
import PostLists from './features/PostLists';
import EditPost from './features/EditPost';
import {Toaster} from 'react-hot-toast'

const App = () => {
	const auth = useSelector((state)=> state.auth)
  return (
	<div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
			<Routes>

				{
					auth._id ? (
            <>
            <Route path='/' element={<PostLists/>}/>	
            <Route path='/addpost' element={<AddPost/>}/>
            <Route path='/edit/:id' element={<EditPost/>}/>
            </>
					) : (
						<>
						    <Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
					)
				}

                 {
					!auth._id && <>
						    <Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
				 }
			
			</Routes>
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
