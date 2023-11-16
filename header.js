import Card from './newreact';
import { BrowserRouter, Routes, Route,Router, NavLink } from "react-router-dom"; 
import Obj from './display';
import About from './about';
import Contact from './contact';
import Resource from './resource';
import Home from './Home';
import Btn from './button';
function Header(){
    function Handler(){
        
    }
return(<>
<div id="header">
<BrowserRouter>
    <div className="main">

        <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.4fLOpfxrxuFue7pdodfDIgHaFj&pid=Api&P=0&h=180"/>
        
         <NavLink className="link-main" to="/" style={({isActive})=>({color:isActive ? "blue":"white"})}>Home</NavLink>
        <NavLink className="link-main" to="/about" style={({isActive})=>({color:isActive ? "blue":"white"})}>About</NavLink>
        <NavLink className="link-main" to="/contact" style={({isActive})=>({color:isActive ? "blue":"white"})}>Contact</NavLink>
        <NavLink className="link-main" to="/resource" style={({isActive})=>({color:isActive ? "blue":"white"})}>Resource</NavLink>
          <Btn value={"Login"} onClick={Handler}/>
          <Btn value={"Logout"} onClick={Handler}/>
        </div>
        <div className="Information">
    <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route  path='/about'  element={<About/>}/>
          <Route   path='/contact' element={<Contact/>}/>
          <Route  path='/resource' element={<Resource/>}/>
          </Routes>
          </div>
          </BrowserRouter>
    
   
  </div>
</>);
}
export default Header;