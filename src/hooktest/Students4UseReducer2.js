import { ACTION_TYPES } from "./UseReducer2"

export default function Students4UseReducer2({name,dispatch,id, isHere}){
  return (
    <div>
      <span 
        style={{
          textDecoration: isHere? "line-through":"none",
          color : isHere? 'gray':'black',
          background : isHere? 'lightgreen':"white",
        }}
        onClick={()=>{
          dispatch({
            type:ACTION_TYPES.mark,
            payload :{id},
            // 이름은 겹칠수도 잇다. payload :{name},
            // object형태로.....
          })
        }}
      >{name}</span>
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