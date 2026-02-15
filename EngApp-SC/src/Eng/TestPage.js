import { testsArr } from "./TestArr";
import "./TestPage.css";
import { useState } from "react";

function TestPage({goindex, selectedNo, goEndPage, gotest }) {
  const arr = testsArr[selectedNo];
  const [isCorrect, setIsCorrect] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const q = arr[currentIndex];

  const isLast = currentIndex === arr.length - 1;
  const isFirst = currentIndex === 0;

  const goNext = () => {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setIsCorrect(null); 
    } else {
      goEndPage();
    }
  };

  const goPrev = () => {
    if (!isFirst) {
      setCurrentIndex(currentIndex - 1);
      setIsCorrect(null);
    } else {
      gotest();
    }
  };
  const handleChoose = (idx) => {
    if (idx === q.ans) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const CorrectEffect = () => (
    <div className="correct-wrapper">
      <div className="correct-circle"></div>
      <div className="correct-text">correct !</div>
    </div>
  );
  const WrongEffect = () => (
    <div className="wrongwrapper">
      <div className="wrong-x">✖︎</div>
      <div className="wrong-text">
        try again !</div>
    </div>
  );

  return (
    <div className="background">
      <h1 className="wtd">第{selectedNo + 1}回</h1>

      <div className="testpagelist-panel">
        <p className="pj">{q.j}</p>
        <p className="pe" dangerouslySetInnerHTML={{ __html: q.e }} />

        <div className="topcand">
          {q.cand.map((c, idx) => (
            <div className="cand-row" key={idx}>
              <p className="cand">{c}</p>
              <button
                className="choosebutton"
                onClick={() => handleChoose(idx)}
              >
                {idx + 1}
              </button>
            </div>
          ))}
        </div>
        {isCorrect === true && <CorrectEffect />}
        {isCorrect === false && <WrongEffect/>}

        <button className="goprevbutton" onClick={goPrev}>
          戻る
        </button>
        <button className="gonextbutton" onClick={goNext}>
          次へ
        </button>
        <button className = "goidxxxbutton" onClick = {goindex}>終わる</button>
      </div>
    </div>
  );
}

export default TestPage;
