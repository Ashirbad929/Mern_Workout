import React, { useEffect } from 'react'
import WorkoutsDetails from '../components/WorkoutsDetails'
import WorkoutForm from '../components/WorkoutForm'
import { setWorkouts } from '../Redux/Slices/workoutsSlice'
import { selectAllworkouts } from '../Redux/Slices/workoutsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../Redux/Slices/userSlice'

const Home = () => {

  const work=useSelector(selectAllworkouts)
  const user=useSelector(selectUser)
 
  const dispatch=useDispatch();
 
  useEffect(()=>{
    const fetchworkouts=async ()=>{
      const res=await fetch('http://localhost:4000/api/workouts/getallworkouts',{

      headers:{
        'Authorization':`Bearer ${user.token}`
      }
      })
      const json=await res.json()
      
      if (res.ok){
        
        console.log('fetch req initiated')
        // console.log(json)
        dispatch(setWorkouts(json))


      }
    }
    if(user){
      fetchworkouts()
    }
    


  },[user])
   
  return (
    <div className='home'>
      <div className="workouts">
        {work && work.map((work)=>(
          // <p key={workout._id}>{workout.title}</p>
          
          <WorkoutsDetails key={work._id} title={work.title} workout={work}/>

        ))}
      </div>
      <WorkoutForm />


    </div>
  )
}

export default Home