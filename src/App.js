import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const heavyWork = ()=>{
  console.log("엄청 무겁다고 생각되는 작업이라고 .....!!!")
  return ['홍길동', '김민수']
}

function App() {
 const [names, setNames] = useState(heavyWork());
 const [input, setInput] = useState('');
 
 const handleInputChange = (e) =>{
  setInput(e.target.value);
  // console.log(input)
 }
 return(
    <div>
     <input type="text" value={input} onChange={handleInputChange}/>
     <button onClick={()=>{
      console.log("Upload button clicked", input);
      setNames([input, ...names]);
     }}> Upload </button>
     <button onClick={()=>{
      console.log("Clear button clicked");
      setNames([]);
     }}> Clear </button>
     {names.map((name, idx )=>{
      return <p key={idx}>{name}</p>
     })}
    </div>
  );
}

export default App;
