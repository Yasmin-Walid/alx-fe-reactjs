import { useState } from 'react';
import HomePage from './components/HomePage';
import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
      <Route  path = "/" element = {<HomePage />} />
      <Route path ="/recipe.id" element={< RecipeDetail />} />
      </Routes>
      </Router>
  )
}

export default App
