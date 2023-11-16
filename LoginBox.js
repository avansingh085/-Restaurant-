function LoginBox(){
    return(
        <form method="POST" action="/Payment" className="LoginBox">
        <table className="LoginBox">
             <tr><td>Email Id:</td><td><input name="email" className="Email"/></td></tr>
            
             <tr><td>Password</td><td><input type="password" name="password" className="EmailPassword"/></td></tr>
             
        </table>
        </form>
    )
}
export default LoginBox;