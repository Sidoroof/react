import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import{fetchOnePost} from './clices/saga'
const SagaComponent = () =>{
    const post = useSelector(state=> state.saga)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:'fetchSaga'})
    })
    return(
        <div>
            <h1>Одиночный пост</h1>
            <div>{post.body}</div>
        </div>
    )
}
export default SagaComponent
function* fetchOnePostsSaga(){
    const response = yield call(()=>fetch('https://jsonplaceholder.typicode.com/posts/1'))
    const post = yield response.json()

    yield put(fetchOnePost(post))
}

export function* postWatcher(){
    yield takeEvery('fetchSaga',fetchOnePostsSaga)
}