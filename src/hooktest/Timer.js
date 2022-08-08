import { useEffect, useState } from "react"

export default function Timer(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tId = setInterval(()=> {
      // intervalCallBack()
      // setCount(count + 1);
      console.log("타이머 동작중..", count)
    }
    , 1000);

    // cleanup 
    return ()=>{
      clearInterval(tId);
      console.log("타이머가 clean up 되었습니다.")
    }

    },[]); // null array. 처음 한번만..
  
  return(
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요</span>
      {/* <span>count : {count}</span> */}
    </div>
  )
}