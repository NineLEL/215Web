import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Homework from "./components/Homework";
import Clean from "./components/Clean";
import News from "./components/News";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CreateNews from "./components/CreateNews";

import "./index.css";
// import Register from "./components/register.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/clean" element={<Clean />} />
          <Route path="/news" element={<News />} />
          <Route path="/create" element={<CreateNews />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
