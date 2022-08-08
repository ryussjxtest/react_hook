import { useState } from "react";

const heavyWork = ()=>{
  console.log("엄청 무겁다고 생각되는 작업이라고 .....!!!")
  return ['홍길동', '김민수', '홍길순']
}



export default function UseState(){
  //  const [names, setNames] = useState(heavyWork());
  // 1. 매번 렌더링될때마다 무거운 작업을 호출해야 한다면..
  //    아래와 같이 callback으로 호출하는것이 좋다. heavy 작업이 변경되었을때만이 호출된다.
  // 2. 또한 업데이트 되어야 하는 값이 그 이전값을 포함하는 경우도 마찬가지 이다.
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState('');
  
  const handleInputChange = (e) =>{
  setInput(e.target.value);
  // console.log(input)
  }

  return (
    <div>
     <input type="text" value={input} onChange={handleInputChange}/>
     <button onClick={()=>{
      console.log("Upload button clicked", input);
      // setNames([input, ...names]);
        setNames((prev)=>{
          console.log(...prev)
          return [input, ...prev];
        })
     }}> Upload </button>
     <button onClick={()=>{
        console.log("Clear button clicked");
        setNames([]);        
     }}> Clear </button>
     {names.map((name, idx )=>{
      return <p key={idx}>{name}</p>
     })}
    </div>
  )
}