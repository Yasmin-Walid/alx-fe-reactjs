import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
  
    return (
      <div>
        <h2>Recommendations</h2>
        {recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    );
  };
  