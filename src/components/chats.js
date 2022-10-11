import{ useState} from "react"
import{useDispatch,useSelector} from "react-redux"
// import{addChat,removeChat} from "../clices/slices"
import Chat from "./chat"
import{addChatAC,removeChatAC} from "../actions/chatActions"

const Chats = ()=>{
    const chats = useSelector(state=>state)
    const dispatch = useDispatch()
    const [currentChatsId,setCurrentChatId]=useState(0)
    const newChat={
        id:'chat5',
        title:'Новый пользователь',
        massage:[]
    }
    const addChatHandler = () =>{
        dispatch(addChatAC(newChat))
    }
    const removeChatHandler = ()=>{
        dispatch(removeChatAC())
    }
    return(
        <>
        <div style={{width:'30%',padding:'50px',background:'#f9f9f9'}}>
            {chats.map(({title},id)=><div className="chatItem" key ={id}
            onClick={()=>{
                setCurrentChatId(id)
            }}            
            >{title}</div>)}
            <button onClick={addChatHandler}>Добавить чат</button>
            <button onClick={removeChatHandler}>Удалить чат</button>
        </div>
        <div style={{width:'70%', padding:'50px'}}>
            <Chat id={currentChatsId} massages={chats[currentChatsId].massages}></Chat>
        </div>
        </>
    )
}
export default Chats