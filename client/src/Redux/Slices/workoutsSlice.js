


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout(state, action) {
      state.workouts.unshift(action.payload);
    },
    setWorkouts(state, action) {
      state.workouts = action.payload;
    },
    deleteWorkout(state,action){
      const idToDelete = action.payload;
      state.workouts = state.workouts.filter(work => work._id !== idToDelete);
    }
  },
});

export const { addWorkout, setWorkouts ,deleteWorkout} = workoutsSlice.actions;

export const selectAllworkouts = (state) => state.workouts.workouts;

export default workoutsSlice.reducer;
