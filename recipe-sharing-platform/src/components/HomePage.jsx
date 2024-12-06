import { useState, useEffect } from "react";
import axios from 'axios';

const RecipeComponent = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


 useEffect(() => {   

  const fetchRecipes =  async () => {
     try {
    const response = await axios.get ('/data.json');
    setRecipes(response.data);
    setError(null);

     } catch (err) {
      console.error ('Error fetching recipes', err);
      setError ('Failed to load recipes')
     } finally {
      setLoading (False);
     }
  };

  fetchRecipes ();

 }, []);


 if (loading) return <p>Loading ...</p>;
 if (error) return <p>{error}</p>

 return (
  <div>
    <h1>Recipes</h1>
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  </div>
);


  };
  
  export default RecipeComponent;   