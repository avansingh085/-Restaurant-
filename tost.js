import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
function App(props){
  const notify = () => toast(props.notify);
  
  var Bg=props.Bgc;
  return (
    <div>
      <button onClick={notify} className="BuyButton" style={{backgroundColor:Bg}} value={props.btnVal}  >{props.btnVal}</button>
      <ToastContainer/>
    </div>
  );
}
export default App;