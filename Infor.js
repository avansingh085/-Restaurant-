
import { useState } from 'react';

  function Infor(){
    const [val,setValue]=useState(0);
    function handel(events){
        if(events.target.value==="+")
        setValue(val+1);
    else
    setValue(val-1);
    }
    return(<div class="infor">
        <div class="button-section"> <button onClick={handel} >{"-"}</button><button>{val}</button><button value="+" onClick={handel}>{"+"}</button></div>
    </div>);
}
export default Infor;