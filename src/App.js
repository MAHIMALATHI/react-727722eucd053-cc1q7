// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}


