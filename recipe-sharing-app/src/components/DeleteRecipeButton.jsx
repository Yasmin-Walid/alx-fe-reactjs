import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();
  
    const handleDelete = () => {
      deleteRecipe(recipeId); // Remove the recipe from the store
      navigate('/'); // Redirect to the home page after deletion
    };
  
    return (
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
        Delete Recipe
      </button>
    );
  };
  

export default DeleteRecipeButton;
