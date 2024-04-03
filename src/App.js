import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Treatment from "./Treatment";
import About from "./About";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App-container">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment/:level" element={<Treatment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
