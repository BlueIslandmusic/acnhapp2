import "./AcnhInf.css"
import img from "./Inf.jpeg"
function AcnhInf({goindex}) {
    return(
        <div className = "background">
        <div className = "Inflist-panel"></div>
            <h1 className = "Inf">Information</h1>
            <p className = "i1">このページでは，暇女子会が開催している企画の一覧と締め切り日を載せています</p>
            <p className = "i2">バレンタイン企画       担当 : みゅん Lala      〆切 2.14</p>
            <p className = "i3">料理レシピ覚え放題    担当 : ゆ             〆切 2.15</p>

            <button className = "igobackbutton" onClick = {()=>goindex()}>戻る</button>
            <img className = "imgi" src = {img}/>
           
        </div>
    )}

export default AcnhInf;