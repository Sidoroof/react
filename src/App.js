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


function App() {
  const [massageList,setMessageList]=useState([ {
    text:'Добрый день, мне нужна Ваша помощь',
    author:'Иванов Иван'
  },
  {
    text:'Прошу предоставить контактную информацию',
    author:'Петров Петр'
  },
  {
    text:'Добрый день',
    author:'Вероника Кушу'
  }])
  const [massageBody,setMessageBody]=useState({
    text:'',
    author:''
  })

    const Avtootvet = 'Здравствуйте, Ваше обращение обрабатывается'
    useEffect(()=>{
      if (massageList.length > 0 && massageList.slice(-1)[0].author !== 'Robot'){
        setTimeout(()=>{
        setMessageList(pervstate => [...pervstate,{text:Avtootvet, author:'Robot'}])
    },1500)
  }
},[massageList])

return(
  <div className="App">
    <Form date={massageBody} SetData = {setMessageBody} setMessage = {setMessageList}></Form>
    <div className='massageList'>
      {
      massageList.map((e,i)=><Mymassege text={e.text} author={e.author} key = {i}/>)
      }
    </div>
  </div>
) 
}

export default App;

const Form = (date, setData, setMessage)=>{
  const {text,author}= useState({
    text:'',
    author:''
  })
   
  const submitForm = (e) =>{
    e.preventDefault()
    if(text?.length > 0){
      setMessage(pervstate=>[...pervstate,{text, author}])
    }
    setData(
        {
          text:'',
          author:''
        }
      )
    }

    return(
      <form onSubmit={submitForm}>    
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Имя" variant="outlined" value={text}  onChange = {(obj)=>
            setData(pervstate => ({...pervstate, text:obj.target.value})
            )} />
      <TextField id="filled-basic" label="Текст" variant="filled" value={author}  onChange = {(obj)=>
          setData(pervstate=>({...pervstate, author:obj.target.value})
          )}/>
      <Button variant="contained" color="success" type = 'submit'>Отправить</Button>
    </Box>             
      </form>
    )}

 const Mymassege = ({author,text}) => {
   return (
    <div className = "stile-form">
<hr/>
<h1 className="stile-text">{author}</h1>
<p className="stile-text">{text}</p>
<hr/>
 </div>
 )
  
 }