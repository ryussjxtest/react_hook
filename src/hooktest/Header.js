
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

// 2.use context
export default function Header(){
  const {isDark} = useContext(ThemeContext);
  // const data = useContext(ThemeContext);
  // data가 아니라.  {isDark, setIsDark}로 직접 받는다.
  // console.log(data);
  // let isDark = data.isDark;
  // console.log("[Header]  isDark : ", isDark);

  // 데이터를 넘겨 줄때 하나와 둘 이상이 다르다???? 체크하자.
  // 값과 변수의 차이인가??  그냥 지금은 그런가 보다 하고 넘어가자. 
  const user = useContext(UserContext);
  console.log("[Header]  user : ",user);

// // 1. Props Drilling
// export default function Header({isDark}){
  return (
    <header
      className='header'
      style={{
        backgroundColor : isDark? "black":"lightgray",
        color: isDark? 'white':'black'
      }}
    >
      {/* <h1>Welcome 홍길동</h1> */}
      <h1>Welcome {user}</h1>
    </header>
  );
}

