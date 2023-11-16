import LoginBox from './LoginBox.js';
import LoginBoxOption from './LoginBoxOption.js';
function Home(){
    var links=["https://img.icons8.com/?size=80&id=JvOSspDsPpwP&format=png","https://img.icons8.com/?size=64&id=118501&format=png","https://img.icons8.com/?size=64&id=IXUU4h36YfmO&format=png&color=1A6DFF,C822FF","https://img.icons8.com/?size=64&id=43625&format=png&color=1A6DFF,C822FF"];
    return(<>
       <div className="Login">
            <p></p>
            <LoginBox/>
            <LoginBoxOption link={links}/>
            <p></p>
            <p></p>
       </div>
    </>);
}
export default Home;