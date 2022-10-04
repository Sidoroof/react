// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './mypages/myhome';
import ChatsPage from './mypages/mychats';
import MyProf from './mypages/myprof';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element = {<HomePage userName={"Пользователь"}/>}/>
          <Route path='chats' element = {<ChatsPage/>}>
              <Route path=':chatId' element = {<ChatsPage/>}/>
          </Route>
          <Route path='profile' element = {<MyProf/>}/>
      </Routes>

    </div>
  );
}
 export default App;

    const NavBar = () => {

      return(
        <div className='navBar'>
          <Link to={'/'}>Главная</Link>
          <Link to={'/chats'}>Чаты</Link>
          <Link to={'/profile'}>Профиль</Link>
        </div>
      )
    }

    const NotFound = () =>{
  
      return(
        <div style={{width:"100%", height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h1>404 страница не найдена</h1>
        </div>
        )
    }