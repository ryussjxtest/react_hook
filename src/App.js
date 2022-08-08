import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime]=  useState(2);
  const handleClick = () =>{
    let newTime;
    newTime = time == 24? 1: time+1 
    setTime(newTime);
  }

  console.log("엡데이트!!");
  return (
    <div>
      <span> 현재 시각 : {time==24?0:time}시, {(time >= 12 && time<24)? "PM" : "AM"}{time>12? time-12:time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
