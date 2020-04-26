import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {

  const renderRecipes = () => {
    const displayRecipes = props.recipeList.map((recipe) => {
      return <Recipe recipe={recipe} />
    });
    return displayRecipes;
  }

  return (
    <div className="recipeList">{renderRecipes()}</div>
  )
}

export default RecipeList;