import "./AcnhSearchPage.css";
import { AcnhSearchData } from "./AcnhSearchData";
import img from "./Search.jpg"
import { useState } from "react";

function AcnhSearchPage({ goindex }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkAndShow = () => {
    const key = text.trim();
    setResult(AcnhSearchData[key] ?? "");
  };

  return (
    <div className="background">
      <h1 className="titles">Search</h1>

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
        {result ? (
          <div>
            <p className = "itemword">検索名称</p>
            <p className="item">{text.trim()}</p>
            < p className = "res">検索結果</p>
            <p className="desc">{result}</p>
          </div>
        ) : (
          <div>
            <p className="sorry1">申し訳ございません. 検索結果が得られないか, 検索欄が空欄の可能性があります</p>
            <p className="sorry2">通常レシピは個別名を登録しておりませんが, 一度に1枚程度までです. </p>
            <p className="sorry3">
              正式名称を検索すると結果が得られる可能性があります. お手数ですがもう一度お試しください. 
            </p>
            <p className = "sorry4">写真は対応しておりません. 花は一度に5株程度</p>
            <p className = "sorry5"> 季節限定家具は一度に3つまでです.</p>
            <p className="sorry6">もし不明点があればお気軽にご相談ください。</p>
            <p className="sorry7">Twitter id : atcoder__water</p>
          </div>
        )}
      </div>
      <img className = "imgs" src = {img}/>
      <p className="srgoback">前画面に戻る</p>
      <button className="srgobackbutton" onClick={goindex}>
        戻る
      </button>
    </div>
  );
}

export default AcnhSearchPage;
