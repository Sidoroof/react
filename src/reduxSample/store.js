
import { configure } from "@testing-library/react";
import {applyMiddleware,createStore,compose} from "redux"
import {profileReduce} from "./reducer"

 const composeEnhancers= window.__REDUX_DEVETOOLS_EXTENSION_COMPOSE__ || compose;


 export const store = createStore(profileReduce,composeEnhancers(applyMiddleware()))