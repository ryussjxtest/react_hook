import { Router,Route,Link} from "react-router-dom";
import Day4UseParam from "./Day4UseParam";

export default function UseParam(){
  const days = [1, 2, 3, 4, 5, 6, 7];
  console.log("[UseParam]")
 
  return (
    <div>
      <h2>UseParam 연습 Page</h2>
      <ul>
        <li>Test</li>
        {/* {
          days.map(day =>{
            return <li key={day}> Day {day}</li>
          })
        } */}
        {/* {
          days.map(day =>{
            return <p key={day}> Day {day}</p>
          })
        } */}
        {
          days.map(day =>{
            return <li key={day}><Link key={day} to= {`/day/${day}`}>Day {day}</Link></li>
          })
        }
        {/* {
          days.map(day =>{
            return <li><Link to='/'>Day {day}</Link> </li>
          })
        } */}
     
      </ul>
    </div>
  )
}