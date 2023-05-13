import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addWorkout } from '../Redux/Slices/workoutsSlice'
import { selectUser } from '../Redux/Slices/userSlice'
const WorkoutForm = () => {
    const user=useSelector(selectUser);
    const dispatch=useDispatch()
    const [isloggedin,setIsloggedin]=useState(true)
    const [title,setTitle]=useState('')
    const [reps,setReps]=useState('')
    const [load,setLoad]=useState('')
    const [error,setError]=useState()
    const [emptyFields,setEmptyFields]=useState([]);
  
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(!user){
            console.log('yes')
            setIsloggedin(false)
            setError('you were logged out please login again!')
            return
            
    
        }
        
        const workout={title,load,reps}
        const res=await fetch('http://localhost:4000/api/workouts/postworkout',{
            method:'POST',
           

            body:JSON.stringify(workout),
            headers:{
                'content-type':'application/json',
                
                'Authorization':`Bearer ${user.token}`

            }

        })
        const json=await res.json()
        if(!res.ok){
            setError(json.error)
            setEmptyFields(json.emptyfields)

            

        }
        if(res.ok){
            setError(null)
            dispatch(addWorkout(json))

            console.log('new worout added')
            setTitle('')
            setLoad('')
            setReps('')
            setEmptyFields([])

        }


    }
  return (
    <form className='create' onSubmit={handleSubmit}>

        <h3>Add a new Workout</h3>

        <label >Exercise Title:</label>
        <input 
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title')?'error':''}
        
        
        />
        <label >Load in kg:</label>
        <input 
        type="number"
        onChange={(e)=>setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load')?'error':''}
        
        
        />
        <label >Reps:</label>
        <input 
        type="number"
        onChange={(e)=>setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps')?'error':''}
        
        
        />
       
        {error &&  <div className='error'>{error}</div>}
        <button  type='submit'>Add workout</button>
    </form>
  )
}

export default WorkoutForm