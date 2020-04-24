import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="container services">
      <div className="row">
        <div className="col s12 m6 13 center-align">
          <div className="card">
            <div className="card-content">
              <h4>Recipe Name: {recipe.recipeTitle}</h4>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>For Serving: {recipe.forServing}</p>
              <p>Instructions: {recipe.instructions}</p>
              <div className="card-action"><a href={recipe.link} target="_blank">Recipe Details</a></div>
              <div className="card-action"><a href={recipe.video} target="_blank">Video</a></div>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Recipe;