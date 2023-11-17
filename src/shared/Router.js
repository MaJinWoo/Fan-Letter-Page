import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home"
import Detail from "pages/Detail"
import React, { useState } from 'react'
import fakeData from '../shared/fakeData.json'


const Router = ()=>{

    const [letters,setLetters] = useState(fakeData);
    const [nickname, setNickname] = useState("");
    const [letterContent, setLetterContent]=useState("");
  
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home letters = {letters} setLetters={setLetters} nickname={nickname}
                setNickname={setNickname} letterContent={letterContent} setLetterContent={setLetterContent}/>} />
                <Route path="/detail/:id" element={<Detail letters = {letters} setLetters={setLetters} nickname={nickname}
                setNickname={setNickname} letterContent={letterContent} setLetterContent={setLetterContent}/>}/>
                <Route path="/detail/:id/edit"/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;