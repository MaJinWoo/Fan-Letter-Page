import React from 'react'
import styled from 'styled-components';

const StHeader = styled.header`
  text-align: center;
  padding:30px;
  height:200px;
  font: italic small-caps bold 100px cursive;
  display:grid;
  justify-content: center;
`
const StBtnMinji = styled.button`
  &:hover{
    background-color: #FF0000;
    color:white;
    transition:0.5s;
  }
  cursor:pointer;
  border:none;
  font-size: 25px;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  float: left;
  position: relative;

  background-color: #fa5a5a;
  color: white;
  transition: all 0.2s ;
  border-radius: 5px;

`
const StBtnHani=styled.button`
  &:hover{
    background-color: #FF8E00;
    color:white;
    transition:0.5s;
  } 
  cursor:pointer;
  border:none;
  font-size: 25px;
  position: relative;
  float: left;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 5px;
  background-color: #FFAA40;
`
const StBtnDaniel=styled.button`
  &:hover{
    background-color: #21825B;
    color:white;
    transition:0.5s;
  } 
  cursor:pointer;
  border:none;
  font-size: 25px;

  position: relative;
  float: left;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 5px;
  transition: all 0.2s ;
  background-color: #00AE68;
`
const StBtnHerin=styled.button`
  &:hover{
    background-color: #01939A;
    color:white;
    transition:0.5s;
  } 
  cursor:pointer;
  border:none;
  font-size: 25px;

  position: relative;
  float: left;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 5px;
  transition: all 0.2s ;
  background-color: #5DC8CD;
`
const StBtnHyein=styled.button`
  &:hover{
    background-color: #6D184B;
    color:white;
    transition:0.5s;
  } 
  cursor:pointer;
  border:none;
  font-size: 25px;

  position: relative;
  float: left;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 5px;
  transition: all 0.2s ;
  background-color: #A74982;
`

function Header({setBtnMinji, setBtnHani, setBtnDaniel, setBtnHerin, setBtnHyein}) {
  return (
    <StHeader>
      <div>
        New Jeans Fan Letter
      </div>
      <div>
        <StBtnMinji onClick={()=>{
          setBtnMinji(true);
          setBtnHani(false);
          setBtnDaniel(false);
          setBtnHerin(false);
          setBtnHyein(false);
        }}>민지</StBtnMinji>
        <StBtnHani onClick={()=>{
          setBtnMinji(false);
          setBtnHani(true);
          setBtnDaniel(false);
          setBtnHerin(false);
          setBtnHyein(false);
        }}>하니</StBtnHani>
        <StBtnDaniel onClick={()=>{
          setBtnMinji(false);
          setBtnHani(false);
          setBtnDaniel(true);
          setBtnHerin(false);
          setBtnHyein(false);
        }}>다니엘</StBtnDaniel>
        <StBtnHerin onClick={()=>{
          setBtnMinji(false);
          setBtnHani(false);
          setBtnDaniel(false);
          setBtnHerin(true);
          setBtnHyein(false);
        }}>해린</StBtnHerin>
        <StBtnHyein onClick={()=>{
          setBtnMinji(false);
          setBtnHani(false);
          setBtnDaniel(false);
          setBtnHerin(false);
          setBtnHyein(true);
        }}>혜인</StBtnHyein>
      </div>
    </StHeader>
  );
}


export default Header