import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import backgroundImg from "img/background-color2.jpg"
import { useContext } from 'react';
import { Context } from 'context/Context';

const StGlobalDiv = styled.div`
  background-image: url(${backgroundImg});
  background-size:cover;
  text-align: center;
  display: grid;
  justify-content: center;
  width:100%;
  height:100%;
`
const StEditDiv=styled.div`

  text-align: center;
  margin:300px ;
  padding:100px;
  height: 200px;
  border:1px solid black;
`
const StEditTextArea=styled.textarea`
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
const StEditBtn = styled.button`
  margin:10px;
  font-size: 15px;
  height:30px;
  width:50px;
  padding:5px;
  border-radius:10px;
  border:1px solid black;
  background-color:white;

`

const StDetailDiv=styled.div`
    border:1px solid black;
    padding:50px;
    text-align:center;
    margin:200px;
    margin-top: 100px;;

    height: 300px;
    width:300px;

    border-radius: 20px;


`
const StDetailHomeBtn = styled.button`
  margin:10px;
  margin-top: 100px;
  margin-bottom: 0;
  font-size: 15px;
  height:30px;
  width:50px;
  padding:5px;
  border-radius:10px;
  border:1px solid black;
  background-color:white;
`
const StDetailH=styled.h2`  
  margin-bottom: 20px;
`
const StDetailP = styled.p`
  margin:20px;
`
const StDetailBtn = styled.button`
  margin:10px;
  font-size: 15px;
  height:30px;
  width:50px;
  padding:5px;
  border-radius:10px;
  border:1px solid black;
  background-color:white;
`
function Detail({letters, setLetters, nickname, setNickname, letterContent, setLetterContent}) {

  const data = useContext(Context);
  const [changeContent, setChangeContent] = useState(false);
  const [editContent, setEditContent] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const foundData = data.letters.find((letter)=>{
    return letter.id == params.id;
  });


  const deleteBtnHandler=()=>{
    if(window.confirm('정말로 삭제하시겠습니까?')===true){
      const deletedLetters = data.letters.filter((letter)=>{
        return letter.id != foundData.id;
      });
      setLetters(deletedLetters);
      console.log(deletedLetters);
      navigate('/');
    }else{
      return false;
    }
  }

  const editBtnHandler=()=>{
    setChangeContent(true);
  }

  return (
    <StGlobalDiv>
    {
      changeContent ?
      <StEditDiv>
        <form onSubmit={(e)=>{
          e.preventDefault();
          foundData.content= editContent;
          }}>
            
            <StEditTextArea placeholder="수정할 내용을 입력해주세요!" value={editContent} onChange={(e)=>{
            setEditContent(e.target.value);}}>
            </StEditTextArea>
            <br/>
            <StEditBtn onClick={()=>{
                navigate(`/`);

                // Question ???????

              }}>확인</StEditBtn>

        </form>
      </StEditDiv> : 

      <div>
        <StDetailHomeBtn onClick={()=>{
          navigate(`/`);
        }}>Home </StDetailHomeBtn>
        <StDetailDiv>
        <StDetailH>{foundData.nickname}</StDetailH>
        <br/>
        <StDetailP>{foundData.content}</StDetailP>
        <StDetailBtn onClick={editBtnHandler}>수정</StDetailBtn>
        <StDetailBtn onClick={deleteBtnHandler}>삭제</StDetailBtn>
        </StDetailDiv>
      </div>

    }
    </StGlobalDiv>
  )
}

export default Detail