import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:null,

    
}
const usersSlice=createSlice({
    
        name:'users',
        initialState,
        reducers:{
            LOGIN(state,action){
                state.users=action.payload
                
            },
            LOGOUT(state,action){
                state.users=action.user
            }


        } 



})
export const {LOGIN,LOGOUT}=usersSlice.actions

export const selectUser = (state) => state.users.users


export default usersSlice.reducer;