import React ,{useState}from 'react'
import { useDispatch } from 'react-redux';
import { LOGIN } from '../Redux/Slices/userSlice';

const useLogin = () => {
 const [error,setError]=useState(null);
 const [isLoading,setIsLoading]=useState(null);
 const dispatch=useDispatch();

 const login=async(email,password)=>{
    setIsLoading(true)
    setError(null)
    const response=await fetch('http://localhost:4000/api/user/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
    })
    const json=await response.json();
    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
        
        console.log(json.error)
        
    }
    if(response.ok){
        setIsLoading(false)
        
        localStorage.setItem('user',JSON.stringify(json))
        // 
        
        dispatch(LOGIN(json))
        
    }

 }

  return{login,isLoading,error}
}

export default useLogin