function Todoitem({ item, onDelete, onToggle }) {
  return (
    <li>
      <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
        {item.text}
      </span>
      <button onClick={onToggle}>完了</button>
      <button onClick={onDelete}>削除</button>
    </li>
  );
}

export default Todoitem;
