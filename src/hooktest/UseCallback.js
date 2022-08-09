import { useCallback, useEffect, useState } from "react";

export default function UseCallback(){
  const [number, setNumber] = useState(0);
  // // function somFunction (){ //함수 정의도 마찬가지 계속 불린다..
  // // 결국 함수도 객체. reference가 함수이름에 저장됨.
  // const somFunction = ()=>{ //함수식,, 
  //   console.log("[somFunction] number : ",number)
  //   return;
  // };


  // 결국 아래와 같이 useCallback으로 감싼다.
  const somFunction = useCallback(()=>{ //함수식,, 
    console.log("[somFunction] number : ",number)
    return;
    }
    // ,[]); // 처음 한번만 호출되고.... 그 이후 재 사용됨.
    // // 그렇게 되면 버튼으로 해당 함수를 호출해도 역시 변화 없게됨.
    ,[number]); // 처음 한번만 호출되고.... number가 변경되어도 호출.
    // number에 의존하여 변경...즉 재 호출된다.

  useEffect(()=>{
      console.log("useEffect is called. somFunction가 변경됨")
    }
  ,[somFunction]); // 처음, 그리고 somFunction이 변경될때 마다.
  // );    // 의존성 배열없음. 화면 렌더링시마다..계속불린다.
  // ,[]); // 의존성 배열 null, 처음 한번만 불린다.
  return(
  <div>
    <h1>UseCallback 예제</h1>
    <input 
      type = "number"
      value = {number}
      onChange={(e)=>{
        setNumber(e.target.value);
        console.log(e.target.value);
      }}
      />
      <button onClick={somFunction}>Call somFunc</button>
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