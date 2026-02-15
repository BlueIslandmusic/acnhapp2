import "./CommingSoon.css"
import img  from "./illustrain09-pengin2.png"
function CommingSoon({goIndex}){
    return(
        <div className = "background">
            <img className = "image3" src={img} />
            <p className = "csno1">
                comming soon......
            </p>
            <p className = "csno2">
                実装までしばらくお待ちください.
            </p>
            <p className = "csgoback">前画面に戻る</p>
            <button className = "csgobackbutton" onClick = {()=>goIndex()}>戻る</button>
        </div>
    )
}
export default CommingSoon;