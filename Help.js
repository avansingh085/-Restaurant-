
 import  { useState, useEffect } from "react";
 import ReactDOM from "react-dom";
import ChatBoxMassage from './ChatBoxMassage.js';
function Home(){
   // const { useState, useEffect } = React; // web-browser variant

      var initialValue = [
        {
            name:"Machine",
            message:"How can I help you ?"
        }
      ];
    
      var [movies, setMovies] = useState(initialValue);
      
      var [Message,setMessage]=useState("");
      function scrollToBottom(id) {
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
    }
    function Send(event){
        
        if(Message.length>0)
      {  
      
        movies.push({
            name: "Avan Singh",
            message:Message
          });
          setMovies(movies);
           setTimeout( function(){
            scrollToBottom("sc");
            var arr=["Good Morning","You are very Noty Boy","Why such question ask me","Please ask our restraunt related quetion","I am auto genrated chat may be sume time not give you write answer"];
            movies.push({
              name: "Machine",
              message:arr[parseInt(Math.random()*(arr.length-1))]
          });  setMessage("");
          
          setMovies(movies);
          setTimeout(function(){
            scrollToBottom("sc");
          },3000);
          
        },3000);
          
        
        }
          
        }
       
        var [Index,setIndex]=useState(0);
   return(<>
       <div className="help">
           <div className="ChatBox" id="sc">
            {
               movies.map((item)=>{
                return(<ChatBoxMassage mes={item}/>);
               })
            }
             </div>
            <div className="MyChat"><input className="MyChatInput" placeholder="Send Message" type="text" value={Message} onChange={(e)=>{setMessage(e.target.value)}} /><button onClick={()=>{Send();setIndex(Index+1);}} className="MyChatButton">Send</button></div>
          
       </div>
    </>);
}
export default Home;