import { useState } from "react"
import Page from "./Page";


// 상위 component에서 하위로 props를 통해 data전달.
// 하지만 depth가 깊고 복잡하다면...매번 props를 단계별로 전달하기 어려움
// Prop drilling.. 상관없는 component도 거쳐가야 하는 불편함...
// props도 많아지고. depth도 깊어 지면 ... 문제가 많아 진다.
// UserID(인증), Theme, Languag등은 거의 모든 component에서 필요하다.
// React는 이를 해결하기 위해 Context API를 제공.
// 상위 component가 broadcast하면 어느 위치에 잇든지 손만들면 사용가능.
//
// Context는 꼭 필요할때만...
// Context를 사용하면 컴포넌트를 재사용하기 어려워질수 있음.
export default function UseContext(){
  const [isDark, setIsDark] = useState(false);

  return(
    <Page isDark={isDark} setIsDark={setIsDark} />
  );
}