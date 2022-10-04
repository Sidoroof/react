import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MyProf = ({userName}) =>{
    return(
        <div>
            <h1> Для дальнейшей работы, просим Вас авторизоваться</h1>
            <></>
            <TextField id="outlined-basic" label="Имя" variant="outlined" />
            <TextField id="outlined-basic" label="Пароль" type="password" variant="outlined" />
            <Button variant="contained" color="success" type = 'submit'>Войти</Button>
        </div>
    )
}

export default MyProf