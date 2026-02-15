import "./WordsIndex.css"
function WordsIndex({openWords,goIndex}){
    return(
        <div className = "background">
        <div className = "Wordslist-panel"></div>
            <h1 className = "wtd" >What to do ?</h1>
            <p className = "no1">The Landlady</p>
            <p className = "no2">Lumb to the Slaughter</p>
            <p className = "back">前画面に戻る</p>
            <button className = "no01button" onClick={() => openWords(0)}>開く</button>
            <button className = "no02button" onClick={() => openWords(1)}>開く</button>
            <button className = "back0button" onClick = {() => goIndex()} >戻る</button>
        </div>
    )
}
export default  WordsIndex;

