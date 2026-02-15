import "./EngIndex.css"
import img  from "./illustrain09-pengin2.png"
function EngIndex({goReview,goSearch,goPractice,goTitle,goWorkSeat,goTest,goInformation,goWords,goForYou}) {
    return(
        <div className = "background">
        <div className = "Indexlist-panel"></div>
            <img className = "image2" src={img} />
            <h1 className = "WhatToDo">What to do ?</h1>
            <p className = "goWorkSeat">ワークシート</p>
            <p className = "goTest">小テスト</p>
            <p className = "goWords">単語</p>
            <p className = "goSearch">検索</p>
            <p className = "goInformation">おしらせ</p>
            <p className = "goforyou">For You</p>
            <p className = "goTitle">タイトルに戻る</p>
            <p className = "goPractice">練習問題</p>
            <button className = "WorkSeatbutton" onClick = {()=>goWorkSeat()}>開く</button>
            <button className = "Testbutton" onClick = {()=>goTest()}>開く</button>
            <button className = "Wordsbutton" onClick = {()=>goWords()}>開く</button>
            <button className = "Searchbutton" onClick = {()=>goSearch()}>開く</button>
            <button className = "Informationbutton" onClick = {()=>goInformation()}>開く</button>
            <button className = "Titlebutton" onClick = {()=>goTitle()}>戻る</button>
            <button className = "Practicebutton" onClick = {()=>goPractice()}>開く</button>
            <button className = "ForYoubutton" onClick = {()=>goForYou()}>開く</button>
        </div>
    )}

export default EngIndex;