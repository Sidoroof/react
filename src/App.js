// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'

function App() {
  const [massageList,setMessageList]=useState([{
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

const Form = ({date, setData, setMessage})=>{
  const {text,author}= date
   
  const submitForm = (e) =>{
    e.preventDefault()
    if(text.length > 0){
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
          <input  className="stile-inp" placeholder='Имя' value={text} onChange = {(obj)=>
            setData(pervstate => ({...pervstate, text: obj.target.value})
            )}/>
          <input className="stile-inp" placeholder='Текст' value={author} onChange = {(obj)=>
          setData(pervstate=>({...pervstate, avtor: obj.target.value})
          )}/>
          <button className="stile-bt" type = 'submit'> Отправить</button>
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