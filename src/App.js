import React, { Component } from 'react';
import RecipeForm from './components/RecipeForm';
import Recipe from './components/Recipe';
import recipes from './mock/recipes';
import './App.css';

class App extends Component {
  //Load default data 
  state = {
    recipes: [...recipes],
  };

  addRecipe = (recipeData) => {
    this.setState({
      recipes: [...this.state.recipes, recipeData],
    });
  };

  renderRecipes = () => {
    const displayRecipes = this.state.recipes.map(recipe => {
      return <Recipe recipe={recipe} />
    });
    return displayRecipes;
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 id="app-title">Kt's Recipes</h1>
          <div id="app-navigation">
            <a href="">Add Recipe</a>
          </div>
        </div>
        {this.renderRecipes()}
        <RecipeForm addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App;
