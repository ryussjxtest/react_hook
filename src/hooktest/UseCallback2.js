import { useState } from "react";
import Box4UseCallbackBox from "./Box4UseCallbackBox";

export default function UseCallback2(){
  const [ size, setSize] = useState(100);

  const createBoxStyle = () =>{
    // style을 생성하여 리턴
    return {
      backgroundColor : 'pink',
      width : `${size}px`,
      height : `${size}px`,
    };
  };

  return(
  <div>
    <h1>UseCallback2 예제</h1>
    <span>boxsize</span>
    <input 
      type = "number"
      value = {size}
      onChange={(e)=>{
        setSize(e.target.value);
        console.log("boxsize : ",e.target.value);
      }}
      />
      <Box4UseCallbackBox createBoxStyle={createBoxStyle}/>
  </div>
  )
}

// useCallback 역시 component optimization해준다.
// Memoization ... 
// useMemo로 캐싱하고..변경시만 다시 callback..
// useCallback도 거의 동일하다.  값이 아니라. fn을 memoization한다.
// JS의 함수식
// const calculate = (num) => {return num+1};
// calculate라는 변수에 함수를 할당.

// 다시..아래 함수형컴포넌트  Component가 ..있을때..
// function Component (){
//   const calculate = (num)=> num+1;
//   return <div>{value}</div>
// }
// App.js 등에서 <Component />에 의해 호출(렌더링) 되면..
// Component()함수가 호출되고... 곧 Component()내 내부변수가 초기화된다. 
// 그렇게 되면..위와 같이 선언된 함수식의 경우도 또 한번 초기화되면서
// 불필요한 함수가 실행되는 것이다. 
// 이를 막기 위한 것이 useCallback이다.
// 아래와 같이 Component내 caluate변수의 함수식을 useCallback으로 감싼다.
// 그렇게 되면 렌더링시 Memoize된 함수를 재사용한다.
// function Component (){
//   const calculate = useCallback(
//    (num)=> num+1,
//    [item]);
//   return <div>{value}</div>
// }
// useCallbak 함수 모양
// useCallbak(callback fn, [dependency array]);