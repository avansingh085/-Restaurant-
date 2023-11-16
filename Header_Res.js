import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Help from './Help.js';
import Home from './Home.js';
import Login from './Login.js';
import Logout from './Login.js';
import Payment from './Payment.js';
import PaymentMod from './PaymentMod.js';
function Header_Res(props){
   return(<>
   <BrowserRouter>
   <div className="Header-Res">
   <p></p>
    <img className="logo" src={"https://tse1.mm.bing.net/th?id=OIP.BMceUSePdpWYKKi4dwML9AHaEK&pid=Api&rs=1&c=1&qlt=95&w=199&h=111"}/>
    <p></p>
    <p></p>
    <NavLink to='/' className="Header-Res-Link" style={({isActive})=>({color:isActive ? "blue":"white"})}>Home</NavLink>
    <NavLink to='/Help' className="Header-Res-Link" style={({isActive})=>({color:isActive ? "blue":"white"})}>Help!</NavLink>
    <NavLink to='/Payment' className="Header-Res-Link" style={({isActive})=>({color:isActive ? "blue" : "white"})}>Payment</NavLink>
    <NavLink to='/Login' className="Header-Res-Link" style={({isActive})=>({color:isActive ? "blue":"white"})}>Login</NavLink>
    <NavLink to='/Logout' className="Header-Res-Link" style={({isActive})=>({color:isActive ? "blue":"white"})}><img className="LoginBoxOptionLogo" src="https://tse1.mm.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112"/></NavLink>
   </div>
   <div className="Font-Page">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Credit/Debit/ATM" element={<PaymentMod mod={"Credit/Debit/ATM"}/>} />
            <Route path="/NetBanking" element={<PaymentMod mod={"Net Banking"}/>} />
            <Route path="/Wallets" element={<PaymentMod mod={"Wallets"}/>} />
            <Route path="/EMI" element={<PaymentMod/>} mod={"EMI"}/>
            <Route path="/PayWithRewards" element={<PaymentMod mod={"Pay With Rewards"}/>} />
            <Route path="/PayLater" element={<PaymentMod mod={"Pay Later"}/>}/>
     </Routes>
   </div>
   </BrowserRouter>

   </>);
}
export default Header_Res;