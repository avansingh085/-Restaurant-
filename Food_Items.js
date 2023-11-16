import Food from './Food_Data.js';
import FoodsCard from './FoodsCard'; 
import { useState } from "react";
function Font_Items(props){
   var [TypeFood,setTypeFood]=useState(Food);
    var [tf,stf]=useState("All");
  function TreandingHand(event){
    setTypeFood(Food.filter((item)=>{
        return(item.like>5);
    }));
  }
  function ItemsType(event){
    stf(event.target.value);
    if(event.target.value==="All")
    {
        console.log("all");
        setTypeFood(Food);
    }
    else
    {
        if(event.target.value==="Veg")
        {
            console.log("Veg");
            setTypeFood(Food.filter((item)=>{
            
              return(item.type==="Veg");
            }));
        }
        else
        {
            setTypeFood(Food.filter((item)=>{
                
                return(item.type==="Non-Veg");
              }));
        }
    }
  }
 var [searchValue,setSearchValue]=useState("");
function searchHandler(event){
    if(event.key==="Enter")
    {
        setTypeFood(Food.filter((item)=>{
            return(item.name.toLowerCase()===event.target.value.toLowerCase())
           
        }))
    }
}
    return(
        <>
         <div className="items-header">
            <div className="items-header-in">
                <p className="fal"></p>
                <input type="button" onClick={TreandingHand} className="items-header-button" value="Treanding"/>
                <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} onKeyPress={searchHandler}  className="items-header-button searchs" />
                <input type="button" onClick="" className="items-header-button" value="Offers"/>
                <select   className="items-header-button" value={tf} onChange={ItemsType} >
                <option value="All"> All</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                    </select>
                
            </div>
            <FoodsCard.Fun Items={TypeFood} className={"FoodsCard"}/> 
            </div>
        </>
    )
}
export default Font_Items;