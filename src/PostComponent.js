import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { Loader } from './App'
import { fetchPostsThuk } from './clices/slices';

const PostsComponent=()=>{
    const{posts,loading,err}=useSelector(state =>state.posts)
    const dispatch = useDispatch()

    const [pages,setPages] = useState(10)
    useEffect(()=>{
        dispatch(fetchPostsThuk())
    },[])
    return(
        <div style={{width:'60%',display:'flex', flexDirection:'column'}}>
            <h1>Посты</h1>
            {
                loading ? <Loader pageName ={'постов'}/>:
                <div>
                    {
                        posts.slice(0,pages).map(e =><div key ={e.id}>
                            <h5>{e.title}</h5>
                            <p>{e.body}</p>
                        </div>)
                    }
                </div>
            }
            <>
            <button onClick={()=>{
                setPages(pervstate => pervstate+10)
            }}> Ещё 10</button>
            </>
        </div>
    )
}
export default PostsComponent