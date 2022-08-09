import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// 2. useContext
export default function Footer(){

  const {isDark, setIsDark} = useContext(ThemeContext);
  // const data = useContext(ThemeContext);
  // data가 아니라.  {isDark, setIsDark}로 직접 받는다.
  // console.log(data);
  // let isDark = data.isDark;
  // let setIsDark = data.setIsDark;
  // console.log("[Footer]  isDark : ", isDark);

// // 1. Props Drilling
// export default function Footer({isDark, setIsDark}){

const toggleTheme = ()=>{
    setIsDark(!isDark);
    console.log("Theme changed....", isDark)
  }
  return (
    <footer
      className='footer'
      style={{
        backgroundColor : isDark? "black":"lightgray",
      }}
    >
      <button onClick={toggleTheme}>색상변경</button>
    </footer>
  );
}