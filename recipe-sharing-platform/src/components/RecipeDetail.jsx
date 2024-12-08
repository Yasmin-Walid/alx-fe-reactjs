import React from "react";
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";

const RecipeDetail = () => {
  const [recipe, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get("/src/data.json");
        const foundRecipe = response.data.find((recipe) => recipe.id === parseInt(id));

        setRecipes(foundRecipe);
        setError(null);
      } catch (err) {
        console.error("Error fetching recipe details", err);
        setError("Failed to load recipe details");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate("/");
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return(
<div className=" container mx-auto p-6">
    <h1 className="text-3xl text-center mb-6">{recipe.title}</h1>
    <img 
     src= {recipe?.image}
     alt={recipe?.title}
     className="w-full h-80 object-cover rounded-lg"
    />

    <div className="mt-4">
        <h2 className="text-3xl text-green-800"> Summary </h2>
        <p className="text-black-800"> {recipe.summary}</p>
    </div>

    <div className="mt-6">
    <h2 className="text-3xl text-green-800"> Ingredients </h2>
    <ul>
    {recipe.ingredients?.map((ingredient,index) => (
        <li key = {index}>{ingredient}</li>
    ))}

    </ul>
    </div>

    <div className="mt-6">
    <h2 className="text-3xl text-green-800"> Cooking Instructions</h2>
    <p className="text-black-800"> {recipe.instructions}</p>

    </div>

    <button onClick = {handleGoBack} className="mt-6 bg-green-500 text-white rounded py-2 px-4">

        Back to Recipes
    </button>

</div>
  );
};

export default RecipeDetail;
