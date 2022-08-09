import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

// 2. useContext
export default function Content(){
  const {isDark} = useContext(ThemeContext);
  // const data = useContext(ThemeContext);
  // data가 아니라.  {isDark, setIsDark}로 직접 받는다.
  // console.log(data);
  // let isDark = data.isDark;
  // console.log("[Content]  isDark : ", isDark);

  const user = useContext(UserContext);

// 1. Props Drilling..
// export default function Content({isDark}){
  return (
    <div
      className='content'
      style={{
        backgroundColor : isDark? "black":"lightgray",
        color: isDark? 'white':'black',
      }}
    >
      {/* <p>홍길동님 좋은 하루 되세요.</p> */}
      <p>{user}님 좋은 하루 되세요.</p>
    </div>
  );
}