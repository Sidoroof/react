import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {
        id:'chat1',
        title:'Иванов Иван',
        massages:['Сообщение 1','Сообщение 2','Сообщение 3']
    },
    {
        id:'chat2',
        title:'Петров Петр',
        massages:['Сообщение 1','Сообщение 2']
    },
    {
        id:'chat3',
        title:'Сидоров Сидр',
        massages:[]
    },
]

const chatSlice = createSlice({
    name:'chats',
    initialState,
    reducers:{
        addChat:(state,action)=>{
            return[...state,action.payload]
        },
        removeChat:(state)=>{
            return[...state.filter((e,i)=>i < state.massages.payload.id)]
            // return[...state.filter((e,i)=>i < state.length -1)]
        },
        addMassage:(state,action)=>{
            state[action.payload.id].massages.push(action.payload.data)
            return state
        }
    }
})
export const{addChat,removeChat,addMassage} = chatSlice.actions
export const chatReducer = chatSlice.reducer