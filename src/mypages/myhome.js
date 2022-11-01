import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = ({userName}) =>{
    return(
        <div>
            <h1>Добро пожаловать ,{userName}. Мы рады приветствовать Вас. </h1>
        </div>
    )
}

export default HomePage