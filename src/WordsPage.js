import { WordsArr } from "./WordsArr";
import "./WordsPage.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 20;  

function WordsPage({goindex, WordsNo, goEndPage, goWordsIndex }) {
  const arr = WordsArr[WordsNo];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [candPage, setCandPage] = useState(0);         

  const q = arr[currentIndex];

  const isLast = currentIndex === arr.length - 1;
  const isFirst = currentIndex === 0;

  const totalCandPages = Math.ceil(q.cand.length / ITEMS_PER_PAGE);
  const start = candPage * ITEMS_PER_PAGE;
  const visibleCand = q.cand.slice(start, start + ITEMS_PER_PAGE);

  const goNext = () => {
    if (candPage < totalCandPages - 1) {
      setCandPage(candPage + 1);
    } else if (!isLast) {
      setCurrentIndex(currentIndex + 1);
      setCandPage(0);
    } else {
      goEndPage();
    }
  };

  const goPrev = () => {
    if (candPage > 0) {
      setCandPage(candPage - 1);
    } else if (!isFirst) {
      const prevIndex = currentIndex - 1;
      const prevQ = arr[prevIndex];
      const prevPages = Math.ceil(prevQ.cand.length / ITEMS_PER_PAGE);

      setCurrentIndex(prevIndex);
      setCandPage(prevPages - 1);
    } else {
      goWordsIndex();
    }
  };

  const StoryName = (no) => {
    if (no === 0) {
      return "The Landlady";
    } else {
      return "Lamb to the Slaughter";
    }
  };

  return (
    <div className="background">
      <h1 className="wtd">{StoryName(WordsNo)}</h1>
      <div className="wordspagelist-panel">
        <div className="words-container">
        <div className="wordss">
          <h1 className="page">{q.page}</h1>

          {visibleCand.map((c, idx) => (
            <div className="words-row" key={start + idx}>
              <p className="words">{c}</p>
            </div>
          ))}
        </div>
      </div>

        <button className="goprevwbutton" onClick={goPrev}>
          戻る
        </button>
        <button className="gonextwbutton" onClick={goNext}>
          次へ
        </button>
      </div>
    </div>
  );
}

export default WordsPage;
