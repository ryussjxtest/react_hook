import UseParams from "./UseParam";
import { Router,Route,Link} from "react-router-dom";

export default function Day4UseParam(){
  const {whichday} = UseParams(); // Day4UserParam  path=/day/:day
  console.log("[Day4UseParam] whichday : ",whichday);

  return(
    <div>
      <h1>여기는 Day4Userparam 페이지</h1>
      <h2>Day{whichday} 페이지</h2>      
    </div>
  )
}