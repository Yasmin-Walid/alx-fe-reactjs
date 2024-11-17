import { useState } from 'react'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './store/useRecipeStore'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
        
    </>
  )
}

export default App
