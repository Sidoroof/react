
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../clices/userSlice";

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})
// import {applyMiddleware, combineReducers, createStore} from 'redux'
// import { chatReducer } from '../reducers/chats'
// import storage from 'redux-persist/lib/storage'
// import {persistReducer,persistStore} from 'redux-persist'
// import { postsReducer} from '../clices/slices'
// import createSagaMiddleware from 'redux-saga'
// import{ postWatcher} from '../SagaComponents'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// // import { postsReducer } from '../clices/slices'

// const sagaMW = createSagaMiddleware()
// export const store = configureStore({
//     reducer:{
//         users:userReducer,
//         posts:postsReducer,
//         saga:sagaReducer
//     },
//     middleware:[...getDefaultMiddleware(),sagaMW]
// })

// sagaMW.run(postWatcher)
// const config ={
//     key:'root',
//     storage
// }

// const timeout = store => next=>action=>{
//     const delayMs = action?.meta?.dalayMs;
//     if(!delayMs){
//         return next(action)
//     }
//     const timeoutid = setTimeout(()=>next(action),delayMs);

//     return()=> {
//         clearTimeout(timeoutid)
//     }
    
// }

// const persistedReducer = persistReducer(config,chatReducer);
// export const store = createStore(persistedReducer,applyMiddleware(timeout));
// export const persistor = persistStore(store);
// // export const store = createStore(chatReducer,
// //      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())