import './App.css';
import { useState } from 'react';
import UseState from './hooktest/UseState';
import UseEffect from './hooktest/UseEffect';
import Timer from './hooktest/Timer';
import UseRef from './hooktest/UseRef';
import UseRefDom from './hooktest/UseRefDom';


function App() {
  const [showTimer, setShowTimer] =  useState(false);

 return(
    <div>
      
      <UseRefDom />      
      <UseRef />      
      {showTimer && <Timer />}
      <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer..</button>
     
      <UseEffect />             
      <UseState />
    </div>
  );
}

export default App;
