import { useEffect, useState } from "react"

///////////////////////////////////////////////////////////////////////////////
// useEffect   => clean Up작업은 return으로 정의.
// useEffect 1. 처음 로딩, 그리고 렌더링될때마다.
// useEffect(()=>{
//   // 작업
//   return () =>{ // 클린업 작업
//   }
// });


// // useEffect 2. 처음 로딩, 그리고 배열(dependency) 안의 요소가 변경되었을때
// useEffect(()=>{
//   // 작업
//   return () =>{ // 클린업 작업
//   }
// }, [value]); // dependency array

// // useEffect 3. 처음 로딩 한번 ( 빈 배열(dependency))
// useEffect(()=>{
//   // 작업
//   return () =>{ // 클린업 작업
//   }
// }, []); // dependency array가 null...



export default function UseEffect(){
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  // 랜더링 될때 마다 매번 실행됨
  // 전체 페이지는 아니고...UseEffect()  페이지(Component)가 랜더링 될때만....
  useEffect(()=>{
    console.log('useEffect /wo second factor..');
  }
  );
  const handleCountUpdate =() =>{
    setCount(count + 1);
  }
  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  return(
    <>
      <div>
        <button onClick={handleCountUpdate}> Update </button>
        <span> count: {count}</span>
        <input type="text" value = {name} onChange={handleInputChange}/>
        <span>name:{name}</span>
      </div>
    </>
  )
}