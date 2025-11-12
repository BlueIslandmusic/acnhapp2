import "./TodoTitle.css"
function TodoTitle ({onStart}){
    return (
        <div className = "title-screen" onClick={onStart}>
            <h1 className = "title">ToDo</h1>
            <p className = "start"> Tap to start</p>
            
        </div>
    )
}
export default TodoTitle;