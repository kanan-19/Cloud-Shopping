//import React from 'react';
//import { Routes } from 'react-router-dom';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
//import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
const [{basket} , dispatch] = useStateValue();




  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
