const [flag,setFlag] = useState(false)
const Hyouzi = ()=>{
    return(
        <>
        <p className = "ans">答え : {qq.answer}</p>
        <p className = "ee">回答根拠 : {qq.evidence_eng}</p>
        <p className = "ej">回答根拠文の日本語訳 : {qq.evidence_jpn}</p>
        </>
    )
}
const is_flag = ()=>{
    setFlag(true)
}

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
return(
    <>
    <button onClick = {is_flag}>答えを見る</button>
    {flag === true &&<Hyouzi/> }
    </>
)