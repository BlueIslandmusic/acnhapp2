import "./TestIndex.css"
function TestIndex({openTest,goindex}){
    return(
        <div className = "background">
        <div className = "Testlist-panel"></div>
            <h1 className = "wtd" >What to do ?</h1>
            <p className = "no1">第一回</p>
            <p className = "no2">第二回</p>
            <p className = "no3">第三回</p>
            <p className = "no4">第四回</p>
            <p className = "no5">第五回</p>
            <p className = "back">前画面に戻る</p>
            <button className = "no1button" onClick={() => openTest(0)}>開く</button>
            <button className = "no2button" onClick={() => openTest(1)}>開く</button>
            <button className = "no3button" onClick={() => openTest(2)}>開く</button>
            <button className = "no4button" onClick={() => openTest(3)}>開く</button>
      
            <button className = "backbutton" onClick = {() => goindex()} >戻る</button>
        </div>
    )
}
export default TestIndex;