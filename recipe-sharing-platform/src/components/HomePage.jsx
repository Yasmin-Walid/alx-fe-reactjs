import { useState, useEffect } from "react";
import axios from 'axios';

const RecipeComponent = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


 useEffect(() => {   

  const fetchRecipes =  async () => {
     try {
    const response = await axios.get ('./data.json').then((res) => {

    });
    setRecipes(response.data);
    setError(null);

  
     } catch (err) {
      console.error ('Error fetching recipes', err);
      setError ('Failed to load recipes')
     } finally {
      setLoading (false);
     }
  };

  fetchRecipes ();

 }, []);


 if (loading) return <p>Loading ...</p>;
 if (error) return <p>{error}</p>

 return (
  <div>
       <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);


  };
  
  export default RecipeComponent;   