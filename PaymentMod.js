import { BrowserRouter, NavLink, Route, Routes ,Link} from "react-router-dom";

function PaymentMod(props){
    return(<>
    <div className="PaymentMod">
        <div className="PaymentForm1">
    <form method="POST" action="/" className="PaymentForm">
    
        <h2 className="PaymentModTittle">{props.mod}</h2>
        <div className="FormDetails">
        <h4>ENTER {props.mod} PIN</h4>
        <input type="number" className="PaymentInput" placeholder="1234-5678-1234"/>
        <h4>Passwords</h4>
        <input type="password" className="PaymentInput"/>
        </div>
        <div className="FormFooter"><Link to="/Payment" ><button className="paymentModFooter">Back</button></Link><button type="submit" className="paymentModFooter">Procced</button></div>
        
    </form>
    </div>
    
    </div>
    </>);
}
 export  default PaymentMod;