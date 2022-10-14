import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {addMassage} from "../clices/slices"
const Chat = ({id,massages})=>{
    const dispatch= useDispatch()
    const PLACEHOLDER_MASSAGE = 'НОВОЕ СООБЩЕНИЕ'
    return(
        <div>
            {massages.map((e,id)=><div key ={id}>{e}</div>)}
            <button onClick={()=>{
                dispatch(addMassage({id:id,data:PLACEHOLDER_MASSAGE}))
            }}>Отправить</button>
        </div>
    )
}

export default Chat