import React from "react";
// import './App.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing  from './views/Landing'
import Home from './views/Home'
import FormActivities from './components/Activities/FormActivities';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
// import { URL } from './helper/Route.helper'

function App() {

  return (
    <>
    {/* <Landing /> */}
      {/* <h1>Titulo</h1> */}
      <BrowserRouter>
      <Nav /> 
        <Routes>
          <Route path="/lan" element={<Landing />}/>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<FormActivities />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> 


    </>
  )
}

export default App
