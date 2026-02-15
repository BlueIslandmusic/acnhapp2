import "./EngTitle.css"
import img  from "./snowman_line_01_red-blue.png"
function EngTitle ({onStart}){
    return (
        <div className = "title-screen" onClick={onStart}>
            <h1 className = "title">My English Note</h1>
            <p className = "start"> Tap to start</p>
            <img className = "image4" src={img} />
            
        </div>
    )
}
export default EngTitle;