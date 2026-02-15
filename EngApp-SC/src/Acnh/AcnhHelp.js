import "./AcnhHelp.css"
import img from "./Help.jpg"
function AcnhHelp({goindex}) {
    return(
        <div className = "background">
        <div className = "Helplist-panel"></div>
            <h1 className = "CanDo">ヘルプページ</h1>
            <p className = "h1">このページでは, 皆様からの質問に対する答えを載せていきます</p>
            <p className = "h2">何かわからないことがあれば何でもご相談ください</p>
            <p className = "h3">twitter (X) id : atcoder__water </p>
            <p className = "h4">Q :  暇女子会に入りたいです</p>
            <p className = "h5">A :  現在募集はしておりません．申し訳ございません</p>
            <button className = "hgobackbutton" onClick = {()=>goindex()}>戻る</button>
            <img className = "imgh" src = {img}/>
           
        </div>
    )}

export default AcnhHelp;