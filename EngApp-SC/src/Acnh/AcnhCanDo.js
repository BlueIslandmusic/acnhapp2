import "./AcnhCanDo.css"
import img from "./CanDo.jpg"
function AcnhCanDo({goindex}) {
    return(
        <div className = "background">
        <div className = "CanDolist-panel"></div>
            <h1 className = "CanDo">できること</h1>
            <p className = "p1">#暇女子会からのおすそわけ のタグを使い，欲しいものをツイート</p>
            <p className = "p2">暇女子会の誰かから通信可能時間を尋ねられます</p>
            <p className = "p3">できるだけ具体的に，何が何個欲しいのかをお伝えください</p>
            <p className = "p4">通信可能時間はできるだけ広めに取ってください</p>
            <p className = "p5">対応一覧</p>
            <p className = "p6">ゼルダ,スプラ, サンリオamibo , カタログ家具, レシピ, 花,マイル旅行券, ベル, 非売品etc</p>
            <button className = "cgobackbutton" onClick = {()=>goindex()}>戻る</button>
            <img className = "imgc" src = {img}/>
           
        </div>
    )}

export default AcnhCanDo;