
function PayBox(props){
    return(
        <div className="PayBox1">
        <div className="PayBox">
            <img src={props.data.src} className="PayBoxLogo"/><div className="PayBoxTittle">{props.data.tittle}</div><img src={props.data.arrSrc} className="PayBoxArrow PayBoxLogo"/>
                 
        </div>
        <div className="PayBoxBar" ></div>
        </div>
    )
}
export default PayBox;