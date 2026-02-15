import "./AcnhTitle.css"
function AcnhTitle ({onStart}){
    return (
        <div className = "title-screen" onClick={onStart}>
         <div className = "Titlelist-panel"></div>
            <h1 className = "title">あつ森 暇女子会</h1>
            <p className = "start"> Tap to start</p>
            
        </div>
    )
}
export default AcnhTitle;