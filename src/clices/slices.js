import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPostsThuk = createAsyncThunk(
    'fetchPosts',async function(){
        const response = await fetch('https://jsonplaceholde.typicode.com/posts')
        const data = response.json()
    }
)

const postsSlice = createSlice({
    name:'users',
    initialState:{
        posts:[],
        loading:false,
        err:null
    },
    reducers:{

    },
    extraReducers:{
        [fetchPostsThuk.pending]:(state,action)=>{
            state.loading=true
            state.err = null
        },
        [fetchPostsThuk.fulfilled]:(state,action)=>{
            state.posts =[...action.payload]
            state.loading=false
            state.err = null
        },
        [fetchPostsThuk.rejected]:(state,action)=>{
            state.err = true
        }
    }
})

export const {}=postsSlice.actions
export const postsReducer = postsSlice.reducer

// const initialState =[
//     {
//         id:'chat1',
//         title:'Иванов Иван',
//         massages:['Сообщение 1','Сообщение 2','Сообщение 3']
//     },
//     {
//         id:'chat2',
//         title:'Петров Петр',
//         massages:['Сообщение 1','Сообщение 2']
//     },
//     {
//         id:'chat3',
//         title:'Сидоров Сидр',
//         massages:[]
//     },
// ]

// const chatSlice = createSlice({
//     name:'chats',
//     initialState,
//     reducers:{
//         addChat:(state,action)=>{
//             return[...state,action.payload]
//         },
//         removeChat:(state)=>{
//             return[...state.filter((e,i)=>i < state.massages.payload.id)]
//             // return[...state.filter((e,i)=>i < state.length -1)]
//         },
//         addMassage:(state,action)=>{
//             state[action.payload.id].massages.push(action.payload.data)
//             return state
//         }
//     }
// })
// export const{addChat,removeChat,addMassage} = chatSlice.actions
// export const chatReducer = chatSlice.reducer