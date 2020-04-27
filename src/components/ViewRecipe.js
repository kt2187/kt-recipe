import React from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = (props) => {
  const { recipeId } = useParams();
  const { recipe } = props;
  return (
    <h3> {recipe.recipeName}</h3>
  );
}

export default ViewRecipe;