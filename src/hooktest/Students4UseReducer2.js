import { ACTION_TYPES } from "./UseReducer2"

export default function Students4UseReducer2({name,dispatch,id}){
  return (
    <div>
      <span>{name}</span>
      <button onClick={()=>{
        dispatch({
          type:ACTION_TYPES.del,
          payload :{id},
          // 이름은 겹칠수도 잇다. payload :{name},
          // object형태로.....
        })
      }}>삭제</button>
    </div>
  )
}