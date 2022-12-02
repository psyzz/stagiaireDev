import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './assets/css/style.scss';
import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import Error404 from "./components/pages/Error404";
import Series from "./components/pages/Series";
import Login from "./components/pages/Login";

const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Films" element={<Films/>}/>
        <Route path="/Series" element ={<Series/>}/>
        <Route path="/Login" element ={<Login/>}/>  
        <Route path="*" element={<Error404/>}/>    
      </Routes>
    </BrowserRouter>

  </div>
  )
}




export default App;