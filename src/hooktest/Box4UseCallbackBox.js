import { useEffect, useState } from "react";

export default function Box4UseCallbackBox({createBoxStyle}){
  const [style, setStyle] = useState({});
  const colors = ['red', 'blue', 'green','yellow','pink'
  // ,'red', 'blue', 'green','yellow','pink',
  // 'red', 'blue', 'green','yellow','pink',
  // 'red', 'blue', 'green','yellow','pink',
  // 'red', 'blue', 'green','yellow','pink',
  // 'red', 'blue', 'green','yellow','pink'
  ];
  useEffect(()=>{
    console.log("박스 키우기  ....",style);
    setStyle(createBoxStyle()); // 함수를 props로 받는다.
  },[createBoxStyle]);

  const changeStyle = (c)=>{
    console.log("[changeStyle]..", c);
    const tempStyle = {
      backgroundColor : c,
      width : style.width,
      height : style.height,
    };
    setStyle(tempStyle) ;
  }
  const handleSelect = (e) =>{
    console.log("[handleSelect]..", e.target.value);
    const tempStyle = {
      backgroundColor : e.target.value,
      width : style.width,
      height : style.height,
    };
    setStyle(tempStyle) ;
  };
  return (
    <>
      <h3>여기 박스위치크기 [{style.backgroundColor},{style.width}]</h3>
      <div style={style}></div>
      <br /><hr /><br />
      {/* <button style={{backgroundColor : 'red'}}>버튼</button>
      <button style={{backgroundColor : 'blue'}}>버튼</button>
      <button style={{backgroundColor : 'green'}}>버튼</button>
      <button style={{backgroundColor : 'yellow'}}>버튼</button>
      <button style={{backgroundColor : 'pink'}}>버튼</button> */}
      <span>버튼방식 : </span>{colors.map((c, idx)=>{
        return(
        <button 
          id={idx} 
          style={{backgroundColor: c}}
          onClick = {()=>changeStyle(c)}>{c}</button>
        );
      })}
      <br /><br /><hr /><br />
      <span>DropDown방식 : </span>
      <select 
        onChange={handleSelect}
        value={style.backgroundColor}
        style={{backgroundColor: style.backgroundColor}}
        >
        {colors.map((item,idx)=>{
          return (
            <option 
              key={idx}
              value={item}
              style={{backgroundColor: item}}>{item}</option>
          )
        })}
      </select>

      {/* <ul>
      {colors.map((c, idx)=>{
        return(
        <li 
          id={idx} 
          style={{backgroundColor: c}}
          onClick = {()=>changeStyle(c)}>{c}
        </li>
        );
      })}
      </ul> */}
      <br /><hr /><br />
    </>
  );
}