import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm'
import SearchBar from './components/SearchBar';

  const App = () => {
    return (
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <RecipeList />
        <AddRecipeForm />
        <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
      </div>
    );
  };

export default App
