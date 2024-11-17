import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterRecipes(); // Trigger filtering whenever the search term changes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
