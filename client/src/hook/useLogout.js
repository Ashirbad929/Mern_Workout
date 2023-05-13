import React from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../Redux/Slices/userSlice';

const useLogout = () => {
  
    const dispatch=useDispatch();

    const logout=()=>{
        localStorage.removeItem('user')
        dispatch(LOGOUT())
    }
    
  return {logout}
    
   
  
}

export default useLogout