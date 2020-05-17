import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import addRecipeReducer from './addRecipeReducer';

export default combineReducers({
    recipes: recipesReducer,
    newRecipe: addRecipeReducer
});

