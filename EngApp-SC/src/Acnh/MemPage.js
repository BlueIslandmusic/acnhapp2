import { MemArr } from "./MemArr";
import "./MemPage.css";
import { useState } from "react";

function MemPage({ gomem, selectedNo }) {
  const arr = MemArr[selectedNo];

  return (
    <div className="background">
      <h1 className="name">{arr.title}</h1>

      <div className="mempagelist-panel">
        <img className="img" src={arr.img} alt="" /> 
        <p className="prof1">{arr.prof1}</p>
        <p className="prof2">{arr.prof2}</p>
        <p className="prof3">{arr.prof3}</p>
        <p className="prof4">{arr.prof4}</p>
        <p className="prof5">{arr.prof5}</p>
        <p className="time">{arr.time}</p>
        <p className="mbti">{arr.mbti}</p>
        <p className="lovetype">{arr.lovetype}</p>
        <p className="good">{arr.good}</p>

        <button className="gobackbutton" onClick={gomem}>
          戻る
        </button>
      </div>
    </div>
  );
}

export default MemPage;
