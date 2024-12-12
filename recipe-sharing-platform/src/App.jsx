import HomePage from './components/HomePage';
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail  from './components/RecipeDetail';
import  AddRecipeForm  from './components/AddRecipeForm';
import Form from './components/Form'


function App() {

  return (
    <Router>
      <Routes>
      <Route  path = "/" element = {<HomePage />} />
      <Route path ="/recipe/:id" element={< RecipeDetail />} />
      <Route path="/add-recipe" element={<AddRecipeForm />} />
      <Route path = "/Form" element = {< Form />} />
 
      </Routes>
      </Router>
  )
}

export default App
