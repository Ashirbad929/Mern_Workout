import express from 'express'
import { config } from 'dotenv';
import  workoutRoutes from './routes/routes.js';
import userRoutes from './routes/user.js';
import mongoose_connect from './database.js';
import cors from 'cors'

config()


// express app
const app=express();
mongoose_connect()
app.use(cors())
app.use(express.json())

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`running on port ${process.env.PORT}`)

})
