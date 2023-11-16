import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Like(props){
  
  var [Like,setLike]=useState(props.src1);
  function LikeHand(event){
if(event.target.src===props.src1)
{
    
    toast(props.notifyAcc);
    setLike(props.src2);
}
else{
    toast(props.notifyRej);
    setLike(props.src1);
}

  }
  return (
    <div>
      <img src={Like} className="likelogo" onClick={LikeHand}/>
      <ToastContainer/>
    </div>
  );
}
export default Like;