import "./EndPage.css"
import img  from "./illustrain09-pengin3.png"
function EndPage({goIndex}){
    return(
        <div className = "background">
            <h1 className = "otsukare">おつかれさまでした</h1>
            <p className = "congrats"> congrats!</p>
            <button className = "endbutton" onClick ={goIndex}>終わる</button>
            <img className = "image3" src={img} />
        </div>
        
    )
}
export default EndPage;