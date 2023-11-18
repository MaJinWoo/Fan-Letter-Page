import React, { useRef } from 'react';
import uuid from "react-uuid";
import styled from 'styled-components';
import backgroundImg from "img/rabbit.jpeg";
import { useContext } from 'react';
import { Context } from 'context/Context';

const StDiv = styled.div`
  background:radial-gradient( transparent,10%, #FFFFD9),
      url(${backgroundImg});
  background-size:50% 100%;
  opacity: 80%;

  border: none;
  border-radius: 30px;
  padding:30px;
  margin:50px 300px 50px 300px;
`
const StInput = styled.input`
  height: 40px;
  width: 20%;
  font-size: 15px;
  margin: 10px;
  outline: none;
  border:none;
  border-bottom: 1px solid black;
  padding-left: 10px;
  background: none;
`
const StTextArea = styled.textarea`
  width:300px;
  height:200px;
  margin: 10px;
  outline:none;
  resize:none;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;

  background: none;
  border: 1px solid black;

`
const StSelect = styled.select`
  margin:10px;
  font-size: 15px;
  height:30px;
  border-radius: 10px;
  padding:5px;
`
const StSubmitBtn = styled.button`
  margin:10px;
  font-size: 15px;
  height:30px;
  width:50px;
  padding:5px;
  border-radius:10px;
  border:1px solid black;
  background-color:white;
`
function AddForm({setNickname,setLetterContent,setLetters}) 
{

  const data = useContext(Context);

    const selected = useRef();
    selected.current = "민지";
    const handleSelect = (e)=>{
      selected.current=e.target.value;
      console.log(selected.current);
    }
  
  return (
    <StDiv>
        <form onSubmit={(e)=>{
          e.preventDefault();
          const newLetter={
            id:uuid(),
            nickname:data.nickname,
            content:data.letterContent,
            writedTo:selected.current
          }
          setLetters([...data.letters,newLetter]);
          setNickname("");
          setLetterContent("");
          }}>
            <StInput placeholder="닉네임을 입력해주세요!"value={data.nickname} onChange={(e)=>{
            setNickname(e.target.value);}}/>
            <br/>
            <StTextArea placeholder="내용을 입력해주세요!" value={data.letterContent} onChange={(e)=>{
            setLetterContent(e.target.value);}}>
            </StTextArea>
            <br/>

            <StSelect ref={selected} onChange={handleSelect}>
                <option value="민지">민지</option>
                <option value="하니">하니</option>
                <option value="다니엘">다니엘</option>
                <option value="해린">해린</option>
                <option value="혜인">혜인</option>
            </StSelect>
            
            <StSubmitBtn>등록</StSubmitBtn>

        </form>
    </StDiv>
  )
}

export default AddForm