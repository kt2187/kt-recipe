import React from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = (props) => {
  const { recipeId } = useParams();
  const { recipe } = props;
  return (
    <div className="col s12 m6 13 center-align">
      <div className="card">
        <div className="card-content">
          <h4>{recipe.recipeName}</h4>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
          {recipe.recipeNotes ? (<p>Recipe Notes: {recipe.recipeNotes}</p>) : null}
          {recipe.comments ? (<p>Comments: {recipe.comments.length}</p>) : null}
          {recipe.link ? (<div className="card-action"><a href={recipe.link} target="_blank">Recipe Source</a></div>) : null}
          {recipe.video ? (<div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>) : null}
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;