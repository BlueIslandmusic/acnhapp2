import "./TodoEdit.css"
function TodoEdit({items,text,setText,onAdd,onToggle,onDelete,goMain,goTitle}){
    return(
        <div className ="edit">
        <div className = "editlist-panel"></div>
            <h1 className = "edittitle"> Todoの編集</h1>
            <input className = "input"
            type = "text"
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            ></input>
            <button className = "inputbutton" onClick = {onAdd}>追加</button>
            <ul className = "editlist">
                {items.map((item) =>(
                    <li key = {item.id}>{item.text}
                        <button className = "deletebutton" onClick = {()=>onDelete(item.id)}>削除</button>
                    </li>
                ))}
            </ul>
            <p className = "gomain">メインに戻る</p>
            <button className = "gomainbuttonn" onClick = {goMain}>戻る</button>
            <p className = "gotitlee">タイトルに戻る</p>
            <button className = "gotitlebuttonn" onClick = {goTitle}>戻る</button>
        </div>
    )
}

export default TodoEdit