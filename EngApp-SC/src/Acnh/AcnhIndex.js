import "./AcnhIndex.css"

import img2 from "./01_img_02.png.avif"
function AcnhIndex({gotitle, gohelp,gomem,gocando,gosearch,goinformation,goforyou}) {
    return(
        <div className = "background">
        <div className = "Indexlist-panel"></div>
            <img className = "image2" src = {img2}/>
            <h1 className = "WhatToDo">What to see?</h1>
            <p className = "goMem">メンバー紹介</p>
            <p className = "goCanDo">できること</p>
            <p className = "goHelp">ヘルプ</p>
            <p className = "goSearch">検索</p>
            <p className = "goInformation">おしらせ</p>
            <p className = "goForyou">ルール</p>
            <p className = "goTitle">タイトルに戻る</p>

            <button className = "Membutton" onClick = {()=>gomem()}>開く</button>
            <button className = "CanDobutton" onClick = {()=>gocando()}>開く</button>
            <button className = "Helpbutton" onClick = {()=>gohelp()}>開く</button>
            <button className = "Searchbutton" onClick = {()=>gosearch()}>開く</button>
            <button className = "Informationbutton" onClick = {()=>goinformation()}>開く</button>
            <button className = "Titlebutton" onClick = {()=>gotitle()}>戻る</button>
            <button className = "ForYoubutton" onClick = {()=>goforyou()}>開く</button>
        </div>
    )}

export default AcnhIndex;