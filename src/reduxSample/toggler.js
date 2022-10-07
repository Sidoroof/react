import { useDispatch, useSelector } from "react-redux"
const dispatch = store.dispatch;



const Toggler = () =>{
    const isChecked = useSelector(state=>state)
    constdispatch = useDispatch()
console.log(isChecked)
    return(
        <>
            <input type='checkbox' value={isChecked} onChange = {()=>{
                dispatch({type:'EXAMPLE_ACTION'})
            }}/>
        </>
    )
}
export default Toggler