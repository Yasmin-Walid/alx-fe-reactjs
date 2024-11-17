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
      </div>
    );
  };

export default App
