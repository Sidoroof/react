
export const profileReduce = (state = false,aclion) =>{
    switch(aclion.type){
        case'EXAMPLE_ACTION':
        return !state
    default:return state
    }
}