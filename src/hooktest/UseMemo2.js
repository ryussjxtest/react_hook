import { useEffect, useMemo, useState } from "react"

export default function UseMemo2(){
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // // const location =(isKorea)? "한국" : "외국";
  // const  location  = {
  //   country : (isKorea)? "한국" : "외국",
  // };

  // // useEffect(()=>{
  // //   console.log("use Effect  의존성배열[location]");
  // //   // 객체 type의 경우 값이 아닌 reference를 저장한다.
  // //   // 따라서 매번 호출될때 마다. 다른 주소값이 생성되어 변화가 매번일어난다.
  // //   // 따라서 이곳이 지속 호출된다.
  // // },[location]);
  
  // // 방법 1. 객체내의 원시type 변수를 직접 지정한다. (강사는 설명안함. 한번 해봄..)
  // // useEffect(()=>{
  // //   console.log("use Effect  의존성배열[location.country]");
  // // },[location.country]);


  // 아래와 같이 객체변수의 경우 렌더링될때마다 변수가 초기화되어 useEffect가 지속 호출됨.
  // 이에따라 memoization으로 useMemo를 이용하여 이를 방지..초기화 안되게 한다.
  // 방법 2. useMemo로 memoization..
  const location = useMemo(()=>{
    return {
      country : isKorea? "한국":"외국"
    }
  },[isKorea]);
  useEffect(()=>{
    console.log("use Effect  의존성배열[location] useMemo이용하여 memoization..");
    // 객체 type의 경우 값이 아닌 reference를 저장한다.
    // 따라서 매번 호출될때 마다. 다른 주소값이 생성되어 변화가 매번일어난다.
    // 따라서 이곳이 지속 호출된다.
  },[location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input 
        type = 'number'
        value = {number}
        onChange={(e)=>{setNumber(e.target.value)}}
      />
      <hr/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={()=> setIsKorea(!isKorea)}> 비행기 타자 </button>

    </div>
  )
}


// JS의 type
// 원시(Primitive) 타입
//    종류 : String, Number, Boolean, Null, Undefined, Symbol, BigInt...
//    저장 : 메모리 값을 바로 저장.
// 객체(Object) 타입
//    종류: 원시 타입을 제외한 모든것... : Object, Array, ....
//    저장 : reference를 저장..