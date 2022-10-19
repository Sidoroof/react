import { useEffect, useState } from "react"
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import Chat from "../components/chat/Chat"
import Loader from "../components/loader/Loader"
import Button from '@mui/material/Button';

const chatsPlaceholder = [
    {   
        recipient:"Иванов Иван",
        messages:[
            {
                author:'Иванов Иван',
                text:'Добрый день, мне нужна Ваша помощь',
                date: new Date().toLocaleTimeString()
            },
            {
                author:'Robot',
                text:'Здравствуйте, Ваше обращение обрабатывается. Вы первый в очереди',
                date: new Date().toLocaleTimeString()
            },
        ]
        
    },
    {
        recipient:"Петров Петр",
        messages:[
            {
                author:'Петров Петр',
                text:'Прошу предоставить контактную информацию',
                date: new Date().toLocaleTimeString()
            },
            {
                author:'Robot',
                text:'Здравствуйте, контактная информация собирается. Ожидайте ответ',
                date: new Date().toLocaleTimeString()
            },
        ]
    },
    {
        recipient:"Вероника Кушу",
        messages:[
            {
                author:'Вероника Кушу',
                text:'Добрый день',
                date: new Date().toLocaleTimeString()
            },
            {
                author:'Robot',
                text:'Здравствуйте, чем могу быть полезен',
                date: new Date().toLocaleTimeString()
            },
        ]
    },
]

const ChatsPage = () =>{

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(null)
    const {chatId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setChats(chatsPlaceholder)
            setLoading(false)
        })
    },[])


    return (
        <div style={{display:'flex', flexGrow:1, position:'relative'}}>
            <WithLoading isLoading = {loading}>
                <div style={{display:'flex', flexGrow:1}}>
                    <div className='chatList'>
                        <h2>Чаты</h2>
                        <>
                        <ChatList chats={chats}/>
                        <button onClick={()=>{
                            setChats(p => [...p, chatsPlaceholder[Math.floor(Math.random() * chatsPlaceholder.length)]])
                        }}>+</button>
                        </>
                    </div>
                    {
                        chatId && chats[chatId] ? <Chat chat={chats[chatId]}/> : <h2>Откройте чат для просмотра</h2>
                    }
                </div>
            </WithLoading>
        </div>
    )
}

const WithLoading = ({isLoading, children}) =>{
    return isLoading || isLoading === null ? <Loader/> : children
}

const ChatList = ({chats}) =>{
    
    return(
        <>
         {chats.map((e,id) =>
            <div classNam= "buttonchatDelete" key={id}>
                    <Link to={`${id}`}>{e.recipient}</Link>
                    <p className="chatDelete">Удалить</p>
                    
            </div>)}
        </>
    )
}

export default ChatsPage