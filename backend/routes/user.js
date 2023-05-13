import express from 'express'
import User from '../model/userSchema.js';
import { loginUser,signupUser} from './RouterRequests/userRoutes.js';
const user=express.Router();
// login route

 user.post('/login',loginUser)


// signup route
 user.post('/signup',signupUser)
export default  user