import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../hook/useLogout'
import { selectUser } from '../Redux/Slices/userSlice'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const user=useSelector(selectUser)
  const {logout}=useLogout();
  // console.log('ads',User.user.email)
  const handleclick=(e)=>{
    logout()
    
    

  }
  return (
   <header>
    <div className="container">
    <Link to='/'>
        <h1>workout buddy</h1>
    </Link>
    <nav>
      <div>
        { user &&
           <div>
          
           <span className='user_email'>{user.email}</span>
            <button  onClick={handleclick}>Log out</button>
          </div>
        }
        {!user && <div>
             
             <Link to="/login">Login</Link>
             <Link to="/signup">Signup</Link>
          </div>}
        
    
      </div>
    </nav>

   </div>
   </header>
  )
}

export default Navbar