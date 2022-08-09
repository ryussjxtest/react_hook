// component의 성능 최적화을 올린다.
// useMemo, useCallback
// memo => memoization : 동일한 값을 리턴하는 함수를 여러차례 호출해야 한다면??
// 그 값을 계산해 놓고.. 메모리에 cache해 놓은 다음..빠르게 재 사용한다.

import { useMemo, useState } from "react";

// 함수형 컴포넌트..
// 컴포넌트를 렌더링 한다.. 는 것은 컴포넌트 함수가 호출되었다는 의미.
// 즉 렌더링 -> 컴포넌트 함수 호출 -> 모든 내부 변수 초기화...루틴...
// useMemo를 통해 memoiaztion하고...렌더링때마다 무거운 잡업을 하지 않고..
// 캐싱한 data를 재 사용한다.
// const value = useMemo(callback fn, [array]);
// 의존성 배열... 즉.. useEffect와 같은 방식..
// 관심 갖는 변수가 변경될때만 callback fn을 호출한다.
// 무분별하게 사용하면 메모리가 과다 사용된다.

const hardCalculate = (number) => {
  console.log("어려운계산기........");
  for (let i = 0; i < 999999999; i++){
    // 단순히 ...좀 시간을 갖는다.
  }
  return number + 10000;
}
const easyCalculate = (number) => {
  console.log("쌉 쉬운 계산기........");
  return number + 1;
}
export default function UseMemo(){
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  
  // UseMemo가 호출(렌더링)되면 아래 모든 함수들이 호출되어 로드가 걸린다.
  // const hardSum  = hardCalculate(hardNumber);
  // const easySum  = easyCalculate(easyNumber);

  const hardSum = useMemo(()=>{
    return hardCalculate(hardNumber);
  },[hardNumber]);
  const easySum = useMemo(()=>{
    return easyCalculate(easyNumber);
  },[easyNumber]);
  
  return(
    <>
    <h3>어려운 계산기</h3>
    <input 
      type="number"
      value = {hardNumber} 
      onChange ={ (e) =>(setHardNumber(parseInt(e.target.value)))}
      />
      <span> + 10000 = {hardSum}</span>

    <h3>쌉 쉬운 계산기</h3>
    <input 
      type="number"
      value = {easyNumber} 
      onChange ={ (e) =>(setEasyNumber(parseInt(e.target.value)))}
      />
      <span> + 1 = {easySum}</span>
    </>
  )
}