import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Example: log the new recipe (you can replace this with actual logic to save the data)
    console.log({
      title,
      ingredients: ingredients.split(","),
      steps,
    });

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter ingredients separated by commas"
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter preparation steps"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;