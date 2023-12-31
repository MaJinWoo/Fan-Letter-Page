import Header from 'components/Header';
import React, { useState } from 'react';
import Letter from 'components/Letter';
import AddForm from 'components/AddForm';
import styled from 'styled-components';
import backgroundImg from "img/background-color2.jpg"

const StHomeDiv=styled.div`
  background-image: url(${backgroundImg});
  background-size:cover;
  text-align: center;
  display: grid;
  justify-content: center;
`
function Home({letters, setLetters, nickname, setNickname, letterContent, setLetterContent}) {


  const [btnMinji,setBtnMinji] = useState(true);
  const [btnHani,setBtnHani] = useState(false);
  const [btnDaniel,setBtnDaniel] = useState(false);
  const [btnHerin,setBtnHerin] = useState(false);
  const [btnHyein,setBtnHyein] = useState(false);


  return (
    <StHomeDiv>
        <Header setBtnMinji={setBtnMinji} setBtnHani={setBtnHani}
          setBtnDaniel={setBtnDaniel} setBtnHerin={setBtnHerin} setBtnHyein={setBtnHyein}/>
        <AddForm letters={letters} setLetters={setLetters}nickname={nickname} setNickname={setNickname} letterContent={letterContent}
         setLetterContent={setLetterContent}/>
        <Letter letters={letters} btnMinji={btnMinji} btnHani={btnHani}
         btnDaniel={btnDaniel} btnHerin={btnHerin} btnHyein={btnHyein}></Letter>
         
    </StHomeDiv>
  )
}

export default Home