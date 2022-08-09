import { useEffect, useState } from "react"

export default function UseMemo2(){
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location =(isKorea)? "한국" : "외국";
  useEffect(()=>{
    console.log("use Effect....location이 의존성배열", location)
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
      <p>나라 : {location}</p>
      <button onClick={()=> setIsKorea(!isKorea)}> 비행기 타자 </button>

    </div>
  )
}


// JS의 type
// 원시(Primitive) 타입
//  : String, Number, Boolean, Null, Undefined, Symbol, BigInt...
// 객체(Object) 타입
//  : 원시 타입을 제외한 모든것... : Object, Array, ....