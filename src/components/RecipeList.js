import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
  const renderRecipes = () => {
    {/*const { selectedRecipe } = props;*/ }

    const displayRecipes = props.recipeList.map((recipe) => {
      return (
        <Recipe recipe={recipe} key={recipe.id}
          handleSelect={props.handleSelect} />
      );
    });
    return displayRecipes;
  };

  return <div className="recipeList">{renderRecipes()}</div>

}

export default RecipeList;