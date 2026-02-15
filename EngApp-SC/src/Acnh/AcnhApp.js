import React from "react"
import {useState,useEffect} from "react"
import AcnhTitle from "./AcnhTitle";
import AcnhIndex from "./AcnhIndex";
import MemIndex from "./MemIndex";
import MemPage from "./MemPage";
import AcnhCanDo from "./AcnhCanDo";
import AcnhHelp from "./AcnhHelp";
import AcnhInf from "./AcnhInf";
import AcnhRule from "./AcnhRule";
import AcnhSearchPage from "./AcnhSearchPage";
function App(){
    const [state,setState] = useState("title");
    const [selectedNo,setSelectedNo] = useState(null);
    const gotitle = ()=>setState("title");
    const goindex =()=>setState("index");
    const gomem = () => setState("mem");
    const gohelp = () => setState("help");
    const gocando = () => setState("cando");
    const gosearch = () => setState("search");
    const goforyou = () => setState("foryou");
    const goinformation = () => setState("information")

    const openMem=(no)=>{
        setSelectedNo(no);
        setState("memdetail");
    }

    return(
        <div>
        { state === "title" &&(
                <AcnhTitle onStart = {goindex}></AcnhTitle>)}
        {state === "index" &&(
                <AcnhIndex
                gomem = {gomem}
                gosearch = {gosearch}
                gocando = {gocando}
                gotitle ={gotitle}
                gohelp = {gohelp}
                goinformation = {goinformation}
                goforyou = {goforyou}
                ></AcnhIndex>
            )}
        {state === "mem"&&(
                <MemIndex
                openMem = {openMem}
                goindex = {goindex}></MemIndex>
            )}
        {state === "memdetail"&&(
                <MemPage
                selectedNo = {selectedNo}
                gomem = {gomem}/>
            )}
        {state === "cando" &&(
            <AcnhCanDo
            goindex = {goindex}/>
        )}
        {state === "help" &&(
            <AcnhHelp
            goindex = {goindex}/>
        )}
        {state === "information" &&(
            <AcnhInf
            goindex = {goindex}/>
        )}
        {state === "foryou" &&(
            <AcnhRule
            goindex  = {goindex}/>
        )}
        {state === "search" &&(
            <AcnhSearchPage
            goindex = {goindex}/>
        )}
        </div>
    )
}
export default App;