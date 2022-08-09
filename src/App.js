import './App.css';
import { useState } from 'react';
import UseState from './hooktest/UseState';
import UseEffect from './hooktest/UseEffect';
import Timer from './hooktest/Timer';
import UseRef from './hooktest/UseRef';
import UseRefDom from './hooktest/UseRefDom';
import UseContext from './hooktest/UseContext';
import UseMemo from './hooktest/UseMemo';
import UseMemo2 from './hooktest/UseMemo2';
import UseCallback from './hooktest/UseCallback';
import UseCallback2 from './hooktest/UseCallback2';


function App() {
  const [showTimer, setShowTimer] =  useState(false);

 return(
    <div>
      <UseCallback2 />
      {/* <UseCallback /> */}
      {/* <UseMemo2 /> */}
      {/* <UseMemo /> */}
      {/* <UseContext /> */}
      {/* <UseRefDom /> */}
      {/* <UseRef /> */}
      {/* {showTimer && <Timer />} */}
      {/* <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer..</button> */}
      {/* <UseEffect />              */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
