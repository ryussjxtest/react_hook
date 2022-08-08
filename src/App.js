import './App.css';
import { useState } from 'react';
import UseState from './hooktest/UseState';
import UseEffect from './hooktest/UseEffect';


function App() {
 return(
    <div>
import './App.css';
import { useState } from 'react';
import UseState from './hooktest/UseState';
import UseEffect from './hooktest/UseEffect';
import Timer from './hooktest/Timer';
import UseRef from './hooktest/UseRef';


function App() {
  const [showTimer, setShowTimer] =  useState(false);

 return(
    <div>
      
      <div> <p> ======= [[  UseRef ]] ======= </p></div> 
      <UseRef />
      <div> <p> ======= [[  UseEffect  cleanup ]] ======= </p></div> 
      {showTimer && <Timer />}
      <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer..</button>

      <div> <p> ======= [[  UseEffect ]] ======= </p></div> 
      <UseEffect />

      <div> <p> ======= [[  UseState ]] ======= </p></div>       
      <UseState />
    </div>
  );
}

export default App;

    </div>
  );
}

export default App;
