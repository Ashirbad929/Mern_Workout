import express from 'express'
import requireAuth from '../middleware/requireAuth.js'
import { PostWorkout,getOneworkout,deleteworkout,updateworkout, getallworkouts } from './RouterRequests/workout.js'

const  router=express.Router()
// require auth for all workout route
router.use(requireAuth)
// get all workouts
router.get('/getallworkouts',getallworkouts)
// get single workout
router.get('/getoneworkout/:id',getOneworkout)
// post a workout
router.post('/postworkout',PostWorkout)
// delete a workout
router.delete('/:id',deleteworkout)
// update a workout
router.patch('/:id',updateworkout)

export default router