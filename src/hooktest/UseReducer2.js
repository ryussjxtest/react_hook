import { useReducer, useState } from "react"
import Students4UseReducer2 from "./Students4UseReducer2";

export const ACTION_TYPES = {
  add:'add',
  del:'del',
}
const reducer = (state, action) => {
  console.log("dispatch ==> reducer   ",state,action);
  switch(action.type){
    case ACTION_TYPES.add:
      const name = action.payload.name;
      const newStudent ={
        id:Date.now(),
        name, // name:name 이름이 같으면 value생략가능.
        isHere:false,
      };
      return {
        count : state.count + 1,
        students : [...state.students, newStudent]
      };
    case ACTION_TYPES.del:
      return{
        count:state.count -1,
        students: // filter를 이용해 id와 다른 것들만 listup.
          state.students.filter((s)=>{ //인자로 학생 배열에서 하나씩..
            return s.id !== action.payload.id;
            //삭제할 것과 다르면...리턴즉 남긴다. true만 남기므로.. !==
          })
      };
    default :
      return state;
  }
}
const initialState ={
  count : 1,
  students:[
    {
      id:Date.now(),
      name:'홍길동',
      isHere : false,
    },
  ],
}
export default function UseReducer2(){
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');
  
  return (
    <div>
      <h3>UseReducer2 예제</h3>
      <h1>출석부</h1>
      <p>총 학생수 : {studentsInfo.count} 명</p>
      <br />
      <input 
        type='text'
        placeholder = '학생의 이름을 입력해 주세요'
        value = {name}
        onChange = {(e)=>{setName(e.target.value)}}
        onKeyPress = {(e)=>{
          if (e.key === 'Enter') {
            dispatch({
              type:ACTION_TYPES.add,
              payload :{name},
            });
          }
        }}
      />
      <button onClick={()=>{
        dispatch({
          type:ACTION_TYPES.add,
          payload :{name},
        })
      }}>추가</button>
      
      {studentsInfo.students.map((s)=>{
        return (
          <Students4UseReducer2 
          // Students4UseReducer2 component로 전달할 props...
            key={s.id} 
            name={s.name} 
            dispatch = {dispatch}
            id = {s.id}
            />
        );

      })}
    </div>
  )
}