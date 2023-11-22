// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Timer from './Timer'
// //import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  //   <React.StrictMode>
  //     <Timer/>
  
  //   </React.StrictMode>
  //  );
  import React from "react";
  import ReactDOM from "react-dom";
  import Timer4 from './Timer4';
import './index.css';
//import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    
    <Timer4/>
    
  </React.StrictMode>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
