import React, {useState,useEffect} from "react";
import TodoTitle from "./TodoTitle";
import TodoEdit from "./TodoEdit";
import TodoMain from "./TodoMain"; 

function TodoApp() {
  const [state, setState] = useState("title");
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("todoItems") || "[]"));
  useEffect(() => localStorage.setItem("todoItems", JSON.stringify(items)), [items]);

  const [text, setText] = useState("");
  const goTitle = ()=>setState("title")
  const goMain = ()=>setState("main")
  const goEdit = ()=>setState("edit")
  const handleAdd = () => {
    if (items.length >= 20) return;
    const t = text.trim();
    if (!t) return;
    setItems(prev => [...prev, { id: Date.now(), text: t, done: false }]);
    setText("");
  };

  const handleToggle = (id) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      {state === "title" && (
        <TodoTitle onStart={goMain} />
      )}

      {state === "main" && (
        <>
          <TodoMain items={items}
            onAdd = {handleAdd}
            text = {text}
            setText = {setText}
            onToggle = {handleToggle}
            goEdit = {goEdit}
            goTitle = {goTitle}/>
       
        
        </>
      )}

      {state === "edit" && (
        <TodoEdit
          items={items}
          text={text}
          setText={setText}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onToggle={handleToggle}
          goMain={goMain}
          goTitle={goTitle}
        />
      )}
    </>
  );
}

export default TodoApp;
