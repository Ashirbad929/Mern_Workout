import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWorkout } from '../Redux/Slices/workoutsSlice';
import { BsFillTrashFill } from 'react-icons/bs';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { selectUser } from '../Redux/Slices/userSlice';
import { useSelector } from 'react-redux';

const WorkoutsDetails = (props) => {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
    const workout=props.workout
    const handledelete=async()=>{
      const res=await fetch('http://localhost:4000/api/workouts/'+workout._id,{
        method:'DELETE',
        headers:{
          'Authorization':`Bearer ${user.token}`

        }
        

      })
      
      if(res.ok){
        
       dispatch(deleteWorkout(workout._id))

          
        
        
      }


    }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span onClick={handledelete}><BsFillTrashFill/></span>
        


    </div>
  )
}

export default WorkoutsDetails