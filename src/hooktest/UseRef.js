import { useReducer, useRef, useState } from "react"



export default function UseRef(){
  // const ref = useRef(value);
  // ref <= {current : value}
  // component life cycle 동안 유지됨.
  
  // useRef의 사용
  // 1. 저장공간  : 특히 state등의 저장등.
  // State 변화 ->    렌더링 -> 컴포넌트 내부 변수들 초기화..
  // Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨.
  // State 변화 ->    렌더링 -> 그래도 Ref의 값은 유지됨...
  // 다시 말해 변경되더라도 렌더링 하지 않아야 할때 유리하다.

  // 2. DOM 요소에 접근
  // ex. 로그인 page에서 자동으로 ID input창에 포커싱 하도록 한다.

  // 결론적으로...
  // 변환는 감지 해야 하지만..렌더링 하면 안될때 사용한다.


  const [ count, setCount] =  useState(0);
  const countRef = useRef(0);
  let countVar = 0
  // componet가 렌더링 된다??
  // 결국 UseRef()가 다시 불린다는 의미.... 변수들이 계속 초기화됨..



  const increaseCount = () =>{
    setCount(count+1);
    console.log('[increaseCount] , ', count)
  }
  const increaseRefCount = () => {
    countRef.current += 1;
    console.log('[increaseRefCount] , ', countRef.current)
  }
  const increaseVarCount = () => {
    countVar+=1
    console.log('[increaseVarCount] , ',countVar)
  }

  // console.log('UserRef componet relender.........[count]:',count)
  // console.log('countRef : ', countRef)
  return (
    <>
      <div> <p> ======= [[  UseRef ]] ======= </p></div> 
      <p>
        <span>State : {count}</span>
        <button onClick={increaseCount}> State 올려</button>
      </p>
      <p>
        <span>Ref : {countRef.current}</span>
        <button onClick={increaseRefCount}> Ref 올려</button>
      </p>
      <p>
        <span>Var : {countVar}</span>
        <button onClick={increaseVarCount}> Var 올려</button>
      </p>
      
    </>
  )
}