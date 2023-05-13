
import mongoose from 'mongoose'
import Workout from '../../model/workoutSchema.js'
// postworkout
export const PostWorkout = async(req,res) => {
  
    const {title,load,reps}=req.body
    let emptyfields=[]
    if(!title){
        emptyfields.push('title')

    }
    if(!reps){
        emptyfields.push('reps')

    }
    if(!load){
        emptyfields.push('load')

    }
    if(emptyfields.length>0){
        return res.status(400).json({error:'please fill all the fields',emptyfields})

    }
    try {
        const user_id=req.user._id;

        const workout=await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
// getallworkouts
export const getallworkouts = async(req,res) => {
    const user=req.user._id;
  
    
    try {
      const workouts=await Workout.find({user_id:user}).sort({"createdAt":-1})
      
        res.status(200).json(workouts)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// getoneworkout
export const getOneworkout = async(req,res) => {
  
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'pass correct id'})
    }
    try {
        const workout=await Workout.findById(id)
        if(!workout){
           return res.status(404).json({error:"workout doesn't exist"})
        }
            
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// delete workout
export const deleteworkout = async(req,res) => {
  
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'pass correct id'})
    }
    try {
        const workout=await Workout.findOneAndDelete({_id:id})
        if(!workout){
           return res.status(404).json({error:"workout doesn't exist"})
        }
            
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// update workout
export const updateworkout = async(req,res) => {
  
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'pass correct id'})
    }
    try {
        const workout=await Workout.findOneAndUpdate({_id:id},{...req.body})
        if(!workout){
           return res.status(404).json({error:"workout doesn't exist"})
        }
            
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



