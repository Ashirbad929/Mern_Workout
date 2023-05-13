import { configureStore } from "@reduxjs/toolkit";
import workouts from "./Slices/workoutsSlice";
import users from "./Slices/userSlice";
const store=configureStore({
    reducer: {
        workouts,
        users,
      }
})
export default store