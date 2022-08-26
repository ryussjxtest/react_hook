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
import UseCallback2Box from './hooktest/UseCallback2Box';
import UseReducer from './hooktest/UseReducer';
import UseReducer2 from './hooktest/UseReducer2';
import Login from './hooktest/Login';
import UseParam from './hooktest/UseParam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Day4UseParam from './hooktest/Day4UseParam';


function App() {
  const [showTimer, setShowTimer] =  useState(false);

 return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseParam />} />
        <Route path="/day/:day" element={<Day4UseParam />} />
      </Routes>
    </BrowserRouter>
    {/* <Login /> */}
    {/* <UseReducer2 /> */}
    {/* <UseReducer /> */}
    <UseCallback2Box />
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
