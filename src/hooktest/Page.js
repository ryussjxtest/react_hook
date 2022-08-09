import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

// 1. use props drilling
// export default function Page({isDark, setIsDark}){
//   return (
//     <>
//       <Header isDark={isDark}/>
//       <Content isDark={isDark}/>
//       <Footer isDark={isDark} setIsDark={setIsDark}/>
//     </>
//   );
// }


// 2. useContext
export default function Page(){
  // Page는 안필요..  위의 props drilling과 다른 부분...
  // 받아서 전달등이 필요 없다.
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}