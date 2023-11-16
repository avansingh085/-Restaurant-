import {  NavLink } from "react-router-dom";
import data from './PayBoxData.js';
import PayBox from './PayBox.js';
import It from './FoodsCard.js';
import Card from './Card.js';
function Home(){
    return(<>
   
       <div className="Purchace">
        <div className="Payment-option"  >
            {data.map((item)=>{
                return (<NavLink className="PaymentLink"  to={item.path} style={({isActive})=>({color:isActive ? "blue" : "black" })}><PayBox data={item}/></NavLink>);
            })}
            
        </div>
        <div className="BuyItem">
            {
               It.Arr.map(function(d, idx){
                return (<div className="Card"><Card  key={idx} data={d}/></div>)
              })
            }
        </div>
       </div>
       
    </>);
}
export default Home;