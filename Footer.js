import {Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
function Home(){
    return(<>
    <BrowserRouter>
       <div className="footer">
         <div className="footerlink"><Link to="/" className={"Link"}>About us</Link><Link className={"Link"} to="/">Contact</Link><Link className={"Link"} to="/">Privacy</Link></div>
       </div>
       </BrowserRouter>
    </>);
}
export default Home;