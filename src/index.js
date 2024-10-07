import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionalComponent from './7-5components/FunctionalComponent';
import ClassComponent from './7-5components/ClassComponent';
import Parent from './7-5components/props/class/function/Parent';
// import Childto02 from './7-5components/props/class/function/Childto02';
import Daughter from './7-5components/props/class/function/Daughter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FunctionalComponent/>
    <ClassComponent/>
    <Parent/>
    {/* <Childto02/> */}
   < Daughter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();