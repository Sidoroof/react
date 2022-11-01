const Loader = () =>{
    return(
        <div style={{flexGrow:1, 
        width:'100%', 
        height:'100%', 
        position:'absolute', 
        top:0, 
        left:0, 
        zIndex:20, 
        background:"#fff",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'}}>
            <div style={{
                width:'50px',
                height:'50px',
                background:'rgb(22, 150, 255)'
            }} className = 'loaderRing'></div>
        </div>
    )
}
export default Loader