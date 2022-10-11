import {addChatAC,ADD_CHAT,REMOVE_CHAT} from "./actions/chatsActions"

const initialState = [
    {
        id:'chat1',
        title:'Иванов',
        massages:['чaт1', 'чат2','чат3']
    },
    {
        id:'chat2',
        title:'Сидоров',
        massages:['чaт1', 'чат2']
    },
    {
        id:'chat3',
        title:'Петров',
        massages:[]
    }
]
export const chatReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CHAT:{
            return[...state,action.payload]
        }
        case REMOVE_CHAT:{
            return[...state.filter((e,i)=>i<state.length -1)]
        }
        default:
            return state
        }
    }
