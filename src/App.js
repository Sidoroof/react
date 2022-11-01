import './App.css';
import { Firestore } from 'firebase/firestore';
import { Navigate,Route,Routes,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import{useAuth} from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import {createUserThunk,loginThunk,removeUser,addUser} from './clices/userSlice'
import { addPost,getAllPosts, } from './filebase/crud';
import {Provider} from 'react-redux';

function App(){

  return(
    <div className='App'>
      <Provider>
      <Routes>
        {/* <Route path='/' element={<HomeView/>}/> */}
        <Route path='/' element={<LoginView/>}/>
        <Route path='/list' element={<DataList/>}/>
      </Routes>
      </Provider>
    </div>
  );
}
export default App;
//Логин
const LoginView=()=>{
  const isAuth =useAuth().isAuth
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const dispatch = useDispatch()

  return!isAuth ? (
    <div style={authStyle().container}>
      <h1>Логин</h1>
      <div style={authStyle().card}>
      <input type='text' placehold ='email' value ={email} onChange = {(e)=>{setEmail(e.target.value)}}/>

      <input type='password' placehold ='password' value ={email} onChange = {(e)=>{setPass(e.target.value)}}/>
      <div>
        <button onClick={()=>{
          dispatch(createUserThunk({email,pass}))}
        }>Регистрация</button>
        <button onClick={()=>{
          dispatch(loginThunk({email,pass}))}
        }>Войти</button>
      </div>
    </div>
  </div>
  ):
  (<Navigate to={'/list'}/>)

}

// Главная страница

const HomeView = () =>{
  // const dispatch = useDispatch()
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [formData, setFormData]=useState({
    user:'',
    pass:''
  })

  return  (
    <div style={authStyle().container}>
        <th >Почта</th>
        <input type='text' placehold ='email' value ={email} onChange = {(e)=>{setEmail(e.target.value)}}/>
        <th >Пароль</th>
        <input type='password' placehold ='password' value ={pass} onChange = {(e)=>{setPass(e.target.value)}}/>
        <button onClick={()=> { 
        addUser(formData)
        }}
        > Регистрация</button>
        <button onClick={()=>{
          (loginThunk({email,pass}))}}
        >Войти</button> 
    </div>
  ) 
}


// страница с постами
const DataList=()=>{
  const dispatch = useDispatch()
  const isAuth = useAuth()
  const [data,setData] = useState([])
  const [loading,setLoading]= useState()
  const [formData, setFormData]=useState({
    body:'',
    user:''
  })

  const getPostHandler = async()=>{
    setLoading(true)
    let data = await getAllPosts(isAuth.email)
    setLoading(false)
    setData(data)
  }
  useEffect(()=>{
    getPostHandler()
  },[])
  return isAuth.isAuth ? (
    <div>
     <h1>Данные пользователя</h1>
     <div>
      <h2>Привет,{isAuth.email}</h2>
     </div>

     <button onClick={()=> {dispatch(removeUser())}}>Выйти из аккаунта</button>

     <div style={{minHeigth:'50vh'}}>
      <PostForm formData={formData} setFormData = {setFormData}/>
      <button onClick={()=> { 
        addPost(formData)
        getPostHandler()
        }}>Добавить пост</button>
        {
          loading ? <div> Грузим посты </div>
          :<PostList data = {data} user = {isAuth.email}/>
        }

     </div>
    </div>
  ) : <Navigate to={'/login'}/>
}
// Список постов
const PostList=({data,user})=>{
  return(
  <>
  {data.map((e,i)=>
  e.user === user?
<div key={i}>
  <p>{e.body}</p>
  <hr/>
</div>:null)}
  </>
  )
}

// Форма добавки постов
const PostForm = ({formData,setFormData})=>{
  const user = useAuth().email
}
const authStyle=()=>({
  container:{
    display:'flex',
    flexDirection:'colum',
    alignItems:'center',
    justifyContent:'center',
    background:'#f5f5f5',
    height:'100vh'
  },
  card:{
    padding:'30px',
    borderRadius:'30px',
    background:'#fff',
    display:'flex',
    flexDirection:'colum',
    justifyContent:'space-around',
    height:'100px'
  }
})
// // import logo from './logo.svg';
// import './App.css';
// import React,{useState, useEffect} from 'react';
// import {useDispatch,useSelector } from 'react-redux';
// //  import {addUser,fetchUsers} from './clices/slices';
// import Posts from './components/chat';
// import PostComponent from './PostComponent';
// import SagaComponent from './SagaComponents';

// const getPhotos = async(url)=>{
//   const result = await fetch(url)
//   const data = result.json()
//   return data
// }

// const getUsers = async(url)=>{
//   const result = await fetch(url)
//   const data = result.json()
//   return data
// }

// function App(){
//   const [data,setData]= useState([])
//   const[loading,setLoading]= useState(false)
//   const [error,setError]=useState(null)

//   const users = useSelector(state=>state.users)
//   const dispatch = useDispatch()

//   const USERS_URL= 'https://jsonplaceholder.typicode.com/users'
//   const POST_URL= 'https://jsonplaceholder.typicode.com/posts'

//   // useEffect(()=>{
//   //   setLoading(true)
//   //   setTimeout(()=>{
//   //     fetch(USERS_URL).then(resp=>resp.json()).then(data=>{setData(data)
//   //       dispatch(fetchUsers(data))
//   //     })
//   //     .catch(err=>setError(err)).finally(()=>{
//   //       setLoading(false)
//   //     })
//   //   },1000)
//   //   },[])

//     const addUserToStorage = async()=>{
//       const dataPushed = await fetch(USERS_URL,{
//         method:'POST',
//         body:JSON.stringify({
//           name:'Новый пользователь',
//           id:442
//         })
//       })
//         // if(dataPushed){
//         //   dispatch(addUser({
//         //     name:'Новый пользователь',
//         //     id:442
//         //   }))
//         // }
//     }
//     return(
//       <div className='App'>
//         {
//           loading ? <Loader pageName = {"пользователей"}/>:
//           <div style={{display:'flex', flexDirection:'column', width:'30%'}}>
//             <h1>Пользователи</h1>
//             {
//               users.map(e => <div key={e.id}>{e.name}</div>)
//             }
//             <button onClick={()=>{addUserToStorage()}}>Добавить пользователя</button>
//             </div>
//         }
//       <PostComponent/>
//       <SagaComponent/>
//       </div>
      
//     )
 
// }

// export default App

// export const useReguest = (reguest)=> {
//   const [data,setData]= useState([])
//   const[loading,setIsLoading]= useState(false)
//   const [error,setError]=useState()

//   useEffect(()=>{
//     const loadData =async()=>{
//       setIsLoading(true);
//       try {
//         let response=await fetch(reguest);
//         let data = await response.json();
//         setData(data);
//       } catch(e){
//         setError(e);
//       }finally{
//         setIsLoading(false)
//       }
//     };
//     loadData();
//   },[])
//   return[data,loading,error]
// } 
// export const Loader=({pageName})=>{
//   // return()
//   <div></div>
// }

// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import Divider from '@mui/material/Divider';
// // import ListItemText from '@mui/material/ListItemText';
// // import ListItemAvatar from '@mui/material/ListItemAvatar';
// // import Avatar from '@mui/material/Avatar';
// // import Typography from '@mui/material/Typography';
// // import { Routes, Route, Link } from "react-router-dom";
// // import HomePage from './mypages/myhome';
// // import ChatsPage from './mypages/mychats';
// // import MyProf from './mypages/myprof';
// // // import { useSelector } from 'react-redux';
// // import Chats from './components/chats';
// // import Loader from './components/loader/Loader';


// // function App() {
// //   //  const isChecked= useSelector(state => state)
// //   return (
// //     <div className="App">
// //       <NavBar/>
// //       {/* <Routes> */}
// //         <Chats/>
// //       {/* <Route path='/' element = {<HomePage userName={"Пользователь"}/>}/>
// //           <Route path='chats' element = {<ChatsPage/>}>
// //               <Route path=':chatId' element = {<ChatsPage/>}/>
// //           </Route>
// //           <Route path='profile' element = {<MyProf/>}/> */}
// //       {/* </Routes> */}

// //     </div>
// //   );
// // }
// //  export default App;

// //     const NavBar = () => {

// //       return(
// //         <div className='navBar'>
// //           <Link to={'/'}>Главная</Link>
// //           <Link to={'/chats'}>Чаты</Link>
// //           <Link to={'/profile'}>Профиль</Link>
// //         </div>
// //       )
// //     }

// //     const NotFound = () =>{
  
// //       return(
// //         <div style={{width:"100%", height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
// //           <h1>404 страница не найдена</h1>
// //         </div>
// //         )
// //     }