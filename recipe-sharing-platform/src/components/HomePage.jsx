import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/src/data.json");
        setRecipes(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching recipes", err);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

 const handleRecipeDetail = (id) =>{
  navigate (`/recipe/${id}`);
 };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Recipes</h1>
    <Link to="/add-recipe" className="bg-green-500 text-white px-10 py-2 pb-8 rounded font-semibold">
        Add a New Recipe
      </Link>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow max-w-md " onClick = {() => handleRecipeDetail (recipe.id)}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover "
          />
          <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
          <p className="text-green-800 mt-2 font-semibold">{recipe.summary}</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default RecipeComponent;
