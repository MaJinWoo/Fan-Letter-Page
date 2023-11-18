import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home"
import Detail from "pages/Detail"
import React, { useState } from 'react'
import fakeData from '../shared/fakeData.json'
import { Context } from "context/Context";

const Router = ()=>{

    const [letters,setLetters] = useState(fakeData);
    const [nickname, setNickname] = useState("");
    const [letterContent, setLetterContent]=useState("");
  
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Context.Provider value={{letters,nickname, letterContent}}><Home setLetters={setLetters} setNickname={setNickname} setLetterContent={setLetterContent}/></Context.Provider>} />
                    <Route path="/detail/:id" element={<Context.Provider value={{letters, nickname, letterContent}}><Detail setLetters={setLetters} setNickname={setNickname} setLetterContent={setLetterContent}/></Context.Provider>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;