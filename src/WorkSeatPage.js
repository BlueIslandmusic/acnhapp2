import "./WorkSeatPage.css";
import { WorkSeatArr } from "./WorkSeatData";
import { useState } from "react";

function WorkSeatPage({WorkSeatNo, goEndPage, goworkseat,goindex}) {
  const arr = WorkSeatArr[WorkSeatNo];
  const [currentIndex, setCurrentIndex] = useState(0);
  const qq= arr[currentIndex];
  const [flag,setFlag] = useState(false)

  const isLast = currentIndex === arr.length - 1;
  const isFirst = currentIndex === 0;

  const goNext = () => {
    setFlag(false)
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
    } else {
      goEndPage();
    }
  };

  const goPrev = () => {
    setFlag(false)
    if (!isFirst) {
      setCurrentIndex(currentIndex - 1);
    } else {
      goworkseat();
    }
  };
  const is_flag = ()=>{
    setFlag(true)
}
  const Hyouzi = ()=>{
    return(
        <>
        <p className = "ans">答え : {qq.answer}</p>
        <p className = "ee">回答根拠 : {qq.evidence_eng}</p>
        <p className = "ej">回答根拠文の日本語訳 : {qq.evidence_jpn}</p>
        </>
    )
}
  return (
    <div className="background">
      <h1 className="wtd">第{WorkSeatNo + 1}回</h1>

      <div className="workseatpagelist-panel">
        <p className="cat">カテゴリー : {qq.type}</p>
        <p className="qu" >問題 : {qq.q}</p>
        <p></p>
        {flag === true &&<Hyouzi/> }
        <button className="goprevbutton" onClick={goPrev}>
          戻る
        </button>
        <button className="gonextbutton" onClick={goNext}>
          次へ
        </button>
        <button  className = "ansbutton"onClick = {is_flag}>答えを見る</button>
      </div>
    </div>
  );
}

export default WorkSeatPage;
