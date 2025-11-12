import "./TodoMain.css"
function TodoMain({ items,text,goEdit,goTitle,setText,onAdd,onToggle}) {
  return (
    <div className = "main-title">
    <div className = "list-panel"></div>
      <h1 className =  "today" >Today</h1>
      <ul className = "todolist">
        {items.map((item) => (
          <li key={item.id}>
            {text}
          <span style = {{textDecoration:item.done ? "line-through":"none"}}>
                         {item.text} </span>
          <button className = "donebutton" onClick = {()=>onToggle(item.id)}>完了</button></li>
        ))}

      </ul>
      <p className = "goedit">Todoの編集</p>
      <button className = "goeditbutton" onClick = {goEdit}>編集</button>
      <p className = "gotitle">タイトルに戻る</p>
      <button className = "gotitlebutton" onClick = {goTitle}>戻る</button>
    </div>
  );
}
export default TodoMain;
