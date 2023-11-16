import App from './tost.js';
import Like from './Like.js';
import {useEffect, useState} from 'react';
function Card(props){
  var [Val,setVal]=useState("Buy");
  var [Bg,setBg]=useState("green");
   function ChangeHand(event)
  {
   
      if(event.target.value==="Buy")
      {
        setVal("Un Buy");
        setBg("green");
      }
      else
      {
        setVal("Buy");
        setBg("blue");
      }
  }
    return(<>
        <div className="CardBox">
        <img src={props.data.src} className="card-img"/>
        <p className="CardLikeTittle"><h2 style={{width:"150px", color:"green"}}>{props.data.name}</h2><Like   notifyAcc={"You are Like items"} notifyRej={"You are DisLike items"} src1={"https://cdn-icons-png.flaticon.com/128/707/707680.png"} src2={"https://cdn-icons-png.flaticon.com/128/833/833472.png"}/></p>
           <p className="AboutCard" style={{ marginTop:"-10px",width:"240px", height:"70px",overflowY:"hidden"}} >{props.data.about}</p>
        <div className="card-footer" style={{marginTop:"-10px"}}><h3 style={{width:"150px", color:"green"}}>Price:{props.data.price}Rs</h3><App notify={"You are buy items"} onChange={ChangeHand} className={"BuyButton"} btnVal={Val} value={Val} Bgc={Bg} src1={""} src2={""} /></div>
</div>
    </>);
}
export default Card;