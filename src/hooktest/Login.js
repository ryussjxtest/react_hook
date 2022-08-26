import { useEffect, useState } from "react"

export default function Login(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [track, setTrack] = useState("")

  console.log("[Login]....",username, password);
  const submitHandler = (e) =>{
    e.preventDefalut();
    console.log("submitHandler",username, password);
    setTrack("Start request to BE")
    setTimeout(()=>{
      setTrack('done')
      console.log("setTrack('done')");
      
    },5000)
  }

  useEffect(()=>{
    console.log("useEffect () ");
    if(track === 'done'){
      setIsLoggedIn(true)
      console.log("if(track === 'done')");
    }
  },[track])
  return(
    <div >
      {
        !isLoggedIn?
        <form onSubmit={submitHandler}>
          <input 
            type="email"
            // className="input"
            value={username}
            palceholder="username"
            onChange={(e)=>setUsername(e.target.value)}/>
          <input 
            type="password"
            // className="input"
            value={password}
            palceholder="username"
            onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>:
        <div> 
          <button>You are loggedIn</button>
        </div>
      }
    </div>
  )
}