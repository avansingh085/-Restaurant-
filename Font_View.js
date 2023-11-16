import React, { useEffect, useState } from "react";
function Font_View(props){
    var [Index,setIndex]=useState(0);
  useEffect(()=>  {
    var tim=setInterval(()=>{
     setIndex(Index+1);
    },5000);    return ()=>clearInterval(tim); });
    return(
        <div className="font-views">
    
            <img src={props.src[Index%props.src.length]} className="font-img"/>;
             

        
        </div>
    )
}
export default Font_View;