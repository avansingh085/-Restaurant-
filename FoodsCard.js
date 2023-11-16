import Card from './Card.js';
import {useState} from 'react';
import Data from './Food_Data.js';

var BuyItem=[];
function FoodsCard(props){
  var [Ar,setAr]=useState([]);
  function ChangeHand(event){
    var p=Ar;
    p.unshift(event.target.data);
   setAr(p);
   BuyItem=Ar;
}
    return (
      <div className="FoodsCard">
      {props.Items.map(function(d, idx){
         return (<div className="Card"><Card  key={idx} data={d} onChange={ChangeHand}/></div>)
       })}
      </div>
    );
  }
 
  var It={Fun:FoodsCard,Arr:BuyItem};
export default It;
 