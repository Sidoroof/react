import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, Auth } from "../filebase/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

export const createUserThunk = createAsyncThunk(
    'user/addUserThunk',
    async ({email,pass})=>{
        try{
           const userCredit = await createUserWithEmailAndPassword(auth,email,pass)     
           const userData={
            email:userCredit.user.email,
            id: userCredit.user.uid,
            token: userCredit.user.accessToken
           }
           return userData
        }catch(e){
            console.log(e.code, e.massage)
        }
    }
)
export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async({email,pass})=>{
        try{
            const userCredit = await signInWithEmailAndPassword(auth,email,pass)
            const userData = {
                email:userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        }catch(e){
            console.log(e.code, e.massage)
        }
    }
)

const UserSlice = createSlice({
   name:'user',
   initialState:{
    email:null,
    token:null,
    id:null
   },
   reducers:{
    addUser:(state,action)=>{
        return state.payload
    },
    removeUser:(state)=>{
        state.email=null,
        state.token=null,
        state.id=null
    }
   },
   extraReducers:{
    [createUserThunk.fulfilled]:(state,action)=>{
        return state = action.payload
    },
    [loginThunk.fulfilled]:(state,action)=>{
        return state = action.payload
    }
   } 
})
export const {addUser,removeUser}=UserSlice.actions
export const userReducer = UserSlice.reducer