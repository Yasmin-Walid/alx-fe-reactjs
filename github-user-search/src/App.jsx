import { useState } from "react";
import React from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search  from "./components/Search"
function App() {
  return (
    <Router>

      <Header />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/Search" element = {< Search />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;