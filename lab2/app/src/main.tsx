// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);


root.style.flexDirection = `column`
root.style.display = `flex`

function resizeBody() {
  root.style.height = ``
  if (root.clientHeight < window.innerHeight) {
    root.style.height = `${window.innerHeight}px`
  }
}

resizeBody()

window.onresize = resizeBody