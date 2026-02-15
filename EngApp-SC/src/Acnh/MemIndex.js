import "./MemIndex.css"
import img2 from "./acnhh.jpg"
function MemIndex({openMem,goindex}){
    return(
        <div className = "background">
        <div className = "Memlist-panel"></div>
            <h1 className = "mem" >Members</h1>
            <p className = "no1">みゅん</p>
            <p className = "no2">Lala</p>
            <p className = "no3">ゆ</p>
            <p className = "no4">まいかる</p>
            <p className = "no5">さら</p>
            <img className = "image3" src = {img2}/>
            <p className = "back">前画面に戻る</p>
            <button className = "no1button" onClick={() => openMem(0)}>開く</button>
            <button className = "no2button" onClick={() => openMem(1)}>開く</button>
            <button className = "no3button" onClick={() => openMem(2)}>開く</button>
            <button className = "no4button" onClick={() => openMem(3)}>開く</button>
            <button className = "no5button" onClick={() => openMem(4)}>開く</button>
      
            <button className = "backbutton" onClick = {() => goindex()} >戻る</button>
        </div>
    )
}
export default MemIndex;