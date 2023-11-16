import {Link} from "react-router-dom";
function LoginBoxOption(props){
    return(
        <div className="LoginBoxOption"><Link to=""><img src={props.link[0]} className="LoginBoxOptionLogo"/></Link><Link to=""><img src={props.link[1]} className="LoginBoxOptionLogo"/></Link><Link to=""><img src={props.link[2]} className="LoginBoxOptionLogo"/></Link><Link to=""><img src={props.link[3]} className="LoginBoxOptionLogo"/></Link></div>
    )
}
export default LoginBoxOption;