import "./SearchPage.css"
import { wordsSearchDict } from "./SearchData";
import { useState } from "react";

function SearchPage({ goIndex }) {
  const [text, setText] = useState("");
  const d = wordsSearchDict;
  const [showKey, setShowKey] = useState("");

  const checkAndShow = () => {
    if (!d[text]) {
      setShowKey(""); 
    } else {
      setShowKey(text); 
    }
  };

  const item = d[showKey];

  return (
    <div className="background">
      <h1 className="wtd"> Search</h1>

      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="inputbutton" onClick={checkAndShow}>
        検索
      </button>
      <div className="Searchlist-panel">
      {item && (
        <div>
          <h1 className = "itemword">{item.word}</h1>
          <p className = "itempage">ページ : {item.pages.join(",")}</p>
          <p className = "meaning"> 意味 : {item.meaning}</p>
          <p className = "category">カテゴリー : {item.pos}</p>

          {item.extracts.map((ex, i) => (
            <div key={i}>
              <p className= "esentence">{Array.isArray(ex.en) ? ex.en.join(" / ") : ex.en}</p>
              <p className = "jsentence">{Array.isArray(ex.ja) ? ex.ja.join(" / ") : ex.ja}</p>
            </div>
          ))}</div>
      )}</div>

      <p className="srgoback">前画面に戻る</p>
      <button className="srgobackbutton" onClick={goIndex}>
        戻る
      </button>
    </div>
  );
}

export default SearchPage;
