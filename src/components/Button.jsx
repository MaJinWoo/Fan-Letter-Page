import React from 'react'

function Button({setBtnMinji, setBtnHani, setBtnDaniel, setBtnHerin, setBtnHyein}) {


  return (
    <div>
      <button onClick={()=>{
        setBtnMinji(true);
        setBtnHani(false);
        setBtnDaniel(false);
        setBtnHerin(false);
        setBtnHyein(false);
      }}>민지</button>
      <button onClick={()=>{
        setBtnMinji(false);
        setBtnHani(true);
        setBtnDaniel(false);
        setBtnHerin(false);
        setBtnHyein(false);
      }}>하니</button>
      <button onClick={()=>{
        setBtnMinji(false);
        setBtnHani(false);
        setBtnDaniel(true);
        setBtnHerin(false);
        setBtnHyein(false);
      }}>다니엘</button>
      <button onClick={()=>{
        setBtnMinji(false);
        setBtnHani(false);
        setBtnDaniel(false);
        setBtnHerin(true);
        setBtnHyein(false);
      }}>해린</button>
      <button onClick={()=>{
        setBtnMinji(false);
        setBtnHani(false);
        setBtnDaniel(false);
        setBtnHerin(false);
        setBtnHyein(true);
      }}>혜인</button>
    </div>
  );
}

export default Button