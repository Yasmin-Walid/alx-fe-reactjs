import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
    const { recipes, updateRecipe } = useRecipeStore((state) => ({
      recipes: state.recipes,
      updateRecipe: state.updateRecipe,
    }));
  
    // Find the recipe to edit
    const recipe = recipes.find((r) => r.id === recipeId);
  
    // Local state for editing the recipe
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent form submission from refreshing the page
      updateRecipe(recipeId, { title, description }); // Update the recipe in the store
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    );
  };
  

export default EditRecipeForm;
