import "./AcnhRule.css"
import img from "./Rule.jpg"
function AcnhRule({goindex}) {
    return(
        <div className = "background">
        <div className = "Rulelist-panel"></div>
            <h1 className = "Rule">Rules</h1>
            <p className = "r1">おすそわけは1日に1度までです</p>
            <p className = "r2">かならず #暇女子会からのおすそわけ をつけて，受け取りポストをしてください</p>
            <p className = "r3">交換できるものには，制限があります． マイル旅行券 + レシピなどの組み合わせは不可</p>
            <p className = "r4">おさわりや カタログ家具, amibo家具, DIY家具, 柵などは , 1度に合計10点までです. </p>
            <p className = "r5">レシピは, 1日に1点までです. レアレシピはご希望に添えない可能性が高いです</p>
            <p className = "r6">もっていく素材やベルの金額はこちらで全て統一し，指定します．</p>
            <p className = "r7">検索欄にて具体的な個数を見ることができます．</p>

            <button className = "rgobackbutton" onClick = {()=>goindex()}>戻る</button>
            <img className = "imgr" src = {img}/>
           
        </div>
    )}

export default AcnhRule;