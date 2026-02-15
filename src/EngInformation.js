import "./EngInformation.css"
import img  from "./illustrain09-pengin3.png"
function EngInformation({goIndex}){
    return(
        <div className = "background">
        <div className = "Inflist-panel"></div>
            <img className = "image3" src={img} />
            <h1 className = "information">Information</h1>
            <p className = "No1">
                11/17 前回内容 : p.457 l.14まで,
                小テスト: なし,
                予習範囲: p.459
            </p>
            <p className = "goback">前画面に戻る</p>
            <button className = "gobackbutton" onClick = {()=>goIndex()}>戻る</button>
        </div>
    )
}
export default EngInformation;