// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
//  import {addUser,fetchUsers} from './clices/slices';
import Posts from './components/chat';
import PostComponent from './PostComponent';
import SagaComponent from './SagaComponents';

const getPhotos = async(url)=>{
  const result = await fetch(url)
  const data = result.json()
  return data
}

const getUsers = async(url)=>{
  const result = await fetch(url)
  const data = result.json()
  return data
}

function App(){
  const [data,setData]= useState([])
  const[loading,setLoading]= useState(false)
  const [error,setError]=useState(null)

  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()

  const USERS_URL= 'https://jsonplaceholder.typicode.com/users'
  const POST_URL= 'https://jsonplaceholder.typicode.com/posts'

  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     fetch(USERS_URL).then(resp=>resp.json()).then(data=>{setData(data)
  //       dispatch(fetchUsers(data))
  //     })
  //     .catch(err=>setError(err)).finally(()=>{
  //       setLoading(false)
  //     })
  //   },1000)
  //   },[])

    const addUserToStorage = async()=>{
      const dataPushed = await fetch(USERS_URL,{
        method:'POST',
        body:JSON.stringify({
          name:'Новый пользователь',
          id:442
        })
      })
        // if(dataPushed){
        //   dispatch(addUser({
        //     name:'Новый пользователь',
        //     id:442
        //   }))
        // }
    }
    return(
      <div className='App'>
        {
          loading ? <Loader pageName = {"пользователей"}/>:
          <div style={{display:'flex', flexDirection:'column', width:'30%'}}>
            <h1>Пользователи</h1>
            {
              users.map(e => <div key={e.id}>{e.name}</div>)
            }
            <button onClick={()=>{addUserToStorage()}}>Добавить пользователя</button>
            </div>
        }
      <PostComponent/>
      <SagaComponent/>
      </div>
      
    )
 
}

export default App

export const useReguest = (reguest)=> {
  const [data,setData]= useState([])
  const[loading,setIsLoading]= useState(false)
  const [error,setError]=useState()

  useEffect(()=>{
    const loadData =async()=>{
      setIsLoading(true);
      try {
        let response=await fetch(reguest);
        let data = await response.json();
        setData(data);
      } catch(e){
        setError(e);
      }finally{
        setIsLoading(false)
      }
    };
    loadData();
  },[])
  return[data,loading,error]
} 
export const Loader=({pageName})=>{
  // return()
  <div></div>
}

// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { Routes, Route, Link } from "react-router-dom";
// import HomePage from './mypages/myhome';
// import ChatsPage from './mypages/mychats';
// import MyProf from './mypages/myprof';
// // import { useSelector } from 'react-redux';
// import Chats from './components/chats';
// import Loader from './components/loader/Loader';


// function App() {
//   //  const isChecked= useSelector(state => state)
//   return (
//     <div className="App">
//       <NavBar/>
//       {/* <Routes> */}
//         <Chats/>
//       {/* <Route path='/' element = {<HomePage userName={"Пользователь"}/>}/>
//           <Route path='chats' element = {<ChatsPage/>}>
//               <Route path=':chatId' element = {<ChatsPage/>}/>
//           </Route>
//           <Route path='profile' element = {<MyProf/>}/> */}
//       {/* </Routes> */}

//     </div>
//   );
// }
//  export default App;

//     const NavBar = () => {

//       return(
//         <div className='navBar'>
//           <Link to={'/'}>Главная</Link>
//           <Link to={'/chats'}>Чаты</Link>
//           <Link to={'/profile'}>Профиль</Link>
//         </div>
//       )
//     }

//     const NotFound = () =>{
  
//       return(
//         <div style={{width:"100%", height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
//           <h1>404 страница не найдена</h1>
//         </div>
//         )
//     }