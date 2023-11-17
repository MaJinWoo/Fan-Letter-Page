import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StDiv = styled.div`
    background-size: cover;
    display:grid;
    justify-content: center;
    border:1px solid black;
    margin:100px;
    padding:50px;
`
const StLetterDiv=styled.div`
    border:1px solid black;
    padding:30px;
    text-align:center;
    margin:40px;

    height: 300px;
    width:300px;

    border-radius: 20px;
`
const StLink = styled(Link)`
  text-decoration: none;
  &:visited{color:black;}
  &:link{color:black;}
`

function Letter({letters, btnMinji, btnHani, btnDaniel, btnHerin, btnHyein}) {


  return (
    <StDiv>
        {
            btnMinji ?
            letters.filter((letter)=>{
                return letter.writedTo === "민지"
            }).map((letter)=>{
                return(

                    <StLink to= {`/detail/${letter.id}`} 
                    key = {letter.id}
                    >

                    <StLetterDiv>
                    <h2> 닉네임 : {letter.nickname}</h2>
                    <br/>
                    <p> {letter.content}</p>
                    </StLetterDiv>
                    </StLink>

                );
            }):""
        }
                {
            btnHani ?
            letters.filter((letter)=>{
                return letter.writedTo === "하니"
            }).map((letter)=>{
                return(
                    <StLink to= {`/detail/${letter.id}`} 
                    key = {letter.id}
                    >

                    <StLetterDiv>
                    <h2>{letter.nickname}</h2>
                    <br/>
                    <p>{letter.content}</p>
                    </StLetterDiv>
                    </StLink>
                );
            }):""
        }
        {
            btnDaniel ?
            letters.filter((letter)=>{
                return letter.writedTo === "다니엘"
            }).map((letter)=>{
                return(
                    <StLink to= {`/detail/${letter.id}`} 
                    key = {letter.id}
                    >

                    <StLetterDiv>
                    <h2>{letter.nickname}</h2>
                    <br/>
                    <p>{letter.content}</p>
                    </StLetterDiv>
                    </StLink>
                );
            }):""
        }
        {
            btnHerin ?
            letters.filter((letter)=>{
                return letter.writedTo === "해린"
            }).map((letter)=>{
                return(
                    <StLink to= {`/detail/${letter.id}`} 
                    key = {letter.id}
                    >

                    <StLetterDiv>
                    <h2>{letter.nickname}</h2>
                    <br/>
                    <p>{letter.content}</p>
                    </StLetterDiv>
                    </StLink>
                );
            }):""
        }
        {
            btnHyein ?
            letters.filter((letter)=>{
                return letter.writedTo === "혜인"
            }).map((letter)=>{
                return(
                    <StLink to= {`/detail/${letter.id}`} 
                    key = {letter.id}
                    >

                    <StLetterDiv>
                    <h2>{letter.nickname}</h2>
                    <br/>
                    <p>{letter.content}</p>
                    </StLetterDiv>
                    </StLink>
                );
            }):""
        }

    </StDiv>
  )
}

export default Letter