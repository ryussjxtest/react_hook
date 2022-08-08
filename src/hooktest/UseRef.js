


export default function UseRef(){
  // const ref = useRef(value);
  // ref <= {current : value}
  // component life cycle 동안 유지됨.
  
  // useRef의 사용
  // 1. 저장공간  : 특히 state등의 저장등.
  // State 변화 ->    렌더링 -> 컴포넌트 내부 변수들 초기화..
  // Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨.
  // State 변화 ->    렌더링 -> 그래도 Ref의 값은 유지됨...
  // 다시 말해 변경되더라도 렌더링 하지 않아야 할때 유리하다.

  // 2. DOM 요소에 접근
  // ex. 로그인 page에서 자동으로 ID input창에 포커싱 하도록 한다.

  return (
    <>
    <div>UseRef test component...</div>
    </>
  )
}