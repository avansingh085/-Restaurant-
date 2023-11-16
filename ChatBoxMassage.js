function ChatBoxMassage(props){
    var Col="greenyellow";
    var left="500px";
    if(props.mes.name==="Machine")
  {  Col="red";
     left="0px";
}
    return(
    
        <div className="Chating" style={{backgroundColor:Col,marginLeft:left}}>
        <p className="ChatingName" >{props.mes.name}</p>
        <div className="ChatingMessage">{props.mes.message}</div>
        </div>
        
    );
}
export default ChatBoxMassage;