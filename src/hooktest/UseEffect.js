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

  // 처음 렌더링.. 그리고 두번째 인자가 변경될때 마다 렌더링 하게 수정.
  useEffect(()=>{
    console.log('👀👀👀👀👀count changed..');
  }
  ,[count]); // dependency array...count가 변경될때만 렌더링 된다.
    useEffect(()=>{
    console.log('✔✔✔✔✔✔✔✔✔name changed..');
  }
  ,[name]); // dependency array...count가 변경될때만 렌더링 된다.

  // 처음 한번만 렌더링...  두번째 인자에 null array...
  useEffect(()=>{
    console.log('처음 한번만 렌더링...👍👍👍👍👍👍👍');
  }
  ,[]); // null array...

  const handleCountUpdate =() =>{
    setCount(count + 1);
  }
  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  return(
    <>
      <div> <p> ======= [[  UseEffect ]] ======= </p></div> 
      <div>
        
        <button onClick={handleCountUpdate}> Update </button>
        <span> count: {count}</span>
        <input type="text" value = {name} onChange={handleInputChange}/>
        <span>name:{name}</span>
      </div>
    </>
  )
}