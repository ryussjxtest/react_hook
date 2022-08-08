import './App.css';
import { useState } from 'react';
import UseState from './hooktest/UseState';
import UseEffect from './hooktest/UseEffect';


function App() {
 return(
    <div>
      <UseEffect />
      <div> <p> ================================ </p></div> 
      
      <UseState />
    </div>
  );
}

export default App;
