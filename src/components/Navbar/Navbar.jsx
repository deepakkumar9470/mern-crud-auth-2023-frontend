import "./navbar.scss";

import {Link,useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux';
import { logoutUser } from "../../redux/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const auth = useSelector((state)=> state.auth)
  console.log(auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="wrapper">

       {auth._id ? ( 
             
             <>
             <p className="user_title">{auth.name}</p>
              <button
                className="bg-blue-800 text-md font-bold p-2 px-5 text-white"
                onClick={() => {
                  dispatch(logoutUser(null));
                  navigate('/login')
                  toast.success("Logged out!");
                }}
              >
                Logout
              </button>
          
            </>
          ) : (
            <div className="flex gap-4 justify-between items-end mx-auto">
              <button className="bg-blue-800 px-5 py-2 text-white text-lg font-bold">
              <Link to="/login" className='nav_link'>Login</Link>
              </button>
<button className="bg-blue-800 px-5 py-2 text-white text-lg font-bold">
<Link to="/register" className='nav_link'>Register</Link>
</button>            </div>
          )}
</div>
    </div>
  );
};

export default Navbar;