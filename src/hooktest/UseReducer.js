import { useReducer, useState } from "react"

// reducer  : state를 업데이트 하는 역할(은행)
// dispatch : state를 업데이트를 위한 요구
// action   : 요구의 내용
// dispatch(action) ----> reducer(State,action)  ===> State변경.
const ACTION_TYPES ={
  deposit : 'deposit',
  withdraw : 'withdraw',
}
const reducer = (state, action)=>{
  // reducer는 useReducer선언할때 받은 state변수와..
  // dispatch가넘겨주는 action(object)을 받아 callback으로 호출된다.
  console.log("[reducer] 버튼클릭으로 dispatch호출..", state,action);
  switch(action.type){
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default : 
      return state;
  }
  // return state;
};

export default function UseReducer(){
  const [ number, setNumber] = useState(0);
  const [ money, dispatch] = useReducer(reducer, 0);
  
  return(
    <>
      <h3>useReducer 예제.</h3>
      <br />
      <span>잔고 : {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
      <br />
      <input 
        type='number'
        value={number}
        onChange={(e)=>{
          setNumber(parseInt(e.target.value))
        }}
        step = {number>=1000000?'100000':'10000'}
        
        />
      <button 
        style={{background:'orangered'}}
        onClick={()=>{
          dispatch({
            type:ACTION_TYPES.deposit,
            payload : number
          });
          // setNumber(0);
        }}
        >예금</button>
      <button 
        style={{background:'deepskyblue'}}
        onClick={()=>{
          dispatch({
            type:ACTION_TYPES.withdraw,
            payload : number
          });
          // setNumber(0);
        }}
        >출금</button>
    </>
  )
}


// component의 state관리 Hook...
// 1. useState
// 2. useReducer
// 두개가 어떻게 다른가???
// useReducer도 state를 생성하고 관리...그럼왜?????useState 안쓰나?
// State가 json처럼... 여러개의 값과 depth를 중복으로 가진 복합할때 사용한다.
// useReducer : Reducer, Dispatch, Action  3가지 중요 구성요소...
// Reducer  : state를 update 하기위한 API.
// Dispatch : 변경을 요청하는 절차.
// Action   : 어떤 변경인지...
// 즉 프로그래머는...Reducer에 어떤 action을 할것인지 담아서 dipatch 한다.
// dispatch(action) ----> reducer(State,action)  ===> State변경.
// const[state변수, dispatch] = useReducer(reducer,action 또는 초기값);