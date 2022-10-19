import { addChatAC,ADD_CHAT,REMOVE_CHAT } from "../actions/chatActions";

const initialState=[
    {
        id:'chat1',
        title:'Иванов Иван',
        massages:['чат 1','чат 2','чат 3']
    },
    {
        id:'chat2',
        title:'Петров Петр',
        massages:['чат 1','чат 2']
    },
    {
        id:'chat3',
        title:'Сидоров Сидр',
        massages:[]
    },

]

export const chatReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_CHAT:{
            console.log(action)
            return[...state,action.payload]
        }
        case REMOVE_CHAT:{
            return[...state.filter((e,i)=>i<state.length-1)]
        }
        default:
            return state
    }
}