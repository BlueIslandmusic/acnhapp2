import React from "react"
import {useState,useEffect} from "react"
import EngTitle from "./EngTitle";
import EngIndex from "./EngIndex";
import EngInformation from "./EngInformation"
import TestIndex from "./TestIndex"
import TestPage from "./TestPage"
import EndPage from "./EndPage"
import WordsIndex from "./WordsIndex"
import WordsPage from "./WordsPage"
import ForYou from "./ForYou"
import SearchPage from "./SearchPage"
import CommingSoon from "./CommingSoon"
import WorkSeatIndex from "./WorkSeatIndex"
import WorkSeatPage from "./WorkSeatPage"
function App(){
    const [selectedNo,setSelectedNo] = useState(null);
    const [WorkSeatNo,setWorkSeatNo] = useState(null)
    const [WordsNo,setWordsNo] = useState(null)
    const [state,setState] = useState("title");
    const gotitle = ()=>setState("title");
    const goindex =()=>setState("index");
    const goworkseat =()=>setState("workseat");
    const gosearch = ()=>setState("search");
    const goreview = ()=>setState("review");
    const gowords = ()=>setState("words");
    const gotest = ()=>setState("test");
    const gopractice = ()=>setState("practice")
    const goinformation = ()=>setState("information");
    const goEndPage = ()=>setState("endpage")
    const gowordsindex = ()=>setState("words")
    const goforyou = ()=>setState("foryou")
    const openTest=(no)=>{
        setSelectedNo(no);
        setState("testdetail");
    }
    const openWords = (no) => {
        setWordsNo(no)
        setState("Wordsdetail")
    }
    const openWorkSeat = (no) =>{
        setWorkSeatNo(no);
        setState("WorkSeatdetail")
    }
    const goworkindex = ()=>setState("WorkSeatIndex")
    return(
        <div>
            {state === "title" &&(
                <EngTitle onStart = {goindex}></EngTitle>
            )}
            {state === "index" &&(
                <EngIndex
                goReview = {goreview}
                goSearch = {gosearch}
                goPractice = {gopractice}
                goTitle ={gotitle}
                goWorkSeat = {goworkseat}
                goTest = {gotest}
                goInformation = {goinformation}
                goWords ={gowords}
                goForYou = {goforyou}
                ></EngIndex>
            )}
            {state ==="information" &&(
                <EngInformation
                goIndex = {goindex}></EngInformation>
            )}
            {state === "test"&&(
                <TestIndex
                openTest = {openTest}
                goindex = {goindex}></TestIndex>
            )}
            {state === "testdetail"&&(
                <TestPage
                selectedNo = {selectedNo}
                goEndPage = {goEndPage}
                gotest = {gotest}
                goindex = {goindex}/>
            )}
            {state === "endpage" &&(
                <EndPage
                    goIndex = {goindex}></EndPage>
            )}
            {state === "words" &&(
                <WordsIndex
                openWords = {openWords}
                goIndex = {goindex}></WordsIndex>
            )}
            {state === "Wordsdetail"&&(
                <WordsPage
                WordsNo = {WordsNo}
                goEndPage = {goEndPage}
                goWordsIndex = {gowordsindex}
                goindex = {goindex}></WordsPage>
            )}
            {state === "foryou"&&(
                <ForYou
                 goIndex = {goindex}></ForYou>
            )}
            {state === "search" &&(
                <SearchPage
                goIndex = {goindex}></SearchPage>
            )}
            {state === "workseat"&&(
                <WorkSeatIndex
                goindex = {goindex}
                openWorkSeat = {openWorkSeat}></WorkSeatIndex>
            )}
            {state === "WorkSeatdetail" &&(
                <WorkSeatPage
                WorkSeatNo = {WorkSeatNo}
                goEndPage = {goEndPage}
                goworkseat = {goworkseat}
                goindex = {goindex}>
                </WorkSeatPage>
            )}
            {state === "practice"&&(
                <CommingSoon
                goIndex = {goindex}></CommingSoon>
            )}
        </div>
    )
}
export default App;