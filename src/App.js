import React, { Component } from 'react';
import Recipe from './components/Recipe';
import recipes from './mock/recipes';
import './App.css';

class App extends Component {
  renderRecipes = () => {
    const displayRecipes = recipes.map(recipe => {
      return <Recipe recipe={recipe} />
    });
    return displayRecipes;
  }
  render() {
    return (
      <div className="App">
        <h1>Kt's Recipes</h1>
        {this.renderRecipes()}
      </div>
    );
  }
}

export default App;
