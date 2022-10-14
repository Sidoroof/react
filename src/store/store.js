
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { chatReducer } from '../reducers/chats'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'


const config ={
    key:'root',
    storage
}

const timeout = store => next=>action=>{
    const delayMs = action?.meta?.dalayMs;
    if(!delayMs){
        return next(action)
    }
    const timeoutid = setTimeout(()=>next(action),delayMs);

    return()=> {
        clearTimeout(timeoutid)
    }
    
}

const persistedReducer = persistReducer(config,chatReducer);
export const store = createStore(persistedReducer,applyMiddleware(timeout));
export const persistor = persistStore(store);
// export const store = createStore(chatReducer,
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())