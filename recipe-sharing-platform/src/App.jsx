import HomePage from './components/HomePage';
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail  from './components/RecipeDetail';
import { AddRecipeForm } from './components/AddRecipeForm';


function App() {

  return (
    <Router>
      <Routes>
      <Route  path = "/" element = {<HomePage />} />
      <Route path ="/recipe/:id" element={< RecipeDetail />} />
      <Route path="/add-recipe" element={<AddRecipeForm />} />

      </Routes>
      </Router>
  )
}

export default App
